import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General inquiries",
  partnership: "Partnership requests",
  collaboration: "Project collaboration",
  training: "Training applications",
  investment: "Investment opportunities",
  other: "Other",
};

export async function POST(request: Request) {
  const user = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;

  if (!user || !appPassword) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD");
    return NextResponse.json(
      { success: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;
  const nameTrim = typeof name === "string" ? name.trim() : "";
  const emailTrim = typeof email === "string" ? email.trim() : "";
  const subjectKey = typeof subject === "string" ? subject : "";
  const messageTrim = typeof message === "string" ? message.trim() : "";

  if (!nameTrim || nameTrim.length < 2) {
    return NextResponse.json(
      { success: false, error: "Name is required (at least 2 characters)." },
      { status: 400 }
    );
  }
  if (!emailTrim || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
    return NextResponse.json(
      { success: false, error: "Valid email is required." },
      { status: 400 }
    );
  }
  if (!subjectKey || !SUBJECT_LABELS[subjectKey]) {
    return NextResponse.json(
      { success: false, error: "Please select a subject." },
      { status: 400 }
    );
  }
  if (!messageTrim || messageTrim.length < 10) {
    return NextResponse.json(
      { success: false, error: "Message is required (at least 10 characters)." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass: appPassword,
    },
  });

  const subjectLabel = SUBJECT_LABELS[subjectKey];
  const mailOptions = {
    from: `"EDYM Herbal Hub Contact" <${user}>`,
    to: user,
    replyTo: emailTrim,
    subject: `[Contact] ${subjectLabel} – ${nameTrim}`,
    text: [
      `From: ${nameTrim} <${emailTrim}>`,
      `Subject: ${subjectLabel}`,
      "",
      messageTrim,
    ].join("\n"),
    html: [
      `<p><strong>From:</strong> ${escapeHtml(nameTrim)} &lt;<a href="mailto:${escapeHtml(emailTrim)}">${escapeHtml(emailTrim)}</a>&gt;</p>`,
      `<p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>`,
      "<hr>",
      `<p>${escapeHtml(messageTrim).replace(/\n/g, "<br>")}</p>`,
    ].join("\n"),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
