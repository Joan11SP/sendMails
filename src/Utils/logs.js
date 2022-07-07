const fs = require('fs');

const writeLog = async (object, tipo) => 
{
    let date = new Date();

    let nameFile = date.getFullYear() +""+date.getMonth() +""+ date.getDate();

    var directory = process.env.PATH_DIR_APP;

    if (!fs.existsSync(directory))
    {
        await fs.mkdir(directory,{ recursive: true}, (err) => console.log(err))
    }

    var path = directory + nameFile + '.txt'

    var log = { tipo, object }

    fs.appendFile(path, JSON.stringify(log) + "\n", (err) => {
        if (err) console.log(err);;
    });
}

module.exports = { writeLog }