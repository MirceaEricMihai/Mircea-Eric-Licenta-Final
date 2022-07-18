import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import "./style.css";

function Contact() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container-lg" style={{ marginTop: "150px" }}>
        <section className="mt-5" id="contact">
          <h3 className="text-center text-uppercase mt-5">Contact Us</h3>
          <p className="text-center w- m-auto">
            We are here to provide you the information that you need.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">call us</h4>
                  <p>+40 720 481 541</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">office loaction</h4>
                  <address>Calea Dorobanți 15-17, București 010552</address>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">office loaction</h4>
                  <address>Piața Romană 6, București 010374</address>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body px-0 text-center">
                  <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">email</h4>
                  <p className="contact">royaltherapytest@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
