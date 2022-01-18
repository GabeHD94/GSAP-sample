import React, { useState } from "react";
import DualPanelSix from "../components/shared/sectionSixPanels";
import PorscheFront from "../assests/porsche-front.png";
import Merc from "../assests/merc.png";
import ManSmiling from "../assests/touched.png";
import ArrowRight from "../assests/rightarrow.svg";

import { ThemeProvider } from "styled-components";

const theme = {
  font: "Bebas Neue",
  hTwosize: "6vw",
};

export default function SectionFour() {
  return (
    <ThemeProvider theme={theme}>
      <DualPanelSix>
        <section>
          <img src={ManSmiling}></img>
        </section>

        <main>
          <h2>Customers with that new car smell</h2>
          <p>
            “With Eleanor I was able to drive 2 of my dream cars this year! The
            process is always easy and affordable!”
            <span>Alex Bateman, Interface Designer</span>
          <hr></hr>
          </p>

          <span>
            Avalible On the App
            <img src={ArrowRight}></img>
          </span>
          <div>
            <img src={Merc}></img>
          </div>
        </main>
      </DualPanelSix>
    </ThemeProvider>
  );
}
