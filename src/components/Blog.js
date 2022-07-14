import React from "react";
import Navbar from "./Navbar";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.medlife.ro/sites/default/files/inline-images/shutterstock_510475060_0.jpg"
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Recommended medical tests according to age</h5>
            <p className="card-text">
              Your health is the most important thing. Therefore, it is necessary to periodically
              make sure that your body is functioning at optimal parameters ...
            </p>
            <a href="#" className="btn btn-primary">
              Go read article
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="data:image/jpeg;base64,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"
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              Acute myocardial infarction - diagnosis, treatment, prevention
            </h5>
            <p className="card-text">
              Following an acute myocardial infarction, patients receive aspirin as an anticoagulant
              for life. In the case of those who have had ...
            </p>
            <a href="#" className="btn btn-primary">
              Go read article
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.contraboli.ro/wp-content/uploads/coronavirus.jpg"
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Dermatological manifestations in COVID-19 infection</h5>
            <p className="card-text">
              In a study of the main symptoms of COVID-19, researchers at King's College London
              reported three dermatological manifestations ...
            </p>
            <a href="#" className="btn btn-primary">
              Go read article
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.vejthani.com/wp-content/uploads/2022/05/R-Rheumatoid-arthritis.jpg"
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              Rheumatoid arthritis: causes, symptoms, diagnosis, treatment
            </h5>
            <p className="card-text">
              Rheumatoid arthritis is a chronic inflammatory condition of the small joints that
              secondarily leads to extra-articular symptoms ...
            </p>
            <a href="#" className="btn btn-primary">
              Go read article
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.contraboli.ro/wp-content/uploads/probiotice-1.jpg.webp"
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">The role of probiotics for the human body</h5>
            <p className="card-text">
              Probiotics are living microorganisms that can be consumed through fermented foods or
              food supplements. More and more studies show that ...
            </p>
            <a href="#" className="btn btn-primary">
              Go read article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
