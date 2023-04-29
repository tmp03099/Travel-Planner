import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { getTrips } from "../../utilities/trip-service";

function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadTrips() {
      const result = await getTrips();
      console.log(result.trips);
      setTrips(result.trips);
    }
    loadTrips();
  }, []);

  return (
    <div>
      <div>
        <h1>Your Trip</h1>
      </div>
      {trips.map((trip, idx) => {
        return <p key={idx}>{trip}</p>;
      })}
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
