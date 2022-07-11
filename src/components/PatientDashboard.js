import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import download from "js-file-download";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive/js/dataTables.responsive";
import $ from "jquery";
import { Link } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;

let first_name = localStorage.getItem("patient_first_name");
let last_name = localStorage.getItem("patient_last_name");
let patient_id = localStorage.getItem("patient_id");
let patient_email = localStorage.getItem("patient_email");

function PatientDashboard() {
  const [appointment, setAppointments] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [update, setUpdate] = useState(0);

  const updateStatus = (id, time, date) => {
    console.log("Id from function" + id);
    axios
      .put("https://mircea-eric-licenta.herokuapp.com/status", {
        id: id,
        email: patient_email,
        time: time,
        date: date,
        first_name: first_name,
        status: "Canceled",
      })
      .then((response) => {
        // console.log(response.data)
        alert("Success");
        setUpdate[!update];
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAppointments = () => {
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/appointment/patient/" + patient_id)
      .then((response) => {
        setAppointments(response.data);
        //  console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Get list of specialities
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/specialities/")
      .then((response) => {
        console.log(response.data);
        setSpecialities(response.data);
        getAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
    //initialize datatable
  }, []);

  // console.log(appointment)
  const uploadASheet = (id) => {
    let history = createHistory();

    history.push("/patient/submit-a-sheet/" + id);
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  };

  return (
    <div>
      <Navbar />
      <div className="container justify-content-center mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-12 mt-5">
            <div className="mt-1 text-center">
              <h3 className="mb-4 text-danger" style={{ fontFamily: "Cabin" }}>
                Appointments by {first_name} {last_name}
              </h3>
              <hr />
            </div>
            <table
              id="ex"
              className="table table-striped table-bordered dt-responsive nowrap"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Doctor Info</th>
                  <th>Speciality</th>
                  <th>Appointment Time</th>
                  <th>Appointment Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Upload a Sheet</th>
                </tr>
              </thead>
              <tbody>
                {appointment.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>{val.doctor_name}</td>
                      <td>
                        {
                          specialities.filter((item) => item.speciality_id == val.speciality)[0][
                            "name"
                          ]
                        }
                      </td>
                      <td>{val.time}</td>
                      <td>{val.date}</td>

                      {val.status == "Accepted" && (
                        <td>
                          <span class="badge badge-primary">Acepted</span>
                        </td>
                      )}

                      {val.status == "Pending" && (
                        <td>
                          <span class="badge badge-secondary">Pending</span>
                        </td>
                      )}

                      {val.status == "Canceled" && (
                        <td>
                          <span class="badge badge-warning">Canceled</span>
                        </td>
                      )}

                      {val.status == "Accepted" && (
                        <td>
                          <button
                            type="submit"
                            className="btn btn-danger btn-block"
                            value="Cancel"
                            onClick={() => {
                              updateStatus(val.appointment_id, val.time, val.date);
                            }}
                          >
                            Cancel
                          </button>
                        </td>
                      )}

                      {val.status == "Pending" && (
                        <td>
                          <button
                            type="submit"
                            className="btn btn-danger btn-block"
                            value="Cancel"
                            onClick={() => {
                              updateStatus(val.appointment_id, val.time, val.date);
                            }}
                          >
                            Cancel
                          </button>
                        </td>
                      )}

                      {val.status == "Canceled" && (
                        <td>
                          <button type="submit" disabled className="btn btn-danger btn-block">
                            Cancel
                          </button>
                        </td>
                      )}

                      {/* <td style={{cursor: "pointer"}} onClick={() => {
                              downloadFile(
                                val.sheet_by_doctor
                              );
                            }}><a>{val.sheet_by_doctor}</a></td> */}

                      {val.status == "Accepted" && (
                        <td>
                          <button
                            className="btn btn-success btn-block"
                            style={{ textDecoration: "none" }}
                            onClick={() => {
                              uploadASheet(val.appointment_id);
                            }}
                          >
                            <i className="fa fa-list-alt"></i>
                            <i className="ml-2 fa fa-upload"></i>
                          </button>
                        </td>
                      )}

                      {val.status == "Pending" && (
                        <td>
                          <button
                            className="btn btn-success btn-block"
                            style={{ textDecoration: "none" }}
                            disabled
                          >
                            <i className="fa fa-list-alt"></i>
                            <i className="ml-2 fa fa-upload"></i>
                          </button>
                        </td>
                      )}

                      {val.status == "Canceled" && (
                        <td>
                          <button
                            className="btn btn-success btn-block"
                            style={{ textDecoration: "none" }}
                            disabled
                          >
                            <i className="fa fa-list-alt"></i>
                            <i className="ml-2 fa fa-upload"></i>
                          </button>
                        </td>
                      )}

                      {/* 
{val.sheet_by_patient.length < 0 && (
                        <td>
                          <Link
                      
                            className="btn btn-danger"
                            style={{ textDecoration: "none" }}
                            onClick={() => {
                              uploadASheet(val.appointment_id);
                            }}
                          >
                             <i className="fa fa-list-alt"></i><i className="ml-2 fa fa-upload"></i>
                          </Link>
                        </td> */}
                      {/* )}       */}

                      {/* {val.sheet_by_patient.length > 0 && (
                        <td>
                          <button
                          disabled
                            className="btn btn-light"
                            style={{ textDecoration: "none" }}
                          >
                            <i className="fa fa-list-alt"></i><i className="ml-2 fa fa-upload"></i>
                          </button>
                        </td>
                      )} */}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th>Doctor Info</th>
                  <th>Speciality</th>
                  <th>Appointment Time</th>
                  <th>Appointment Date</th>
                  <th>Status</th>
                  <th>Upload a Sheet</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
