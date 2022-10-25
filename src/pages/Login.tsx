import "../components/ComponentStyles/Login.css";
import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import { Link, useNavigate } from "react-router-dom";

export function Login({ signIn }: any) {
  const navigate = useNavigate();
  return (
    <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{ background: "hsla(0, 0%, 100%, 0.55)" }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <div className="row colcol">
                  <div className="col-md-6 mb-4 ">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flyone-logo-1.1.svg/512px-Flyone-logo-1.1.svg.png
          "
                      id="logo-img"
                      height="15"
                      alt="MDB Logo"
                      loading="lazy"
                      className="logoo"
                    />
                  </div>
                </div>
                <h2 className="fw-bold mb-5">Log in</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    fetch("http://localhost:3011/sign-in", {
                      method: "POST",
                      headers: { "Content-type": "application/json" },
                      body: JSON.stringify({
                        email: e.target.email.value,
                        password: e.target.password.value,
                      }),
                    })
                      .then((resp) => resp.json())
                      .then((data) => {
                        if (data.error) {
                          alert(data.error);
                        } else {
                          signIn(data);

                          navigate("/home");
                        }
                      });
                  }}
                >
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Log In
                  </button>

                  <div className="text-center">
                    <p>
                      Dont have an account.{" "}
                      <Link to={"/sign-up"}> Create new one</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
