import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Data from "./components/Data";

function App() {
  const Cards = Data.map((data) => {
    return (
      <Card
        img={data.img}
        price={data.price}
        content={data.content}
        num={data.num}
        rating={data.rating}
        CardBadge={data.CardBadge}
      />
    );
  });
  return (
    <div className="outer-div">
      <Navbar />
      <Hero />
      <div className="outer-card-div">{Cards}</div>
    </div>
  );
}

export default App;
