import React from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect
  } = props;

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

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
