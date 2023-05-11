const express = require('express');
const router  = express.Router();
const { getAllItems } = require('../db/queries/getAllItems');
const { userItems } = require('../db/queries/userItems');
const { deleteItem } = require('../db/queries/deleteItem');
const { markSold } = require('../db/queries/markSold');

router.get('/', (req, res) => {
  getAllItems()
  .then((items) => {
    res.json({items});
  })
  .catch((err) => {
    next(err);
  });
});

//GET route for fetching the user available items
router.get('/userItem', (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.render('errorPage');
  }
  userItems(user)
    .then((items) => {
      const result = { user, items };
      res.render('userItems', result);
    })
    .catch(err => res.json(err));
});

//Update the Item to be sold for particular user based on ItemId
router.post("/:id", (req, res) => {
  const itemId = req.params.id;
  if (!req.session.user) {
    return res.render('errorPage');
  }
  markSold(itemId)
  .then((result) => {
    res.redirect('/items/userItem');
  })
  .catch(err => res.json(err));
});

//Delete the item for particular user based on ItemId
router.post("/:id/delete", (req, res) => {
  const itemId = req.params.id;

  if (!req.session.user) {
    return res.render('errorPage');
  }
  deleteItem(itemId)
  .then((result) => {
    res.redirect('/items/userItem');
  })
  .catch(err => res.json(err));
});

module.exports = router;
