const express = require('express');

const router = express.Router();

router.get('/testroute', async (req, res) => {
    return res.send('dssadassa')
});

module.exports = app => app.use('/', router);