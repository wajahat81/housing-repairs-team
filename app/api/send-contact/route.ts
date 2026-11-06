import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'premium171.web-hosting.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending it to yourself
      subject: `New Contact Inquiry from ${data.fullName}`,
      html: `
        <h2>New General Inquiry</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        
        <h3>Message:</h3>
        <p>${data.message}</p>
        <br>
        <hr>
        <small>This message was sent from the general contact form on the Housing Repairs Team website.</small>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}