'use strict'

var express = require('express');

var ContactController = require('../controllers/contact');

var router = express.Router();

router.get('/messages',ContactController.getMessages);
router.get('/message/:id',ContactController.getMessage);
router.post('/save-message',ContactController.saveMessage);


module.exports = router;