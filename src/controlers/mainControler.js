import path from "path";

export default {
    "home": async (req, res) => {
        res.render(path.join('home', 'index.ejs'), {title: "ByteLab Entreprise"});
    }
};