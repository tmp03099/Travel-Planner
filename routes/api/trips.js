const express = require("express");
const router = express.Router();
const tripsCtrl = require("../../controllers/api/trips");

// GET /api/trip/new
router.get("/", tripsCtrl.getAllTrips);

router.post("/new", tripsCtrl.addTrip);

router.get("/:id", tripsCtrl.getTrip);

router.delete("/:id", tripsCtrl.deleteTrip);

router.put("/:id", tripsCtrl.updateTrip);

// POST /api/trip/
module.exports = router;
