const express = require('express');
const router  = express.Router();
const { getUserIdFromEmail, createSellListing } = require('../db/queries/sell');

router.get('/', (req, res) => {
  const user = req.session.user;
  const templateVars = { user, title: 'Sell Items', msg: 'sell an item' }

  if (!user) {
    res.render('signed-out-err', templateVars)
  }

  res.render('sell-item', templateVars)
})

router.post('/item', (req, res) => {
  const sellItem = req.body;
  const userEmail = req.session.user;

  getUserIdFromEmail(userEmail)
  .then((userId) => {
    console.log("checking email/id res", userId.rows[0].id);
    createSellListing(sellItem, userId.rows[0].id)
      .then((result) => {
        res.redirect('/home');
      })
    })
  .catch((err) => {
    console.log(err);
    res.status(500).send('Error creating listing');
  });
})

module.exports = router;
