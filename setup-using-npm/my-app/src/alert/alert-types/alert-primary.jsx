import React from "react";

const AlertPrimary = ({ title, text }) => {
  return (
    <p className={`alert alert-primary`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </p>
  );
};

export default AlertPrimary;
