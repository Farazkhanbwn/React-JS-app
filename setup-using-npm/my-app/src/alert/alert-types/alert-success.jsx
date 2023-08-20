import React from "react";

const AlertSuccess = ({ title, text }) => {
  return (
    <div className={`alert alert-success`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertSuccess;
