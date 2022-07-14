import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientDob, setPatientDob] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientCNP, setPatientCNP] = useState("");

  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorSpecialities, setDoctorSpecialities] = useState("");

  const registerPatient = () => {
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/registerPatient", {
        first_name: patientFirstName,
        last_name: patientLastName,
        phone: patientPhone,
        dob: patientDob,
        email: patientEmail,
        cnp: patientCNP,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const registerDoctor = () => {
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/registerDoctor", {
        first_name: doctorFirstName,
        last_name: doctorLastName,
        phone: doctorPhone,
        specialities: doctorSpecialities,
      })
      .then((response) => {
        console.log(response);
        if (response.statusCode === "200") {
          alert("Registered");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container justify-content-center mt-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card-header border-bottom-0 bg-transparent">
              <div className="mt-4 text-center">
                <h2>Register Now</h2>
              </div>
              <ul
                className="nav nav-tabs justify-content-center pt-4"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active text-primary"
                    id="pills-login-tab"
                    data-toggle="pill"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    Patient
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-primary"
                    id="pills-register-tab"
                    data-toggle="pill"
                    href="#pills-register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    Doctor
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-body pb-4">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="pills-login-tab"
                >
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
                    <button
                      className="btn btn-primary text-light btn-block mb-3"
                      type="submit"
                      onClick={registerPatient}
                    >
                      Register Now
                    </button>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="pills-register-tab"
                >
                  <form>
                    <label>First Name</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Speciality"
                          onChange={(e) => {
                            setDoctorSpecialities(e.target.value);
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
                        className="btn btn-success text-light btn-block mb-3"
                        type="submit"
                        onClick={registerDoctor}
                      >
                        Register Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
