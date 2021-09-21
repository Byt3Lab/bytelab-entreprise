const express   = require('express');
const router    = express.Router();

router.use('/', require('./mainRoutes'))
    .use('/blog', require('./blogRoutes'))
    
    /**
     * ...
     */
;

module.exports  = router;