import React from "react";
import { Switch, Route } from "react-router-dom";
import { Booking } from "../Components/BookingPage/Booking";

import LandingPage from "../Components/LandingPage/LandingPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/booking" exact>
          <Booking />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
