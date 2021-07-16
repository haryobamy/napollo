import React from "react";
import {} from "reactstrap";
import { COLORS, SIZES, FONTS } from "./constants";
import { Home } from "./pages";

const App = () => {
  return (
    <div
      style={{
        // margin: "5px 10px",
        backgroundColor: COLORS.black,
      }}
    >
      <Home />
    </div>
  );
};

export default App;
