import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const createHistory = require("history").createBrowserHistory;

// RFC 5322 Format
var regex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

function PatientRegistration() {
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientDob, setPatientDob] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientCNP, setPatientCNP] = useState("");
  const [patientPassword, setPatientPassword] = useState("");
  const [patientConfirmPassword, setPatientConfirmPassword] = useState("");

  const registerPatient = () => {
    if (
      patientFirstName === "" ||
      patientLastName === "" ||
      patientPhone === "" ||
      patientPassword === "" ||
      patientDob === "" ||
      patientEmail === "" ||
      patientCNP === ""
    ) {
      alert("All Fields Required");
      return;
    }
    if (patientCNP.length !== 13) {
      alert("CNP should be 13 characters long");
      return;
    }
    if (patientPhone.length !== 10) {
      alert("Phone number should be 10 characters long");
      return;
    }
    if (!regex.test(patientEmail)) {
      alert("Email is invalid");
      return;
    }
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/registerPatient", {
        first_name: patientFirstName,
        last_name: patientLastName,
        phone: patientPhone,
        password: patientPassword,
        dob: patientDob,
        email: patientEmail,
        cnp: patientCNP,
      })
      .then((response) => {
        if (response.data === "OK") {
          alert("Patient Registered Successfully");
          let history = createHistory();

          history.push("/login/patient");
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
      <Navbar />
      <div className="container justify-content-center mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mt-5">
            <div className="card-header border-bottom-0 bg-transparent">
              <div className="mt-4 text-center">
                <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                  Register as a Patient
                </h2>
                <hr />
              </div>

              <div className="form-group">
                <label>First Name</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setPatientFirstName(e.target.value);
                    }}
                    placeholder="Enter Your First Name"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-sort"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last Name"
                    onChange={(e) => {
                      setPatientLastName(e.target.value);
                    }}
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-calendar"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Phone</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Your Mobile Number"
                    onChange={(e) => {
                      setPatientPhone(e.target.value);
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
                <label>Date of Birth</label>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => {
                      setPatientDob(e.target.value);
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
                <label>Email Address</label>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                    onChange={(e) => {
                      setPatientEmail(e.target.value);
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
                <label>Security Number (CNP)</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Your CNP Number"
                    onChange={(e) => {
                      setPatientCNP(e.target.value);
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
                    placeholder="Enter a Password"
                    onChange={(e) => {
                      setPatientPassword(e.target.value);
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
                <label>Confirm Password</label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Your Password"
                    onChange={(e) => {
                      setPatientConfirmPassword(e.target.value);
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
                  onClick={registerPatient}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRegistration;
