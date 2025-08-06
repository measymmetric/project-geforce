import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/work'} className="relative w-[185px] h-[185px] flex items-center justify-center group bg-circleStar bg-cover bg-center bg-no-repeat">
        <Image src="/rounded-text.png" alt="alt" width={141} height={148} className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
