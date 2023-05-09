const express = require('express');
const router  = express.Router();
const { getItemById } = require('../db/queries/getItemById');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  getItemById(id)

  .then((item) => {
    console.log(item);
    const templateVars = {item:item}
    res.render('item', templateVars);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
