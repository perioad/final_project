import React from "react";

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__phone">
        Наш телефон:{" "}
        <a className="contacts__link" href="tel:+78001234567">
          123-45-67
        </a>
      </div>
      <div className="contacts__work-hours">
        Ждем вас каждый день с 10:00 до 20:00
      </div>
      <div className="contacts__address">
        <a
          className="contacts__link"
          href="https://www.google.com/maps/place/Barbershop+Tut+Li+Barr,+Liteyniy+Ave,+64+%D0%B2,+%D0%B0%D1%80%D0%BA%D1%83,+Saint+Petersburg,+Russia,+191025/@59.9333835,30.3502926,15z/data=!4m5!1m2!2m1!1sbarbershop!3m1!1s0x469631a68fcb6a63:0x8d03cb4746bf457b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Литейный проспект, 64
        </a>
      </div>
    </div>
  );
}
