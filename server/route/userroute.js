const express = require('express');
const { sendmail } = require('../controllers/usercontroller');

const router = express.Router();

router.post('/sendmail', sendmail);

module.exports = router;
