import { getUser } from "./handlers/user";
import {
  addMarkerToUser,
  getAllMarkers,
  getOneMarker,
} from "./handlers/marker";
import { handleInputErrors } from "./modules/middleware";
import { Router } from "express";

const router = Router();

//user
router.get("/user", getUser);

// markers
router.get("/marker", getAllMarkers);
router.get("/marker/:id", getOneMarker);
router.post("/marker/foundIt/:id", handleInputErrors, addMarkerToUser);

export default router;
