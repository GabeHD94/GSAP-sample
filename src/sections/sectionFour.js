import React, { useEffect } from "react";
import DualPanelFour from "../components/shared/sectionFourPanels";
import PorscheFront from "../assests/porsche-front.png";
import TradeCarPhone from "../assests/tradeCarPhone.png";
import { ThemeProvider } from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3} from "gsap";
import { gsap } from "gsap";

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
  
   tl.from(".phoneInventory", {  
      ease: Power3.easeOut, delay: 0.4, 
      opacity: 0,
      y: "-300px",
    }, 0.3); 
  
  
   tl.from(".sec4title", { 
      opacity: 0, 
      y: "-100px", 
      ease: Power3.easeOut, delay: 0.7,
    }, 0.3); 
  
   tl.from(".sec4parag", {  
      opacity: 0, 
      y: "-100px",  
      ease: Power3.easeOut, delay: 0.7,  
  
    }, 0.5); 
   tl.from(".carPanelfromleft4", {  
      ease: Power3.easeOut, delay: 0.3,  
      opacity: 0,
      x: "-400px", 
    }, 0.3); 
  
  }, []); 
  return (
    <ThemeProvider theme={theme}>
      <DualPanelFour>
        <section className="carPanelfromleft4">
          <img alt="porf" src={PorscheFront}></img>
          <div>
            <img alt="phoneinv" className="phoneInventory" src={TradeCarPhone}></img>
          </div>
        </section>

        <main>
          <h2 className="sec4title">TRADE IN YOUR CAR EVERY MONTH.</h2>
          <p className="sec4parag">
            Use Eleanor Trade-In Credits to trade in your vehicle for something
            else in our luxurious inventory. Nothing says “June” like a new car!
          </p>
        </main>
      </DualPanelFour>
    </ThemeProvider>
  );
}
