import { Router } from "express";
import publicRouter from "./public/publicRouter.js";
import adminRouter from "./admin/adminRouter.js";

const router = Router();

router.use('/', publicRouter)
    .use('/admin', adminRouter)
;

router.use((req, res) => {
    res.render('404.ejs', {title: "ByteLab Entreprise"});
});

export default router;