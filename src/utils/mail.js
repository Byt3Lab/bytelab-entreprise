import nodemailer from "nodemailer";

export default async (subject, msg, from, to) => {

    let transport = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'ggm.gomsugaetant@gmail.com',
            pass : 'gaetant12345678'
        },
    });

    let mailOptions = {
        from : from,
        to: to,
        subject : subject,
        html : msg
    }

    try {
        const info = await transport.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.log(error);
        return null;
    }
};