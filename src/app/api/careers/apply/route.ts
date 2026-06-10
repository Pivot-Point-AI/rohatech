import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const role = formData.get("role") as string | null;
  const message = formData.get("message") as string | null;
  const resume = formData.get("resume") as File | null;

  if (!name || !email || !resume) {
    return Response.json({ error: "Name, email and resume are required." }, { status: 400 });
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
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    await transporter.sendMail({
      from: `"RohaTech Careers" <${process.env.SMTP_USER}>`,
      to: process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New job application${role ? ` — ${role}` : ""} from ${name}`,
      text: `Name: ${name}\nPhone: ${phone || "-"}\nEmail: ${email}\nRole: ${role || "-"}\n\nMessage:\n${message || "-"}`,
      html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>Phone:</strong> ${phone || "-"}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Role:</strong> ${role || "-"}</p>
<p><strong>Message:</strong></p>
<p>${(message || "-").replace(/\n/g, "<br />")}</p>`,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send job application:", error);
    return Response.json({ error: "Failed to submit application. Please try again later." }, { status: 500 });
  }
}
