const express = require('express');
const router = express.Router();
const { getFavs, removeFav } = require('../db/queries/favorites');

router.get('/', (req, res) => {
  const user = req.session.user;
  const templateVars = { user, title: 'Favorite Items', msg: 'view your favorites' }

  if (!user) {
    res.render('signed-out-err', templateVars)
  }

  // DB is queried by calling the getFavs fn, returns data related to favorite items
  // pass this data to templateVars to use in ejs
  getFavs(user)
    .then((favorites) => {
      const templateVars = { user, favorites };
      res.render('favorites', templateVars);
    })
    .catch(err => res.json(err));
});


// POST /favourites/:id/delete
// delete row
router.post("/:id/delete", (req, res) => {
  const user = req.session.user;
  const item_id = req.params.id;


  if (!user) {
    return res.render('favs-signed-out-err', {user});
  }

  // if (urlDatabase[id].userID !== user.id) {
  //   return res.status(403).send("You do not have permission to delete a URL that is not yours.");
  // }

  // if (!urlDatabase[req.params.id]) {
  //   return res.status(404).send("Invalid tinyURL, please try again.");
  // }

  removeFav(user, item_id)
  .then(() => {
    res.redirect('/favorites');
  })
  .catch(err => res.json(err));

});
module.exports = router;
