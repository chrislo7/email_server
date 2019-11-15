const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
aws.config.update({region: 'us-east-1'});
aws.config.loadFromPath('./config/config.json');
const ses = new aws.SES();

// Email Model
const Email = require('../../models/Email');

// BouncedEmail Model
const BouncedEmail = require('../../models/BouncedEmail');

// @route           POST /send-email
// @description     send an email via AWS SES
router.post('/', (req, res) => {
    const newEmail = new Email({
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        body_html: req.body.body_html,
        body_text: req.body.body_text ? req.body.body_text : "No Text"
    });

    let params = {
        Source: newEmail.from,
        Destination: {
            ToAddresses: [newEmail.to]
        }, 
        Message: {
            Subject: {
                Charset: "UTF-8", 
                Data: newEmail.subject
            },
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: newEmail.body_html
                }, 
                Text: {
                    Charset: "UTF-8", 
                    Data: newEmail.body_text
                }
            }, 
        }
    };

    BouncedEmail.find({ email_address: newEmail.from })
        .then(query => {
            console.log(query)
            if (query.length === 0) {
                ses.sendEmail(params, function(err, data) {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log('Email sent! Message ID: ', data.MessageId);
                    }
                })
                newEmail.save()
                    .then(email => {
                        res.json(email)
                    })
            } else {
                res.end(`${newEmail.from} is on the blacklist.`)
                console.log(`${newEmail.from} is on the blacklist.`)
            }
    });
});

module.exports = router;