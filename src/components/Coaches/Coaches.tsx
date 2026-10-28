"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import "./Coaches.css";

export interface CoachItem {
  id: string;
  name: string;
  credentials: string;
  bio: string;
  img: string;
}

export const COACHES_DATA: CoachItem[] = [
  {
    id: "alex",
    name: "ALEX VANCE",
    credentials: "CSCS • EX-COLLEGIATE COACH",
    bio: "Specializes in biomechanical powerlifting, kinetic bar path, and progressive athletic periodization.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcrXV-a7oP8mP-z_A5IurEb6h1RIE7LBApsZDDIWPCetru2oyzjLp8pjrBfWuu8Q5Rll5fQ6sWjpvEvUtT73_P2ORZrOKz-AgQHNfbIaJJgNLOLRwREi4ANF5XpGcnhcKabeT0MIl9mZoKXLaoXeT_eub3meDPstai7Hfgihz1ISvL0iQOCcw4C7w6QvCiy2ZfZ5Rj03t_68ZswxaVFYVpGeO-Ii54-10VlNkLfYK7K1OZLKYHNjUz1g",
  },
  {
    id: "elena",
    name: "ELENA ROSTOVA",
    credentials: "USA BOXING • NASM MASTER",
    bio: "Expert in heavy bag intervals, rapid footwork mechanics, and VO2-max conditioning.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlzROUDVsfnNvjH9fk2zcQe65qrTUqkGb8PTNZqbxfS31pMnTSHC1RP1LRz3T2WY8c_N6JKvXo8YnnBFKhHiBlNfzAadUqa7ebDGgqiQ8Q5Yu2Vm5IzHjn9bsz0zsYyhh9SglV8XCCkYxfaA7RYwr-FlDjiQ5T9ZG2icOUZcbowjrvA8jABHhvn60P0qBHb5mzBtzUsl7e63BRFxFXzriF5Vib_Cr5qU4evL-RIRIBo48JA2s54CRanA",
  },
  {
    id: "jordan",
    name: "JORDAN HAYES",
    credentials: "DPT • FMS SPECIALIST",
    bio: "Fascial release specialist focused on posture restoration, shoulder health, and spinal longevity.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8umtoB9qcJmWj1OlEMczuDT8SsSO-mJVnvq9rokuKYigeS9r88FUGLcOKsznbbouM3s9eh03-_vPeoop27lRdcqmL4ea2VZ1ZW3yVWuJOhxaxoXK0W9cmCYJYMFXRiKBfBzuEFLCz-dQ9Q3AFGWmwBv815uYah_HrVUMbleEMRkUXWt9nn362FESyQ2bG43ucVKApQutBHnKxO9MWlAa4DKzkaUecYG2L4UEMR1o51mEzy_ie5l1-Og",
  },
  {
    id: "maya",
    name: "MAYA CHEN",
    credentials: "MS NUTRITION • CISSN",
    bio: "Translates metabolic blood panels into sustainable athletic nutrition plans and peak recomposition.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8wqH-3m3IUGhAXECadX4NXo66dwmoX-qqGVlawEV8toWD0Mmid8ZPXch5hoz0nkpmiLV5VoIFeEr900TcAKdlyZl9QDgoSfHU7CawafJnPdEo5Gmfsplzq3BCvSbZnMZNg0NcMGUtt25fTcaswKzZYjnWGpVVpcHDsYBTdLOh-eVhGzWxZxjjJ61R5WcdCYWK2pGwJZU6GU5l3SuI-Y4AO-wjTkFj2uqTf41cCGRMN-dpvjABVvukmw",
  },
];

export default function Coaches() {
  return (
    <section
      id="coaches"
      className="coaches-section"
      aria-label="Our Coaching Staff"
    >
      <div className="coaches-container">
        <div className="coaches-header-row">
          <div className="coaches-header-left">
            <span className="section-label">COACHING STAFF</span>
            <h2 className="coaches-headline">MEET YOUR COACHES</h2>
          </div>

          <div className="coaches-desc-col">
            <p className="coaches-desc-text">
              World-class biomechanists, professional combatants, and Olympic
              lifters dedicated entirely to your personal progression.
            </p>
          </div>
        </div>

        <div className="coaches-grid">
          {COACHES_DATA.map((coach) => (
            <article key={coach.id} className="coach-card">
              {/* Separate image element located inside card with rounded corners */}
              <div className="coach-image-wrap">
                <Image
                  src={coach.img}
                  alt={coach.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  unoptimized
                  className="coach-image"
                />
              </div>

              <div className="coach-body">
                <h3 className="coach-name">{coach.name}</h3>
                <span className="coach-credentials">{coach.credentials}</span>
                <p className="coach-bio">{coach.bio}</p>

                <div className="coach-footer-action-row">
                  <a
                    href="tel:+18005554696"
                    className="coach-book-btn"
                    aria-label={`Call to book session with ${coach.name}`}
                  >
                    <span>BOOK SESSION</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>

                  {/* Small verified green icon on bottom right aligned to book session text */}
                  <BadgeCheck
                    className="coach-verified-icon"
                    aria-label="Verified CSCS / Accredited Coach"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
