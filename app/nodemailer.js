import nodemailer from 'nodemailer';

export async function POST(req) {
    const { to, subject, text } = await req.json();
  
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com', // e.g., smtp.gmail.com
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASSWORD, // your email password
      },
    });

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
}