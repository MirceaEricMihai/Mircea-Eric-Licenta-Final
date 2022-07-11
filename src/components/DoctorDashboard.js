import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import download from "js-file-download";
import { Link } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;

let first_name = localStorage.getItem("doctor_first_name");
let last_name = localStorage.getItem("doctor_last_name");

function DoctorDashboard() {
  const [appointment, setAppointments] = useState([]);

  const updateStatus = (id, email, time, date, status) => {
    console.log("Id from function" + id);
    axios
      .put("https://mircea-eric-licenta.herokuapp.com/status", {
        id: id,
        email: email,
        time: time,
        date: date,
        first_name: first_name,
        status: status,
      })
      .then((response) => {
        // console.log(response.data)
        alert("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitAFile = (id) => {
    let history = createHistory();

    history.push("/doctor/submit-a-file/" + id);
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  };

  const downloadFile = (name) => {
    if (name == "No Files Added") alert("No File Added for Download");
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/file/" + name, { responseType: "blob" })
      .then((response) => {
        console.log(response);
        download(response.config.url, name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://mircea-eric-licenta.herokuapp.com/doctor/" + first_name)
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container justify-content-center mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-12 mt-5">
            <div className="mt-1 text-center">
              <h3 className="mb-4 text-danger" style={{ fontFamily: "Cabin" }}>
                Appointments for Dr. {first_name} {last_name}
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
                  <th>Patient Name</th>
                  <th>Email Address</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Medical Letter</th>
                </tr>
              </thead>
              <tbody>
                {appointment.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {val.first_name} {val.last_name}
                      </td>
                      <td>{val.email}</td>
                      <td>{val.time}</td>
                      <td>{val.date}</td>

                      {val.status == "Pending" && (
                        <td>
                          <span class="badge badge-secondary">Pending</span>
                        </td>
                      )}

                      {val.status == "Accepted" && (
                        <td>
                          <span class="badge badge-primary">Accepted</span>
                        </td>
                      )}

                      {val.status == "Canceled" && (
                        <td>
                          <span class="badge badge-warning">Canceled</span>
                        </td>
                      )}

                      {val.status == "Accepted" && (
                        <td>
                          <div class="btn-group btn-block" role="group" aria-label="Basic example">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              value="Confirm"
                              disabled
                            >
                              Confirm
                            </button>
                            <button
                              type="submit"
                              className="btn btn-danger"
                              value="Cancel"
                              onClick={() => {
                                updateStatus(
                                  val.appointment_id,
                                  val.email,
                                  val.time,
                                  val.date,
                                  "Canceled"
                                );
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      )}

                      {val.status == "Pending" && (
                        <td>
                          <div class="btn-group btn-block" role="group" aria-label="Basic example">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              value="Confirm"
                              onClick={() => {
                                updateStatus(
                                  val.appointment_id,
                                  val.email,
                                  val.time,
                                  val.date,
                                  "Accepted"
                                );
                              }}
                            >
                              Confirm
                            </button>
                            <button
                              type="submit"
                              className="btn btn-danger"
                              value="Cancel"
                              onClick={() => {
                                updateStatus(
                                  val.appointment_id,
                                  val.email,
                                  val.time,
                                  val.date,
                                  "Canceled"
                                );
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      )}

                      {val.status == "Canceled" && (
                        <td>
                          <div class="btn-group btn-block" role="group" aria-label="Basic example">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              value="Confirm"
                              disabled
                            >
                              Confirm
                            </button>
                            <button
                              type="submit"
                              className="btn btn-danger"
                              value="Cancel"
                              disabled
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      )}

                      {/* 
                      {val.status == "Accepted" && (
                        <td>
                          <button
                            className="btn btn-success"
                            style={{ textDecoration: "none" }}
                            onClick={() => {
                              submitAFile(val.appointment_id);
                            }}
                          >
                              <i className="fa fa-file"></i><i className="ml-2 fa fa-upload"></i>
                          </button>
                        </td>
                      )}
                      {val.status == "Pending" && (
                        <td>
                          <button
                          disabled
                            className="btn btn-success"
                            style={{ textDecoration: "none" }}
                          >
                            <i className="fa fa-file"></i><i className="ml-2 fa fa-upload"></i>
                          </button>
                        </td>
                      )} */}

                      <td>
                        <button
                          className="btn btn-success btn-block"
                          style={{ textDecoration: "none" }}
                          onClick={() => {
                            submitAFile(val.appointment_id);
                          }}
                        >
                          <i className="fa fa-file"></i>
                          <i className="ml-2 fa fa-upload"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th>Patient Name</th>
                  <th>Email Address</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Medical Letter</th>
                </tr>
              </tfoot>
            </table>
            <hr />
            <div className="mt-1 text-center">
              <h3 className="mb-4 text-danger" style={{ fontFamily: "Cabin" }}>
                Make an appointment by yourself
              </h3>
              <Link to="/doctor/appointment">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Make an appointment
                </button>
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
