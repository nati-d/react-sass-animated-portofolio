import { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from 'framer-motion'

const Parallax = ({ type }) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "50%"])
    const xBg = useTransform(scrollYProgress, [0,1], ["0%", "10%"])
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #1F1F1F, #1E1E1E"
            : "linear-gradient(180deg, #1E1E1E, #1F1F1F",
      }}
    >
      <motion.h1 style={{y:yText}}>{type === "services" ? "What I Do ?" : "What I Did ?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{x:xBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
