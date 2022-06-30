const router = require("express").Router();
const user = require("../controllers/user.controllers")

router.post("/registro",user.registrer);
router.post("/login",user.login);
router.post("/logOut",user.logOut);
router.post("/insertShopCar",user.insertShopCar);
router.post("/insertShopProducs",user.insertShopProducs);
router.post("/shopView",user.shopView);
router.get("/productsHistory",user.productsHistory);







module.exports = router;