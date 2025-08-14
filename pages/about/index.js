import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

import { RxDesktop, RxMobile } from 'react-icons/rx';
import ParticlesContainer from '../../components/ParticlesContainer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';
import CountUp from 'react-countup';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={FaHtml5} />,
          <FaCss3 key={FaCss3} />,
          <FaJs key={FaJs} />,
          <SiTypescript key={SiTypescript} />,
          <FaReact key={FaReact} />,
          <SiNextdotjs key={SiNextdotjs} />,
          <FaNodeJs key={FaNodeJs} />,
          <SiTailwindcss key={SiTailwindcss} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key={FaFigma} />,
          <SiAdobexd key={SiAdobexd} />,
          <SiAdobephotoshop key={SiAdobephotoshop} />,
          <RxDesktop key={RxDesktop} />,
          <RxMobile key={RxMobile} />,
        ],
      },
      {
        title: 'Backend & Database',
        icons: [
          <FaPython key={FaPython} />,
          <FaDatabase key={FaDatabase} />,
          <SiMongodb key={SiMongodb} />,
          <SiPostgresql key={SiPostgresql} />,
          <FaGitAlt key={FaGitAlt} />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="relative h-screen flex items-center justify-center text-center xl:text-left">
      {/* Background Particles - Behind everything, only 70% width from right */}
      <div className="absolute top-0 right-0 h-full w-[70vw] z-0 pointer-events-none flex items-center justify-end">
        <ParticlesContainer />
      </div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 justify-center relative z-10">
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
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="max-w-lg mx-auto xl:mx-0 mb-6 xl:mb-8"
          >
            I am a passionate designer and developer with over 10 years of
            experience in creating stunning and functional digital experiences.
            My journey has been fueled by a love for storytelling through
            design, where every pixel serves a purpose and every interaction
            tells a story.
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
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-dark">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-dark/20 after:absolute after:top-0 after:right-0">
                <div className="text-lg sm:text-xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-dark">
                  Satisfied clients
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-lg sm:text-xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
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
            className="flex gap-x-2 sm:gap-x-4 xl:gap-x-6 mx-auto xl:mx-0 mb-4 flex-wrap justify-center xl:justify-start"
          >
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent'}
              cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-8 after:h-[2px] after:bg-dark hover:after:w-[100%] hover:after:bg-accent after:absolute after:-bottom-1 after:left-0 text-dark hover:text-accent transition-all duration-300 after:transition-all after:duration-300 mb-2`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="py-2 xl:py-4 flex flex-col gap-y-2 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-dark/70 text-sm sm:text-base"
                >
                  <div className="font-light mb-2 md:mb-0 text-center md:text-left">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div className="mb-2 md:mb-0">{item.stage}</div>
                  <div className="flex gap-x-2 sm:gap-x-4 justify-center flex-wrap">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-lg sm:text-xl text-dark hover:text-accent transition-all duration-300 cursor-pointer"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
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
