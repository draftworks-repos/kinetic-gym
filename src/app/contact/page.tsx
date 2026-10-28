import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "./ContactForm";
import "./page.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kinetic Gym Athletic Lab, plan a visit, or ask our team about training and membership.",
};

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    title: "VISIT THE GYM",
    content: "742 Kinetic Blvd, Sector 4, Metropolis",
    href: "https://maps.google.com/?q=742+Kinetic+Blvd,+Sector+4,+Metropolis",
    linkText: "GET DIRECTIONS",
  },
  {
    icon: Clock3,
    title: "OPENING HOURS",
    content: "Mon - Fri: 5:00 AM - 11:00 PM\nSat - Sun: 7:00 AM - 9:00 PM",
  },
  {
    icon: Mail,
    title: "EMAIL OUR TEAM",
    content: "hello@draftworks.in",
    href: "mailto:hello@draftworks.in",
    linkText: "SEND AN EMAIL",
  },
  {
    icon: Phone,
    title: "CALL THE GYM",
    content: "+91 89596 90529",
    href: "tel:+18005554696",
    linkText: "CALL US",
  },
  {
    icon: MessageCircle,
    title: "WHATSAPP",
    content: "+91 8956 90529",
    href: "https://wa.me/918959690529",
    linkText: "CHAT ON WHATSAPP",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Navbar />

      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1723117418183-2422c62a5a75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Athlete training inside Kinetic Gym"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="contact-hero-shade" />
        </div>
        <div className="contact-container contact-hero-content">
          <h1 id="contact-title">
            YOUR NEXT STEP
            <br />
            <span>STARTS HERE.</span>
          </h1>
          <p>
            Questions about training, memberships, or your first visit? Tell us
            what you&apos;re looking for and our team will be in touch.
          </p>
          <a className="contact-hero-link" href="#contact-form">
            SEND US A MESSAGE <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-hero-index" aria-hidden="true">
          <span>01</span>
          <span className="contact-index-rule" />
          <span>02</span>
        </div>
      </section>

      <section className="contact-main contact-container" aria-label="Contact Kinetic Gym">
        <div className="contact-form-panel" id="contact-form">
          <div className="contact-section-heading">
            <span className="section-label">SEND AN INQUIRY</span>
            <h2>HOW CAN WE HELP?</h2>
            <p>
              Fill out the form and your email app will open with your message
              ready to send.
            </p>
          </div>
          <ContactForm />
        </div>

        <aside className="contact-info-panel" aria-label="Gym contact details">
          <div className="contact-details-list">
            {CONTACT_DETAILS.map(({ icon: Icon, title, content, href, linkText }) => (
              <article className="contact-detail" key={title}>
                <div className="contact-detail-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="contact-detail-content">
                  <h3>{title}</h3>
                  {href ? (
                    <a
                      className="contact-detail-value"
                      href={href}
                      target={href.startsWith("https://") ? "_blank" : undefined}
                      rel={href.startsWith("https://") ? "noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="contact-detail-value contact-hours">
                      {content}
                    </p>
                  )}
                  {href && <span className="contact-detail-link">{linkText}</span>}
                </div>
              </article>
            ))}
          </div>

          <div className="contact-map-frame">
            <iframe
              title="Map showing Kinetic Gym at 742 Kinetic Blvd, Sector 4, Metropolis"
              src="https://maps.google.com/maps?q=742%20Kinetic%20Blvd%2C%20Sector%204%2C%20Metropolis&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="contact-map-directions"
              href="https://maps.google.com/?q=742+Kinetic+Blvd,+Sector+4,+Metropolis"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" />
              OPEN IN GOOGLE MAPS
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}