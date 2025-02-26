import express from "express"
import multer from "multer";
import MyRestaurantController from "../controllers/MyResturantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";
import MyResturantController from "../controllers/MyResturantController";


const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

//GET /api/my/restuarant
router.get(
  "/",
  jwtCheck,
  jwtParse,
  MyResturantController.getMyRestaurant,
);


router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,

  MyRestaurantController.createMyRestaurant
);

router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateMyRestaurant
);

export default router;