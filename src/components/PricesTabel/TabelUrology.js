import React from "react";

export default function TabelUrology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingTen">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Urology
            </button>
          </h2>
        </div>
        <div
          id="collapseTen"
          class="collapse"
          aria-labelledby="headingTen"
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
                  <td>Ultrasound of the urinary tract</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>Cystoscopy</td>
                  <td>100 euro</td>
                </tr>
                <tr>
                  <td>Ureteral stent removal</td>
                  <td>90 euro</td>
                </tr>
                <tr>
                  <td>Ultrasound-guided prostate biopsy</td>
                  <td>250 euro</td>
                </tr>
                <tr>
                  <td>Bladder instillation</td>
                  <td>25 euro</td>
                </tr>
                <tr>
                  <td>Cystostoma / ureterostoma change</td>
                  <td>70 euro</td>
                </tr>
                <tr>
                  <td>Urinary tube change</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Electrocautery</td>
                  <td>40 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
