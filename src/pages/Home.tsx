import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Slideshow } from "../components/Slideshow";
import { Flights } from "./Flights";
import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../components/ComponentStyles/Form.css";
import { useState } from "react";
import { Flight } from "../App";

export function Home({ signOut, setsearchedFlights }: any) {
  const navigate = useNavigate();
  return (
    <>
      <Header signOut={signOut}></Header>
      <Slideshow></Slideshow>

      <form
        action=""
        className="flight-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            e.target.departure.value,
            e.target.destination.value,
            e.target.departure_time.value,
            e.target.class.value,
            e.target.people.value
          );
          fetch("http://localhost:3011/all-flights", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              departure: e.target.departure.value,
              destination: e.target.destination.value,
              departure_time: e.target.departure_time.value,
              class: e.target.class.value,
              seats: Number(e.target.people.value),
            }),
          })
            .then((resp) => resp.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
              } else {
                setsearchedFlights(data);
                navigate("/flights");
              }
              console.log(data);
            });
        }}
      >
        <div className="countryyy">
          <p>Departure</p>
          <select name="departure" className="country-select">
            <option value="Afghanistan">Afghanistan</option>

            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>

            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>

            <option value="Antartica">Antartica</option>

            <option value="Argentina">Argentina</option>
          </select>
          <p>Destination</p>
          <select name="destination" className="country-select">
            <option value="Afghanistan">Afghanistan</option>

            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>

            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>

            <option value="Antartica">Antartica</option>

            <option value="Argentina">Argentina</option>
          </select>
        </div>

        <hr />

        <MDBRow>
          <MDBCol>
            <MDBInput
              id="form10Example3"
              label="Deaprture time"
              type="date"
              name="departure_time"
            />
          </MDBCol>

          <MDBCol>
            <MDBInput
              label="People"
              id="typeNumber"
              type="number"
              name="people"
            />
          </MDBCol>
          <MDBCol>
            <select name="class" id="country-select" className="country-select">
              <option value="Economy">Economy</option>

              <option value="Buisness">Buisness</option>
            </select>
          </MDBCol>
          <MDBCol>
            <button className="btn btn-danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </MDBCol>
        </MDBRow>
      </form>

      <Carousel></Carousel>
      <Footer></Footer>
    </>
  );
}
