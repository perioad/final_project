import React from "react";
import { Main } from "./Main";
import { Footer } from "./Footer";
import HeaderContainer from "../containers/HeaderContainer";

export function App() {
  return (
    <>
      <HeaderContainer />
      <Main />
      <Footer />
    </>
  );
}
