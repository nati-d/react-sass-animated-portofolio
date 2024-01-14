import { Link } from "react-router-dom";
import "./portofolio.scss";
import { motion } from "framer-motion";

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
const Portofolio = () => {
  const works = [
    {
      id: 1,
      img: "leather.png",
      title: "Kodaas",
      description:
        "Kodaas is a showcase of my web development skills, demonstrating expertise in crafting immersive digital experiences. Merging contemporary design with seamless functionality, the project highlights my commitment to delivering high-quality user interactions. The purposeful integration of features, such as the dynamic Swiper component and responsive design, creates a sophisticated platform. Kodaas not only represents technical proficiency but also serves as a testament to my ability to create elegant and purposeful online environments",
      links: {
        github: "https://github.com/nati-d/react-leather-ecommerce-website",
        deploy: "https://kodaas.vercel.app/",
      },
      tags: ["React", "Tailwind", "Redux Toolkit", "Vite"],
    },
    {
      id: 2,
      img: "dev.png",
      title: "Mydev Agency Website",
      description:
        "Embark on a journey of mobile innovation with our latest app development project. The soothing mint green theme sets the stage for a refreshing user experience. Explore the cutting-edge features and intuitive design that make this mobile app stand out in the digital landscape.",
      links: {
        github: "https://github.com/nati-d/nextjs-agencies-app",
        deploy: "https://mydev-agency.vercel.app/",
      },
      tags: ["React", "Next", "Tailwind", "Framer Motion", "TypeScript"],
    },
    {
      id: 3,
      img: "/caxur.png",
      title: "CAXUR",
      description:
"A React-based animated project, elegantly weaving Framer Motion and Tailwind CSS. Experience seamless animations and dynamic transitions, showcasing a blend of creativity and technology in a visually stunning and interactive showcase."   ,   
links: {
        github: "https://github.com/nati-d/react-animated-car-showroom",
        deploy: "https://carux.vercel.app/",
      },
      tags: ["React", "Tailwind", "Framer-Motion"],
    },
    {
      id: 4,
      img: "ass.jpg",
      title: "Assister",
      description:
"Our team of 5 crafted Assister, an innovative mobile app dedicated to supporting refugees. Built with React Native, Firebase, and Node.js, it covers mental health care, emergency contacts, news updates, fun facts about the host country, and hospital information. Leveraging advanced AI, Assister provides personalized guidance, news, and healthcare assistance. With a user-friendly interface and multilingual support, we aim to empower refugees by ensuring accessibility and inclusivity.",      links: {
        github: "",
        deploy: "",
      },
      tags: ["ReactNative", "Nativewind", "Open-AI","Node", "Firebase"],
    },
  ];
  const Single = ({ work }) => {
    return (
      <motion.section className="single" key={work.id}>
        <motion.div className="left">
          <motion.img src={work.img} />
        </motion.div>
        <motion.div className="right">
          <motion.h1>{work.title}</motion.h1>
          <motion.p>{work.description}</motion.p>

          <div className="buttons">
  <a href={work.links.github} target="_blank" rel="noopener noreferrer">
    <motion.button
      initial={{ background: "white", color: "black" }}
      whileHover={{ background: "transparent", color: "white" }}
      whileTap={{ scale: 0.9 }}
    >
      Github
    </motion.button>
  </a>
  <a href={work.links.deploy} target="_blank" rel="noopener noreferrer">
    <motion.button
      initial={{ background: "white", color: "black" }}
      whileHover={{ background: "transparent", color: "white" }}
      whileTap={{ scale: 0.9 }}
    >
      View Demo Live
    </motion.button>
  </a>
</div>

          <motion.div className="tags">
            {work.tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    );
  };
  return (
    <motion.div className="portofolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>

      {works.map((work) => (
        <Single work={work} />
      ))}
    </motion.div>
  );
};

export default Portofolio;
