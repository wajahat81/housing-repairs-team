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
               replyTo: data.email,
               subject: `New Consultation Request from ${data.fullName}`,
               html: `
        <div style="font-family: Arial, sans-serif; background-color: #F8FAFC; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; padding: 30px; border-radius: 8px; border-top: 5px solid #0E2140;">
            <h2 style="color: #0E2140; text-align: center; margin-bottom: 20px;">New Claim Request</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 1px solid #E2E8F0; background: #F1F5F9; width: 35%; color: #475569;">Full Name</th>
                <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.fullName}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 1px solid #E2E8F0; background: #F1F5F9; color: #475569;">Email</th>
                <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.email}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 1px solid #E2E8F0; background: #F1F5F9; color: #475569;">Phone</th>
                <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.phone}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 1px solid #E2E8F0; background: #F1F5F9; color: #475569;">Tenant With</th>
                <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.tenantType}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 1px solid #E2E8F0; background: #F1F5F9; color: #475569;">Message</th>
                <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.message}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 1px solid #E2E8F0; background: #F1F5F9; color: #475569;">Consent Given</th>
                <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.consent ? 'Yes' : 'No'}</td>
              </tr>
            </table>
            <p style="text-align: center; font-size: 12px; color: #94A3B8; margin-top: 30px;">
              This email was sent from the Consultation form on the Housing Repairs Team website.
            </p>
          </div>
        </div>
      `,
          };

          await transporter.sendMail(mailOptions);

          return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
     } catch (error) {
          console.error("Consultation Email Error:", error);
          return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
     }
}