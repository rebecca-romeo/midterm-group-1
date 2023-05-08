const express = require('express');
const router  = express.Router();
const { getUserByEmail } = require('../db/queries/login');



router.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/home');
    return
  }
  res.render('login')
})


router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  getUserByEmail(email)
    .then(user => {
      if (!user) {
        res.status(401).send('Invalid email or password');
        return;
      }
      if (user.password !== password) {
        res.status(401).send('Invalid email or password');
        return;
      }
      req.session.user = email;
      res.redirect('/home');

    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while logging in');
    });
});

module.exports = router;
