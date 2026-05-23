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
          MESSAGE RECEIVED
        </p>
        <p className="mt-4 text-muted">
          Thanks—we&apos;ll be in touch within 48 hours.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface-elevated px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="interest" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          I&apos;m interested in
        </label>
        <select id="interest" name="interest" required className={inputClass}>
          <option value="">Select one</option>
          <option value="elementary">Signing up my elementary child</option>
          <option value="mentor">High school — becoming a mentor</option>
          <option value="both">Both / have questions</option>
        </select>
      </div>

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
        <label htmlFor="childGrade" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          Child&apos;s grade (if signing up elementary)
        </label>
        <select id="childGrade" name="childGrade" className={inputClass}>
          <option value="">Select grade or N/A</option>
          <option value="k">Kindergarten</option>
          <option value="1">1st Grade</option>
          <option value="2">2nd Grade</option>
          <option value="3">3rd Grade</option>
          <option value="4">4th Grade</option>
          <option value="5">5th Grade</option>
          <option value="na">N/A — mentor applicant</option>
        </select>
      </div>

      <div>
        <label htmlFor="program" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          Program
        </label>
        <select id="program" name="program" className={inputClass}>
          <option value="">Select a program</option>
          <option value="hoop-lab">Hoop Lab (K–2)</option>
          <option value="court-sessions">Court Sessions (3–5)</option>
          <option value="mentor-corps">Mentor Corps (high school)</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your child or your experience as a player..."
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold-light sm:w-auto sm:px-12"
      >
        Send Message
      </motion.button>
    </form>
  );
}
