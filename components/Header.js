import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 md:px-16 xl:px-0 h-[70px] sm:h-[80px] xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-y-4 sm:gap-y-6">
          <Link href={'/'}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={180}
              height={60}
              className="w-[150px] h-auto sm:w-[180px] md:w-[200px] xl:w-[220px]"
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
