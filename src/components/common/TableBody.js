import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path); //otherwise can't get nested property
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key); // like and button doesnt have path property
    // key for each cell
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => {
          return (
            <tr key={item._id}>
              {columns.map(column => (
                <td key={this.createKey(item, column)}>
                  {this.renderCell(item, column)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
