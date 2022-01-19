import React, { useEffect } from "react";

import LoaderOval from "../assests/load-oval.png";
import LoaderCrown from "../assests/loadCrown.png";
import LoaderDot from "../assests/loaddot.png";
import LoaderStyles from "../components/shared/loaderStyles";
import { Power3 } from "gsap";
import { gsap } from "gsap";

export default function Loader() {

  
  useEffect(() => {
    let tl = new gsap.timeline({
  
      repeat: 0, 
  
    }); 
  
   tl.from(".loaddot", {  
      ease: Power3.easeOut,
      rotation: 360,

    }, 0.1); 


    
  }, []); 
  

  return (
    <LoaderStyles>
      <img alt="oval" src={LoaderOval}></img>
      <img alt="crown" src={LoaderCrown}></img>
      <section className="loaddot">
        <img alt="dot" src={LoaderDot}></img>
      </section>
    </LoaderStyles>
  );
}
