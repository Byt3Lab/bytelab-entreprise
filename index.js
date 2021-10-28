import express from "express";
import path from "path";
import { cors } from "./src/middelwares/index.js";
import appRouter from "./src/modules/appRouter.js";
import { dbConnection, consts } from "./src/utils/index.js";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import compression from "compression";

const app     = express();
const PORT    = process.env.PORT || 8080;
const __dirname = consts.PATH_ROOT; // récupère le chemin racine de l'app

app.use(cors);

app.use(cookieParser()); // middelware pour utilisé les cookies
app.use(cookieSession({keys: "cle"})); // middelware pour utilisé les cookies de session
app.use(compression()); // middelware pour compression données envoyé au agent

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engime', 'ejs');

app.use('/', express.static(path.join(__dirname, 'storage')));

dbConnection();

app.use(appRouter);

app.listen(PORT, () => {
    console.log(`serveur lancer au port : ${PORT}`);
});