const express = require('express');
var sendmail = require('sendmail')({silent: true})
const router  = express.Router();
const { messageEmail } = require('../db/queries/messageEmail');

//read the ItemId from requeste parameter, message from request body  and send email

router.post('/:id', (req, res) => {
  const id = req.params.id;               // Item ID for the selected Item
  const { message } = req.body;           // Actual Message send to Seller
  const user = req.session.user;          // Logged in User Email
  messageEmail(id)                        // Pass the ItemID and get the Seller Email
  .then((emailDetails) => {
    console.log(emailDetails);
    sendmail({
      from: user,                       // Logged in user Email
      to: emailDetails.email,           // Seller Email
      replyTo: user,                    // Logged in user Email
      subject: emailDetails.title,      // Item Name
      html: message                     // Message entered
    }, function (err, reply) {
      console.log(err && err.stack)
      console.dir(reply)
    })
    res.render('index', user);
  })
  .catch(err => res.json(err));
});

module.exports = router;
