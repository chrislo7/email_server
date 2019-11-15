const express = require('express');
const router = express.Router();

// Item Model
const Email = require('../../models/Email');

// @route           POST api/items
// @description     create an item 
router.post('/', (req, res) => {
    const newEmail = new Email({
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        body_html: req.body.body_html,
        body_text: req.body.body_text ? req.body.body_text : "No Text"
    });

    let params = {
        Destination: {
            ToAddresses: newEmail.to
        }, 
        Message: {
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
            Subject: {
            Charset: "UTF-8", 
            Data: newEmail.subject
            }
        },
        Source: newEmail.from
    };

    newEmail.save()
        .then(email => {
            res.json(email)
        })
});

module.exports = router;