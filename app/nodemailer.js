import nodemailer from 'nodemailer';

export async function POST(req) {
  const { to, subject, text } = await req.json();

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Use environment variable for host
    port: parseInt(process.env.EMAIL_PORT), // Use environment variable for port
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for email
      pass: process.env.EMAIL_PASSWORD, // Use environment variable for password
    },
  });

  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL_FROM, // Use environment variable for "from" address
    to, // Recipient address
    subject, // Email subject
    text, // Plain text body
    html: `<p>${text}</p>`, // HTML body (optional)
  };

  // Send the email
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