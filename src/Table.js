import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function Table() {
  const data = [
    {
      when: "2 minutes ago",
      who: "Jill Dupre",
      description: "new account",
    },
    {
      when: "1 hour ago",
      who: "Lose White",
      description: "fist chapter",
    },
    {
      when: "2 hours ago",
      who: "Jordan Whash",
      description: "Created account",
    },
  ];

  var rows = data.map(function (row) {
    return (
      <tr>
        <td>{row.when}</td>
        <td>{row.who}</td>
        <td>{row.description}</td>
      </tr>
    );
  });
  return (
    <>
      <table id="table-to-xls">
        <thead>
          <th>When</th>
          <th>Who</th>
          <th>Description</th>
        </thead>
        {rows}
      </table>
      <ReactHTMLTableToExcel
        className="btn-info"
        filename="excel file data"
        buttonText="Export to XLS file"
        sheet="sheet"
        table="table-to-xls"
      />
    </>
  );
}

export default Table;
