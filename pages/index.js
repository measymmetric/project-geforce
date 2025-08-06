import Image from "next/image";
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container max-auto">
          <motion.h1 variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="h1">
            Transforming Ideas <br />Into {''}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden" 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I am a passionate web developer with a knack for creating stunning and functional websites.
            My journey in web development has been fueled by a love for coding and a desire to bring ideas to
            life through technology.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className=""><Avatar /></div>
    </div>
  );
};

export default Home;
