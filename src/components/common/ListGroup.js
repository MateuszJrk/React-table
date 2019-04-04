import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]} //reusable
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            style={{ cursor: "pointer" }}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};
// changing different future inputs to default ones
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
