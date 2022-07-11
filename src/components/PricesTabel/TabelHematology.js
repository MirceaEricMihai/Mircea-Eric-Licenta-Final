import React from "react";

export default function TabelHematology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingFive">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Hematology
            </button>
          </h2>
        </div>
        <div
          id="collapseFive"
          class="collapse"
          aria-labelledby="headingFive"
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
                  <td>Beta-thalassemia, HBB gene</td>
                  <td>230 euro</td>
                </tr>
                <tr>
                  <td>Cytological examination of the blood smear</td>
                  <td>8 euro</td>
                </tr>
                <tr>
                  <td>Organ ultrasound</td>
                  <td>12 euro</td>
                </tr>
                <tr>
                  <td>CBC</td>
                  <td>15 euro</td>
                </tr>
                <tr>
                  <td>Reticulocytes</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>VSH</td>
                  <td>6 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
