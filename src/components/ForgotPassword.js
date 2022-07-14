import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  const sendEmail = () => {
    console.log("Emial");
    axios
      .post("https://mircea-eric-licenta.herokuapp.com/patient/forgot", {
        email: email,
      })
      .then((response) => {
        console.log(response);
        if (response.status === "200") {
          setValue("Email Sent ! Check Your Email !!");
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
                {value && (
                  <div
                    class="alert alert-success alert-dismissible fade show text-center"
                    role="alert"
                  >
                    {value}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}
                <div className="mt-5 text-center">
                  <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                    Forgot Password
                  </h2>
                  <hr />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
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
                    onClick={sendEmail}
                  >
                    Send Email Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
