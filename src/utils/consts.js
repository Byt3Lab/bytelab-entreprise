import dirname from "./dirnameByUrl.js";
import path from "path";

const __dirname = dirname(import.meta.url);

export default {
    "PATH_ROOT" : path.dirname(path.dirname(__dirname)),
    "PATH_SRC" : path.dirname(__dirname),
}
