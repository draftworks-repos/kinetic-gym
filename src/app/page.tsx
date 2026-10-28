"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import FacilityStats from "@/components/FacilityStats/FacilityStats";
import Programs from "@/components/Programs/Programs";
import Transformations from "@/components/Transformations/Transformations";
import WhyUs from "@/components/WhyUs/WhyUs";
import InsideClub from "@/components/InsideClub/InsideClub";
import Coaches from "@/components/Coaches/Coaches";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/Faq/Faq";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  const handleExploreClasses = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111827] selection:bg-[#FF5500] selection:text-white">
      {/* 1. Header Navigation - Direct Call CTA */}
      <Navbar />

      {/* 2. Hero Section - Direct Call Action */}
      <Hero onExploreClasses={handleExploreClasses} />

      {/* 3. Infinite Disciplines Marquee (Uses IntersectionObserver for pause/unpause) */}
      <Marquee />

      {/* 4. About Our Facility & Stats - In-Block Live Video Player */}
      <FacilityStats />

      {/* 5. World-Class Training Programs */}
      <Programs />

      {/* 6. Real People. Real Transformations. Interactive Comparison Sliders */}
      <Transformations />

      {/* 7. Why Athletes Choose Us */}
      <WhyUs />

      {/* 8. Architectural Tour Bento (Inside The Club) */}
      <InsideClub />

      {/* 9. Meet Your Coaches - Direct Call Coaching */}
      <Coaches />

      {/* 10. What Our Members Say (Testimonials) */}
      <Testimonials />

      {/* 11. Frequently Asked Questions */}
      <Faq />

      {/* 12. Ready to Transform Your Fitness Journey CTA */}
      <CtaBanner />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
