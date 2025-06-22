// emails.js
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { sendSimpleEmail } from "./mailtrap.config.js"; // your nodemailer helper

// emails.js


export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    console.log('About to send mail to:', email);  // <-- log this
    await sendSimpleEmail(
      email,
      "Verify your email",
      `<p>Your verification code is: <b>${verificationToken}</b></p>`
    );
    console.log(`Verification email sent successfully to ${email}`);
  } catch (error) {
    console.error(`Error sending verification email: ${error.message}`);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};


export const sendWelcomeEmail = async (email, name) => {
  try {
    await sendSimpleEmail(
      email,
      "Welcome to Our App!",
      `<h1>Welcome, ${name}!</h1><p>Thanks for signing up.</p>`
    );

    console.log(`Welcome email sent successfully to ${email}`);
  } catch (error) {
    console.error(`Error sending welcome email: ${error}`);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    await sendSimpleEmail(
      email,
      "Reset your password",
      PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL)
    );

    console.log(`Password reset email sent successfully to ${email}`);
  } catch (error) {
    console.error(`Error sending password reset email: ${error}`);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    await sendSimpleEmail(
      email,
      "Password Reset Successful",
      PASSWORD_RESET_SUCCESS_TEMPLATE
    );

    console.log(`Password reset success email sent successfully to ${email}`);
  } catch (error) {
    console.error(`Error sending password reset success email: ${error}`);
    throw new Error(`Error sending password reset success email: ${error.message}`);
  }
};
