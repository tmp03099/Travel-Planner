const Trip = require("../../models/tripSchema");
const jwt = require("jsonwebtoken");

async function getTrip(req, res) {
  console.log("get trip");
  try {
    console.log(req.user);
    const trips = await Trip.find({ user: req.user });
    console.log(trips);

    res.json({ trips: trips });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

// Add a new Trip
async function addTrip(req, res) {
  console.log("add trip");
  console.log(req.body);
  try {
    const newTrip = req.body;
    newTrip.user = req.user;
    console.log(newTrip);

    const trip = await Trip.create(newTrip);

    res.status(201);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  getTrip,
  addTrip,
};
