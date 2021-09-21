/*
*
*/

const mailer = require('nodemailer');

const mail = (subject, msg, from, to, options = {}) => {

    let transport = mailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'ggm.gomsugaetant@gmail.com',
            pass : 'gaetant1234'
        },
    });

    let mailOptions = {
        from : from,
        to: to,
        subject : subject,
        html : msg
    }

    transport.sendMail(mailOptions, (error, info) => {
        let res = null;
        
        if (options.res) {
            res = options.res;
        }

        if (error) {
            if (options.error)
                options.error(error, res)
        } else {
            if (options.success)
                options.success(info, res)
        }
    });
}

module.exports = mail;