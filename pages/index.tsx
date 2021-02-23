import React from "react";
import HomeParallax from "../components/home/Parallax.component";
import ThreeValues from "../components/home/ThreeValues.component";
import ContactForm from "../components/home/Contact.component";
import WipeSlider from "../components/home/WipeSlider.component";
import styles from "../components/home/WipeSlider.module.scss";
export default function Home() {
  return (
    <div className="bg">
      <HomeParallax />
      <div className={`mt-4 ${styles.animatingblock}`}>
        <div className={`${styles.content}`}>
          <h3>We Specialize In</h3>
          <h1>
            <WipeSlider />
          </h1>
        </div>
      </div>
      <ThreeValues />
      <ContactForm />
    </div>
  );
}
