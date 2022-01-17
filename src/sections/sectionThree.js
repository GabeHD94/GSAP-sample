import React, { useState } from "react";
import DualPanelTwo from "../components/shared/dualPanelTwo";
import { ThemeProvider } from "styled-components";
import Map from "../assests/map.png";
import Porsche from "../assests/porsche-model.png";
import CarDelivery from "../assests/carDelivery.png";
import MapPath from "../assests/mapPath.png";

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
            Eleanor works with your schedule to have a white-glove delivery
            service deliver your new vehicle right to your door.
          </p>
        </main>

        <section>
          <img src={Map}></img>
          <img src={MapPath}></img>
          <div>
            <img src={Porsche}></img>
          </div>
        </section>
      </DualPanelTwo>
    </ThemeProvider>
  );
}
