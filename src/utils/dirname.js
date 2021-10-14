import path from "path";

export default (url) => {
    return path.dirname(new URL(url).pathname);
}