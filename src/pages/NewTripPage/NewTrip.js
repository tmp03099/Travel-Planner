import { useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { Button } from "@material-tailwind/react";
import { createTrip } from "../../utilities/trip-service";
import { useNavigate } from "react-router-dom";

function NewTrip() {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({});

  const onAddClick = async () => {
    await createTrip(tripData);
    console.log(tripData);

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1>New Trip</h1>
      </div>
      <AddTrip tripData={tripData} setTripData={setTripData} />
      <div className="my-6">
        <Button variant="gradient" color="blue" onClick={onAddClick}>
          <span>Add</span>
        </Button>
      </div>
    </div>
  );
}

export default NewTrip;
