import React from "react";

export default function TabelDermatology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Dermatology
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
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
                  <td>Paid consultation</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Incision / drainage for boil / panarithium abscess</td>
                  <td>25 euro</td>
                </tr>
                <tr>
                  <td>Lysis of vulvar adhesions</td>
                  <td>25 euro</td>
                </tr>
                <tr>
                  <td>Antibiotic dressing</td>
                  <td>10 euro</td>
                </tr>
                <tr>
                  <td>Hemostatic dressing</td>
                  <td>10 euro</td>
                </tr>
                <tr>
                  <td>Simple dressing</td>
                  <td>10 euro</td>
                </tr>
                <tr>
                  <td>Stitches removal</td>
                  <td>10 euro</td>
                </tr>
                <tr>
                  <td>Treatment of umbilical granuloma</td>
                  <td>20 euro</td>
                </tr>
                <tr>
                  <td>Paraphimosis reduction</td>
                  <td>70 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
