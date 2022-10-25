import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../components/ComponentStyles/Flight.css";
import Button from "@mui/material/Button/Button";
import { Flight, User } from "../App";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  searchedFlights: Flight[];
  currentUser: User;
};
export function Flights2({ searchedFlights, currentUser }: Props) {
  const params = useParams();
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
                <Button variant="contained">Book</Button>
              </section>
            </div>
          ))}
        </footer>
      </section>

      <div className="yes-no">
        <h5>Please choose for how many people you want to book?</h5>
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.target.people.value);
              fetch(`http://localhost:3011/flights/${params.id}`, {
                method: "PATCH",
                headers: {
                  "Content-type": "application/json",
                  Authorization: localStorage.token,
                },
                body: JSON.stringify({
                  people: Number(e.target.people.value),
                }),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  if (data.error) {
                    alert(data.error);
                  } else {
                    navigate("/flights");
                  }
                  console.log(data);
                });
            }}
          >
            <input type="number" placeholder="People" name="people" />
            <Button variant="contained" type="submit">
              Book
            </Button>
          </form>

          <Button
            variant="contained"
            onClick={() => {
              navigate("/flights");
            }}
          >
            Back
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
