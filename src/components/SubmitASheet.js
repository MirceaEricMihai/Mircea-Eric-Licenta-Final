import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const createHistory = require("history").createBrowserHistory;

function SubmitASheet() {
  var id = useParams();

  const [appoint, setAppoints] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [surname, setSurname] = useState([]);
  const [name, setName] = useState([]);
  const [vast, setVast] = useState([]);
  const [cnp, setCnp] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [surgery, setSurgery] = useState([]);
  const [symptops, setsymptops] = useState([]);

  const [file, setFile] = useState("");

  const submitSheet = (e) => {
    e.preventDefault();
    if (
      (surname =
        "" ||
        name == "" ||
        vast == "" ||
        cnp == "" ||
        diagnoses == "" ||
        surgery == "" ||
        symptops == "" ||
        file == "")
    ) {
      alert("All Fields Required");
      return;
    }
    if (cnp.length != 13) {
      alert("CNP should be 13 characters long");
      return;
    }
    // Build a formData to send all the fields together (and the most important file)
    // That's why I set content type to form-data
    var formData = new FormData();
    formData.append("doctor_name", appoint[0].doctor_name);
    formData.append("id", id.appointment_id);
    formData.append("surname", surname);
    formData.append("name", name);
    formData.append("vast", vast);
    formData.append("cnp", cnp);
    formData.append("diagnoses", diagnoses);
    formData.append("surgery", surgery);
    formData.append("symptoms", symptops);
    formData.append("file", file);
    Axios.post("https://mircea-eric-licenta.herokuapp.com/upload/patient_sheet/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        alert("Medical Observation Submited Successfully");
        let history = createHistory();

        history.push("/patient/dashboard");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAppointData = () => {
    Axios.get("https://mircea-eric-licenta.herokuapp.com/appointment/" + id.appointment_id)
      .then((response) => {
        setAppoints(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get("https://mircea-eric-licenta.herokuapp.com/specialities/")
      .then((response) => {
        setSpecialities(response.data);
        getAppointData();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  onsubmit = () => {
    //  e.preventDefault();
    console.log("Submitted");
    let id = document.getElementById("id").value;

    // console.log(id)
    // submitSheet(id)
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container justify-content-center mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-18 mt-5">
            {appoint.map((val, key) => {
              return (
                <div key="key" className="card-header border-bottom-0 bg-transparent">
                  <form>
                    <div className="mt-4 text-center">
                      <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                        Submit Medical Observation Sheet
                      </h2>
                      <hr />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Doctor</label>
                          <div className="input-group mb-3">
                            <label>Dr. {val.doctor_name}</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Speciality</label>
                          <div className="input-group mb-3">
                            <label>
                              {
                                specialities.filter(
                                  (item) => item.speciality_id == val.speciality
                                )[0]["name"]
                              }
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Status</label>
                          <div className="input-group mb-3">
                            <label>{val.status}</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Appointment Time</label>
                          <div className="input-group mb-3">
                            <label>
                              {val.time} {val.date}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="form-group">
                      <label>Surname</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) => {
                            setSurname(e.target.value);
                          }}
                          placeholder="Enter Your Surname"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Name</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          placeholder="Enter Your Name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Age</label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          onChange={(e) => {
                            setVast(e.target.value);
                          }}
                          placeholder="Age"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>CNP</label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          onChange={(e) => {
                            setCnp(e.target.value);
                          }}
                          placeholder="Enter Your CNP"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Diagnoses you have</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) => {
                            setDiagnoses(e.target.value);
                          }}
                          placeholder="Diagnoses You have"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Surgery</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) => {
                            setSurgery(e.target.value);
                          }}
                          placeholder="Surgery"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Symptom Details</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) => {
                            setsymptops(e.target.value);
                          }}
                          placeholder="Symptop Details"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Choose a File</label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          onChange={(e) => {
                            setFile(e.target.files[0]);
                          }}
                          name="file"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btn ml-3 btn-success"
                          value="Submit"
                          onClick={submitSheet}
                        />

                        <Link to="/patient/dashboard" className="btn btn-danger ml-2">
                          Go Back
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitASheet;
