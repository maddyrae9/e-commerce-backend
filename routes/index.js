const router = require('express').Router();
const { Router } = require('express');
const apiRoutes = require('./api');
Router.use('/api',apiRoutes);
router.use((req, res) => {
    res.send("Wrong Route!")
});
module.exports = router;