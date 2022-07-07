
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        type: "OAuth2",
        user: "joanspena.11@gmail.com", //your gmail account you used to set the project up in google cloud console"
        clientId: "1010992283188-phedvnj2g461i6196kacleihq3qjqoe0.apps.googleusercontent.com",
        clientSecret: "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",
        accessToken: "ya29.a0AVA9y1uWsgogcKv74egX5Wt-D-sg7iGYu3kI5Td88FWOvJeWxqYPZBcJp4Ir3IdySnkntIGPuvYVSt8tc0K0koHzUry1pe9brp8ABgbUDOt3ZdOfYaK6wsmAi8ZA3qxRIRZtnRESiykJV2zIOYQrC6zT5wMS", 
        scope: "https://mail.google.com/", 
        token_type: "Bearer", 
        //  "expires_in": 3599, 
        refreshToken: "1//04BRZjxukVWudCgYIARAAGAQSNwF-L9IrGrYV9T-5iW6YlEgP4szR3RxUVG7B0eBfWTjqEsj7Bf83wQK0mLFD8qI8LdziLhN1i7Q"
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmail = async (emails, subject, html) => {
    try {
        const send = await transporter.sendMail(
            {
                from: '"Nanny" <joanspena.11@gmail.com>', // sender address
                to: emails, // list of receivers
                subject: subject, // Subject line
                text: "", // plain text body
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