
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL_, //your gmail account you used to set the project up in google cloud console"
        clientId: process.env.CLIENT_ID_MAIL,
        clientSecret: process.env.CLIENT_SECRET_MAIL,
        accessToken: "ya29.A0AVA9y1vHuZwuONOi8773-07eWtUWqU-Q2cwflYodbUrTjoJLLWTqRE9vetZjboydJ6rHUyUW8muO7IOkQPiN6lYaIWP59vy0bd_Sw-2V4A33CPyp8sqBWeA89uNnhKyMPWD3CINWgzu70cDzmwtu1Fg7XQtrYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4RXB2YVVGNy05em5NeWpLUFNGQmV6dw0163", 
        scope: "https://mail.google.com/", 
        token_type: "Bearer", 
        refreshToken: "1//04xx5XFWU8sg2CgYIARAAGAQSNwF-L9IrMksgjdDradhRqPD3lrwRcNSmK1Zy50ppFv18rhVZgeN52745bwdUApl2z7tUTN6HEQA"
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmail = async (emails, subject, html) => {
    try {
        const send = await transporter.sendMail(
            {
                from: `"${process.env.NAME_SEND_EMAIL}" <${process.env.EMAIL_}>`,
                to: emails,
                subject: subject,
                text: "",
                html
            }
        );
        return send;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { sendEmail }