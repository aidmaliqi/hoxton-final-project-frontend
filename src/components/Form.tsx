import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./ComponentStyles/Form.css";
export function Form() {
  return (
    <form action="" className="flight-form">
      <div className="countryyy">
        <p>Departure from</p>
        <select name="" id="country-select" className="country-select">
          <option value="Afghanistan">Afghanistan</option>

          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>

          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>

          <option value="Antarctica">Antarctica</option>

          <option value="Argentina">Argentina</option>
        </select>

        <p>Destination</p>
        <select name="" id="country-select" className="country-select">
          <option value="Afghanistan">Afghanistan</option>

          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>

          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>

          <option value="Antarctica">Antarctica</option>

          <option value="Argentina">Argentina</option>
        </select>
      </div>

      <hr />

      <MDBRow>
        <MDBCol>
          <MDBInput id="form10Example3" label="Deaprture time" type="date" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="form10Example4" label="Arrival time" type="date" />
        </MDBCol>
        <MDBCol>
          <MDBInput label="People" id="typeNumber" type="number" />
        </MDBCol>
        <MDBCol>
          <button type="button" className="btn btn-danger">
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
  );
}
