const router = require("express").Router();
const reachUsRoutes = require('./contactUs');
const defaultRoutes = require('./default');
const detectNameRoutes = require('./detectName');
const generalRoutes = require('./general');
const logsRoutes = require('./logs');

router.use('/reachUs', reachUsRoutes);
router.use('/default', defaultRoutes);
router.use('/detectName', detectNameRoutes);
router.use('/general', generalRoutes);
router.use('/logs', logsRoutes);

module.exports = router;
