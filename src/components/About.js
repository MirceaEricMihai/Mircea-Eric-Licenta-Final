import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 style={{ marginTop: "200px" }} className="text-info">
              About Us
            </h1>
            <hr />
            <p>
              Since the first days of operation of Medify, our teaming has been focused on building
              a high-qualities medicals service by Royal Therapy.
            </p>
            <button className="btn btn-primary btn-lg">About Us</button>
          </div>
          <div className="col-md-6">
            <img
              src="https://media.istockphoto.com/photos/ro/cinci-cadre-medicale-cu-stetoscoape-id185252689?k=20&m=185252689&s=612x612&w=0&h=lPceFm7JaoWYL4ALcv0XgUhz4ufK7mHWJmw6F8lm4hY="
              className="img-fluid mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
