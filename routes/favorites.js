const express = require('express');
const router  = express.Router();
const getFavs = require('../db/queries/favorites');

router.get('/', (req, res) => {

  // Check if the user is logged in
  if (!req.session.user) {
    res.send("Please login to view your favorites")
  }


  const templateVars = { user: req.session.user }
  res.render('favorites', templateVars)
})


module.exports = router;
