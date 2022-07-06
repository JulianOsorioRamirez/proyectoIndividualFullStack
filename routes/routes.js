const router = require("express").Router();
const user = require("../controllers/user.controllers")

router.post("/registro",user.registrer);
router.post("/login",user.login);
router.post("/logOut",user.logOut);
router.post("/insertShopCar",user.insertShopCar);
router.post("/insertShopProducs",user.insertShopProducs);
router.get("/productsHistory",user.productsHistory);
router.post("/shopView",user.shopView);
router.post("/serchIdProduc",user.serchIdProduc);
router.post("/serchIdProducB",user.serchIdProducB);

router.get("/productsHistory",user.productsHistory);







module.exports = router;