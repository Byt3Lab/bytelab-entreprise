import bcrypt from "bcrypt";

const salt = 12;

export default {
    hash: (pass) => {
        let sign = bcrypt.hashSync(pass, salt);
        return sign;
    },

    compare: (pass, hash) => {
        let bool = bcrypt.compareSync(pass, hash);
        return bool;
    }
};