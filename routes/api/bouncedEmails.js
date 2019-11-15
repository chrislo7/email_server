const express = require('express');
const router = express.Router();

// BouncedEmail Model
const BouncedEmail = require('../../models/BouncedEmail');

// // @route           GET/ bounced-email
// // @description     get list of emails in blacklist
router.get('/', (req, res) => {
    BouncedEmail.find()
        .then(bouncedemails => {
            res.json(bouncedemails)
        })
});

// @route           POST /bounced-email
// @description     save email_address to blacklist
router.post('/', (req, res) => {
    const email_address = new BouncedEmail({
        email_address: req.body.email_address
    });

    BouncedEmail.find({ email_address: newEmail.from })
        .then(query => {
            if ( query.length === 0 ) { // save email to blacklist
                email_address.save()
                    .then(email => {
                        console.log(`${email.email_address} has been added to the blacklist. Future emails will be bounced back.`)
                        res.json(email);
                    });
            } else { // do not save email to blacklist if already on it.
                res.end(`${newEmail.from} is already on the blacklist.`);
                console.log(`${newEmail.from} is already on the blacklist.`);
            }
        })
});

module.exports = router;