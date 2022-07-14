import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";
const createHistory = require("history").createBrowserHistory;

var doctor_first_name = localStorage.getItem("doctor_first_name");
var doctor_last_name = localStorage.getItem("doctor_last_name");
var doctor_speciality = localStorage.getItem("doctor_speciality_name");
var doctor_phone = localStorage.getItem("doctor_phone");

function SubmitAFile() {
  var id = useParams();

  const [appoint, setAppoints] = useState([]);
  const [surname, setSurname] = useState([]);
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  // const [file, setFile] = useState("");

  const submitAFileForm = (e) => {
    // Preventing sending the form data (by the HTML normal behavior)
    e.preventDefault();
    if (
      surname === "" ||
      name === "" ||
      age === "" ||
      diagnoses === "" ||
      treatments === "" ||
      recommendations === ""
    ) {
      alert("All Fields Required");
      return;
    }
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/upload/doctor_sheet/", {
        id: appoint[0].patient_id,
        appointmentid: id.appointment_id,
        doctor_first_name: doctor_first_name,
        doctor_last_name: doctor_last_name,
        doctor_speciality: doctor_speciality,
        doctor_phone: doctor_phone,
        surname: surname,
        name: name,
        age: age,
        diagnoses: diagnoses,
        treatments: treatments,
        recommendations: recommendations,
      })
      .then(() => {
        alert("Medical Letter Submited Successfully");
        let history = createHistory();

        history.push("/doctor/dashboard");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get("https://mircea-eric-licenta.herokuapp.com/appointment/" + id.appointment_id)
      .then((response) => {
        setAppoints(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container justify-content-center mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 mt-5">
            {appoint.map((val, key) => {
              return (
                <div className="card-header border-bottom-0 bg-transparent">
                  <form>
                    <div className="mt-4 text-center">
                      <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                        Submit a Medical Letter
                      </h2>

                      <hr />
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <label>Email Address</label>
                          <div className="input-group mb-3">
                            <label>{val.email}</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Appointment Time</label>
                          <div className="input-group mb-3">
                            <label>
                              {val.time} {val.date}
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Status</label>
                          <div className="input-group mb-3">
                            <label>{val.status}</label>
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
                            setAge(e.target.value);
                          }}
                          placeholder="Age"
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
                      <label>Treatments</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) => {
                            setTreatments(e.target.value);
                          }}
                          placeholder="Treatments"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Recommendations</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) => {
                            setRecommendations(e.target.value);
                          }}
                          placeholder="Reccomendations"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group">
                        <input
                          type="submit"
                          onClick={submitAFileForm}
                          className="btn ml-3 btn-success"
                          value="Submit"
                        />

                        <Link to="/doctor/dashboard" className="btn btn-danger ml-2">
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

export default SubmitAFile;
