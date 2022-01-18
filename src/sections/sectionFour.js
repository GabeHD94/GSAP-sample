import React, { useState } from "react";
import DualPanelFour from "../components/shared/sectionFourPanels";
import PorscheFront from "../assests/porsche-front.png";
import TradeCarPhone from "../assests/tradeCarPhone.png";
import { ThemeProvider } from "styled-components";

const theme = {
  font: "Bebas Neue",
  hTwosize: "6vw",

};

export default function SectionFour() {
  return (
    <ThemeProvider theme={theme}>
      <DualPanelFour>
        <section>
          <img src={PorscheFront}></img>
          <div>
            <img src={TradeCarPhone}></img>
          </div>
        </section>

        <main>
          <h2>TRADE IN YOUR CAR EVERY MONTH.</h2>
          <p>
            Use Eleanor Trade-In Credits to trade in your vehicle for something
            else in our luxurious inventory. Nothing says “June” like a new car!
          </p>
        </main>
      </DualPanelFour>
    </ThemeProvider>
  );
}
