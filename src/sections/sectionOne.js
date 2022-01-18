import React, { useRef, useEffect} from "react";
import { gsap } from "gsap";

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

export default function Header() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q(".yellowback, .sec1cars"), {
        x: "-100vw",
        duration: 0.5,
      })


      .from(q(".headingTitle, .onapp"), {
        y: "-10vw",
        opacity: 0,
        duration: 0.5,
      })

      .from(q(".phonehead"), {
        x: "10vw",
        opacity: 0,
        duration: 0.5,
        delay:0,
      })

      .to(q(".headingTitle"), {
        y: 0,
        opacity: 1,
        duration: 0.5,
      })

  }, []);
  return (
    <div ref={el}>
      <HeaderContainerStyled>
        <main className="yellowback">
          <NavBar>
            <img src={CrownEleanor} />
          </NavBar>
          <HeadContainer>
            <HeaderStyled>
              <section className="headingTitle">
                <BigHeading>
                  Drive a New<br></br>Car Every Month.
                </BigHeading>
                <p className="onapp">
                  Avalible On the App
                  <img src={ArrowRight}></img>
                </p>
              </section>
              <HeaderCarWrapper className="sec1cars">
                <img src={a7} />
                <div>
                  <img src={A7full}></img>
                </div>
                <section>
                  <img src={MerCar} />
                  <div>
                    <img src={Porsche} />
                  </div>
                </section>
              </HeaderCarWrapper>
            </HeaderStyled>
            <PhoneHeader className="phonehead">
              <img src={HeaderPhone} />
            </PhoneHeader>
          </HeadContainer>
        </main>
      </HeaderContainerStyled>
    </div>
  );
}
