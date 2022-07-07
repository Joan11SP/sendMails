const { Router } = require('express');
const router = Router();

// CONTROLLERS
const mail = require('../Controllers/cont_sendMails')

router.post('/sendMails', mail.sendEmail);

module.exports = router;