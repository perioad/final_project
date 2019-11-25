import React from "react";
import { Link } from "react-router-dom";

export function Account() {
  return (
    <section className="account">
      <div className="container">
        <div className="account__inner">
          <div className="account__nav">
            <li className="account__nav-link" href="#">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/my-services"
              >
                Мои услуги
              </Link>
            </li>
            <li className="account__nav-link" href="#">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/my-info"
              >
                Личные данные
              </Link>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
