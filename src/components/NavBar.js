import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav className="bg-img py-3">
      <Link
        to="/"
        className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 px-5 text-sm font-medium m-4"
      >
        Home
      </Link>
      <Link
        to="/trip/new"
        className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 px-5 text-sm font-medium m-4"
      >
        New Trip
      </Link>
      &nbsp; &nbsp;
      <span className="text-pink-600 font-bold">Welcome, {user.name}</span>{" "}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} className="text-pink-600 font-bold">
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
