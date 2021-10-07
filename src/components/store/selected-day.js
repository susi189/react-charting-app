import React from "react";

const SelectedContext = React.createContext({
  isSelected: false,
  isSelectedDay: "",
});

export default SelectedContext;
