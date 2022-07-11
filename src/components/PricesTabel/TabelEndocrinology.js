import React from "react";

export default function TabelEndocrinology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Endocrinology
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
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
                  <td>Control consultation</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Scheduled chronic control consultation</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>Doppler thyroid ultrasound</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Package (consultation + ultrasound)</td>
                  <td>55 euro</td>
                </tr>
                <tr>
                  <td>Interpretation of post-consultation analyzes (3-5 days)</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>Heel osteodensitometry</td>
                  <td>10 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
