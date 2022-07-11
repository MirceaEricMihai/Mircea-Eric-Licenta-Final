import React from "react";

export default function TabelNeurology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingSix">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Neurology
            </button>
          </h2>
        </div>
        <div
          id="collapseSix"
          class="collapse"
          aria-labelledby="headingSix"
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
                  <td>Control consultation (every 7-10 days)</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>EMG </td>
                  <td>70 euro</td>
                </tr>
                <tr>
                  <td>EEG</td>
                  <td>55 euro</td>
                </tr>
                <tr>
                  <td>Clinical trials (EDS, Myasthenic Score, UPDRS, MMSE, Reisberg)</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Sensitivity tests</td>
                  <td>25 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
