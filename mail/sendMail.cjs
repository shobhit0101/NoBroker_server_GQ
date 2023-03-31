const nodemailer = require("nodemailer")

const sendMail = (s) => {

    let otp;
    otp = Math.floor((Math.random() * 9999) + 1000);
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'groupfsd20@gmail.com',
            pass: 'xwhtaglzavzfkkqx'
        }
    });

    console.log('created');
    transporter.sendMail({
        from: 'groupfsd20@gmail.com',
        to: s,
        subject: 'Here is otp',
        text: otp.toString()
    });
    return otp

}

module.exports = sendMail;
