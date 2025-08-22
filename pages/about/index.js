import aboutData from '../../controller/aboutdata.jsx';
import ParticlesContainer from '../../components/ParticlesContainer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center xl:text-left">
      <div className="absolute top-0 right-0 h-full w-[70vw] z-0 pointer-events-none flex items-center justify-end">
        <ParticlesContainer />
      </div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 justify-center relative z-10 pt-32 pb-28 md:pt-32 md:pb-16">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center px-4 xl:px-0"
        >
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="h2 mb-4 sm:mb-6"
          >
            Driven by Code,
            <br />
            <span className="text-accent">Inspired by Impact</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="max-w-lg mx-auto xl:mx-0 mb-6 xl:mb-8"
          >
            I’m a Full-Stack Developer with 4+ years of experience creating
            scalable web and VR solutions for global organizations. My passion
            lies in blending technology and creativity to solve real-world
            problems. With expertise in React.js, Next.js, and Unity, I focus on
            building platforms that are robust, user-centric, and make a
            meaningful difference.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="hidden md:flex mx-auto xl:mx-0 mb-6"
          >
            <div className="flex flex-1 gap-x-4 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-dark/20 after:absolute after:top-0 after:right-0">
                <div className="text-lg sm:text-xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-dark">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-lg sm:text-xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px] text-dark">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] px-4 xl:px-0"
        >
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="flex gap-x-2 sm:gap-x-4 xl:gap-x-6 mx-auto xl:mx-0 mb-6 sm:mb-4 flex-wrap justify-center xl:justify-start"
          >
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 transition-all duration-300 after:transition-all after:duration-300 mb-2 ${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent'
                    : 'text-dark after:bg-dark hover:text-accent hover:after:bg-accent'
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="py-2 xl:py-4 flex flex-col gap-y-2 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              const label = item.title || item.category;
              const hasStage = !!item.stage;
              const hasIcons = Array.isArray(item.icons);
              const hasSkills = Array.isArray(item.skills);

              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-dark/100 text-sm sm:text-base"
                >
                  <div className="font-light mb-2 md:mb-0 text-center md:text-left">
                    {label}
                  </div>
                  {(hasStage || hasIcons || hasSkills) && (
                    <div className="hidden md:flex">-</div>
                  )}
                  {hasStage && <div className="mb-2 md:mb-0">{item.stage}</div>}
                  {hasIcons && (
                    <div className="flex gap-x-2 sm:gap-x-4 justify-center flex-wrap">
                      {item.icons.map((icon, idx) => (
                        <div
                          key={idx}
                          className="text-lg sm:text-xl text-dark hover:text-accent transition-all duration-300 cursor-pointer"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                  {hasSkills && (
                    <div className="flex gap-x-2 sm:gap-x-4 justify-center flex-wrap">
                      {item.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="relative w-6 h-6 group cursor-pointer"
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 object-contain grayscale group-hover:opacity-0 transition-opacity duration-300"
                          />
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <span
                            className=" absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2.5 py-1 rounded-md bg-accent text-white text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap
                              after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-accent"
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
