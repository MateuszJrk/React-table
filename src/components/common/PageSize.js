import React from "react";

const PageSize = props => {
  const { onChange, pageSize } = props;
  return (
    <select
      value={pageSize.value}
      onChange={e => onChange(e)}
      className="form-control"
      style={{ width: "8%" }}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  );
};

export default PageSize;
