import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiBehanceLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4 sm:gap-x-6 text-base sm:text-lg">
      <Link
        href={'https://www.youtube.com/'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={'https://www.instagram.com/'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://github.com/'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'https://www.linkedin.com/'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://www.behance.net/'}
        className="hover:text-accent transition-all duration-300"
      >
        <RiBehanceLine />
      </Link>
    </div>
  );
};

export default Socials;
