import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routing/Routes";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes />
      
    </div>
  );
};

export default App;
