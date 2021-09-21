const corps = (req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', '*'); // requête cross origine au cas ou on ait une app mobile
    res.setHeader('Access-Control-Allow-Headers', '*'); //authorisé les entêtes headers
    res.setHeader('X-Frame-Options', 'Deny'); // refusé aux navigateur de pemettre d'appelé le site avec une balise iframes
    next();
}

module.exports = corps;