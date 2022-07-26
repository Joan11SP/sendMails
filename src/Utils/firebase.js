
const admin = require("firebase-admin");
const serviceAccount = require("./firebase_push_fintech.json");

let json = serviceAccount;


admin.initializeApp({
    credential: admin.credential.cert(json)
});

// Método para enviar notificaciones por medio del servicio de Firebase
const enviar_push = async (titulo, token, body) => 
{
    let mensaje = 
    {
        notification: { title: titulo, body: body },
        android: {
            notification: { sound: 'default' },
        },
        apns: {
            payload: {
                aps: { sound: 'default' },
            },
        },
        token: token
    }
    const message_notification = {
        notification: {
            title: titulo,
            body: body
        },
        data:{
            body
        }
    };
    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24,
        sound:'default',
        // apns: {
        //     payload: {
        //         aps: { sound: 'default' },
        //     },
        // },
    };
    try 
    {
        return await admin.messaging().sendToDevice(token, message_notification, notification_options).then(res=>{console.log(res)});
    } 
    catch (error) 
    {
        return 0
    }
}

module.exports = 
{
    enviar_push
}