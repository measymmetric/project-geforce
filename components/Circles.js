import Image from 'next/image';

const Circles = () => {
  return (
    <div className="w-[120px] sm:w-[150px] md:w-[200px] xl:w-[300px] absolute -right-8 sm:-right-12 md:-right-16 -bottom-1 sm:-bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src="/circles.png"
        alt="Circle 1"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
