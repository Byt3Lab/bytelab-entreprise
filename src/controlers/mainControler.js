const path = require('path');

const controler = {
    "home": async (req, res) => {
        res.render(path.join('public', 'pages', 'index.ejs'), {title: "ByteLab Entreprise"});
    }
};

module.exports = controler;