import { useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { Button } from "@material-tailwind/react";

function NewTrip() {
  const [tripData, setTripData] = useState({});

  const onAddClick = () => {
    console.log(tripData);
  };

  return (
    <div>
      <div>
        <h1>New Trip</h1>
      </div>
      <AddTrip tripData={tripData} setTripData={setTripData} />
      <div>
        <Button variant="gradient" color="blue" onClick={onAddClick}>
          <span>Add</span>
        </Button>
      </div>
    </div>
  );
}

export default NewTrip;
