import "../components/ComponentStyles/Login.css";
import "../../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function Signup({ signIn }: any) {
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
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form
                  onSubmit={(e) => {
                    console.log(
                      e.target.email.value,
                      e.target.password.value,
                      e.target.name.value,
                      e.target.age.value
                    );
                    e.preventDefault();
                    fetch("http://localhost:3011/sign-up", {
                      body: JSON.stringify({
                        email: e.target.email.value,
                        password: e.target.password.value,
                        name: e.target.name.value,
                        age: Number(e.target.age.value)
                      }),
                    })
                      .then((resp) => resp.json())
                      .then((data) => {
                        if (data.error) {
                          alert(data.error);
                        } else {
                          signIn(data);
                          navigate("/home")
                        }
                      });
                  }}
                >
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          name="name"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="form3Example2"
                          className="form-control"
                          name="age"
                          min={18}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Age
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
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
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <button className="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  <div className="text-center">
                    <p>
                      Have an account. <Link to={"/login"}>Sign In</Link>
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
