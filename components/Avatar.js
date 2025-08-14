import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const Avatar = () => {
  return (
    <div className="w-full h-full relative pointer-events-auto flex items-center justify-center">
      <Spline
        scene="https://prod.spline.design/ypLbfU6GMKsav8vz/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          paddingTop: '40px',
        }}
        className="pointer-events-auto"
      />
    </div>
  );
};

export default Avatar;
