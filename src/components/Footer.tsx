import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./ComponentStyles/Footer.css"
export function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start="12">
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                  
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Platform</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Travel hacks
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    People
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Company info
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">AirLines</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon flag="af" /> Ariana Afghan Airlines
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon flag="al" /> Air Albania
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon flag="ad" /> Andorra Airlines
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon flag="ar" /> Aerolíneas Argentinas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <MDBIcon flag="ao" />
                    TAAG Angola Airlines
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Company</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Media Room
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Security
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Help and Support</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Need help?
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Sign in / Register
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Cheap flights
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Hoxton.com
        </a>
      </div>
    </MDBFooter>
  );
}
