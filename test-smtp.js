const nodemailer = require("nodemailer");

async function test() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "jamesadewara1@gmail.com",
      pass: "sfvo vdpt pjmr zbym",
    },
  });

  try {
    console.log("Verifying connection to smtp.gmail.com:587...");
    await transporter.verify();
    console.log("Connection verified successfully!");
  } catch (error) {
    console.error("Verification failed:");
    console.error(error);
  }
}

test();
