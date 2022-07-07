
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
        accessToken: "ya29.a0AVA9y1uff2NRtq0iX3f-PN3vLSgdU1Qf1HPxfEUhiUaFpIH-2JG5O9ezn9hKdp1V9s5yHi6yFDOJBeMegJPES-TDCMHIMrpViA4H2Hm0GfmGN0OPoV6Wkfu5msdFJih1p4Sik5pMCsmVnxxIFWZA2-PYRPai", 
        scope: "https://mail.google.com/", 
        token_type: "Bearer", 
        refreshToken: "1//04mU7zcH0mdRgCgYIARAAGAQSNwF-L9Ir4MoRGf-fjMVhzYfhnjkrQsMBASrB2cLzRkeB2CZWxb1eStVb92pyb-8fLmYFaMCPclw"
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