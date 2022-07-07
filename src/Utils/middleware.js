const logs = require('../Utils/logs');

module.exports.authBasic = async (req, res, next) =>
{
    try
    {
        var basic = req.headers.authapiemails;

        if (!basic)
            return res.status(401).json({ mensaje: 'Sin autorización' });

        if (basic != process.env.AUTH_BASIC)
            return res.status(401).json({ mensaje: 'Sin autorización' });

        next();
    }
    catch (error)
    {
        res.status(401).json({ mensaje: 'Ocurrió un error, intenta más tarde.' });
    }

}

module.exports.inputData = async (req, res, next) =>
{
    try
    {
        logs.writeLog(req.body,"SOLICITUD");
        next();
    }
    catch (error)
    {
        res.status(500).json({ mensaje: 'Ocurrió un error, intenta más tarde.' });
    }
}

module.exports.outputData = async (req, res) =>
{
    try
    {
        logs.writeLog(req.body,"SALIDA");
        res.json(req.body);
    }
    catch (error)
    {
        res.status(500).json({ mensaje: 'Ocurrió un error, intenta más tarde.' });
    }
}
