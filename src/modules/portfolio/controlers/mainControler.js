import path from "path";

export default {
    index (req, res) {
        res.render(path.join('portfolio', 'index.ejs'), {title: "bytelab administration"});
    }
}