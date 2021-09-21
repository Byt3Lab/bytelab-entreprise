const express   = require('express');
const router    = express.Router();

router.use('/', require('./public/publicRouter'))
    .use('/admin', require('./admin/adminRouter'))
;

router.use((req, res) => {
    res.render('404.ejs', {title: "ByteLab Entreprise"});
});

module.exports  = router;