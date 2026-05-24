"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-gold/30 bg-gold-dim/20 p-12 text-center"
      >
        <p className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gold">
          APPLICATION RECEIVED
        </p>
        <p className="mt-4 text-muted">
          Thanks—we&apos;ll follow up within 48 hours with Mentor Corps next steps.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface-elevated px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
            First Name
          </label>
          <input id="firstName" name="firstName" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
            Last Name
          </label>
          <input id="lastName" name="lastName" type="text" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClass} />
      </div>

      <div>
        <label htmlFor="grade" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          Grade
        </label>
        <select id="grade" name="grade" required className={inputClass}>
          <option value="">Select grade</option>
          <option value="9">9th Grade</option>
          <option value="10">10th Grade</option>
          <option value="11">11th Grade</option>
          <option value="12">12th Grade</option>
        </select>
      </div>

      <div>
        <label htmlFor="schoolTeam" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          School / Team
        </label>
        <input
          id="schoolTeam"
          name="schoolTeam"
          type="text"
          required
          className={inputClass}
          placeholder="e.g. Lincoln HS varsity"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          Why do you want to mentor?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your basketball experience and why you want to lead younger kids..."
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold-light sm:w-auto sm:px-12"
      >
        Apply for Mentor Corps
      </motion.button>
    </form>
  );
}
