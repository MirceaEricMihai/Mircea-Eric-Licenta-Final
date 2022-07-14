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
              We are proud of our doctors! For a relationship as close as possible, we invite you to
              see the best team that can take care of you.
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
