import { useEffect, useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { useParams } from "react-router-dom";
import { getTrip } from "../../utilities/trip-service";

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
      <AddTrip tripData={trip} setTripData={setTrip} />
    </div>
  );
}

export default EditTrip;
