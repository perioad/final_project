import React from "react";
import intro from '../images/intro.jpg';

export function Home() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__content">
            <h2 className="intro__subtitle">Добро пожаловать в</h2>
            <h1 className="intro__title">Барбершоп «Perio»</h1>
            <p className="intro__text">
              Cамый лучший барбершоп в городе, основанный в далеком 2020 году.
              Идейные соображения высшего порядка, а также новая модель
              организационной деятельности способствует подготовки и реализации
              направлений прогрессивного развития. Идейные соображения высшего
              порядка, а также укрепление и развитие структуры представляет
              собой интересный эксперимент проверки модели развития.
            </p>
          </div>
          <div className="intro__photo-container">
            <img
              className="intro__photo image"
              src={intro}
              alt="Home"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
