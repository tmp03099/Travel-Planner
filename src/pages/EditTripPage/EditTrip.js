import { useEffect, useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { useParams } from "react-router-dom";
import { getTrip, updateTrip } from "../../utilities/trip-service";
import ActivityDialog from "../../components/AddActivity/ActivityDialog";
import { Button } from "@material-tailwind/react";
import { getActivity } from "../../utilities/activity-service";

function EditTrip() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState({});

  const [dateOptions, setDateOptions] = useState([]);

  const [activities, setActivities] = useState([]);

  const updateDateOptions = (start, end) => {
    const from = new Date(start);
    const to = new Date(end);

    var newOptions = [];

    for (
      let option = from;
      option <= to;
      option.setDate(option.getDate() + 1)
    ) {
      newOptions.push({
        value: option.getTime(),
        label: option.toLocaleDateString(),
      });
    }

    setDateOptions(newOptions);
  };

  const onUpdateClick = async () => {
    console.log(trip);

    await updateTrip(trip);
  };

  useEffect(() => {
    const loadTrip = async () => {
      const editTrip = await getTrip(tripId);

      console.log(editTrip);
      setTrip(editTrip);

      const activityList = [];

      for (let id of editTrip.activities) {
        const newActivity = await getActivity(id);

        activityList.push(newActivity);
      }

      setActivities(activityList);
    };
    loadTrip();
  }, [tripId]);

  useEffect(() => {
    updateDateOptions(trip.startDate, trip.endDate);
  }, [trip.startDate, trip.endDate]);

  useEffect(() => {
    const activitiesIds = [];

    activities.forEach((a) => {
      activitiesIds.push(a._id);
    });

    setTrip({ ...trip, activities: activitiesIds });
  }, [activities]);

  /**
   * Get food list from activities list
   *
   * @returns activities list that have type = food
   */
  const foodList = () => activities.filter((a) => a.type === "food");

  /**
   * Get activity list from activities list
   *
   * @returns activities list that have type = activity
   */
  const activityList = () => activities.filter((a) => a.type === "activity");

  /**
   * Get attraction list from activities list
   *
   * @returns activities list that have type = attraction
   */
  const attractionList = () =>
    activities.filter((a) => a.type === "attraction");

  function getDateString(input) {
    return new Date(input).toLocaleDateString();
  }

  return (
    <div>
      <div>
        <h1>Edit Trip</h1>
      </div>
      <AddTrip tripData={trip} setTripData={setTrip} />
      <div>
        {foodList().length > 0 ? <h1>Food List</h1> : ""}
        {foodList().map((activity) => {
          return (
            <div
              key={activity._id}
              className="flex flex-column gap-2 justify-center"
            >
              <div>{activity.name}</div>
              <div>{activity.destination}</div>
              <div>{getDateString(activity.date)}</div>
            </div>
          );
        })}
      </div>
      <div>
        {activityList().length > 0 ? <h1>Activity List</h1> : ""}
        {activityList().map((activity) => {
          return (
            <div
              key={activity._id}
              className="flex flex-column gap-2 justify-center"
            >
              <div>{activity.name}</div>
              <div>{activity.destination}</div>
              <div>{getDateString(activity.date)}</div>
            </div>
          );
        })}
      </div>
      <div>
        {attractionList().length > 0 ? <h1>Attraction List</h1> : ""}
        {attractionList().map((activity) => {
          return (
            <div
              key={activity._id}
              className="flex flex-column gap-2 justify-center"
            >
              <div>{activity.name}</div>
              <div>{activity.destination}</div>
              <div>{getDateString(activity.date)}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-column justify-center gap-2">
        <div>
          <ActivityDialog
            dateOptions={dateOptions}
            activities={activities}
            setActivities={setActivities}
          />
        </div>
        <div>
          <Button variant="gradient" color="blue" onClick={onUpdateClick}>
            <span>Update</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditTrip;
