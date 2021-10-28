import { Router } from "express";
import homeRouter from "./home/homeRouter.js";
import adminRouter from "./admin/adminRouter.js";
import blogRouter from "./blog/blogRouter.js";
import portfolioRouter from "./portfolio/portfolioRouter.js";

const router = Router();

router
    .use('/admin', adminRouter)
    .use('/blog', blogRouter)
    .use('/portfolio', portfolioRouter)
    .use('/', homeRouter)
;

router.use((req, res) => {
    res.render('404.ejs', {title: "ByteLab Entreprise"});
});

export default router;