import express from "express";
import path from "path";
import { corps } from "./src/middelwares/index.js";
import appRouter from "./src/modules/appRouter.js";
import { dbConnection, consts } from "./src/utils/index.js";

const app     = express();
const PORT    = process.env.PORT || 8080;
const __dirname = consts.PATH_ROOT;

app.use(corps);

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engime', 'ejs');

app.use('/', express.static(path.join(__dirname, 'storage')));

dbConnection();

app.use(appRouter);

app.listen(PORT, () => {
    console.log(`serveur lancer au port : ${PORT}`);
});