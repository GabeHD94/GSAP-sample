import React, { useEffect } from "react";
import CrownEleanor from "../assests/eleanor.png";
import HeaderPhone from "../assests/headerphone.png";
import MerCar from "../assests/merc.png";
import Porsche from "../assests/porsche.png";
import a7 from "../assests/a7.png";
import A7full from "../assests/audi-a7.png";
import ArrowRight from "../assests/rightarrow.svg";
import HeaderStyled from "../components/header/headerStyled";
import BigHeading from "../components/shared/bigHeadingStyled";
import NavBar from "../components/header/navbar";
import HeaderContainerStyled from "../components/header/HeaderContainerStyled";
import HeadContainer from "../components/header/headContainer";
import PhoneHeader from "../components/header/phoneheader";
import HeaderCarWrapper from "../components/header/headerCarWrapper";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  let tl = new gsap.timeline({
    repeat: 0,
  });

  useEffect(() => {
    tl.from(".yellowback", {
      ease: Power3.easeOut,
      delay: 0.1,
      x: "-100vw",
    });

    tl.from(
      ".sec1cars",
      {
        ease: Power3.easeOut,
        delay: 0.1,
        x: "-100vw",
      },
      0.1
    );

    tl.from(
      ".headingTitle",
      {
        y: "-10vw",
        opacity: 0,
      },
      0.3
    );      

    tl.from(
      ".onapp",
      {
        y: "-10vw",
        opacity: 0,
      },    
      0.5
    );

    tl.from( 
      ".phonehead",
      { 
        x: "10vw",
        opacity: 0,
        delay: 0,
      },
      0.5
    );

    tl.to(
      ".headingTitle",
      {
        y: 0,
        opacity: 1,
      },
      0.5
    );
  }, []);
  return (
    <div>
      <HeaderContainerStyled>
        <main className="yellowback">
          <NavBar>
            <img alt="celeanor" src={CrownEleanor} />
          </NavBar>
          <HeadContainer>
            <HeaderStyled>
              <section className="headingTitle">
                <BigHeading>
                  Drive a New<br></br>Car Every Month.
                </BigHeading>
                <p className="onapp">
                  Avalible On the App
                  <img alt="arrow1r" src={ArrowRight}></img>
                </p>
              </section>
              <HeaderCarWrapper className="sec1cars">
                <img alt="a71" src={a7} />
                <div>
                  <img alt="a7f" src={A7full}></img>
                </div>
                <section>
                  <img alt="mer" src={MerCar} />
                  <div>
                    <img alt="por" src={Porsche} />
                  </div>
                </section>
              </HeaderCarWrapper>
            </HeaderStyled>
            <PhoneHeader className="phonehead">
              <img alt="phone1" src={HeaderPhone} />
            </PhoneHeader>
          </HeadContainer>
        </main>
      </HeaderContainerStyled>
    </div>
  );
}
