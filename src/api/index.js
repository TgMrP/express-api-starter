const express = require('express');

const emo = require('./emo');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API WELCOME - 👋🌎🌍🌏'
  });
});

router.use('/emo', emo);

module.exports = router;
