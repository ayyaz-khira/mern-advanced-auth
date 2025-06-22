// testEmail.js
import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD }
    });

    await transporter.verify();

    const result = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'ayyaxx008@gmail.com', // YOUR personal Gmail
      subject: 'Direct Test',
      text: 'If you see this, direct nodemailer works!',
    });

    console.log('✅ Sent:', result.messageId);
  } catch (error) {
    console.error('❌ Error:', error);
  }
})();
