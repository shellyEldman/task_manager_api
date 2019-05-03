const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'task_app@tasks.com',
        subject: 'Thanks for Joining in!',
        text: `Welcome to the App, ${name}`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'task_app@tasks.com',
        subject: 'Sorry to see you go..',
        text: `Goodbye ${name}, I hope to see you again!`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};