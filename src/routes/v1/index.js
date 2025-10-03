const express = require("express");
const { InfoController } = require("../../controllers");
const userRouter = require('./user.route');
const router = express.Router();

// router.get("/info", info);
router.get("/info", InfoController.info);


router.use('/user', userRouter)

module.exports = router;
