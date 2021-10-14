import { Router } from "express";
import mainRoutes from "./mainRoutes.js";
import blogRoutes from "./blogRoutes.js";

const router = Router();

router.use('/', mainRoutes)
    .use('/blog', blogRoutes)
    
    /**
     * ...
     */
;

export default router;