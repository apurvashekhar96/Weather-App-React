import React from "react";
import "./ErrorBoundary.css";

interface ErrorProps {
  error: Error;
}

export const Error = ({ error }: ErrorProps) => {
  return (
    <>
      <div className="errContainer">
        <div data-testid="error" className="errTitle">
          ! Some Error !
        </div>
        <div className="errMessage">{error.message.toLocaleUpperCase()}</div>
      </div>
    </>
  );
};

export const myErrorHandler = (
  error: Error,
  info: { componentStack: string }
) => {
  console.error(error);
};
