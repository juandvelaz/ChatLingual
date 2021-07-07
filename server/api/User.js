const router = require('express').Router();
const { User } = require('../db/models');

router.post('/register', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
