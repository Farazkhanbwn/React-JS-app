import React from "react";

const AlertPrimary = ({ title, text }) => {
  return (
    <div className={`alert alert-primary`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertPrimary;
