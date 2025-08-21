import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto min-h-screen flex flex-col justify-center pt-16 sm:pt-20 md:pt-24 xl:pt-0">
        <div className="text-center xl:text-left xl:flex xl:items-center xl:justify-between relative z-10">
          <div className="xl:w-1/2 z-10 relative">
            <motion.h1
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="h1 mb-4 sm:mb-6"
            >
              Hi! I&apos;m {''}
              <span className="text-accent">Ankur Singh</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="max-w-md mx-auto xl:mx-0 mb-6 sm:mb-8 xl:mb-12 px-4 xl:px-0"
            >
              Full-Stack Developer with 4+ years of experience building scalable
              web and VR applications for global clients like WHO, Emirates NBD,
              and ADNOC. Skilled in React.js, Next.js, Unity, Typescript and
              modern JavaScript, delivering high-quality solutions under tight
              deadlines.
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
          <div className="hidden xl:block xl:w-1/2 relative h-[750px] z-20 pointer-events-auto">
            <motion.div
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="absolute inset-0 pointer-events-auto z-20"
            >
              <Avatar />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-[70vw] z-0 pointer-events-none flex items-center justify-end">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
