import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const Avatar = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.4)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      className="hidden xl:flex xl:max-w-none w-full h-full relative"
    >
      <div className="spline-container w-full h-full translate-z-0">
        <Spline
          scene="https://prod.spline.design/ypLbfU6GMKsav8vz/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
          renderOnDemand={false}
        />
      </div>
    </motion.div>
  );
};

export default Avatar;
