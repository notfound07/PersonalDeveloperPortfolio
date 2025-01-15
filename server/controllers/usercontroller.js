const nodemailer = require('nodemailer');
require('dotenv').config();

const sendmail = async (req, res) => {
    const { name, email, question } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${question}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
};

module.exports = { sendmail };
