import ParticlesContainer from '../../components/ParticlesContainer';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import dynamic from 'next/dynamic';

// Dynamically import Spline to prevent SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>
      <div className="container mx-auto py-8 sm:py-16 md:py-20 min-h-screen relative z-10 flex items-center justify-center">
        <div className="w-full max-w-xl lg:max-w-2xl bg-black/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 mx-4">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="h2 text-center mb-6 sm:mb-8"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="flex flex-col gap-4 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="input w-full" />
              <input
                type="email"
                placeholder="Email"
                className="input w-full"
              />
            </div>
            <input type="text" placeholder="Subject" className="input w-full" />
            <textarea
              placeholder="Message"
              className="textarea w-full"
            ></textarea>
            <motion.button
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="btn border-2 border-accent bg-primary/80 text-dark max-w-[170px] transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-accent hover:text-white hover:shadow-lg group mx-auto relative"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-200">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-lg" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
