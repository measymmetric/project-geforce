import ParticlesContainer from '../../components/ParticlesContainer';
import ServiceSlider from '../../components/ServiceSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-16 sm:py-20 md:py-24 flex items-center">
      <ParticlesContainer />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-6 xl:mb-0 px-4 xl:px-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">Services.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="mb-4 max-w-md mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] px-4 xl:px-0"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
