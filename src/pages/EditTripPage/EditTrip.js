import { useEffect, useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { useNavigate, useParams } from "react-router-dom";
import { getTrip, updateTrip } from "../../utilities/trip-service";
import ActivityDialog from "../../components/AddActivity/ActivityDialog";
import { Button } from "@material-tailwind/react";
import { getActivity } from "../../utilities/activity-service";
import { AiFillMinusCircle } from "react-icons/ai";

function EditTrip() {
  const navigate = useNavigate();

  const { tripId } = useParams();

  const [trip, setTrip] = useState({});

  const [dateOptions, setDateOptions] = useState([]);

  const [activities, setActivities] = useState([]);

  //Set up the date dropdown
  const updateDateOptions = (start, end) => {
    const from = new Date(start);
    const to = new Date(end);

    var newOptions = [];

    //loop the range Date
    for (
      let option = from;
      option <= to;
      option.setDate(option.getDate() + 1)
    ) {
      //push to newOptions array
      newOptions.push({
        value: option.getTime(),
        label: option.toLocaleDateString(),
      });
    }

    //update date
    setDateOptions(newOptions);
  };

  //Update trip when click the button
  const onUpdateClick = async () => {
    console.log(trip);

    await updateTrip(trip);

    //navigate back to home
    navigate("/");
  };

  //Update component when trip ID changed
  useEffect(() => {
    const loadTrip = async () => {
      //get the trip infor from id
      const editTrip = await getTrip(tripId);
      console.log(editTrip);

      setTrip(editTrip);

      const activityList = [];

      //loop the activities to get activity information then push to the list
      for (let id of editTrip.activities) {
        const newActivity = await getActivity(id);

        activityList.push(newActivity);
      }

      //update activityList
      setActivities(activityList);
    };
    loadTrip();
  }, [tripId]);

  // Update component when trip date changed
  useEffect(() => {
    updateDateOptions(trip.startDate, trip.endDate);
  }, [trip.startDate, trip.endDate]);

  // Handle when activity changed.
  useEffect(() => {
    const updateActivity = () => {
      const activitiesIds = [];

      activities.forEach((a) => {
        activitiesIds.push(a._id);
      });

      setTrip((trip) => ({ ...trip, activities: activitiesIds }));
    };
    updateActivity();
  }, [activities]);

  //! Get the type of activities
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

  //convert date to string
  function getDateString(input) {
    return new Date(input).toLocaleDateString();
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="text-md md:text-4xl font-bold text-yellow-400">
        <h1>EDIT YOUR TRIP</h1>
      </div>
      <AddTrip tripData={trip} setTripData={setTrip} />
      <div className="my-6 flex flex-wrap justify-center gap-x-20">
        <div>
          {foodList().length > 0 ? (
            <div className="border border-4 border-neutral-800 rounded-lg border-double p-5">
              <h1 className="text-lg text-green-500 font-bold border-zinc-900 border-b-2 mb-2 pb-2 border-dashed ">
                Food List
              </h1>
              {foodList().map((activity) => {
                return (
                  <div key={activity._id} className="text-left mt-3 px-5">
                    <div>{activity.name}</div>
                    <div>Where: {activity.destination}</div>
                    <div>Time: {getDateString(activity.date)}</div>
                    <button className="text-center">
                      <AiFillMinusCircle />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {activityList().length > 0 ? (
            <div className="border border-4 border-neutral-800 rounded-lg border-double p-5">
              <h1 className="text-lg text-green-500 font-bold border-zinc-900 border-b-2 mb-2 pb-2 border-dashed ">
                Activity List
              </h1>
              {activityList().map((activity) => {
                return (
                  <div key={activity._id} className="text-left mt-3 px-5">
                    <div>{activity.name}</div>
                    <div>{activity.destination}</div>
                    <div>{getDateString(activity.date)}</div>
                    <button>
                      <AiFillMinusCircle />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {attractionList().length > 0 ? (
            <div className="border border-4 border-neutral-800 rounded-lg border-double p-5">
              <h1 className="text-lg text-green-500 font-bold border-zinc-900 border-b-2 mb-2 pb-2 border-dashed ">
                Attraction List
              </h1>
              {attractionList().map((activity) => {
                return (
                  <div key={activity._id} className="text-left mt-3 px-5">
                    <div>{activity.name}</div>
                    <div>{activity.destination}</div>
                    <div>{getDateString(activity.date)}</div>
                    <button>
                      <AiFillMinusCircle />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
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
