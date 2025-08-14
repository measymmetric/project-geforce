import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[120px] sm:w-[150px] md:w-[200px] xl:w-[400px] opacity-30 sm:opacity-40 xl:opacity-50">
      <Image
        src="/top-left-img.png"
        alt="top left"
        width={400}
        height={400}
        className="w-full h-auto"
      />
    </div>
  );
};

export default TopLeftImg;
