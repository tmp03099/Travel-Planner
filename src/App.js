import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/HomePage/Home";
import NewTrip from "./pages/NewTripPage/NewTrip";
import EditTrip from "./pages/EditTripPage/EditTrip";
import AuthPage from "./pages/AuthPage";

import { getUser } from "./utilities/users-service";

import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trip/new" element={<NewTrip />} />
            <Route path="/trip/:tripId" element={<EditTrip />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      <div className="footer">
        <span>© My Phung Tieu</span>
      </div>
    </main>
  );
}

export default App;
