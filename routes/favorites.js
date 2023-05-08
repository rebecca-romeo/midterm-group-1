const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const templateVars = { user: req.session.user }
  res.render('favorites', templateVars)
})


module.exports = router;
