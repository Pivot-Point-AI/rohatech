import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"RohaTech Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nPhone: ${phone || "-"}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>Phone:</strong> ${phone || "-"}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br />")}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
