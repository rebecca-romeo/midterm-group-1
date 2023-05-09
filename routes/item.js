const express = require('express');
const router  = express.Router();
const { getItemById } = require('../db/queries/getItemById');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  getItemById(id)
  .then((item) => {
    console.log(item);
    res.render('item');
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
