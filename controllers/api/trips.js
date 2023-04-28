const Trip = require("../../models/tripSchema");

// Add a new Trip
async function addTrip(req, res) {
  try {
    const trip = await Trip.create(req.body);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
