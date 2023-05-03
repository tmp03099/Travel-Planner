import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { getTrips, deleteTrip } from "../../utilities/trip-service";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const loadTrips = async () => {
    console.log("load trips");
    const result = await getTrips();
    console.log(result.trips);
    setTrips(result.trips);
  };

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-md md:text-4xl font-bold text-lime-800">
        Your Trips
      </h1>

      <div className="grid my-5 justify-items-center">
        {trips.map((trip, idx) => {
          return (
            <div
              className="grid grid-cols-12 justify-center items-center border border-2 rounded-lg px-2 py-5 w-2/5"
              key={idx}
            >
              <div
                className="col-start-5 col-span-2 text-xl"
                onClick={() => {
                  navigate(`trip/${trip._id}`);
                }}
              >
                {trip.name}
              </div>
              <button
                className="col-start-10 col-span-"
                onClick={async () => {
                  await deleteTrip(trip._id);
                  await loadTrips();
                }}
              >
                <AiFillMinusCircle />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button>
          <a href="trip/new">
            <IoIosAddCircle />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
