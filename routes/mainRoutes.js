const express = require('express');
const mainControllers = require('../controllers/mainControllers');
const router = express.Router();

router.get('/', mainControllers.getIndex);
router.get('/admin', mainControllers.getAdmin);

module.exports = router;