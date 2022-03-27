import React from "react";
import Button from "@mui/material/Button";
import './CustomButtons.css'


const CustomButtons = ({ text }) => {
  return (
    <>
      <Button className="custom_btn">
        <span className="btn_txt">{text}</span>
      </Button>
    </>
  );
};

export default CustomButtons;
