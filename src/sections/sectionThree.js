import React, { useState } from "react";
import DualPanelTwo from "../components/shared/dualPanelTwo";
import { ThemeProvider } from "styled-components";
import Mpg from "../assests/mpg.png"
import Hp from "../assests/hp.png"
import ZeroSixty from "../assests/zerosixty.png"

const theme = {
  font: "Bebas Neue",
};

export default function SectionThree() {
 
  return (
    <ThemeProvider theme={theme}>
      <DualPanelTwo>

        <main>
          <h2>Delivered to your Door.</h2>
          <p>
          Eleanor works with your schedule to have a white-glove delivery service deliver your new vehicle right to your door.
          </p>
        </main>

        <section>
        </section>
      </DualPanelTwo>
    </ThemeProvider>
  );
}
