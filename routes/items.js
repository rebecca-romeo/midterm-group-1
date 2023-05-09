const express = require('express');
const router  = express.Router();
const { getAllItems } = require('../db/queries/getAllItems');

router.get('/', (req, res) => {
  getAllItems()
  .then((items) => {
    res.json({items});
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
