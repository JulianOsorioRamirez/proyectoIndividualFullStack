const router = require("express").Router();
const user = require("../controllers/user.controllers")

router.post("/registro",user.registrer);

module.exports = router;