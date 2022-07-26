const { Router } = require('express');
const router = Router();

// CONTROLLERS
const mail = require('../Controllers/cont_sendMails');
const firebase = require('../Controllers/cont_sendPushFirebase');

router.post('/sendMails', mail.sendEmail);
router.post('/sendPushFirebase', firebase.sendPush);

module.exports = router;