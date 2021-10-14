import path from "path";

export default {
    "home": async (req, res) => {
        res.render(path.join('public', 'pages', 'index.ejs'), {title: "ByteLab Entreprise"});
    }
};