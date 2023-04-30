import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { getTrips, deleteTrip } from "../../utilities/trip-service";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  async function loadTrips() {
    const result = await getTrips();
    console.log(result.trips);
    setTrips(result.trips);
  }

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <div>
      <div>
        <h1>Your Trips</h1>
      </div>
      <div className="grid">
        {trips.map((trip, idx) => {
          return (
            <div className="grid grid-cols-12 justify-center" key={idx}>
              <div
                className="col-start-5 col-span-2"
                onClick={() => {
                  navigate(`trip/${trip._id}`);
                }}
              >
                {trip.name}
              </div>
              <button
                className="col-start-8 col-span-"
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
