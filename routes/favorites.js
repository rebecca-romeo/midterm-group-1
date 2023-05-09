const express = require('express');
const router = express.Router();
const { getFavs } = require('../db/queries/favorites');

router.get('/', (req, res) => {
  // Check if the user is logged in
  if (!req.session.user) {
    res.send("Please login to view your favorites");
    return;
  }

  getFavs()
    .then((favorites) => {
      const templateVars = { user: req.session.user, favorites };
      res.render('favorites', templateVars);
    })
    .catch(err => res.json(err));
});

module.exports = router;
// const favorites = res.json(result);
// const templateVars = { user: req.session.user, favorites }
// return res.render('favorites', templateVars)
