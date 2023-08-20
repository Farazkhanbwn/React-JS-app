import React from "react";
import AlertType from "../alert-types";

const AlertInfo = ({ text }) => {
  return <p className={`alert alert-info`}>{text}</p>;
};

export default AlertInfo;
