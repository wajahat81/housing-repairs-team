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
      to: process.env.EMAIL_USER,
      subject: `New Homepage Lead: ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Claim Assessment from Homepage</h2>
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mobile:</strong> ${data.phone}</p>
        
        <h3>Disrepair Details</h3>
        <p><strong>Issues:</strong> ${data.issues.join(", ")}</p>
        <p><strong>Duration:</strong> ${data.duration}</p>
        
        <h3>Eligibility Check</h3>
        <p><strong>Reported for 3+ months:</strong> ${data.reported}</p>
        <p><strong>Started claim in past 12 months:</strong> ${data.existingClaim}</p>
        <p><strong>Tenant Type:</strong> ${data.tenantType}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}