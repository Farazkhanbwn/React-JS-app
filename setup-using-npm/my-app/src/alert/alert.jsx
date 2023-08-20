import React from "react";
import "./alert.css";
import AlertPrimary from "./alert-types/alert-primary";
import AlertDefault from "./alert-types/alert-default";

const Alert = ({ name, type }) => {
  const factoryCreateButton = () => {
    switch (type) {
      case "primary":
        return <AlertPrimary name={name} />;
      default:
        return <AlertDefault name={name} />;
    }
  };

  return factoryCreateButton();
};

export default Alert;
