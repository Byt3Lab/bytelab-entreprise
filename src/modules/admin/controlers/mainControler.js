import path from "path";

export default {
    index (req, res) {
        res.render(path.join('admin', 'index.ejs'), {title: "bytelab administration"});
    }
}