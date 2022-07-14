import React from "react";
import Navbar from "./Navbar";

function Blog() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 style={{ marginTop: "200px" }} className="text-info">
              Blog Page
            </h1>
            <hr />
            <p>
              Since the first days of operation of Medify, our teaming has been focused on building
              a high-qualities medicals service by Royal Therapy.
            </p>
            <button className="btn btn-primary btn-lg">Our Blog Posts</button>
          </div>
          <div className="col-md-6">
            <img
              src="https://media.istockphoto.com/photos/ro/conceptul-de-telemedicin%C4%83-id1079581050?k=20&m=1079581050&s=612x612&w=0&h=OCRm_J1QAEpyHkScoXCbLkQddbKe67KnFv5Z_kuc-gg="
              className="img-fluid mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
