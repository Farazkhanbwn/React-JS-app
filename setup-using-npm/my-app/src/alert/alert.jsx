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

const Alert = (props) => {
  const factoryCreateButton = () => {
    switch (props.type) {
      case AlertType.primary:
        return <AlertPrimary {...props} />;

      case AlertType.secondary:
        return <AlertSecondary {...props} />;

      case AlertType.success:
        return <AlertSuccess {...props} />;

      case AlertType.danger:
        return <AlertDanger {...props} />;

      case AlertType.warning:
        return <AlertWarning {...props} />;

      case AlertType.dark:
        return <AlertDark {...props} />;

      case AlertType.info:
        return <AlertInfo {...props} />;

      default:
        return <AlertDefault {...props} />;
    }
  };

  return factoryCreateButton();
};

export default Alert;
