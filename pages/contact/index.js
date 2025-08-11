import Circles from '../../components/Circles';
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
    <div className="h-full bg-primary/30 relative">
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>
      <div className="container mx-auto py-32 h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-center h-full gap-x-8">
          {/* Left side - Spline 3D Model */}
          {/* <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="hidden xl:flex xl:w-1/2 h-full max-h-[600px] relative"
          >
            <div className="spline-container w-full h-full">
              <Spline
                scene="https://prod.spline.design/PcOzHslXR65kBB-z/scene.splinecode"
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'transparent',
                }}
                renderOnDemand={false}
              />
            </div>
          </motion.div> */}

          {/* Right side - Contact Form */}
          <div className="flex flex-col w-full xl:w-1/2 max-w-[600px] bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="h2 text-center xl:text-left mb-12"
            >
              Let&apos;s <span className="text-accent">connect.</span>
            </motion.h2>
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="name" className="input" />
                <input type="text" placeholder="email" className="input" />
              </div>
              <input type="text" placeholder="subject" className="input" />
              <textarea placeholder="message" className="textarea"></textarea>
              <motion.button
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                className="btn rounded-full border-2 border-accent bg-primary/80 text-dark max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-accent hover:text-white hover:shadow-lg group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-200">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
