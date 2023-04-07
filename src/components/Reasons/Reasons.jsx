import { useState } from "react";
import { motion } from "framer-motion";
import leftArrow from "../../assets/icons/leftArrow.png";
import rightArrow from "../../assets/icons/rightArrow.png";

import tick from "../../assets/icons/tick.png";

import { reasonsData } from "../../data/reasonsData.js";
import "./Reasons.css";

import { gallery } from "../../data/galleryData";



const Reasons = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = gallery.length;

  return (
    <div className="Reasons" id="Reasons">
      <div className="left-R">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={gallery[selected]}
          alt=""
        />
        <div className="arrowS">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
      <div className="right-r">
        <div className="title">
          <span className="stroke-text">Por </span>
          <span>que</span>
          <span className="stroke-text"> elegirnos?</span>
        </div>
        <div className="details-r">
          {reasonsData.map((r, i) => (
            <div key={i}>
              <img src={tick} alt=""></img>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
