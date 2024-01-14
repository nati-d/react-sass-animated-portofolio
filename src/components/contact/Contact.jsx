import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./contact.scss";

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const serviceId = "service_6s9qkqk";
    const templateId = "template_4d9mxmc";
    const userId = "sxNBY5HdcyBz8rlxm";
  
    try {
      const result = await emailjs.sendForm(serviceId, templateId, e.target.form, userId);
      console.log("Email sent successfully:", result.text);
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  
    e.target.form.reset();
  };
  
  

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="title" variants={variants}>
        <h1>Contact Me</h1>
        <h3>
          Let`s talk about your <span>Idea</span>
        </h3>
      </motion.div>

      <motion.div className="form" variants={variants}>
        <div className="left">
          <h3>Let`s work together</h3>
          <h1>Do you have a project in your mind</h1>
          <motion.div className="contacts" variants={variants}>
            <div className="address">
              <img src="./call.png" alt="Call Icon" />
              <span>+2519 77374409</span>
            </div>
            <div className="address">
              <img src="./email.png" alt="Email Icon" />
              <span>nathnaeldes@gmail.com</span>
            </div>
            <div className="address">
              <img src="./pin.png" alt="Location Icon" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>

          <motion.div className="socials" variants={variants}>
            <a href="https://github.com/nati-d">
              <img src="github.png" alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/nathnael-desalegn">
              <img src="linkedin.png" alt="LinkedIn Icon" />
            </a>
            <a href="https://t.me/Serial442">
              <img src="telegram.png" alt="Telegram Icon" />
            </a>
            <a href="@na_ti_ye">
              <img src="instagram.png" alt="Instagram Icon" />
            </a>
          </motion.div>
        </div>
        <motion.form className="right" variants={variants}>
          <motion.div className="wrap" variants={variants}>
            <div className="inputs">
              <label>Full Name:</label>
              <input type="text" placeholder="Your Name" name="from_name" />
            </div>
            <div className="inputs">
              <label>Email:</label>
              <input type="email" placeholder="Your Email" name="from_email" />
            </div>
          </motion.div>
          <motion.div className="inputs" variants={variants}>
            <label>Subject:</label>
            <input type="text" placeholder="Subject Here" name="subject" />
          </motion.div>
          <motion.div className="inputs" variants={variants}>
            <label>Message:</label>
            <textarea type="text" placeholder="Message Here" name="message" />
          </motion.div>

          <motion.button
            onClick={handleSubmit}
            initial={{ background: "white", color: "black" }}
            whileHover={{ background: "transparent", color: "white" }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
