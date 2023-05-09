const express = require('express');
const router = express.Router();
const { getFavs } = require('../db/queries/favorites');

router.get('/', (req, res) => {
  const user = req.session.user;
  // Check if the user is logged in
  if (!req.session.user) {
    return res.render('favs-signed-out-err', {user});

  }

  // DB is queried by calling the getFavs fn, returns data related to favorite items
  // pass this data to templateVars to use in ejs
  getFavs()
    .then((favorites) => {
      const templateVars = { user, favorites };
      res.render('favorites', templateVars);
    })
    .catch(err => res.json(err));
});

module.exports = router;
