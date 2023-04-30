import { useEffect, useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { useParams } from "react-router-dom";
import { getTrip } from "../../utilities/trip-service";
import ActivityDialog from "../../components/AddActivity/ActivityDialog";

function EditTrip() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState({});

  useEffect(() => {
    const loadTrip = async () => {
      const editTrip = await getTrip(tripId);

      console.log(editTrip);
      setTrip(editTrip);
    };
    loadTrip();
  }, [tripId]);

  return (
    <div>
      <div>
        <h1>Edit Trip</h1>
      </div>
      <AddTrip tripData={trip} setTripData={setTrip} />
      <ActivityDialog />
    </div>
  );
}

export default EditTrip;
