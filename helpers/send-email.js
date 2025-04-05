const nodemailer = require('nodemailer');
const config = require('config.json');

module.exports = sendEmail;

async function sendEmail({ to, subject, html, from = config.emailFrom }) {
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html });
<<<<<<< HEAD
}
=======
}
>>>>>>> 1ce7cc7c1f06729c28cf5f7301d8d3208f70dd8c
