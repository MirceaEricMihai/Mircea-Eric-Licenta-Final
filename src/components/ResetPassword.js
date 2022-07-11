import React, { useState } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import axios from "axios";
const createHistory = require("history").createBrowserHistory;

function ResetPassword() {
  let token = useParams();

  const [password, setPassword] = useState("");

  const reset = () => {
    axios
      .put("https://mircea-eric-licenta.herokuapp.com/resetPassword", {
        resetLink: token.token,
        password: password,
      })
      .then((response) => {
        if (response.status == "200") {
          let history = createHistory();

          history.push("/login/patient");
          let pathUrl = window.location.href;
          window.location.href = pathUrl;
        }
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
                <div className="mt-5 text-center">
                  <h2 className="mb-4 text-primary" style={{ fontFamily: "Cabin" }}>
                    Reset Password
                  </h2>
                  <hr />
                </div>

                <div className="form-group">
                  <label></label>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your New Password"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-clock"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label></label>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Your Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
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
                    onClick={reset}
                  >
                    Reset Your Password
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

export default ResetPassword;
