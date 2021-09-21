const express = require('express');
const app     = express();
const path    = require('path')
const PORT    = process.env.PORT || 8080;

const appRouter  = require ('./src/routers/appRouter');
const corps      = require ('./src/middelwares/corps');

app.use(corps);

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engime', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));

require ('./src/utils/dbConnection');

app.use(appRouter);

app.listen(PORT, () => {
    console.log(`serveur lancer au port : ${PORT}`);
});