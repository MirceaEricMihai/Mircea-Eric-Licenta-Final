import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
const createHistory = require("history").createBrowserHistory;

function PatientLogin() {
  var isLoggedin;

  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = () => {
    if (firstName === "" || password === "") {
      alert("All Fields Required");
      return;
    }
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/login/patient", {
        first_name: firstName,
        password: password,
      })
      .then((response) => {
        if (response.data === "No User Found") {
          alert("No User Found for Entered Credentials");
          isLoggedin = false;
        } else {
          console.log(response);

          isLoggedin = true;

          let first_name = response.data[0].first_name;
          let last_name = response.data[0].last_name;
          let phone = response.data[0].phone;
          let email = response.data[0].email;
          let type = "Patient";
          let patient_id = response.data[0].patient_id;
          let dob = response.data[0].dob;
          let cnp = response.data[0].cnp;

          localStorage.setItem("patient_first_name", first_name);
          localStorage.setItem("patient_last_name", last_name);
          localStorage.setItem("patient_phone", phone);
          localStorage.setItem("patient_email", email);
          localStorage.setItem("isLoggedIn", isLoggedin);
          localStorage.setItem("type", type);
          localStorage.setItem("patient_id", patient_id);
          localStorage.setItem("dob", dob);
          localStorage.setItem("cnp", cnp);

          let history = createHistory();

          history.push("/patient/dashboard");
          let pathUrl = window.location.href;
          window.location.href = pathUrl;
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                    Login as a Patient
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
                  <Link
                    className="text-center"
                    style={{ textDecoration: "none" }}
                    to="/register/patient"
                  >
                    Don't have an acount? Register here.
                  </Link>
                  <br />
                  <Link
                    className="text-center"
                    style={{ textDecoration: "none" }}
                    to="/patient/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                  <br />
                  <Link
                    className="text-center"
                    style={{ textDecoration: "none" }}
                    to="/login/doctor"
                  >
                    Are you a doctor? Login here.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
