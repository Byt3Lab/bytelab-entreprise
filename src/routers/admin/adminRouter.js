const express = require('express');
const router = express.Router();

router.use('/', require('./userRoutes'))
    .use('/blog', require('./blogRoutes'))
    
    /**
     * ...
     */
;

module.exports = router;