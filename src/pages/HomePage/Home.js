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
    <div className="mt-8">
      <h1 className="text-md md:text-4xl font-bold text-yellow-400 ">
        YOUR TRIPS
      </h1>

      <div className="grid my-8 justify-items-center">
        {trips.map((trip, idx) => {
          return (
            <div
              className="grid grid-cols-12 justify-center items-center border border-2 rounded-2xl px-2 py-5 w-2/5 my-3"
              key={idx}
            >
              <div
                className="col-start-3 col-span-5 text-xl"
                onClick={() => {
                  navigate(`trip/${trip._id}`);
                }}
              >
                {trip.name}
              </div>
              <button
                className="col-start-11 col-span-"
                onClick={async () => {
                  await deleteTrip(trip._id);
                  await loadTrips();
                }}
              >
                <AiFillMinusCircle className="text-xl" />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button>
          <a href="trip/new">
            <IoIosAddCircle className="text-5xl text-yellow-400" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
