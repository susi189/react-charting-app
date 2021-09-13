import React from "react";

const Quantity = (props) => {
  const onChangeHandler = (event) => {
    props.onSelectQuantity(event.target.value);
  };
  return (
    <div className="new-observation__control" style={props.style}>
      <label htmlFor="quantity">Quantity:</label>
      <select
        id="quantity"
        name="quantity"
        value={props.value}
        onChange={onChangeHandler}
      >
        <option value=""></option>
        <option value="x1">Seen only once</option>
        <option value="x2">Seen twice a day</option>
        <option value="x3">Seen three times a day</option>
        <option value="AD">Seen all day</option>
      </select>
    </div>
  );
};

export default Quantity;
