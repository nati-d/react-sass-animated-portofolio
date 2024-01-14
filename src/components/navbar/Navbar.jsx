import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const Navbar = () => {
  const items = [
    { name: "Homepage", href: "#Hero" },
    { name: "Services", href: "#Services" },
    { name: "Portofolio", href: "#Portofolio" },
    { name: "Contact", href: "#Contact" },
  ];
  return (
    <div className="navbar">
      {/* Sidebar */}
      {/* <Sidebar/> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nathy
        </motion.span>

        <motion.div className="menus" variants={variants} initial="initial" animate= "animate">
          {items.map((item) => (
            <motion.a variants={variants} href={item.href}>{item.name}</motion.a>
          ))}
        </motion.div>
        <motion.div className="socials">
          <a href="https://github.com/nati-d">
            <img src="/github.png" alt="" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/nathnael-desalegn">
            <img src="/linkedin.png" alt="" />{" "}
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />{" "}
          </a>
          <a href="https://t.me/Serial442">
            <img src="/telegram.png" alt="" />{" "}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
