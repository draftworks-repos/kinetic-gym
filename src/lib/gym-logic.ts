/**
 * Pure gym logic functions for Kinetic Gym
 * Includes trial pass validation, biometric calculations, program filters, and schedule helpers.
 */

export interface TrialBookingInput {
  fullName: string;
  email: string;
  phone: string;
  goal: 'strength' | 'conditioning' | 'recomposition' | 'mobility';
  preferredDay: string;
  preferredTimeSlot: string;
}

export interface TrialBookingResult {
  valid: boolean;
  errors: Record<string, string>;
  confirmationCode?: string;
  passDetails?: {
    holderName: string;
    membershipTier: string;
    validDays: number;
    accessZones: string[];
    expiryDate: string;
  };
}

export function validateTrialBooking(input: Partial<TrialBookingInput>): TrialBookingResult {
  const errors: Record<string, string> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full legal or preferred name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  const cleanPhone = (input.phone || '').replace(/\D/g, '');
  if (!input.phone || cleanPhone.length < 10) {
    errors.phone = 'Please provide a valid 10-digit phone number.';
  }

  if (!input.goal) {
    errors.goal = 'Please select your primary athletic objective.';
  }

  if (!input.preferredDay) {
    errors.preferredDay = 'Please select your preferred trial start date.';
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  // Generate deterministic confirmation code
  const hash = Math.abs(
    (input.fullName || '').split('').reduce((acc, char) => acc * 31 + char.charCodeAt(0), 7)
  ) % 100000;
  const confirmationCode = `KG-${String(hash).padStart(5, '0')}`;

  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 3);

  return {
    valid: true,
    errors: {},
    confirmationCode,
    passDetails: {
      holderName: input.fullName!.trim(),
      membershipTier: '3-DAY ALL-ACCESS VIP GUEST',
      validDays: 3,
      accessZones: [
        'Olympic Free Weights & Powerlifting Lab',
        'High-Performance Cardio Mezzanine',
        'Thermal Spa & Cold Plunge Pools',
        '50M Sprint Turf & Combat Cage',
        'Executive Locker Suites',
      ],
      expiryDate: expiry.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    },
  };
}

export interface BiometricProfileInput {
  weightLbs: number;
  heightInches: number;
  activityLevel: 'moderate' | 'high' | 'elite';
  goal: 'fat_loss' | 'hypertrophy' | 'power_conditioning';
}

export interface BiometricCalculations {
  maintenanceCalories: number;
  targetDailyCalories: number;
  dailyProteinGrams: number;
  dailyHydrationOz: number;
  recommendedWeeklyVolumeHrs: number;
}

export function calculateAthleticTargets(input: BiometricProfileInput): BiometricCalculations {
  const { weightLbs, heightInches, activityLevel, goal } = input;
  const safeWeight = Math.max(80, Math.min(450, weightLbs));
  const safeHeight = Math.max(48, Math.min(84, heightInches));

  // Base BMR approximation (Mifflin-St Jeor athletic adjustment)
  const baseBmr = 10 * (safeWeight * 0.453592) + 6.25 * (safeHeight * 2.54) - 5 * 28 + 5;

  const activityMultipliers = {
    moderate: 1.45,
    high: 1.65,
    elite: 1.85,
  };

  const maintenanceCalories = Math.round(baseBmr * (activityMultipliers[activityLevel] || 1.5));

  let targetDailyCalories = maintenanceCalories;
  let proteinMultiplier = 1.0;
  let weeklyVolume = 4.5;

  if (goal === 'fat_loss') {
    targetDailyCalories = Math.round(maintenanceCalories * 0.82);
    proteinMultiplier = 1.1; // Preserve lean mass during deficit
    weeklyVolume = 4.0;
  } else if (goal === 'hypertrophy') {
    targetDailyCalories = Math.round(maintenanceCalories * 1.12);
    proteinMultiplier = 1.0;
    weeklyVolume = 5.5;
  } else if (goal === 'power_conditioning') {
    targetDailyCalories = Math.round(maintenanceCalories * 1.05);
    proteinMultiplier = 0.95;
    weeklyVolume = 6.0;
  }

  const dailyProteinGrams = Math.round(safeWeight * proteinMultiplier);
  const dailyHydrationOz = Math.round(safeWeight * 0.65);

  return {
    maintenanceCalories,
    targetDailyCalories,
    dailyProteinGrams,
    dailyHydrationOz,
    recommendedWeeklyVolumeHrs: weeklyVolume,
  };
}

export function calculateTransformationDelta(before: number, after: number): {
  delta: number;
  percentChange: number;
  isImprovement: boolean;
} {
  const delta = Number((after - before).toFixed(1));
  const percentChange = before !== 0 ? Number(((delta / before) * 100).toFixed(1)) : 0;
  return {
    delta,
    percentChange,
    isImprovement: delta !== 0,
  };
}

export function getFacilityOpenStatus(currentDate = new Date()): {
  isOpen: boolean;
  statusText: string;
  hoursToday: string;
} {
  const day = currentDate.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = currentDate.getHours();
  const isWeekend = day === 0 || day === 6;

  const openHour = isWeekend ? 7 : 5;
  const closeHour = isWeekend ? 21 : 23;

  const isOpen = hour >= openHour && hour < closeHour;

  const hoursToday = isWeekend
    ? 'Weekend: 7:00 AM - 9:00 PM'
    : 'Weekday: 5:00 AM - 11:00 PM';

  const statusText = isOpen
    ? `OPEN NOW (Closes at ${isWeekend ? '9:00 PM' : '11:00 PM'})`
    : `CURRENTLY CLOSED (Opens at ${isWeekend ? '7:00 AM' : '5:00 AM'})`;

  return {
    isOpen,
    statusText,
    hoursToday,
  };
}
