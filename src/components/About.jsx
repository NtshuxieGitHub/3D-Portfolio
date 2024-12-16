/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { mycv } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate and dedicated software developer with a strong
        foundation in front-end development. I have experience in MATLAB,
        Python, HTML, CSS, JavaScript, TypeScript, React.js, Next.js, TaiwindCSS
        and Node.js. I also have experience in analytics and dashboarding. I am
        a fast learner and I like to collaborate with clients to understand
        their problems and create solutions that meet their needs. Let&apos;s
        collaborate to bring your concepts to life!
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 flex items-center"
      >
        <a href=""></a>
        <button className="py-3 px-4 green-pink-gradient text-white font-bold rounded-lg shadow-md transform hover:scale-105 transition-transform">
          <a href={mycv} download="Ntshuxeko-Mathebula-CV">
            Download CV
          </a>
        </button>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
