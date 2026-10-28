"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Kinetic Gym inquiry: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nTopic: ${topic}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:train@kineticgym.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label className="contact-field">
          <span>Your name</span>
          <input
            autoComplete="name"
            name="name"
            placeholder="Kunal paraye"
            required
          />
        </label>
        <label className="contact-field">
          <span>Email address</span>
          <input
            autoComplete="email"
            name="email"
            type="email"
            placeholder="ello@draftworks.in"
            required
          />
        </label>
      </div>

      <div className="contact-form-row">
        <label className="contact-field">
          <span>Phone number</span>
          <input
            autoComplete="tel"
            name="phone"
            type="tel"
            placeholder="+91 89596 90529"
          />
        </label>
        <label className="contact-field">
          <span>What can we help with?</span>
          <select name="topic" defaultValue="" required>
            <option value="" disabled>
              Select a topic
            </option>
            <option value="Membership">Membership</option>
            <option value="Personal training">Personal training</option>
            <option value="Classes">Classes</option>
            <option value="First visit">Planning my first visit</option>
            <option value="Other">Something else</option>
          </select>
        </label>
      </div>

      <label className="contact-field">
        <span>Your message</span>
        <textarea
          name="message"
          placeholder="Tell us a little about what you need..."
          rows={5}
          required
        />
      </label>

      <button className="contact-submit" type="submit">
        SEND MAIL<ArrowRight aria-hidden="true" />
      </button>
      <p className="contact-form-note">
        Submitting opens your default email app. Review the message and send it
        from there.
      </p>
    </form>
  );
}
