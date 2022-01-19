import React, { useEffect } from "react";

import DualPanelFive from "../components/shared/sectionFivePanels";
import CoinPrice from "../assests/coin-pricing.png";
import Insurance from "../assests/insurance.png";
import Maintenance from "../assests/maintenance.png";
import Oval from "../assests/Oval.png";
import { ThemeProvider } from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3, TimelineLite } from "gsap";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const theme = {
  font: "Bebas Neue",
  hTwosize: "2vw",
};

export default function SectionFive() {
  let tl = new gsap.timeline({

    repeat: 0,
  });

  useEffect(() => {
    tl.from(
      ".mapapp",
      {
        ease: Power3.easeOut,
        delay: 0.1,
        opacity: 0,
        x: "300px",
        toggleActions: "restart none none none",
      },
      0.3
    );

    tl.from(
      ".sec3title",
      {
        opacity: 0,
        y: "-100px",
        ease: Power3.easeOut,
        delay: 0.1,
      },
      0.3
    );

    tl.from(
      ".sec3parag",
      {
        opacity: 0,
        y: "-100px",
        ease: Power3.easeOut,
        delay: 0.1,
      },
      0.5
    );
    tl.from(
      ".carfromleft",
      {
        ease: Power3.easeOut,
        delay: 0.3,
        opacity: 0,
        x: "-400px",
        toggleActions: "restart none none none",
      },
      0.3
    );
  }, []);

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
