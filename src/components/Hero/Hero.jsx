import { motion } from "framer-motion";

import Header from "../Header/Header";

import hero_image from "../../assets/hero.png";

import "./Hero.css";


const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* ad  */}
        <div className="ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>BUCHARDO GIMNASIA ARTISTICA</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Quienes </span>
            <span>Somos?</span>
          </div>
          <div>
            <span>
              Somos una escuela de gimnasia artística que comenzó en el año
              2017, poniendo mucho corazón, pasión, esfuerzo, dedicación,
              responsabilidad y compromiso, formamos un gran equipo de trabajo
              con excelentes profesionales que ponen todo lo mejor para hacer de
              esta escuela la mejor.
            </span>
          </div>
        </div>
      </div>
      <div className="right-h">
        {/* hero image */}
        <img src={hero_image} alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
