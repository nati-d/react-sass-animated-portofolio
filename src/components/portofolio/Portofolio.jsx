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
      img: "https://images.pexels.com/photos/7091921/pexels-photo-7091921.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Elegance in Code",
      description:
        "Immerse yourself in the world of UI design where elegance meets functionality. Our project showcases the power of charcoal gray to create a sophisticated and visually compelling user interface. Discover how thoughtful design enhances user interactions and delivers a seamless digital experience.",
      links: {
        github: "",
        deploy: "",
      },
      tags: ["React", "Tailwind", "Css"],
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/7091928/pexels-photo-7091928.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "CoralCommerce",
      description:
        "Step into the realm of SEO optimization with our latest project, where the coral color theme represents the impact we make on online visibility. Uncover the strategies employed to ensure top-ranking performance on search engines, driving business growth and maximizing digital presence.",
      links: {
        github: "",
        deploy: "",
      },
      tags: ["React", "Tailwind", "Css"],
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
