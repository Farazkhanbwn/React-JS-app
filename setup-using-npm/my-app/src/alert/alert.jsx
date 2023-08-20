import React from "react";
import "./alert.css";
import AlertPrimary from "./alert-types/alert-primary";
import AlertDefault from "./alert-types/alert-default";
import AlertType from "./alert-types";
import AlertSecondary from "./alert-types/alert-secondary";
import AlertSuccess from "./alert-types/alert-success";
import AlertDanger from "./alert-types/alert-danger";
import AlertWarning from "./alert-types/alert-warning";
import AlertDark from "./alert-types/alert-dark";
import AlertInfo from "./alert-types/alert-info";

const Alert = ({ text, type, title }) => {
  const factoryCreateButton = () => {
    switch (type) {
      case AlertType.primary:
        return <AlertPrimary text={text} title={title} />;

      case AlertType.secondary:
        return <AlertSecondary text={text} title={title} />;

      case AlertType.success:
        return <AlertSuccess text={text} title={title} />;

      case AlertType.danger:
        return <AlertDanger text={text} title={title} />;

      case AlertType.warning:
        return <AlertWarning text={text} title={title} />;

      case AlertType.dark:
        return <AlertDark text={text} title={title} />;

      case AlertType.info:
        return <AlertInfo text={text} title={title} />;

      default:
        return <AlertDefault text={text} title={title} />;
    }
  };

  return factoryCreateButton();
};

export default Alert;
