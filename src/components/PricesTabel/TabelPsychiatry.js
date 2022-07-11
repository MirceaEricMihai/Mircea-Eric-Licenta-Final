import React from "react";

export default function TabelPsychiatry() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingEight">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Psychiatry
            </button>
          </h2>
        </div>
        <div
          id="collapseEight"
          class="collapse"
          aria-labelledby="headingEight"
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
                  <td>Examination of current mental state</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>Medical certificate A5</td>
                  <td>19 euro</td>
                </tr>
                <tr>
                  <td>Medical report</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>Package of 10 psychotherapy sessions</td>
                  <td>250 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
