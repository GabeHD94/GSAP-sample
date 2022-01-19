import React, { useEffect } from "react";
import DualPanelThree from "../components/shared/sectionThreePanels";
import { ThemeProvider } from "styled-components";
import Porsche from "../assests/porsche-model.png";
import MapPath from "../assests/mapPath.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import { gsap } from "gsap";


gsap.registerPlugin(ScrollTrigger);

const theme = {
  font: "Bebas Neue",
  hTwosize: "6vw",

};



export default function SectionThree() {
  useEffect(() => {
    let tl = new gsap.timeline({
  
      repeat: 0,
  
    });
    
  
    tl.from(".mapapp", {  
      ease: Power3.easeOut, delay: 0.1,  
      opacity: 0,
      x: "300px",
    }, 0.3); 
  
    
    tl.from(".sec3title", {  
      opacity: 0, 
      y: "-100px", 
      ease: Power3.easeOut, delay: 0.1,
    }, 0.3); 
  
    tl.from(".sec3parag", {  
      opacity: 0, 
      y: "-100px",  
      ease: Power3.easeOut, delay: 0.1,  
    }, 0.5); 

    tl.from(".carfromleft3", {  
      ease: Power3.easeOut, delay: 0.3,  
      opacity: 0,
      x: "-400px", 
    }, 0.3); 
  
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <DualPanelThree>
        <main>
          <h2 className="sec3title">Delivered to your Door.</h2>
          <p className="sec3parag">
            Eleanor works with your schedule to have a white-glove delivery
            service deliver your new vehicle right to your door.
          </p>
        </main>

        <section>
          <img alt="mapapps" className="mapapp" src={MapPath}></img>
          <div>
            <img alt="car3" className="carfromleft3" src={Porsche}></img>
          </div>
        </section>
      </DualPanelThree>
    </ThemeProvider>
  );
}
