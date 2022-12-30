import React, { useEffect } from "react";
const Alert = ({ type, msg, removeAlert, list }) => {
  const alertTimer = 3000;
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, alertTimer);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};
export default Alert;
