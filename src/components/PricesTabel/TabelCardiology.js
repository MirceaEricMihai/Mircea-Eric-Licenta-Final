import React from "react";

export default function TabelCardiology() {
  return (
    <>
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-controls="collapseOne"
            >
              Cardiology
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
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
                  <td>Subtarsal foreign body extraction</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Corneal foreign body extraction</td>
                  <td>30 euro</td>
                </tr>
                <tr>
                  <td>Blepharoplasty / eyes</td>
                  <td>310 euro</td>
                </tr>
                <tr>
                  <td>Ectropion / eyes / eyes</td>
                  <td>210 euro</td>
                </tr>
                <tr>
                  <td>Entropion / eyes</td>
                  <td>210 euro</td>
                </tr>
                <tr>
                  <td>OCT (optical coherence tomography) both eyes</td>
                  <td>40 euro</td>
                </tr>
                <tr>
                  <td>Xanthelasma / eyes</td>
                  <td>120 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
