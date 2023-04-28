const express = require("express");
const router = express.Router();
const tripsCtrl = require("../../controllers/api/trip");

// GET /api/trip/new
router.get("/trip/new", tripsCtrl.addTrip);

// POST /api/trip/
