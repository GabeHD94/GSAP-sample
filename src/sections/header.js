import React from "react";
import CrownEleanor from "../assests/eleanor.png";
import HeaderPhone from "../assests/headerphone.png";
import MerCar from "../assests/merc.png";
import Porsche from "../assests/porsche.png";
import a7 from "../assests/a7.png";
import ArrowRight from "../assests/rightarrow.svg";
import HeaderStyled from "../components/header/headerStyled";
import BigHeading from "../components/shared/bigHeadingStyled";
import NavBar from "../components/header/navbar";
import HeaderContainerStyled from "../components/header/HeaderContainerStyled";
import HeadContainer from "../components/header/headContainer";
import PhoneHeader from "../components/header/phoneheader";
import { ThemeProvider } from "styled-components";

import HeaderCarWrapper from "../components/header/headerCarWrapper";

export default function header() {
  return (
    <div>
      <HeaderContainerStyled>
        <main>
          <NavBar>
            <img src={CrownEleanor} />
          </NavBar>
          <HeadContainer>
            <HeaderStyled>
              <section>
                <BigHeading>
                  Drive a New<br></br>Car Every Month.
                </BigHeading>
                <p>
                  Avalible On the App
                  <img src={ArrowRight}></img>
                  
                </p>
              </section>
              {/* <HeaderCarWrapper>
            <div style={{ display: "flex" }}>
            <img src={a7} style={{ width: "480px", marginTop: "25px" }} />
            <div style={{ marginTop: "85px", marginLeft: "-50px" }}>
            <img src={MerCar} style={{ width: "560px", height: "160px" }} />
            </div>
            </div>
            <img
            src={Porsche}
            style={{
              width: "750px",
              marginTop: "-400px",
              marginLeft: "70px",
              marginBottom: "10px",
            }}
            />
          </HeaderCarWrapper> */}
            </HeaderStyled>
            <PhoneHeader>
              <img src={HeaderPhone} />
            </PhoneHeader>
          </HeadContainer>
        </main>
      </HeaderContainerStyled>
    </div>
  );
}
