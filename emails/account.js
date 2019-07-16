const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
    "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: "emekannalue@gmail.com",
    from: "gideonnnalue@yahoo.com",
    subject: "This is an email test",
    text: "I hope it is working fine"
});
