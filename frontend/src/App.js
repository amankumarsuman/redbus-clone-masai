 
import React from "react";
 import { Booking } from "./Components/BookingPage/Booking";

import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routing/Routes";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* <Navbar />
      <Routes /> */}
      <Booking/>
      
    </div>
  );
};

export default App;
