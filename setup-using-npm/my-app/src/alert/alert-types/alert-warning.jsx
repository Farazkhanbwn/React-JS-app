import React from "react";

const AlertWarning = ({ title, text }) => {
  return (
    <div className={`alert alert-warning`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertWarning;
