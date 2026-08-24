"use client";

import React, { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "917304723416";

const inquiryTypes = [
  "Residential Interior Design",
  "Commercial / Hospitality",
  "Architecture & Renovation",
  "Turnkey Project",
  "Budget Consultation",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

function buildWhatsAppUrl(data: FormData): string {
  const lines = [
    "Hello Altamountt Space & Design,",
    "",
    "I would like to discuss a project.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];

  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.type) lines.push(`Project Type: ${data.type}`);
  if (data.budget) lines.push(`Budget: ${data.budget}`);
  if (data.message) {
    lines.push("");
    lines.push("Message:");
    lines.push(data.message);
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    type: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data: FormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value || "",
      type: (form.elements.namedItem("type") as HTMLSelectElement).value || "",
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value || "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value || "",
    };

    setFormData(data);
    setSubmitted(true);
  };

  if (submitted) {
    const waUrl = buildWhatsAppUrl(formData);
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-inner">
          <span className="contact-form-success-check" aria-hidden="true">✓</span>
          <h3 className="contact-form-success-title">Inquiry Received</h3>
          <p className="contact-form-success-copy">
            Thank you, {formData.name}. Our studio will review your inquiry and
            respond within 24 hours. You can also continue the conversation
            directly on WhatsApp.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary w-full justify-center"
          >
            <span>Continue on WhatsApp</span>
            <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            className="contact-form-reset-btn"
            onClick={() => setSubmitted(false)}
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="eyebrow dark">Inquiry form</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field-dark">
          <label htmlFor="name" className="form-label-dark">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input-dark"
            placeholder="Rohan Mehta"
            required
          />
        </div>
        <div className="contact-form-row">
          <div className="form-field-dark">
            <label htmlFor="phone" className="form-label-dark">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-input-dark"
              placeholder="+91 98765 43210"
              required
            />
          </div>
          <div className="form-field-dark">
            <label htmlFor="email" className="form-label-dark">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input-dark"
              placeholder="you@email.com"
            />
          </div>
        </div>
        <div className="form-field-dark">
          <label htmlFor="type" className="form-label-dark">
            Project Type
          </label>
          <select
            id="type"
            name="type"
            className="form-input-dark form-select-dark"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service category
            </option>
            {inquiryTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field-dark">
          <label htmlFor="budget" className="form-label-dark">
            Approximate Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="form-input-dark form-select-dark"
            defaultValue=""
          >
            <option value="" disabled>
              Select a budget range
            </option>
            <option>To be discussed</option>
            <option>₹ 5L - 15L</option>
            <option>₹ 15L - 35L</option>
            <option>₹ 35L - 75L</option>
            <option>₹ 75L - 1.5 Cr</option>
            <option>₹ 1.5 Cr +</option>
          </select>
        </div>
        <div className="form-field-dark">
          <label htmlFor="message" className="form-label-dark">
            Tell Us About Your Space
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="form-input-dark resize-none"
            placeholder="Describe your space, timeline, and vision. Floor plans and inspirations are welcome."
          />
        </div>
        <button
          type="submit"
          className="hero-btn-primary w-full justify-center"
        >
          Send Inquiry <span>→</span>
        </button>
      </form>
    </>
  );
}
