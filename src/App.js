
import React, { useState, useEffect} from 'react';
import Header from './sections/sectionOne'
import SectionTwo from './sections/sectionTwo'
import SectionThree from './sections/sectionThree'
import SectionFour from './sections/sectionFour'
import SectionFive from './sections/sectionFive'
import SectionSix from './sections/sectionSix'
import Footer from './sections/footer'
import Loader from './sections/loader'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 600);
  }, [])

  // useEffect(() => {
  //   gsap.from (".sectiontwo", {
  //     scrollTrigger: {
  //       trigger: ".sectiontwo",
  //       start: "bottom 90%",
  //       // end: "bottom 60%",
  //       // markers:true,
  //     }
  //   })

  // });

  

  return (
    <div className="App">
        {
          loading ? 
          <Loader/>
          :
          <div>
            <Header />
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <Footer/>
          </div>

        }
    </div>
  );
}

export default App;
