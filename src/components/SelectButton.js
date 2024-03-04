import React from 'react';
import "./SelectButton.css";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span onClick={onClick} className="selectbutton">
    {children}
  </span>
);
};

export default SelectButton;
