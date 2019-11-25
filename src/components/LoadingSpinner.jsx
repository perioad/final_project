import React from "react";

export function LoadingSpinner() {
  return (
    <footer className="loading">
      <div className="container">
        <div className="loading__inner">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
