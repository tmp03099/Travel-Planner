const Trip = require("../../models/tripSchema");

async function getTrip(req, res) {
  console.log("get trip");
  try {
    const trip = await Trip.get();
    res.json({ trips: ["test trip from server"] });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

// Add a new Trip
async function addTrip(req, res) {
  console.log("add trip");
  try {
    const trip = await Trip.create(req.body);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  getTrip,
  addTrip,
};
