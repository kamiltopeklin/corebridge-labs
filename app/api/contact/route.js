import crypto from "node:crypto";

const clean = (value, max = 4000) =>
  String(value ?? "")
    .trim()
    .slice(0, max);
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
export async function POST(request) {
  try {
    const body = await request.json();
    const submission = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: clean(body.name, 120),
      email: clean(body.email, 200),
      company: clean(body.company, 200),
      service: clean(body.service, 120),
      message: clean(body.message, 5000),
    };
    if (
      !submission.name ||
      !submission.email ||
      !submission.service ||
      !submission.message
    )
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    if (!isEmail(submission.email))
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    return Response.json({ ok: true, id: submission.id }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Server error. Please try again." },
      { status: 500 },
    );
  }
}
