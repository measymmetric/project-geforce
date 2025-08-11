import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';
import SplineErrorBoundary from './SplineErrorBoundary';

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
    <SplineErrorBoundary>
      <div className="hidden xl:flex xl:max-w-none w-full h-full relative">
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent"></div>
            </div>
          }
        >
          <div className="w-full h-full">
            <Spline
              scene="https://prod.spline.design/Tnp0WMbkJJBo6xA3/scene.splinecode"
              onError={handleError}
              onLoad={() => console.log('Spline model loaded successfully')}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
              }}
              renderOnDemand={false}
            />
          </div>
        </Suspense>
      </div>
    </SplineErrorBoundary>
  );
};

export default SplineModel;
