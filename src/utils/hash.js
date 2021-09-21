/**
* 
*/

const bcrypt    = require('bcrypt');
const salt      = 12;

const hash = {
    sign: (pass) => {
        let sign = bcrypt.hashSync(pass, salt);
        return sign;
    },

    compare: (pass, hash) => {
        let bool = bcrypt.compareSync(pass, hash);
        return bool;
    }
};

module.exports = hash;