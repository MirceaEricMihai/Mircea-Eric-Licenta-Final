import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
const createHistory = require("history").createBrowserHistory;

var isLoggedin;

function DoctorLogin() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/specialities/")
      .then((response) => {
        setSpecialities(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const loginFunction = () => {
    if (firstName == "" || password == "") {
      alert("All Fields Required");
      return;
    }

    axios
      .post("https://mircea-eric-licenta.herokuapp.com/login/doctor", {
        first_name: firstName,
        password: password,
      })
      .then((response) => {
        if (response.data == "No User Found") {
          alert("No User Found for Entered Credentials");
          isLoggedin = false;
        } else {
          console.log(response);

          isLoggedin = true;

          let first_name = response.data[0].first_name;
          let last_name = response.data[0].last_name;
          let phone = response.data[0].phone;
          let speciality = response.data[0].specialities;
          let type = "Doctor";
          let doctor_id = response.data[0].doctor_id;

          localStorage.setItem("doctor_first_name", first_name);
          localStorage.setItem("doctor_last_name", last_name);
          localStorage.setItem("doctor_phone", phone);
          localStorage.setItem("doctor_speciality_id", speciality);
          localStorage.setItem(
            "doctor_speciality_name",
            specialities.filter((item) => item.speciality_id == speciality)[0].name
          );
          localStorage.setItem("isLoggedIn", isLoggedin);
          localStorage.setItem("type", type);
          localStorage.setItem("doctor_id", doctor_id);

          let history = createHistory();

          history.push("/doctor/dashboard");
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
                    Login as a Doctor
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
                    to="/register/doctor"
                  >
                    Don't have an account? Sign up
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

export default DoctorLogin;
