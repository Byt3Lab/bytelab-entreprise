import path from "path";

export default {
    index (req, res) {
        res.render(path.join('blog', 'index.ejs'), {title: "bytelab administration"});
    }
}