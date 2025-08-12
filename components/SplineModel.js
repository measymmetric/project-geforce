import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';

// Dynamically import Spline to prevent SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent"></div>
    </div>
  ),
});

const SplineModel = () => {
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleError = error => {
    console.warn('Spline model failed to load:', error);
    setHasError(true);
  };
  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full relative">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent"></div>
          </div>
        }
      >
        <div className="spline-container w-full h-full translate-z-0">
          <Spline
            scene="https://prod.spline.design/ypLbfU6GMKsav8vz/scene.splinecode"
            onError={handleError}
            onLoad={() => console.log('Spline model loaded successfully')}
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              objectFit: 'contain',
              objectPosition: 'center center',
            }}
            renderOnDemand={false}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default SplineModel;
