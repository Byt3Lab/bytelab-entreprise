import { Router } from "express";
import mainControler from "./controlers/mainControler.js";

const router = Router();

router.get('/', mainControler.home);

export default router;