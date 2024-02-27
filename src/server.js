const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your preferred service
    auth: {
        user: 'your.email@example.com',
        pass: 'yourpassword'
    }
});

app.get('/', (req, res) => {
    res.send('hello word');
});

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: 'your.email@example.com',
        to, // Recipient's email
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
