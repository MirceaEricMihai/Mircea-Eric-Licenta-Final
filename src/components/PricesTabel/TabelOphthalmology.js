import React from "react";

export default function TabelOphthalmology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingSeven">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Ophthalmology
            </button>
          </h2>
        </div>
        <div
          id="collapseSeven"
          class="collapse"
          aria-labelledby="headingSeven"
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
                  <td>Sending ticket consultation (includes EKG)</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Paid consultation</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Paid control consultation</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>Cardiac ultrasound</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Holter EKG editing and interpretation</td>
                  <td>40 euro</td>
                </tr>
                <tr>
                  <td>Mounting and interpreting voltage Holter</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Effort testing</td>
                  <td>50 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
