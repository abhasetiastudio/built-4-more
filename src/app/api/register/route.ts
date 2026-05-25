import { NextResponse } from "next/server";
import { validateRegistrationPayload } from "@/lib/registration";
import { createServerSupabaseClient } from "@/lib/supabase/server";

/**
 * POST /api/register — server-side orchestration for parent registrations.
 *
 * Why API route architecture (vs. browser → Supabase)?
 * - Single boundary for validation, logging, and error shaping
 * - Database credentials and table details stay off the client
 * - Easy to add side effects (email, webhooks, queues) without touching the form
 *
 * Why server-side orchestration is preferred:
 * - Business rules live in one place as requirements grow
 * - Future event-driven workflows can emit events after insert (Step Functions, Inngest, etc.)
 * - Rate limiting, spam checks, and admin notifications can run before/after persistence
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const validation = validateRegistrationPayload(body);
  if (!validation.ok) {
    return NextResponse.json(
      { success: false, error: validation.error },
      { status: 400 }
    );
  }

  try {
    const supabase = createServerSupabaseClient();

    const { error: insertError } = await supabase
      .from("registrations")
      .insert(validation.data);

    if (insertError) {
      console.error("[api/register] Supabase insert failed:", insertError.message);
      return NextResponse.json(
        { success: false, error: insertError.message },
        { status: 500 }
      );
    }

    // Future: emit domain event here, e.g. await publishRegistrationCreated(validation.data)

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("[api/register] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error ? err.message : "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}
