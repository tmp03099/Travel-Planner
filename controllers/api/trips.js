const Trip = require("../../models/tripSchema");

// Add a new Trip
async function addTrip() {
  try {
    const trip = await Trip.create({});
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
