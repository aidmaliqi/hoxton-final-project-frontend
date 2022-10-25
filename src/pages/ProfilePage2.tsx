import Button from "@mui/material/Button/Button";
import "../components/ComponentStyles/Profilepage.css";

import "../../node_modules/material-symbols";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "../App";

type Props = {
  currentUser: User | null;
  signOut: Function;
};
export function ProfilePage2({ currentUser, signOut }: Props) {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="main-body">
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/home"}>Home</Link>
              </li>
              <li
                className="breadcrumb-item"
                onClick={() => {
                  signOut();
                }}
              >
                <Link to={"/login"}>Sign-out</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>

          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://slcim.lk/wp-content/uploads/2018/06/noimage.jpg"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{currentUser?.name}</h4>

                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {currentUser?.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {currentUser?.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Money</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {currentUser?.balance}$
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <a
                        className="btn btn-info "
                        target="__blank"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Booked Flights
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Tickets
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Booked Hotels
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="cards-section">
        <div className="card-holders">
          {" "}
          {currentUser?.books.map((item) => (
            <div className="cards-ticket" key={item.id}>
              <div className="ticket-data">
                <h5>Booked Flight</h5>
                <h5>Flight id: {item.flight?.id}</h5>
                <span className="material-symbols-outlined">flight</span>
              </div>
              <div className="flight-data">
                <section>
                  <h6>airline: {item.flight?.airline}</h6>
                  <h6>aircraft-Id: {item.flight?.aircraft_id}</h6>
                  <h6>class: {item.flight?.class}</h6>
                  <h6>price: {item.flight?.price}</h6>
                </section>
                <section>
                  <h6>DEP : {item.flight?.departure}</h6>
                  <h6>DES : {item.flight?.destination}</h6>
                  <h6>DEP-Time : {item.flight?.departure_time}</h6>
                  <h6>DES-Time : {item.flight?.arrival_time}</h6>
                </section>
              </div>
              <div className="buttons">
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                >
                  <Button id="red">UnBook</Button>
                  <Button id="green">Buy</Button>
                </ButtonGroup>
              </div>
            </div>
          ))}
        </div>

        <div className="card-holders">
          {" "}
          {currentUser?.ticket.map((item) => (
            <div className="cards-ticket" key={item.id}>
              <div className="ticket-data">
                <h5>Ticket</h5>
                <h5>Ticket id: {item.id}</h5>
                <span id="air-ticket" className="material-symbols-outlined">
                  airplane_ticket
                </span>
              </div>
              <div className="flight-data">
                <section>
                  <h6>airline: {item.flight?.airline}</h6>
                  <h6>aircraft-Id: {item.flight?.aircraft_id}</h6>
                  <h6>class: {item.flight?.class}</h6>
                  <h6>price: {item.flight?.price}</h6>
                </section>
                <section>
                  <h6>DEP : {item.flight?.departure}</h6>
                  <h6>DES : {item.flight?.destination}</h6>
                  <h6>DEP-Time : {item.flight?.departure_time}</h6>
                  <h6>DES-Time : {item.flight?.arrival_time}</h6>
                </section>
              </div>
              {item.passanger.map((item2) => (
                <div className="flight-data">
                  <section>
                    <h6>Name: {item2.name}</h6>
                    <h6>Lastname: {item2.lastname}</h6>
                    <h6>age: {item2.age}</h6>
                    <h6>Geneder: {item2.gender}</h6>
                  </section>
                  <section>
                    <h6>Nationality: {item2.nationality}</h6>
                  </section>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="card-holders">
          <div className="cards">
            <img
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="card-image"
            />
            <div className="card-details">
              <h6>Hotel name</h6>
              <p>hotel desc</p>
              <Button variant="contained">Remove</Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <form
          className="ticket-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(
              Number(e.target.age.value),
              e.target.name.value,
              e.target.lastname.value,
              e.target.gender.value,
              e.target.nationality.value
            );
            fetch(`http://localhost:3011/tickets/${params.id}`, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
                Authorization: localStorage.token,
              },
              body: JSON.stringify({
                age: Number(e.target.age.value),
                name: e.target.name.value,
                lastname: e.target.lastname.value,
                gender: e.target.gender.value,
                nationality: e.target.nationality.value,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.error) {
                  alert(data.error);
                } else {
                  
                  navigate("/profile");
                }
                console.log(data);
              });
          }}
        >
          <h5>Provide information for a passanger to make a ticket</h5>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  name="name"
                  type="text"
                  id="form3Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  name="lastname"
                  type="text"
                  id="form3Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form3Example3"
              className="form-control"
              name="gender"
            />
            <label className="form-label" htmlFor="form3Example3">
              Gender
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              name="nationality"
              id="form3Example4"
              className="form-control"
            />
            <label className="form-label" htmlFor="form3Example4">
              Nationality
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="number"
              name="age"
              id="form3Example4"
              className="form-control"
            />
            <label className="form-label" htmlFor="form3Example4">
              Age
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Buy
          </button>
        </form>
      </section>
    </>
  );
}
