const express   = require('express');
const router    = express.Router();

const mainControler = require('../../controlers/mainControler');

router.get('/', mainControler.home)

;

module.exports  = router;