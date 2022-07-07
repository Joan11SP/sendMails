const mail = require('../Utils/mailer');
const logs = require('../Utils/logs')

const sendEmail = async (req,res) => 
{
    var { emails, message, subject } = req.body;
    logs.writeLog(req.body, "SOLICITUD");
    try 
    {
        await mail.sendEmail(emails, subject, message);
    } 
    catch (error) 
    {
        res.status(500).json({ mensaje: error})    
    }

    res.status(200).json({ mensaje: "Exito"});

}

module.exports = { sendEmail }
