import React, { useEffect } from "react";

import LoaderOval from "../assests/load-oval.png";
import LoaderCrown from "../assests/loadCrown.png";
import LoaderDot from "../assests/loaddot.png";
import LoaderStyles from "../components/shared/loaderStyles";
import { Power3 } from "gsap";
import { gsap } from "gsap";

export default function Loader() {

  let tl = new gsap.timeline({

    repeat: 0, 

  }); 
  
  useEffect(() => {
  
   tl.from(".loaddot", {  
      ease: Power3.easeOut,
      rotation: 360,

    }, 0.1); 


    
  }, []); 
  

  return (
    <LoaderStyles>
      <img src={LoaderOval}></img>
      <img src={LoaderCrown}></img>
      <section className="loaddot">
        <img src={LoaderDot}></img>
      </section>
    </LoaderStyles>
  );
}
