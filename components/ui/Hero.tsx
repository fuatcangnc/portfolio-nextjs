import { homePageData } from "@/constants";
import {
  Twitter,
  Linkedin,
  Github,
  FileText,
  Download,
  ChevronsRight,
  MoveUpRight,
  MousePointerClick,
} from "lucide-react";
import { FaLinkedinIn,FaInstagram,FaBehance } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import HeroSocials from "./HeroSocials";
function Hero() {
  return (
    <section className="relative md:flex md:justify-center md:items-center py-8 ">
      {/* Gradient Effect */}
      <div className="gradient_effect"></div>

      <div className="md:flex md:gap-2 md:flex-row-reverse md:justify-between">
        <div className="md:flex-1">
          <span className="leading-7  flex items-center gap-2 font-light">
            Hello there
            <Image
              src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
              width={20}
              height={20}
              alt="Waving hand"
            />
          </span>
          <h1 className="text-black text-2xl font-ranade-bold dark:text-white">
            {homePageData?.tagline2}
          </h1>

          <hr className="border-1 border-gray-100 my-4" />

          <p className="my-6 leading-7 font-light">
            I am Fuat Genc a passionate MERN stack
            <span className="font-bold">UI Designer and UI Developer</span> from
            Istanbul, deeply in love with coding and exploring various tech
            domains.
          </p>

          {/* My Status  */}
          <div className="my-4 text-sm font-light">
            <p className="my-2 flex gap-2">
              <ChevronsRight size={17} />
              <span>
                
                Im currently building
                <span className="gradient_text font-bold">
                  Full Stack Projects.
                </span>
              </span>
            </p>
            <p className="my-2 flex gap-2">
              <ChevronsRight size={17} />
              <span>
                Im on a mission to become a
                <span className="gradient_text font-bold">Full Stack</span>
                developer.
              </span>
            </p>
            <p className="my-2 flex gap-2">
              <ChevronsRight size={17} />
              <span>I bring life to designs through lines of code.</span>
            </p>
          </div>

          {/* Socials & CTA */}
          <hr className="border-1 border-gray-100 my-4" />
          <div className="ml-6 md:m-0 md:flex md:gap-4 md:items-center">
            <div className="socials flex items-center gap-2">
              <HeroSocials/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
