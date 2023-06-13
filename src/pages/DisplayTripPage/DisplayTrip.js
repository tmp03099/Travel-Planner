import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrip } from "../../utilities/trip-service";
import { getActivity } from "../../utilities/activity-service";
export default function DisplayTrip() {
  const [detail, setDetail] = useState([]);
  const [activity, setActivities] = useState([]);
  const { tripId } = useParams();

  //Update component when trip ID changed
  useEffect(() => {
    const loadTrip = async () => {
      //get the trip infor from id
      const editTrip = await getTrip(tripId);
      console.log(editTrip);

      setDetail(editTrip);

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

  //convert date to string
  function getDateString(input) {
    return new Date(input).toLocaleDateString();
  }

  return (
    <div>
      <h1 className="text-2xl lg:text-4xl m-8 font-bold text-yellow-400">
        YOUR TRIP DETAIL
      </h1>
      <h2>{detail.name}</h2>
      <p>DESTINATION: {detail.destination}</p>
      <p>START: {getDateString(detail.startDate)}</p>
      <p>END: {getDateString(detail.endDate)}</p>
      {activity.map((activiti) => {
        return (
          <div>
            <h1>{activiti.name}</h1>
            <h1>Place: {activiti.destination}</h1>
            <h1>Date: {getDateString(activiti.date)}</h1>
          </div>
        );
      })}
    </div>
  );
}
