import React, { useState } from "react";
import DualPanel from "../components/shared/sectionTwoPanels";
import { ThemeProvider } from "styled-components";
import Mpg from "../assests/mpg.png";
import ArrowRight from "../assests/rightarrow.svg";
import ArrowLeft from "../assests/leftarrow.svg";

import Hp from "../assests/hp.png";
import ZeroSixty from "../assests/zerosixty.png";

const theme = {
  font: "Bebas Neue",
  hTwosize: "6vw",
};

export default function SectionTwo() {
  const carStats = [
    {
      make: "PORSCHE",
      model: "2019 - 911 CARRERA S",
      mpg: " 19/24",
      hp: "443",
      zeroSixty: "3.2",
    },
    {
      make: "LAND ROVER",
      model: "2019 - RANGE ROVER VELAR",
      mpg: " 25/29",
      hp: "247",
      zeroSixty: "6.4 ",
    },
  ];

  const [currentCar, setCurrentCar] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <DualPanel>
        <section>
          <span>
            <img
              src={ArrowLeft}
              onClick={() => {
                currentCar > 0
                  ? setCurrentCar(currentCar - 1)
                  : setCurrentCar(currentCar + 1);
              }}
            ></img>

            <img
              src={ArrowRight}
              onClick={() => {
                currentCar < carStats.length - 1
                  ? setCurrentCar(currentCar + 1)
                  : setCurrentCar(currentCar - 1);
              }}
            ></img>
          </span>
            <h1>{carStats[currentCar].make}</h1>
            <p>{carStats[currentCar].model}</p>
            <div>
              <img src={Mpg}></img>
              <h2>{carStats[currentCar].mpg}</h2>
            </div>
            <div>
              <img src={Hp}></img>
              <h2>{carStats[currentCar].hp}</h2>
            </div>
            <div>
              <img src={ZeroSixty}></img>
              <h2>{carStats[currentCar].zeroSixty}</h2>
            </div>
        </section>

        <main>
          <h2>SELECT A VEHICLE FROM YOUR PHONE.</h2>
          <p>
            Select from a wide range of luxury vehicles in our inventory. Drive
            it for a month, trade it the next for something else you have always
            wanted to own.
          </p>
        </main>
      </DualPanel>
    </ThemeProvider>
  );
}
