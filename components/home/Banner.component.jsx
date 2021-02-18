import Hero from "./Hero.component";
import { useEffect, useState } from "react";

const DURATION = 2500;

const Banner = () => {
  const values = ["Name1", "Name2", "Name3", "Name4"];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % values.length);
    }, DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container border">
      <div>{values[current]}</div>
      <Hero />
    </div>
  );
};

export default Banner;
