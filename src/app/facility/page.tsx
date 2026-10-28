import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Cable,
  Dumbbell,
  HeartPulse,
  MoveUpRight,
  Weight,
} from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Programs from "@/components/Programs/Programs";
import Coaches from "@/components/Coaches/Coaches";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import Footer from "@/components/Footer/Footer";
import "./page.css";

export const metadata: Metadata = {
  title: "Our Facility",
  description:
    "Explore the training zones, expert-led programs, and performance equipment at Kinetic Gym Athletic Lab.",
};

const EQUIPMENT = [
  {
    number: "01",
    icon: Dumbbell,
    title: "Dumbbells",
    description:
      "A broad range of weights for accessory work, single-arm training, and progressive strength sessions.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=900&auto=format&fit=crop",
  },
  {
    number: "02",
    icon: Weight,
    title: "Barbells & racks",
    description:
      "Olympic bars, plates, and stable racks create a dependable setup for compound lifts and strength work.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop",
  },
  {
    number: "03",
    icon: Dumbbell,
    title: "Bench press",
    description:
      "Flat and adjustable benches support presses, rows, and a wide range of upper-body movements.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=900&auto=format&fit=crop",
  },
  {
    number: "04",
    icon: MoveUpRight,
    title: "Pull-up stations",
    description:
      "Train pulling strength and control with dedicated bars and functional rig stations.",
    image:
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=900&auto=format&fit=crop",
  },
  {
    number: "05",
    icon: Cable,
    title: "Cable & shoulder machines",
    description:
      "Adjustable cable stations and guided machines make it easy to target shoulders and train through controlled ranges.",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=900&auto=format&fit=crop",
  },
  {
    number: "06",
    icon: Dumbbell,
    title: "Strength machines",
    description:
      "Purpose-built resistance machines add variety and stability to your strength and accessory sessions.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop",
  },
];

const GALLERY = [
  {
    title: "Strength floor",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    className: "facility-gallery-main",
  },
  {
    title: "Training zone",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Cardio floor",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Performance space",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Strength training",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=900&auto=format&fit=crop",
    className: "",
  },
  {
    title: "Cardio floor",
    image:
      "https://images.pexels.com/photos/4716814/pexels-photo-4716814.jpeg",
    className: "",
  },
];

export default function FacilityPage() {
  return (
    <main className="facility-page">
      <Navbar />

      <section className="facility-hero" aria-labelledby="facility-page-title">
        <div className="facility-page-hero-image">
          <img
            src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Strength athlete training on a barbell inside Kinetic Gym"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="facility-page-hero-shade" />
        </div>
        <div className="facility-page-container facility-hero-content">
          <h1 id="facility-page-title">
            ROOM TO MOVE.
            <br />
            <span>BUILT TO PERFORM.</span>
          </h1>
          <p>
            Purposeful spaces, capable equipment, and expert-led programs all
            designed to make your next session count.
          </p>
          <a className="facility-hero-link" href="#facility-gallery">
            EXPLORE THE FACILITY <ArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="facility-hero-index" aria-hidden="true">
          <span>01</span>
          <span className="facility-index-rule" />
          <span>05</span>
        </div>
      </section>

      <section
        id="facility-gallery"
        className="facility-gallery"
        aria-labelledby="facility-gallery-title"
      >
        <div className="facility-page-container">
          <div className="facility-gallery-heading">
            <div>
              <span className="section-label">TAKE A LOOK AROUND</span>
              <h2 id="facility-gallery-title">INSIDE THE CLUB.</h2>
            </div>
            <p>
              Room to focus, space to move, and everything in place for a
              better session.
            </p>
          </div>
          <div className="facility-gallery-grid">
            {GALLERY.map((image, index) => (
              <figure
                className={`facility-gallery-item ${image.className}`}
                key={image.title}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  priority={index === 0}
                  unoptimized
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="facility-equipment"
        aria-labelledby="facility-equipment-title"
      >
        <div className="facility-page-container">
          <div className="facility-equipment-heading">
            <div>
              <span className="section-label">THE TOOLS TO TRAIN</span>
              <h2 id="facility-equipment-title">
                EQUIPPED FOR
                <br />
                EVERY REP.
              </h2>
            </div>
            <p>
              Get hands-on with the free weights, stations, and strength
              machines that support every part of your training.
            </p>
          </div>

          <div className="facility-equipment-grid">
            {EQUIPMENT.map(({ number, icon: Icon, title, description, image }) => (
              <article className="facility-equipment-card" key={number}>
                <div className="facility-equipment-image">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 701px) 50vw, 100vw"
                    unoptimized
                  />
                  <span>{number}</span>
                </div>
                <div className="facility-equipment-card-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="facility-equipment-card-bottom">
                    <a href="/contact">
                    <span>EXPLORE THE FLOOR</span>
                    </a>
                    <a href="/contact">
                    <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="facility-floor-note">
            <HeartPulse aria-hidden="true" />
            <p>
              Not sure where to start? Our coaches can walk you through the
              floor and help you find the equipment and training that fit your
              goals.
            </p>
          </div>
        </div>
      </section>

      <div id="facility-services" className="facility-services">
        <Programs />
      </div>

      <Coaches />
      <CtaBanner />
      <Footer />
    </main>
  );
}