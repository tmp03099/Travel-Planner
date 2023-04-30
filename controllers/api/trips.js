const Trip = require("../../models/tripSchema");
const jwt = require("jsonwebtoken");

async function getAllTrips(req, res) {
  console.log("get all trip");
  try {
    console.log(req.user);
    const trips = await Trip.find({ user: req.user });
    console.log(trips);

    res.json({ trips: trips });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function getTrip(req, res) {
  console.log("get trip");

  try {
    const trip = await Trip.findById(req.params.id);
    console.log(trip);

    res.json(trip);
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

    await Trip.create(newTrip);

    res.sendStatus(201);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function deleteTrip(req, res) {
  console.log("delete trip");
  console.log(req.params.id);

  try {
    await Trip.findByIdAndDelete(req.params.id);

    res.sendStatus(204);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  getAllTrips,
  getTrip,
  addTrip,
  deleteTrip,
};
