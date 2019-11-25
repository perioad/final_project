import React from "react";
import { Contacts } from "./Contacts";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Contacts />
        </div>
      </div>
    </footer>
  );
}
