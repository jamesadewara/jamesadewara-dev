import { NextRequest, NextResponse } from "next/server";
import configPromise from "@/lib/config";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  // 1. Validate SMTP configuration
  const config = await configPromise;
  const { host: SMTP_HOST, port: SMTP_PORT, user: SMTP_USER, pass: SMTP_PASS, secure: SMTP_SECURE } = config.emailSmtp;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    // 2. Parse and validate body
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { name, email, message, company } = body as {
      name?: string;
      email?: string;
      message?: string;
      company?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    // 3. Send email via nodemailer
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        // Do not fail on invalid certs (required if AV/Proxy intercepts traffic locally)
        rejectUnauthorized: false
      }
    });

    // 4. Notify admin
    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: email,
      subject: `New contact form submission from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Message from jamesadewara.me</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${message}</p>
      `,
    });

    // 5. Auto-reply to sender
    await transporter.sendMail({
      from: `"James Adewara" <${SMTP_USER}>`,
      to: email,
      subject: "Message received — James Adewara",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. I've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to check out my work at <a href="https://jamesadewara.me/work">jamesadewara.me/work</a>.</p>
        <br />
        <p>— James Adewara<br />Fullstack Developer · React · FastAPI · AWS</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT FORM ERROR:", err);
    const error = err as Error;
    return NextResponse.json(
      { error: "Failed to send message", details: error.message },
      { status: 500 }
    );
  }
};
