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

    // Define standard mail options
    const mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Disrepair Claim from ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Claim Submission</h2>
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3>Property Info</h3>
        <p><strong>Address:</strong> ${data.addressLine1}, ${data.city}, ${data.postcode}</p>
        <p><strong>Landlord Type:</strong> ${data.landlordType}</p>
        
        <h3>Disrepair Details</h3>
        <p><strong>Issues:</strong> ${data.issues.join(", ")}</p>
        <p><strong>Additional Details:</strong> ${data.additionalDetails || 'None provided'}</p>
      `,
    };

    // If evidence was uploaded, attach it to the email
    if (data.evidence && Array.isArray(data.evidence) && data.evidence.length > 0) {
      mailOptions.attachments = data.evidence.map((file: any) => ({
        filename: file.name,
        path: file.data // Nodemailer handles Base64 data directly
      }));
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}