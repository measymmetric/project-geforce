import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-primary/80 via-background/60 to-accent/10 min-h-screen relative">
      {/* Main Content */}
      <div className="container mx-auto min-h-screen flex flex-col justify-center pt-16 sm:pt-20 md:pt-24 xl:pt-0">
        <div className="text-center xl:text-left xl:flex xl:items-center xl:justify-between">
          {/* Text Content */}
          <div className="xl:w-1/2 z-10 relative">
            <motion.h1
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="h1 mb-4 sm:mb-6"
            >
              Transforming Ideas <br />
              Into {''}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="max-w-md mx-auto xl:mx-0 mb-6 sm:mb-8 xl:mb-12 px-4 xl:px-0"
            >
              I am a passionate web developer with a knack for creating stunning
              and functional websites. My journey in web development has been
              fueled by a love for coding and a desire to bring ideas to life
              through technology.
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="flex justify-center xl:justify-start"
            >
              <ProjectsBtn />
            </motion.div>
          </div>

          {/* 3D Avatar - Desktop Only */}
          <div className="hidden xl:block xl:w-1/2 relative h-[600px]">
            <motion.div
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="absolute inset-0"
            >
              <Avatar />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
