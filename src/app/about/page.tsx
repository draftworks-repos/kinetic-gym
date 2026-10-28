import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, HeartPulse, Target, UsersRound } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Coaches from "@/components/Coaches/Coaches";
import Footer from "@/components/Footer/Footer";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import "./page.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Kinetic Gym Athletic Lab: a performance-focused training community built around expert coaching, purposeful movement, and lasting progress.",
};

const VALUES = [
  {
    number: "01",
    icon: Target,
    title: "Progress with purpose",
    description:
      "Training should move you toward something meaningful. We build clear, adaptable plans around your goals, your starting point, and the life you want to lead.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Coaching, not guesswork",
    description:
      "Great coaching makes the hard work more effective. Our team brings thoughtful guidance, real accountability, and a welcoming presence to every session.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Strength for the long run",
    description:
      "Performance is more than a number on the bar. We pair challenging training with recovery and movement quality to help you keep showing up.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <Navbar />

      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1738523686534-7055df5858d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Athlete training with a barbell inside Kinetic Gym"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="about-hero-shade" />
        </div>
        <div className="about-container about-hero-content">
          <h1 id="about-title">
            BUILT FOR THE
            <br />
            WORK. <span>HERE FOR YOU.</span>
          </h1>
          <p>
            A training space for people who want to feel stronger, move better,
            and see what they&apos;re capable of with expert support at every
            step.
          </p>
          <a className="about-primary-link" href="tel:+18005554696">
            START YOUR JOURNEY <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="about-hero-index" aria-hidden="true">
          <span>01</span>
          <span className="about-index-rule" />
          <span>03</span>
        </div>
      </section>

      <section className="about-intro about-container" aria-labelledby="mission-title">
        <div className="about-intro-heading">
          <span className="section-label">WHY WE&apos;RE HERE</span>
          <h2 id="mission-title">
            TRAINING THAT
            <br />
            MEETS YOU <span>WHERE YOU ARE.</span>
          </h2>
        </div>
        <div className="about-intro-copy">
          <p className="about-intro-lead">
            Kinetic Gym is an athletic lab with a simple belief: the right
            environment can change how you feel about what your body can do.
          </p>
          <p>
            We bring purposeful strength and conditioning, knowledgeable
            coaches, and a close-knit community together under one roof. Whether
            you&apos;re stepping into a gym for the first time or ready to
            sharpen your performance, you&apos;ll find a plan—and people—that
            help you keep moving forward.
          </p>
          <a className="about-text-link" href="/facility">
            EXPLORE OUR FACILITY <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="about-values" aria-labelledby="values-title">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <span className="section-label">WHAT GUIDES US</span>
              <h2 id="values-title">A BETTER WAY TO GET STRONGER.</h2>
            </div>
            <p>
              A good gym gives you the tools. A great one helps you use them
              well—and makes you want to come back.
            </p>
          </div>
          <div className="about-values-grid">
            {VALUES.map(({ number, icon: Icon, title, description }) => (
              <article className="about-value-card" key={number}>
                <div className="about-value-top">
                  <span>{number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Coaches/>

      <CtaBanner />

      <Footer />
    </main>
  );
}