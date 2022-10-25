import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../components/ComponentStyles/Flight.css";
import Button from "@mui/material/Button/Button";
import { Flight, User } from "../App";
import { useNavigate } from "react-router-dom";

type Props = {
  searchedFlights: Flight[];
  currentUser: User;
};
export function Flights({ searchedFlights, currentUser }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <section className="main-section">
        <div className="title-div">Flights:</div>
        <footer className="flights-footer">
          {searchedFlights.map((item) => (
            <div key={item.id}>
              <section className="first-section">
                <h3>Airline : {item.airline}</h3>
                <nav>
                  <h4>From: {item.departure}</h4>
                  <h4>To: {item.destination}</h4>
                </nav>
                <nav>
                  <h5>{item.departure_time}</h5>
                  <h5>{item.arrival_time}</h5>
                </nav>
              </section>
              <section className="second-section">
                <h3>Price: {item.price}</h3>
                <p>Price for one passanger</p>
                <Button variant="contained" onClick={() => {
                  navigate(`/flights/${item.id}`)
                }}>
                  Book
                </Button>
              </section>
            </div>
          ))}
        </footer>
      </section>

      
      <Footer></Footer>
    </>
  );
}
