import path from "path";

export default {
    home (req, res) {
        res.render(path.join('home', 'index.ejs'), {title: "bytelab entreprise"});
    }
}