import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Axios from "axios";

var patient_id = localStorage.getItem("patient_id");

function MedicalLetters() {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    Axios.get("https://mircea-eric-licenta.herokuapp.com/medicals/" + patient_id)
      .then((response) => {
        //   console.log(response)
        setSheets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const downloadFile = (name) => {
    console.log(name);
    Axios.get("https://mircea-eric-licenta.herokuapp.com/file/patient/" + name, {
      responseType: "blob",
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name);
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
                  Medical Letters For You
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
                    <th>Age</th>
                    <th>Diagnoses</th>
                    <th>Treatments</th>
                    <th>Recommendations</th>
                    <th>File</th>
                  </tr>
                </thead>
                <tbody>
                  {sheets.map((val, index) => {
                    return (
                      <tr key={index}>
                        <td>{val.surname}</td>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.diagnoses}</td>
                        <td>{val.treatments}</td>
                        <td>{val.recommendations}</td>
                        <td>
                          <button
                            className="btn btn-success btn-block"
                            onClick={() => {
                              downloadFile(val.file);
                            }}
                          >
                            <i className="fa fa-list-alt"></i>
                            <i className="ml-2 fa fa-download"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Diagnoses</th>
                    <th>Recommendations</th>
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

export default MedicalLetters;
