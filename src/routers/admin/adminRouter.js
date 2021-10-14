import { Router } from "express";
import userRoutes from "./userRoutes.js";
import blogRoutes from "./blogRoutes.js";

const router = Router();

router.use('/', userRoutes)
    .use('/blog', blogRoutes)
    
    /**
     * ...
     */
;

export default router;