import React, { useEffect } from "react";

import DualPanelFive from "../components/shared/sectionFivePanels";
import CoinPrice from "../assests/coin-pricing.png";
import Insurance from "../assests/insurance.png";
import Maintenance from "../assests/maintenance.png";
import Oval from "../assests/Oval.png";
import { ThemeProvider } from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const theme = {
  font: "Bebas Neue",
  hTwosize: "2vw",
};

export default function SectionFive() {
  
  useEffect(() => {
    let tl = new gsap.timeline({
  
      repeat: 0,
    });
    tl.from(
      ".triPanel1",
      {
        opacity: 0, 
        y: "-100px", 
        ease: Power3.easeOut, delay: 0.1,
      }, 
      0.3
    );

    tl.from(
      ".triPanel2",
      {
        opacity: 0, 
        y: "-100px", 
        ease: Power3.easeOut, delay: 0.3,
      }, 
      0.3
    );

    tl.from(
      ".triPanel3",
      {
        opacity: 0, 
        y: "-100px", 
        ease: Power3.easeOut, delay: 0.4,
      }, 
      0.3
    );

  }, []);

  return ( 
    <ThemeProvider theme={theme}>
      <DualPanelFive>
        <section className="triPanel1">
          <img alt="coin" src={CoinPrice}></img>
          <div>
            <h2>SIMPLE MONTHLY PRICING</h2>
            <p>
              Pick your plan, pay the monthly price. Thats it. No hidden fees!
            </p>
          </div>
        </section>
        <section  className="triPanel2">
          <img alt="insurance" src={Insurance}></img>
          <div>
            <h2>VEHICLE INSURANCE INCLUDED</h2>
            <p>
              That’s right, you’re covered. All Eleanor plans include insurance
              coverage.
            </p>
          </div>
        </section>
        <section  className="triPanel3">
          <img alt="maintain" src={Maintenance}></img>
          <img alt="shade" src={Oval}></img>
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
