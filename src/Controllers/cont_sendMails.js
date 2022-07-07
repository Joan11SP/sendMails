const mail = require('../Utils/mailer');
const model_response = require('../Models/model_response');

const sendEmail = async (req, res, next) => 
{
    var response = model_response;
    try 
    {
        var { emails, message, subject } = req.body;
        await mail.sendEmail(emails, subject, message);

        response.message = "Exito";
    }
    catch (error) 
    {
        response.code = 1;
        response.message = error;
    }
    req.body = response;
    next();

}

module.exports = { sendEmail }
