import { IoIosAddCircle } from "react-icons/io";

function Home() {
  return (
    <div>
      <div>
        <h1>Your Trip</h1>
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
