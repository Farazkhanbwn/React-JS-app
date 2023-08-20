import React from "react";

const AlertDark = ({ title, text }) => {
  return (
    <p className={`alert alert-dark`}>
      {title}
      {text}
    </p>
  );
};

export default AlertDark;
