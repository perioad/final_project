import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Header(props) {
  function handleClick() {
    props.signOut();
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              <img className="logo__image image" src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="nav">
            <li className="nav__link">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/"
              >
                Домашняя страница
              </Link>
            </li>
            <li className="nav__link">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/services"
              >
                Услуги
              </Link>
            </li>
            <li className="nav__link">
              {props.isLoggedIn ? (
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/my-services"
                >
                  Личный кабинет
                </Link>
              ) : (
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/sign"
                >
                  Личный кабинет
                </Link>
              )}
            </li>
            <li className="nav__link nav__link_btn">
              {props.isLoggedIn ? (
                <Link
                  to="/sign"
                  onClick={handleClick}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Выйти
                </Link>
              ) : (
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/sign"
                >
                  Регистрация / Вход
                </Link>
              )}
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  signOut: PropTypes.func,
  isLoggedIn: PropTypes.bool
};
