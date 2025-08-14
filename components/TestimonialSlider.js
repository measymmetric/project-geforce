import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        modules={[Navigation, Pagination]}
        className="h-[400px] sm:h-[450px] md:h-[450px] lg:h-[500px] w-full"
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
                {/* Profile Section - Outside navigation on mobile, inside on desktop */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:min-w-[200px] lg:min-w-[250px] px-6 sm:px-8 md:px-20 lg:px-28">
                  <div className="mb-2 md:mb-4">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-accent/40 shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold text-dark mb-3 md:mb-2">
                    {person.name}
                  </h3>
                  <p className="text-base sm:text-lg md:text-sm lg:text-base uppercase tracking-wide font-light text-accent">
                    {person.position}
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center px-16 sm:px-20 md:px-8 lg:px-12">
                  <blockquote className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl leading-relaxed text-dark/90 italic font-light text-center md:text-left max-w-lg md:max-w-none">
                    &quot;{person.message}&quot;
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute top-1/2 -left-2 sm:-left-4 md:left-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-accent hover:text-accent/80 transition-all duration-200 transform -translate-y-1/2">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="swiper-button-next-custom absolute top-1/2 -right-2 sm:-right-4 md:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-accent hover:text-accent/80 transition-all duration-200 transform -translate-y-1/2">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Custom Pagination Dots */}
      <div className="swiper-pagination-custom flex justify-center mt-3 space-x-2">
        {testimonialData.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-accent/30 hover:bg-accent/60 transition-all duration-300 focus:outline-none focus:bg-accent"
            onClick={() => {
              // This will be handled by Swiper's pagination functionality
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
