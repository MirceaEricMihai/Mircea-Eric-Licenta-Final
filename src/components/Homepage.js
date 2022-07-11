import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import '../components/styles/homepage.css';

function Homepage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 style={{ marginTop: "200px" }} className="text-info">
              Find a Doctor & Book Appointment
            </h1>
            <hr />
            <p>
              Since the first days of operation of Medify, our teaming has been focused on building
              a high-qualities medicals service by Royal Therapy.
            </p>
            <Link to="/login/patient" className="btn btn-primary btn-lg">
              Make an Appointment Now{" "}
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="https://mbbsstudyinabroad.in/wp-content/uploads/2019/05/OC1OWB0.jpg"
              className="img-fluid mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
