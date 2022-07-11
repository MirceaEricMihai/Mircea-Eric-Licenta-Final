import React from "react";

export default function TabelGastro() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingFour">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Gastroenterology
            </button>
          </h2>
        </div>
        <div
          id="collapseFour"
          class="collapse"
          aria-labelledby="headingFour"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <table className="table table-striped table-hover mt-2">
              <thead className="thead-dark">
                <tr>
                  <th>Services</th>
                  <th>Prices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Initial consultation</td>
                  <td>40 euro</td>
                </tr>
                <tr>
                  <td>General abdominal ultrasound</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Organ ultrasound</td>
                  <td>12 euro</td>
                </tr>
                <tr>
                  <td>Upper digestive endoscopy (gastroscopy)</td>
                  <td>90 euro</td>
                </tr>
                <tr>
                  <td>Lower digestive endoscopy (colonoscopy)</td>
                  <td>130 euro</td>
                </tr>
                <tr>
                  <td>Polypectomy</td>
                  <td>70 euro</td>
                </tr>
                <tr>
                  <td>Gastro promo package: consultation + ultrasound</td>
                  <td>60 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
