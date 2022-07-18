import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Appointment() {
  const [patient, setPatient] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedtime, setSelectedtime] = useState([]);

  const [spec, setSpec] = useState("");
  const [doc, setDoc] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  let first_name = localStorage.getItem("patient_first_name");
  let last_name = localStorage.getItem("patient_last_name");
  let phone = localStorage.getItem("patient_phone");
  let email = localStorage.getItem("patient_email");
  let patient_id = localStorage.getItem("patient_id");
  let dob = localStorage.getItem("dob");
  let cnp = localStorage.getItem("cnp");
  let status = "Pending";

  const checkTimeAvailability = () => {
    if (spec == "" || doc == "" || date == "" || selectedtime == "") {
      alert("You have to complete all details");
      return;
    }

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

  const getBusySlots = (value) => {
    setDate(value);

    axios
      .post("https://mircea-eric-licenta.herokuapp.com/getBusySlots/", { date: value, doctor: doc })
      .then((response) => {
        let a = response.data.map((i) => i.time);
        var x = 30; //minutes interval
        var time_obj = []; // time array
        var tt = 60 * 8; // start time

        //loop to increment the time and push results in array
        for (var i = 0; tt < 18 * 60; i++) {
          var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
          var mm = tt % 60; // getting minutes of the hour in 0-55 format
          var time_slot = ("0" + (hh % 24)).slice(-2) + ":" + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
          var slot_obj = { value: time_slot };
          if (a.includes(time_slot)) {
            slot_obj["status"] = "busy";
          } else {
            slot_obj["status"] = "free";
          }
          time_obj[i] = slot_obj;
          tt = tt + x;
        }
        setTimes(time_obj);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDoctorsBySpeciality = (e) => {
    let speciality = e.target.value;
    setSpec(speciality);
    // console.log(speciality)

    axios
      .get("https://mircea-eric-licenta.herokuapp.com/doctors/" + speciality)
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeAppointment = () => {
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/makeAppointment", {
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        dob: dob,
        cnp: cnp,
        speciality: spec,
        doctor_name: doc,
        time: selectedtime,
        date: date,
        patient_id: patient_id,
        status: status,
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
      .get("https://mircea-eric-licenta.herokuapp.com/specialities/")
      .then((response) => {
        console.log(specialities);
        setSpecialities(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/patient/" + patient_id)
      .then((response) => {
        setPatient(response.data);
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
              {patient.map((val, keyPatient) => {
                return (
                  <div key={keyPatient} className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={val.first_name}
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
                            value={val.last_name}
                            readOnly
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-sort"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-group mb-3">
                          <input type="email" className="form-control" value={val.email} readOnly />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-clock"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Specialities</label>
                        <select
                          className="form-control"
                          onChange={(e) => {
                            getDoctorsBySpeciality(e);
                          }}
                          id="exampleFormControlSelect1"
                        >
                          <option defaultValue>Select Speciality..</option>
                          {specialities.map((val, index) => {
                            return (
                              <option key={index} value={val.speciality_id}>
                                {val.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <div className="input-group mb-3">
                          <input
                            type="number"
                            className="form-control"
                            value={val.phone}
                            readOnly
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
                          <input type="date" className="form-control" value={val.dob} readOnly />
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
                          <input type="number" className="form-control" value={val.cnp} readOnly />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-clock"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Doctors List</label>
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setDoc(e.target.value);
                          }}
                        >
                          <option defaultValue>Select Doctor....</option>
                          {doctors.map((val, index) => {
                            return <option key={index}>{val.first_name}</option>;
                          })}
                        </select>
                      </div>

                      {/* {doctors.map((val, index) => {
                  return (
                    <input key={index}
                    value={val.doctor_id}
                    className="form-control"
                    /> );
                  
                 
                
                })} */}
                    </div>

                    {doc != "" && (
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Appointment Date</label>
                          <div className="input-group mb-3">
                            <input
                              type="date"
                              onChange={(e) => {
                                getBusySlots(e.target.value);
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
                    )}

                    {doc != "" && date != "" && (
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Appointment Time</label>
                          <div className="input-group mb-3">
                            <div className="row">
                              {times.map((val, index) => {
                                return (
                                  <div className="col-md-1">
                                    {val.status == "free" && (
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        style={{ marginBottom: 10 + "px" }}
                                        onClick={(e) => {
                                          setSelectedtime(e.target.innerText);
                                        }}
                                      >
                                        {val.value}
                                      </button>
                                    )}
                                    {val.status == "busy" && (
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        style={{ marginBottom: 10 + "px" }}
                                        disabled
                                      >
                                        {val.value}
                                      </button>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <label>Selected Time:</label>
                            <b>{selectedtime}</b>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
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
