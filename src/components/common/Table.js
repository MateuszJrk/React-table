import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Data = ({ columns, sortColumn, onSort, data, collapse }) => {
  return (
    <table className="table table-striped" style={{ display: "block" }}>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} collapse={collapse} />
    </table>
  );
};

export default Data;
