import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="w-full h-full translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 100,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
        particles: {
          color: {
            value: '#FF6B35',
          },
          links: {
            color: '#FF6B35',
            distance: 120,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
          detectRetina: true,
        },
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 25,
                },
                links: {
                  distance: 80,
                  opacity: 0.1,
                },
                move: {
                  speed: 0.5,
                },
                size: {
                  value: {
                    min: 1,
                    max: 2,
                  },
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: false,
                  },
                },
              },
            },
          },
          {
            maxWidth: 1024,
            options: {
              particles: {
                number: {
                  value: 35,
                },
                links: {
                  distance: 100,
                },
              },
            },
          },
        ],
      }}
    />
  );
};

export default ParticlesContainer;
