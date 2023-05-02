const Trip = require("../../models/tripSchema");

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

    res.status(200).json(trip);
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

    // res.sendStatus(201).json(trip);
    res.status(200).json(trip);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function deleteTrip(req, res) {
  console.log("delete trip");
  console.log(req.params.id);

  try {
    await Trip.findByIdAndDelete(req.params.id);

    // res.sendStatus(204);
    res.status(200);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function updateTrip(req, res) {
  console.log("update trip");

  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body);
    console.log(trip);

    // await Trip.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json(trip);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  getAllTrips,
  getTrip,
  addTrip,
  deleteTrip,
  updateTrip,
};
