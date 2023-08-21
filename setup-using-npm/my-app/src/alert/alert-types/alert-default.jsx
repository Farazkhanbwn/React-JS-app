import React from "react";

const AlertDefault = ({ title, text }) => {
  return (
    <div className={`alert alert-default`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertDefault;
