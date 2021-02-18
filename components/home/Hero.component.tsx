import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={`${styles.herobgcontainer}`}>
      <div className={`${styles.herobgcol1}`}></div>
      <div className={`${styles.herobgcol2}`}></div>
    </div>
  );
};

export default Hero;
