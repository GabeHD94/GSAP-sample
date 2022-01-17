import React, { useState } from "react";
import DualPanelFour from "../components/shared/dualPanelsFour";
import PorscheFront from "../assests/porsche-front.png";
import Merc from "../assests/merc.png";
import ManSmiling from "../assests/touched.png";
import { ThemeProvider } from "styled-components";

const theme = {
  font: "Bebas Neue",
};

export default function SectionFour() {
  return (
    <ThemeProvider theme={theme}>
      <DualPanelFour>
        <section>
          <img src={ManSmiling}></img>
        </section>

        <main>
          <h2>Customers with that new car smell</h2>
          <p>
          “With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”
          </p>
          <img src={Merc}></img>  
        </main>
      </DualPanelFour>
    </ThemeProvider>
  );
}
