import React from "react";

export default function TabelRheumatology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingNine">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Rheumatology
            </button>
          </h2>
        </div>
        <div
          id="collapseNine"
          class="collapse"
          aria-labelledby="headingNine"
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
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Ultrasound</td>
                  <td>45 euro</td>
                </tr>
                <tr>
                  <td>Joint ultrasound: shoulder / hand / knee / ankle</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>PRP infiltration</td>
                  <td>120 euro</td>
                </tr>
                <tr>
                  <td>Periarticular infiltrations</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Ultrasound</td>
                  <td>45 euro</td>
                </tr>
                <tr>
                  <td>Promo package: consultation + ultrasound</td>
                  <td>65 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
