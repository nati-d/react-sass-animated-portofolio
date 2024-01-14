import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -200,
    y:500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y:0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <b>Your</b> Digital
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Presence</b> Matters
          </h1>
          <motion.button initial={{background:'transparent'}} whileHover={{ background: "#ff6f61", color: "black" }}>
            Contact Me
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          initial={{ background: "transparent", color: "white" }}
          whileHover={{ background: "white", color: "black" }}
        >
          <img src="./coding.png" />
          <h2>Web Development</h2>
          <p>
            Empowering businesses with seamless and innovative web development
            solutions to enhance online presence, user experience, and overall
            digital performance.
          </p>
        </motion.div>
        <motion.div
          className="box"
          initial={{ background: "transparent", color: "white" }}
          whileHover={{ background: "white", color: "black" }}
          variants={variants}
        >
          <img src="./mobile-development.png" />
          <h2>Mobile Development</h2>
          <p>
            Crafting cutting-edge mobile applications that deliver exceptional
            user experiences, leveraging the latest technologies to bring
            innovative solutions to the palm of your hand.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          initial={{ background: "transparent", color: "white" }}
          whileHover={{ background: "white", color: "black" }}
        >
          <img src="./curve.png" />
          <h2>UI Design</h2>
          <p>
            Elevating digital experiences through thoughtful and visually
            compelling UI design, blending creativity with functionality to
            deliver intuitive and engaging user interfaces.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="box"
          initial={{ background: "transparent", color: "white" }}
          whileHover={{ background: "white", color: "black" }}
        >
          <img src="./optimization.png" />
          <h2>SEO Optimization</h2>
          <p>
            Driving online visibility and business growth through strategic SEO
            optimization, ensuring top-ranking performance on search engines to
            maximize reach and enhance digital presence
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
