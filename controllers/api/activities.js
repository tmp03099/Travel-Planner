const Activity = require("../../models/activity");

async function getActivity(req, res) {
  try {
    const activity = await Activity.findById(req.params.id);

    res.json(activity);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function addActivity(req, res) {
  try {
    const activity = await Activity.create(req.body);

    console.log(activity);

    res.status(201).json(activity);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function updateActivity(req, res) {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body);

    res.json(activity);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function deleteActivity(req, res) {
  try {
    await Activity.findByIdAndDelete(req.params.id);

    res.status(204);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  getActivity,
  addActivity,
  updateActivity,
  deleteActivity,
};
