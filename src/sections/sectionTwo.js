import React, { useEffect, useState } from "react";
import DualPanelTwo from "../components/shared/sectionTwoPanels";
import { ThemeProvider } from "styled-components";
import Mpg from "../assests/mpg.png";
import ArrowRight from "../assests/rightarrow.svg";
import ArrowLeft from "../assests/leftarrow.svg";
import Rover from "../assests/range-rover.png";
import PorscheLeft from "../assests/porsche-left.png";
import Hp from "../assests/hp.png";
import ZeroSixty from "../assests/zerosixty.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const theme = {
  font: "Bebas Neue",
  hTwosize: "6vw",
};

export default function SectionTwo() {
  let tl = new gsap.timeline({
    repeat: 0,
  });

  useEffect(() => {
    tl.from(".yellowpanel", {
      duration: 0.4,
      scaleX: 0,
      transformOrigin: "right",
    });

    tl.from(
      ".stats",
      {
        duration: 0.1,
        opacity: 0,
        transformOrigin: "right",
      },
      0.5
    );

    tl.from(
      ".car",
      {
        ease: Power3.easeOut,
        delay: 0.1,
        opacity: 0,
        x: "600px",
      },
      0.3
    );

    tl.from(
      ".sec2title",
      {
        opacity: 0,
        y: "-100px",
        ease: Power3.easeOut,
        delay: 0.1,
      },
      0.3
    );

    tl.from(
      ".sec2parag",
      {
        opacity: 0,
        y: "-100px",
        ease: Power3.easeOut,
        delay: 0.1,
      },
      0.5
    );
  }, []);

  const carStats = [
    {
      make: "PORSCHE",
      model: "2019 - 911 CARRERA S",
      mpg: " 19/24",
      hp: "443",
      zeroSixty: "3.2",
      img: PorscheLeft,
    },
    {
      make: "LAND ROVER",
      model: "2019 - RANGE ROVER VELAR",
      mpg: " 25/29",
      hp: "247",
      zeroSixty: "6.4 ",
      img: Rover,
    },
  ];

  const [currentCar, setCurrentCar] = useState(0);


  return (
    <ThemeProvider theme={theme}>
      <DualPanelTwo>
        <section className="yellowpanel">
          <span>
            <img
              id="button"
              src={ArrowLeft}
              className="stats"
              onClick={() => {
                currentCar > 0
                  ? setCurrentCar(currentCar - 1)
                  : setCurrentCar(currentCar + 1);
              }}
            ></img>

            <img
              src={ArrowRight}
              className="stats"
              onClick={() => {
                currentCar < carStats.length - 1
                  ? setCurrentCar(currentCar + 1)
                  : setCurrentCar(currentCar - 1);
              }}
            ></img>
          </span>

          <h1 className="stats">{carStats[currentCar].make}</h1>
          <p className="stats">{carStats[currentCar].model}</p>
          <div className="stats">
            <img className="stats" src={Mpg}></img>
            <h2 className="stats">{carStats[currentCar].mpg}</h2>
          </div>
          <div className="stats">
            <img className="stats" src={Hp}></img>
            <h2 className="stats">{carStats[currentCar].hp}</h2>
          </div>
          <div className="stats">
            <img className="stats" src={ZeroSixty}></img>
            <h2 className="stats">{carStats[currentCar].zeroSixty}</h2>
          </div>

          <h3>
            <img className="car" src={carStats[currentCar].img}></img>
          </h3>
        </section>

        <main>
          <h2 className="sec2title">SELECT A VEHICLE FROM YOUR PHONE.</h2>
          <p className="sec2parag">
            Select from a wide range of luxury vehicles in our inventory. Drive
            it for a month, trade it the next for something else you have always
            wanted to own.
          </p>
        </main>
      </DualPanelTwo>
    </ThemeProvider>
  );
}
