import React from "react";
import DualPanelFive from "../components/shared/sectionFivePanels";
import CoinPrice from "../assests/coin-pricing.png";
import Insurance from "../assests/insurance.png";
import Maintenance from "../assests/maintenance.png";
import Oval from "../assests/Oval.png";
import { ThemeProvider } from "styled-components";

const theme = {
  font: "Bebas Neue",
  hTwosize: "2vw",
};

export default function sectionFive() {
  return (
    <ThemeProvider theme={theme}>
      <DualPanelFive>
        <section>
          <img src={CoinPrice}></img>
          <div>
            <h2>SIMPLE MONTHLY PRICING</h2>
            <p>
              Pick your plan, pay the monthly price. Thats it. No hidden fees!
            </p>
          </div>
        </section>
        <section>
          <img src={Insurance}></img>
          <div>
            <h2>VEHICLE INSURANCE INCLUDED</h2>
            <p>
              That’s right, you’re covered. All Eleanor plans include insurance
              coverage.
            </p>
          </div>
        </section>
        <section>
          <img src={Maintenance}></img>
          <img src={Oval}></img>
          <div>
            <h2>MAINTENANCE IS COVERED</h2>
            <p>
              Leave it us. Don’t worry about maintaining your vehicle. Eleanor
              covers that as well.
            </p>
          </div>
        </section>
      </DualPanelFive>
    </ThemeProvider>
  );
}
