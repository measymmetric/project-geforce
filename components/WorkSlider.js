import { RxRocket } from 'react-icons/rx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] xs:h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 cursor-pointer h-full">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden w-full h-full">
                      <Image
                        src={image.path}
                        alt={image.alt}
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-y-1 sm:gap-y-2">
                            <div className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-[0.1em]">
                              LIVE
                            </div>
                            <div className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.2em]">
                              PROJECT
                            </div>
                          </div>
                          <div className="text-xl sm:text-2xl md:text-3xl text-accent group-hover:scale-110 transition-all duration-300">
                            <RxRocket />
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-3 h-1 bg-accent/30 rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
