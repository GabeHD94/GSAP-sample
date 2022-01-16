import React, { useState } from "react";
import DualPanelThree from "../components/shared/dualPanelThree";
import { ThemeProvider } from "styled-components";


const theme = {
  font: "Bebas Neue",
};

export default function SectionFour() {

  return (
    <ThemeProvider theme={theme}>
      <DualPanelThree>
        {/* <button onClick={handleAarowButton}>fdsfdsf</button> */}
        <section>
        </section>

        <main>
          <h2>TRADE IN YOUR CAR EVERY MONTH.</h2>
          <p>
          Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.  Nothing says “June” like a new car!
          </p>
        </main>
      </DualPanelThree>
    </ThemeProvider>
  );
}
