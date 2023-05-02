const express = require("express");
const router = express.Router();
const activitiesCtrl = require("../../controllers/api/activities");

// GET /api/trip/new

router.post("/new", activitiesCtrl.addActivity);

router.get("/:id", activitiesCtrl.getActivity);

router.delete("/:id", activitiesCtrl.deleteActivity);

router.put("/:id", activitiesCtrl.updateActivity);

// POST /api/trip/
module.exports = router;
