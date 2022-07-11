import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Axios from "axios";

var doctor_name = localStorage.getItem("doctor_first_name");

function PatientObservationSheets() {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    Axios.get("https://mircea-eric-licenta.herokuapp.com/sheets/" + doctor_name)
      .then((response) => {
        setSheets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const downloadFile = (name) => {
    console.log(name);
    Axios.get("https://mircea-eric-licenta.herokuapp.com/file/" + name, { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name); //or any other extension
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Navbar />

        <div className="container justify-content-center mt-5">
          <div className="row justify-content-center mt-5">
            <div className="col-md-12 mt-5">
              <div className="mt-1 text-center">
                <h3 className="mb-4 text-danger" style={{ fontFamily: "Cabin" }}>
                  Patients Observation Sheets for Dr.{doctor_name}
                </h3>
              </div>
              <table
                id="ex"
                className="table table-striped table-bordered dt-responsive nowrap"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Vast</th>
                    <th>CNP</th>
                    <th>Diagnoses</th>
                    <th>Surgery</th>
                    <th>Symptops</th>
                    <th>File</th>
                  </tr>
                </thead>
                <tbody>
                  {sheets.map((val, index) => {
                    return (
                      <tr key={index}>
                        <td>{val.surname}</td>
                        <td>{val.name}</td>
                        <td>{val.vast}</td>
                        <td>{val.cnp}</td>
                        <td>{val.diagnoses}</td>
                        <td>{val.surgery}</td>
                        <td>{val.symptops}</td>
                        <td
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            downloadFile(val.file);
                          }}
                        >
                          <a>{val.file}</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Vast</th>
                    <th>CNP</th>
                    <th>Diagnoses</th>
                    <th>Surgery</th>
                    <th>Symptops</th>
                    <th>File</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientObservationSheets;
