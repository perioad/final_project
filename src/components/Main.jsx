import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Account } from "./Account";
import PreviewServiceContainer from "../containers/PreviewServiceContainer";
import AllServicesContainer from "../containers/AllServicesContainer";
import { ShowError } from "./ShowError";
import UserServicesContainer from "../containers/UserServicesContainer";
import UserInfoContainer from "../containers/UserInfoContainer";
import SignContainer from "../containers/SignContainer";

export function Main() {
  return (
    <Switch>
      <Route path="/my-services/:id">
        <Account />
        <PreviewServiceContainer />
      </Route>

      <Route path="/my-services" exact>
        <Account />
        <UserServicesContainer />
      </Route>

      <Route path="/my-info">
        <Account />
        <UserInfoContainer />
      </Route>

      <Route path="/services" exact>
        <AllServicesContainer />
      </Route>

      <Route path="/services/:id">
        <PreviewServiceContainer />
      </Route>

      <Route path="/sign">
        <SignContainer />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route>
        <ShowError
          errorMessage="Данная страница еще не осознала свое существование"
          gif="https://media.giphy.com/media/d3aCHTQOTZ3kQyPu/giphy.gif"
        />
      </Route>
    </Switch>
  );
}
