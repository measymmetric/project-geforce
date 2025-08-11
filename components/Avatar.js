import dynamic from 'next/dynamic';

// Dynamically import Spline to prevent SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full relative">
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
    </div>
  );
};

export default Avatar;
