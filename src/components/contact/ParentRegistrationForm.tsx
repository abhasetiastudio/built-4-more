"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

type RegistrationForm = {
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  student_name: string;
  student_age: string;
  student_grade: string;
  school_name: string;
  basketball_experience: string;
  leadership_goals: string;
  additional_notes: string;
};

type FieldErrors = Partial<Record<keyof RegistrationForm, string>>;

function getFormValues(formData: FormData): RegistrationForm {
  return {
    parent_name: String(formData.get("parent_name") ?? "").trim(),
    parent_email: String(formData.get("parent_email") ?? "").trim(),
    parent_phone: String(formData.get("parent_phone") ?? "").trim(),
    student_name: String(formData.get("student_name") ?? "").trim(),
    student_age: String(formData.get("student_age") ?? "").trim(),
    student_grade: String(formData.get("student_grade") ?? "").trim(),
    school_name: String(formData.get("school_name") ?? "").trim(),
    basketball_experience: String(formData.get("basketball_experience") ?? "").trim(),
    leadership_goals: String(formData.get("leadership_goals") ?? "").trim(),
    additional_notes: String(formData.get("additional_notes") ?? "").trim(),
  };
}

function validate(form: RegistrationForm): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.parent_name) {
    errors.parent_name = "Parent name is required.";
  } else if (form.parent_name.length < 2) {
    errors.parent_name = "Please enter a full name.";
  }

  if (!form.parent_email) {
    errors.parent_email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.parent_email)) {
    errors.parent_email = "Please enter a valid email address.";
  }

  if (form.parent_phone && !/^[\d\s\-().+]{7,}$/.test(form.parent_phone)) {
    errors.parent_phone = "Please enter a valid phone number.";
  }

  if (!form.student_name) {
    errors.student_name = "Student name is required.";
  }

  if (!form.student_age) {
    errors.student_age = "Student age is required.";
  } else {
    const age = Number(form.student_age);
    if (!Number.isInteger(age) || age < 5 || age > 13) {
      errors.student_age = "Please enter a valid age between 5 and 13.";
    }
  }

  if (!form.student_grade) {
    errors.student_grade = "Please select a grade.";
  }

  if (!form.school_name) {
    errors.school_name = "School name is required.";
  }

  if (!form.basketball_experience) {
    errors.basketball_experience = "Please select a basketball experience level.";
  }

  return errors;
}

export function ParentRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = getFormValues(new FormData(e.currentTarget));
    const errors = validate(form);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent_name: form.parent_name,
          parent_email: form.parent_email,
          parent_phone: form.parent_phone,
          student_name: form.student_name,
          student_age: Number(form.student_age),
          student_grade: form.student_grade,
          school_name: form.school_name,
          basketball_experience: form.basketball_experience,
          leadership_goals: form.leadership_goals,
          additional_notes: form.additional_notes,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok) {
        setError(result?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Unable to reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-gold/30 bg-gold-dim/20 p-12 text-center"
      >
        <p className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gold">
          REGISTRATION RECEIVED
        </p>
        <p className="mt-4 text-muted">
          Thanks—we&apos;ll be in touch within 48 hours with next steps for your
          student.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface-elevated px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30";

  const labelClass = "mb-2 block text-xs uppercase tracking-[0.2em] text-muted";
  const errorClass = "mt-1.5 text-xs text-red-400";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {error && (
        <div
          role="alert"
          className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
        >
          {error}
        </div>
      )}

      <div>
        <label htmlFor="parent_name" className={labelClass}>
          Parent / Guardian Name
        </label>
        <input
          id="parent_name"
          name="parent_name"
          type="text"
          autoComplete="name"
          className={inputClass}
          aria-invalid={Boolean(fieldErrors.parent_name)}
          aria-describedby={fieldErrors.parent_name ? "parent_name-error" : undefined}
        />
        {fieldErrors.parent_name && (
          <p id="parent_name-error" className={errorClass}>
            {fieldErrors.parent_name}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="parent_email" className={labelClass}>
            Email
          </label>
          <input
            id="parent_email"
            name="parent_email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(fieldErrors.parent_email)}
            aria-describedby={fieldErrors.parent_email ? "parent_email-error" : undefined}
          />
          {fieldErrors.parent_email && (
            <p id="parent_email-error" className={errorClass}>
              {fieldErrors.parent_email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="parent_phone" className={labelClass}>
            Phone
          </label>
          <input
            id="parent_phone"
            name="parent_phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={Boolean(fieldErrors.parent_phone)}
            aria-describedby={fieldErrors.parent_phone ? "parent_phone-error" : undefined}
          />
          {fieldErrors.parent_phone && (
            <p id="parent_phone-error" className={errorClass}>
              {fieldErrors.parent_phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="student_name" className={labelClass}>
            Student Name
          </label>
          <input
            id="student_name"
            name="student_name"
            type="text"
            className={inputClass}
            aria-invalid={Boolean(fieldErrors.student_name)}
            aria-describedby={fieldErrors.student_name ? "student_name-error" : undefined}
          />
          {fieldErrors.student_name && (
            <p id="student_name-error" className={errorClass}>
              {fieldErrors.student_name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="student_age" className={labelClass}>
            Student Age
          </label>
          <input
            id="student_age"
            name="student_age"
            type="number"
            min={5}
            max={13}
            className={inputClass}
            aria-invalid={Boolean(fieldErrors.student_age)}
            aria-describedby={fieldErrors.student_age ? "student_age-error" : undefined}
          />
          {fieldErrors.student_age && (
            <p id="student_age-error" className={errorClass}>
              {fieldErrors.student_age}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="student_grade" className={labelClass}>
          Student Grade
        </label>
        <select
          id="student_grade"
          name="student_grade"
          className={inputClass}
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.student_grade)}
          aria-describedby={fieldErrors.student_grade ? "student_grade-error" : undefined}
        >
          <option value="">Select grade</option>
          <option value="k">Kindergarten</option>
          <option value="1">1st Grade</option>
          <option value="2">2nd Grade</option>
          <option value="3">3rd Grade</option>
          <option value="4">4th Grade</option>
          <option value="5">5th Grade</option>
          <option value="6">6th Grade</option>
          <option value="7">7th Grade</option>
        </select>
        {fieldErrors.student_grade && (
          <p id="student_grade-error" className={errorClass}>
            {fieldErrors.student_grade}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="school_name" className={labelClass}>
          School Name
        </label>
        <input
          id="school_name"
          name="school_name"
          type="text"
          className={inputClass}
          aria-invalid={Boolean(fieldErrors.school_name)}
          aria-describedby={fieldErrors.school_name ? "school_name-error" : undefined}
        />
        {fieldErrors.school_name && (
          <p id="school_name-error" className={errorClass}>
            {fieldErrors.school_name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="basketball_experience" className={labelClass}>
          Basketball Experience
        </label>
        <select
          id="basketball_experience"
          name="basketball_experience"
          className={inputClass}
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.basketball_experience)}
          aria-describedby={
            fieldErrors.basketball_experience ? "basketball_experience-error" : undefined
          }
        >
          <option value="">Select experience level</option>
          <option value="none">No experience yet</option>
          <option value="beginner">Beginner — learning the basics</option>
          <option value="recreational">Recreational — plays for fun</option>
          <option value="some-team">Some team or clinic experience</option>
        </select>
        {fieldErrors.basketball_experience && (
          <p id="basketball_experience-error" className={errorClass}>
            {fieldErrors.basketball_experience}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="leadership_goals" className={labelClass}>
          Leadership Goals
        </label>
        <textarea
          id="leadership_goals"
          name="leadership_goals"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="What do you hope your child gains from working with high school mentors?"
        />
      </div>

      <div>
        <label htmlFor="additional_notes" className={labelClass}>
          Additional Notes
        </label>
        <textarea
          id="additional_notes"
          name="additional_notes"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Allergies, schedule constraints, or anything else we should know..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={loading ? undefined : { scale: 1.02 }}
        whileTap={loading ? undefined : { scale: 0.98 }}
        className="w-full rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-12"
      >
        {loading ? "Submitting..." : "Register Student"}
      </motion.button>
    </form>
  );
}
