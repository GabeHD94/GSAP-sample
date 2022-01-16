
import React, { useState, useEffect} from 'react';
import Header from './sections/header'
import SectionTwo from './sections/sectionTwo'


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


          </div>
        }
    </div>
  );
}

export default App;
