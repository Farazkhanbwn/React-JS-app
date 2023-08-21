import React from "react";

const AlertSecondary = ({ title, text }) => {
  return (
    <div className={`alert alert-secondary`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertSecondary;
