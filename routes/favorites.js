const express = require('express');
const router = express.Router();
const { getFavs } = require('../db/queries/favorites');

router.get('/', (req, res) => {
  // Check if the user is logged in
  if (!req.session.user) {
    res.send("Please login to view your favorites");
    return;
  }

  // DB is queried by calling the getFavs fn, returns data related to favorite items
  // pass this data to templateVars to use in ejs
  getFavs()
    .then((favorites) => {
      const templateVars = { user: req.session.user, favorites };
      res.render('favorites', templateVars);
    })
    .catch(err => res.json(err));
});

module.exports = router;
