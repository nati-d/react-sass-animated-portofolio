import { motion } from "framer-motion";
import "./contact.scss";

const variants = {
    initial:{
        x:-300,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

const Contact = () => {
  return (
    <motion.div className="contact" variants= {variants} initial="initial" whileInView="animate">
      <motion.div className="title" variants= {variants}>
        <h1>Contact Me</h1>
        <h3>
          Let`s talk about your <span>Idea</span>
        </h3>
      </motion.div>

      <motion.div className="form" variants= {variants}>
        <div className="left">
          <h3>Let`s work together</h3>
          <h1>Do you have a project in your mind</h1>
          <motion.div className="contacts" variants= {variants}>
            <div className="address">
              <img src="./call.png" />
              <span>+2519 77374409</span>
            </div>
            <div className="address">
              <img src="./email.png" />
              <span>nathnaeldes@gmail.com</span>
            </div>
            <div className="address">
              <img src="./pin.png" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>

          <motion.div className="socials" variants= {variants}>
            <a href="#">
              <img src="github.png" alt="" />
            </a>
            <a href="#">
              <img src="linkedin.png" alt="" />
            </a>
            <a href="#">
              <img src="telegram.png" alt="" />
            </a>
            <a href="#">
              <img src="instagram.png" alt="" />
            </a>
          </motion.div>
        </div>
        <motion.div className="right" variants= {variants}>
          <motion.div className="wrap" variants= {variants}>
            <div className="inputs">
              <label>Full Name:</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="inputs">
              <label>Email:</label>
              <input type="email" placeholder="Your Email" />
            </div>
          </motion.div>
          <motion.div className="inputs" variants= {variants}>
            <label>Subject:</label>
            <input type="text" placeholder="Subject Here" />
          </motion.div>
          <motion.div className="inputs" variants= {variants}>
            <label>Message:</label>
            <textarea type="text" placeholder="Message Here" />
          </motion.div>

          <motion.button initial={{background:"white", color:'black'}} whileHover={{background:"transparent", color:'white'}} whileTap={{scale:0.95}} >Send</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
