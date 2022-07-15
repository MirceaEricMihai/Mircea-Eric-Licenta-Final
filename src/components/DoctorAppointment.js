import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

let first_name = localStorage.getItem("doctor_first_name");
let last_name = localStorage.getItem("doctor_last_name");
let doc = localStorage.getItem("doctor_id");
let spec = localStorage.getItem("doctor_speciality_id");

function Appointment() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState([]);

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const checkTimeAvailability = () => {
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/checkTime", {
        time: time,
        date: date,
        doctor: doc,
      })
      .then((response) => {
        if (response.data != "") {
          alert("Date and Time Already Booked for Selected Doctor !");
        } else {
          makeAppointment();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeAppointment = () => {
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/makeAppointment", {
        first_name: patient.first_name,
        last_name: patient.last_name,
        phone: patient.phone,
        email: patient.email,
        dob: patient.dob,
        cnp: patient.cnp,
        speciality: spec,
        doctor_name: first_name,
        time: time,
        date: date,
        patient_id: patient.patient_id,
        status: "Accepted",
      })
      .then((response) => {
        // console.log(response);
        if (response.data == "OK") {
          alert("Appointment Made Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/patients/")
      .then((response) => {
        setPatients(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container justify-content-center mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-12 mt-5">
            <div className="card-header border-bottom-0 bg-transparent">
              <div className="mt-4 text-center">
                <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                  Make an Appointment
                </h2>
                <hr />
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Patients List</label>
                    <select
                      className="form-control"
                      onChange={(e) => {
                        setPatient(patients[e.target.value]);
                      }}
                    >
                      <option defaultValue>Select Patients....</option>
                      {patients.map((val, index) => {
                        return (
                          <option key={index} value={index}>
                            {val.first_name} {val.last_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Appointment Time</label>
                    <div className="input-group mb-3">
                      <input
                        type="time"
                        onChange={(e) => {
                          setTime(e.target.value);
                        }}
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-sort"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Appointment Date</label>
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-sort"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary text-light btn-block mb-3 rounded-pill mt-4"
                type="submit"
                onClick={checkTimeAvailability}
              >
                Make Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
