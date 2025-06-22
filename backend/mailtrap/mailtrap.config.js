// mailtrap.config.js
import dotenv from 'dotenv';
dotenv.config(); // <- put this at the very top!

import nodemailer from "nodemailer";

console.log('>>> MAIL_USER at transporter:', process.env.MAIL_USER); // log again!

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});




// Test credentials right here
transporter.verify().then(() => {
  console.log("✅ SMTP Ready to send mail");
}).catch((err) => {
  console.error("❌ SMTP Error:", err);
});

export async function sendSimpleEmail(to, subject, html) {
  await transporter.sendMail({ from: process.env.MAIL_USER, to, subject, html });
}
