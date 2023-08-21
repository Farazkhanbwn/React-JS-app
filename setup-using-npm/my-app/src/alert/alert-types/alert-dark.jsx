import React from "react";

const AlertDark = ({ title, text }) => {
  return (
    <div className={`alert alert-dark`}>
      <h3 className="alert-heading">{title}</h3>
      <p className="alert-description">{text}</p>
    </div>
  );
};

export default AlertDark;
