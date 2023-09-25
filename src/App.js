import React from 'react';

import TopSection from "./components/TopSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Footer from "./components/Footer";
import { useState } from "react";


function App(props) {
  const [value, setValue] = useState("");
  return (
    <div>
   
    <TopSection value={value} setValue={setValue} />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <Footer value={value} setValue={setValue} />
    </div>
  );
}

export default App;