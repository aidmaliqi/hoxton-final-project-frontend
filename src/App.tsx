import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ProfilePage } from "./pages/ProfilePage";
import { Flights } from "./pages/Flights";
import { Flight } from "@mui/icons-material";
import { Flights2 } from "./pages/Flights2";
import { ProfilePage2 } from "./pages/ProfilePage2";

export type User = {
  id: number;
  name: string;
  email: string;
  number: string;
  password: string;
  balance: string;
  books: Book[];
  ticket: Ticket[];
  userId: number;
};

export type Flight = {
  id: number;
  departure: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  price: number;
  seats: number;
  airline: string;
  aircraft_id: number;
  class: string;
  books: Book[];
  ticket: Ticket[];
};

export type Passanger = {
  id: number;
  name: string;
  lastname: string;
  age: number;
  gender: string;
  nationality?: string;

  ticket: Ticket;
  ticketId: number;
};

export type Book = {
  id: number;
  people: number;

  flight: Flight;
  flightId: number;
  ticket?: Ticket;
  ticketId?: number;
  user: User;
  userId: number;
};

export type Ticket = {
  id: number;
  book?: Book;
  passanger: Passanger[];

  user?: User;
  userId?: number;

  flight?: Flight;
  flightId?: number;
};

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [searchedFlights, setsearchedFlights] = useState<Flight[]>([]);
  function signIn(data) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }
  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:3011/validate", {
        headers: { Authorization: localStorage.token },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            console.log(data);
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<Home signOut={signOut} setsearchedFlights={setsearchedFlights} />} path="/home"></Route>
        <Route element={<Login signIn={signIn} />} path="/login"></Route>
        <Route element={<Signup signIn={signIn} />} path="/sign-up"></Route>
        <Route
          element={<ProfilePage currentUser={currentUser} signOut={signOut} />}
          path="/profile"
        ></Route>
        <Route
          element={<ProfilePage2 currentUser={currentUser} signOut={signOut} />}
          path="/profile/:id"
        ></Route>
        <Route
          element={<Flights searchedFlights={searchedFlights} currentUser={currentUser} signOut={signOut} />}
          path="/flights"
        ></Route>
        <Route
          element={<Flights2 searchedFlights={searchedFlights} currentUser={currentUser} signOut={signOut} />}
          path="/flights/:id"
        ></Route>
      </Routes>
    </>
  );
}

export default App;
