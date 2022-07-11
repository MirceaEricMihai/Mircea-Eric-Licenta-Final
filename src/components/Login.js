import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = () => {
    if (!firstName || !password) {
      alert("All fields required");
    } else {
      axios
        .post("https://mircea-eric-licenta.herokuapp.com/login", {
          first_name: firstName,
          password: password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className="container justify-content-center mt-5">
          <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
              <div className="card-header border-bottom-0 bg-transparent">
                <div className="mt-5 text-center">
                  <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                    Login
                  </h2>
                  <hr />
                </div>

                <div className="form-group">
                  <label>First Name</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-clock"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-clock"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary text-light btn-block mb-3 rounded-pill mt-4"
                    type="submit"
                    onClick={loginFunction}
                  >
                    Login Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
