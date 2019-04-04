import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize; //from what item start
  return _(items) //lodash object
    .slice(startIndex) //slice starting from index
    .take(pageSize) //number of items from the start of array
    .value(); //converting to a regular array
}
