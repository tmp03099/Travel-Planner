import { useState } from "react";
import AddTrip from "../../components/AddTrip/AddTrip";
import { Button } from "@material-tailwind/react";

function NewTrip() {
  const [tripData, setTripData] = useState({});

  const onAddClick = () => {
    console.log(tripData);
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
