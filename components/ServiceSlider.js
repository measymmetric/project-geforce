// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] xs:h-[320px] sm:h-[340px] md:h-[360px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <motion.div className="bg-primary/70 h-full rounded-lg p-4 sm:p-6 flex flex-col gap-y-4 group cursor-pointer hover:bg-accent/10 hover:border hover:border-accent/50 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl text-accent">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="mb-2 text-base sm:text-lg font-semibold">
                  {item.title}
                </div>
                <p className="text-sm sm:text-base leading-normal text-dark/70">
                  {item.description}
                </p>
              </div>
              <div className="text-2xl sm:text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
