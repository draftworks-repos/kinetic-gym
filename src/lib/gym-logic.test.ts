import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateTrialBooking,
  calculateAthleticTargets,
  calculateTransformationDelta,
  getFacilityOpenStatus,
} from './gym-logic';

test('validateTrialBooking rejects incomplete inputs with clear field messages', () => {
  const result = validateTrialBooking({
    fullName: '',
    email: 'notanemail',
    phone: '123',
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.goal);
});

test('validateTrialBooking approves valid athletic applicant and yields confirmation code', () => {
  const result = validateTrialBooking({
    fullName: 'Marcus Sterling',
    email: 'marcus.sterling@example.com',
    phone: '4155552671',
    goal: 'strength',
    preferredDay: 'Tomorrow',
    preferredTimeSlot: '06:00 AM - 08:00 AM',
  });

  assert.equal(result.valid, true);
  assert.equal(Object.keys(result.errors).length, 0);
  assert.ok(result.confirmationCode?.startsWith('KG-'));
  assert.equal(result.passDetails?.holderName, 'Marcus Sterling');
  assert.equal(result.passDetails?.validDays, 3);
  assert.ok(result.passDetails?.accessZones.includes('Olympic Free Weights & Powerlifting Lab'));
});

test('calculateAthleticTargets computes calories, protein, and hydration accurately', () => {
  const targets = calculateAthleticTargets({
    weightLbs: 180,
    heightInches: 71,
    activityLevel: 'high',
    goal: 'hypertrophy',
  });

  assert.ok(targets.maintenanceCalories > 2000);
  assert.ok(targets.targetDailyCalories > targets.maintenanceCalories); // Surplus for hypertrophy
  assert.equal(targets.dailyProteinGrams, 180); // 1.0g per lb
  assert.ok(targets.dailyHydrationOz > 100);
});

test('calculateTransformationDelta measures progress and percent change', () => {
  const delta = calculateTransformationDelta(195, 175);
  assert.equal(delta.delta, -20);
  assert.equal(delta.percentChange, -10.3);
  assert.equal(delta.isImprovement, true);
});

test('getFacilityOpenStatus returns correct operational state based on hour', () => {
  const morningDate = new Date('2026-10-21T08:00:00'); // Wednesday 8 AM
  const status = getFacilityOpenStatus(morningDate);
  assert.equal(status.isOpen, true);
  assert.ok(status.statusText.includes('OPEN NOW'));
});
