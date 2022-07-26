const firebase = require('../Utils/firebase');
const model_response = require('../Models/model_response');

const sendPush = async (req, res, next) => 
{
    var response = model_response;
    try 
    {
        var { titulo, token, body } = req.body;
        
        await firebase.enviar_push(titulo, token, body);

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

module.exports = { sendPush }
