import React from "react";

const AlertDanger = ({ title, text }) => {
  return (
    <div className={`alert alert-danger`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertDanger;
