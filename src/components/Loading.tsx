import React, { ReactElement } from "react";
import "./Loading.css";

interface LoadingProps {
  children: ReactElement;
  isLoading: boolean;
}

export const Loading = ({ children, isLoading }: LoadingProps) => {
  return (
    <>
      {isLoading ? (
        <div data-testid="loader" className="loading">
          <div className="center">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
