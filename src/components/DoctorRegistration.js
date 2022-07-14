import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const createHistory = require("history").createBrowserHistory;

function DoctorRegistration() {
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorSpecialities, setDoctorSpecialities] = useState("");
  const [doctorPassword, setDoctorPassword] = useState("");
  const [doctorConfirmPassword, setDoctorConfirmPassword] = useState("");
  const [specialities, setSpecialities] = useState([]);

  const registerDoctor = () => {
    if (
      doctorFirstName === "" ||
      doctorLastName === "" ||
      doctorPassword === "" ||
      doctorPhone === "" ||
      doctorSpecialities === ""
    ) {
      alert("All Fields Required");
    }

    if (doctorPhone.length !== 10) {
      alert("Phone number should be 10 characters long");
      return;
    }

    axios
      .post("https://mircea-eric-licenta.herokuapp.com/registerDoctor", {
        first_name: doctorFirstName,
        last_name: doctorLastName,
        password: doctorPassword,
        phone: doctorPhone,
        specialities: doctorSpecialities,
      })
      .then((response) => {
        // console.log(response);
        if (response.data === "OK") {
          alert("Doctor Registered Successfully");
          let history = createHistory();

          history.push("/login/doctor");
          let pathUrl = window.location.href;
          window.location.href = pathUrl;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/specialities/")
      .then((response) => {
        console.log(specialities);
        setSpecialities(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-7" style={{ marginTop: "200px" }}>
            <img src="../../public/images/1.jpg" className="img-fluid" />
          </div>
          <div className="col-md-5 mt-5">
            <div className="card-header border-bottom-0 bg-transparent">
              <div className="mt-5 text-center">
                <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                  Register as a Doctor
                </h2>
                <hr />
              </div>

              <label>First Name</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter Your First Name"
                  onChange={(e) => {
                    setDoctorFirstName(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-sort"></span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Enter Your Last Name"
                    onChange={(e) => {
                      setDoctorLastName(e.target.value);
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
                    required
                    onChange={(e) => {
                      setDoctorPhone(e.target.value);
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
                <label>Specialities</label>
                <div className="input-group mb-3">
                  <select
                    className="form-control"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setDoctorSpecialities(e.target.value);
                    }}
                  >
                    <option defaultValue>Select Speciality..</option>
                    {specialities.map((val, index) => {
                      return (
                        <option key={val.speciality_id} value={val.speciality_id}>
                          {val.name}
                        </option>
                      );
                    })}
                  </select>
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
                    required
                    onChange={(e) => {
                      setDoctorPassword(e.target.value);
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
                    required
                    className="form-control"
                    placeholder="Confirm Your Password"
                    onChange={(e) => {
                      setDoctorConfirmPassword(e.target.value);
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
                  className="btn btn-primary rounded-pill text-light btn-block mt-4 mb-3"
                  type="submit"
                  onClick={registerDoctor}
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

export default DoctorRegistration;
