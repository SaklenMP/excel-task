import React from "react";
import * as XLSX from "xlsx";
import { useState } from "react";

function Excel() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        setLoad(true);
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
    });

    promise.then((d) => {
      setItems(d);
      console.log(d);
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <table className="table container">
        {load && (
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">EMPID</th>
              <th scope="col">SALARY</th>
            </tr>
          </thead>
        )}
        <tbody>
          {items.map((d) => (
            <tr key={d.EMPID}>
              <th>{d.NAME}</th>
              <td>{d.EMPID}</td>
              <td>{d.SALARY}</td>
            </tr>
          ))}
        </tbody>
        {console.log("items", items)}
      </table>
    </div>
  );
}

export default Excel;
