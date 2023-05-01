import { useEffect, useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { useParams } from "react-router-dom";
import { getTrip } from "../../utilities/trip-service";
import ActivityDialog from "../../components/AddActivity/ActivityDialog";
import { Button } from "@material-tailwind/react";

function EditTrip() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState({});

  const [dateOptions, setDateOptions] = useState([]);

  const updateDateOptions = (start, end) => {
    console.log(start);
    const from = new Date(start);
    console.log(from.toLocaleDateString());
    const to = new Date(end);
    console.log(to);

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

  const onUpdateClick = () => {
    console.log(trip);
  };

  useEffect(() => {
    const loadTrip = async () => {
      const editTrip = await getTrip(tripId);

      console.log(editTrip);
      setTrip(editTrip);
    };
    loadTrip();
  }, [tripId]);

  useEffect(() => {
    updateDateOptions(trip.startDate, trip.endDate);
  }, [trip.startDate, trip.endDate]);

  return (
    <div>
      <div>
        <h1>Edit Trip</h1>
      </div>
      <AddTrip tripData={trip} setTripData={setTrip} />
      <div className="flex flex-column justify-center gap-2">
        <div>
          <ActivityDialog dateOptions={dateOptions} />
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
