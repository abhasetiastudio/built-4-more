/**
 * Shared registration domain types and server-side validation.
 * Used by the API route; the form keeps its own UX validation in sync with these fields.
 */

export type RegistrationPayload = {
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  student_name: string;
  student_age: number;
  student_grade: string;
  school_name: string;
  basketball_experience: string;
  leadership_goals: string;
  additional_notes: string;
};

export type RegistrationInsert = {
  parent_name: string;
  parent_email: string;
  parent_phone: string | null;
  student_name: string;
  student_age: number;
  student_grade: string;
  school_name: string;
  basketball_experience: string;
  leadership_goals: string | null;
  additional_notes: string | null;
};

type ValidationResult =
  | { ok: true; data: RegistrationInsert }
  | { ok: false; error: string };

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Minimal server-side validation before persistence.
 * The frontend performs richer UX validation; this guards the API boundary.
 */
export function validateRegistrationPayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const payload = body as Record<string, unknown>;

  if (!isNonEmptyString(payload.parent_name)) {
    return { ok: false, error: "parent_name is required." };
  }
  if (!isNonEmptyString(payload.parent_email)) {
    return { ok: false, error: "parent_email is required." };
  }
  if (!isNonEmptyString(payload.student_name)) {
    return { ok: false, error: "student_name is required." };
  }
  if (!isNonEmptyString(payload.student_grade)) {
    return { ok: false, error: "student_grade is required." };
  }
  if (!isNonEmptyString(payload.school_name)) {
    return { ok: false, error: "school_name is required." };
  }
  if (!isNonEmptyString(payload.basketball_experience)) {
    return { ok: false, error: "basketball_experience is required." };
  }

  const studentAge = payload.student_age;
  if (typeof studentAge !== "number" || !Number.isInteger(studentAge)) {
    return { ok: false, error: "student_age must be a valid integer." };
  }

  const parentPhone = isNonEmptyString(payload.parent_phone)
    ? payload.parent_phone.trim()
    : null;
  const leadershipGoals = isNonEmptyString(payload.leadership_goals)
    ? payload.leadership_goals.trim()
    : null;
  const additionalNotes = isNonEmptyString(payload.additional_notes)
    ? payload.additional_notes.trim()
    : null;

  return {
    ok: true,
    data: {
      parent_name: payload.parent_name.trim(),
      parent_email: payload.parent_email.trim(),
      parent_phone: parentPhone,
      student_name: payload.student_name.trim(),
      student_age: studentAge,
      student_grade: payload.student_grade.trim(),
      school_name: payload.school_name.trim(),
      basketball_experience: payload.basketball_experience.trim(),
      leadership_goals: leadershipGoals,
      additional_notes: additionalNotes,
    },
  };
}
