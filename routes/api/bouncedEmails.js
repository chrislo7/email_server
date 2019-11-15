const express = require('express');
const router = express.Router();

// BouncedEmail Model
const BouncedEmail = require('../../models/BouncedEmail');

// // @route           GET/ bounced-email
// // @description     save email_address to blacklist
// router.get('/', (req, res) => {
//     BouncedEmail.find()
//         .then(bouncedemails => {
//             res.json(bouncedemails)
//         })
// });

// @route           POST /bounced-email
// @description     save email_address to blacklist
router.post('/', (req, res) => {
    const email_address = new BouncedEmail({
        email_address: req.body.email_address
    });

    email_address.save()
        .then(email => {
            console.log(`${email.email_address} has been added to the blacklist. Future emails will be bounced back.`)
            res.json(email);
        })
});

module.exports = router;