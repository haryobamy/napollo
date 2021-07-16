import React from "react";
import {} from "reactstrap";
import { COLORS, SIZES, FONTS } from "./constants";
import { Home } from "./pages";
import logocolored from "./assets/images/logocolored.png";

const App = () => {
  function handleDevice() {
    if (window.innerWidth > 500) {
      return (
        <div>
          <Home />
        </div>
      );
    } else {
      return (
        <div style={{ color: COLORS.gray, textAlign: "center" }}>
          <p>Coming Soon....</p>
          <img src={logocolored} style={{ width: 100 }} />
          <p>Napollo</p>
          <p>please view on desktop</p>
        </div>
      );
    }
  }
  return (
    <div
      className=""
      style={{
        // margin: "5px 10px",
        backgroundColor: COLORS.black,
      }}
    >
      {/* <Home /> */}
      {handleDevice()}
    </div>
  );
};

export default App;
