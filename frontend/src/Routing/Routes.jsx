import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../Components/LandingPage/LandingPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
       
       
     
      </Switch>
    </>
  );
};

export default Routes;
