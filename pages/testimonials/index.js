import TestimonialSlider from '../../components/TestimonialSlider';
import ParticlesContainer from '../../components/ParticlesContainer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 flex items-center">
      <ParticlesContainer />
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Mobile Layout - Same as other pages */}
        <div className="flex flex-col xl:flex-row gap-x-8 items-center xl:hidden">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0 px-2 sm:px-4 xl:px-0 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              What clients <span className="text-accent">say.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="mb-6 max-w-md mx-auto lg:mx-0"
            >
              Real feedback from satisfied clients who have worked with me.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] px-2 sm:px-4 xl:px-0"
          >
            <TestimonialSlider />
          </motion.div>
        </div>

        {/* Large Screen Layout - Title on top, description below, arrows, then content */}
        <div className="hidden xl:flex flex-col">
          <div className="text-center mb-1 px-4 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="h2 mb-1"
            >
              What clients <span className="text-accent">say.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="text-base max-w-2xl mx-auto"
            >
              Real feedback from satisfied clients who have worked with me.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="w-full"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
