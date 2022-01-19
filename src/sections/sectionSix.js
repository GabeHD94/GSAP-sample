import React, { useEffect } from "react";
import DualPanelSix from "../components/shared/sectionSixPanels";
import Merc from "../assests/merc.png";
import ManSmiling from "../assests/touched.png";
import ArrowRight from "../assests/rightarrow.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import { gsap } from "gsap";

import { ThemeProvider } from "styled-components";
gsap.registerPlugin(ScrollTrigger);


const theme = {
  font: "Bebas Neue",
  hTwosize: "6vw",
};

export default function SectionFour() {
  
  useEffect(() => {
    let tl = new gsap.timeline({
      repeat: 0,
    });

    tl.from(".yellowpanel6", { 
      duration: 0.3,
      scaleX: 0,
      transformOrigin: "left",
    })

    tl.from(
      ".text6",
      {
        opacity: 0,
        y: "-100px",
        ease: Power3.easeOut,
        delay: 0.1,
      },
      0.3
    );

    tl.from(
      ".man6",
      {
        ease: Power3.easeOut,
        delay: 0.3,
        opacity: 0,
        x: "-400px",
      },
      0.3
    );

    tl.from(
      ".carfromleft6",
      {
        ease: Power3.easeOut,
        delay: 0.4,
        opacity: 0,
        x: "-600px",
      },
      0.3
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DualPanelSix>
        <section className="yellowpanel6">
          <img alt="handsome" className="man6" src={ManSmiling}></img>
        </section>
        <main className="text6">
          <h2>Customers with that new car smell</h2>
          <p>
            “With Eleanor I was able to drive 2 of my dream cars this year! The
            process is always easy and affordable!”
            <span>Alex Bateman, Interface Designer</span>
            {/* <hr></hr> */}
          </p>

          <span>
            Avalible On the App
            <img alt="arrow6" src={ArrowRight}></img>
          </span>
          <div className="carfromleft6">
            <img alt="marc6" src={Merc}></img>
          </div>
        </main>
      </DualPanelSix>
    </ThemeProvider>
  );
}
