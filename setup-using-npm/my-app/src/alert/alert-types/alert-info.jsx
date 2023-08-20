import React from "react";

const AlertInfo = ({ title, text }) => {
  return (
    <div className={`alert alert-info`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertInfo;
