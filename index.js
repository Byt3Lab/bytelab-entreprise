import express from "express";
import path from "path";
import { corps } from "./src/middelwares/index.js";
import { appRouter } from "./src/routers/index.js";
import { dbConnection, dirname } from "./src/utils/index.js";

const app     = express();
const PORT    = process.env.PORT || 8080;
const __dirname = dirname(import.meta.url);

app.use(corps);

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engime', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));

dbConnection();

app.use(appRouter);

app.listen(PORT, () => {
    console.log(`serveur lancer au port : ${PORT}`);
});