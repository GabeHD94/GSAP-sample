
import React, { useState, useEffect} from 'react';
import Header from './sections/sectionOne'
import SectionTwo from './sections/sectionTwo'
import SectionThree from './sections/sectionThree'
import SectionFour from './sections/sectionFour'
import SectionFive from './sections/sectionFive'
import SectionSix from './sections/sectionSix'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <div className="App">
        {
          loading ? 
          <div>loading</div>
          :
          <div>
            <Header/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>


          </div>
        }
    </div>
  );
}

export default App;
