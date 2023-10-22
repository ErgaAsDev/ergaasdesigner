import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wavesbg from "./components/Wavesbg";
import Section from "./components/Section";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import { useState } from "react";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export default function Home() {
  const [hexColor, setHexColor] = useState("#5ED600");
  const [animate, setAnimate] = useState(false);

  const getRandomNumber = () => Math.floor(Math.random() * hex.length);

  const generateRandomColor = () => {
    let newHexColor = "#";
    for (let i = 0; i < 6; i++) {
      newHexColor += hex[getRandomNumber()];
    }
    setHexColor(newHexColor);
    setAnimate(!animate);
  };

  console.log(hexColor);
  return (
    <div className="font-['Nunito_Sans']" id="background">
      {/* <Navbar /> */}
      <Header
        hexColor={hexColor}
        generateRandomColor={generateRandomColor}
        animate={animate}
      />
      <Wavesbg hexColor={hexColor} animate={animate} />
      <Section hexColor={hexColor} />
      <Cards hexColor={hexColor} />
      <Footer hexColor={hexColor} />
    </div>
  );
}
