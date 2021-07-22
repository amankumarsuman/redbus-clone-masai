import React from "react";
import { Booking } from "./Components/Booking-page/Booking";
import Footer from "./Components/LandingPage/Footer/Footer";
import SubFooter from "./Components/LandingPage/SubFooter/SubFooter";

import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routing/Routes";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes />
     <SubFooter/>
     <Footer/>
    </div>
  );
};

export default App;
