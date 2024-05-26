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
import { FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import HeroSocials from "./HeroSocials";
import HeroImage from "@/public/hero.png";
import ProfileImage from "@/public/profile.png";
function Hero() {
  return (
    <section className="relative md:flex md:justify-center md:items-center  bg-[#f0f0f07e]  rounded-xl mb-8 overflow-hidden">
      <div className="">
        <div style={{ width: "100%" }} className="relative">
          <Image
            src={HeroImage}
            alt=""
            className=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <div className="absolute -bottom-6 left-10 transform -translate-x-1/2">
          <Image
            src={ProfileImage}
            width={48}
            height={48}
            alt="profile image"
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        </div>

        
        <div className="hero-content p-4">
        <div className="leading-7  flex items-center gap-2 font-light  text-dark ">
          
          Hello there
          <Image
            src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
            alt="Waving hand"
            className=""
            width={64}
            height={64}
          />
        </div>
        <h1 className="text-dark text-2xl font-ranade-bold ">
          {homePageData?.tagline2}
        </h1>
        <hr className="border-1 border-gray-100 my-4" />

        <p className="my-6 leading-7 font-light">
        I am Fuat Genc, a passionate  <span className="font-bold">Front-end UI Designer</span> and <span className="font-bold">UI Developer</span> from Istanbul, deeply in love with coding and exploring various tech domains.
        </p>
        
        {/* My Status  */}
        <div className="my-4 text-sm font-light">
          <p className="my-2 flex gap-2">
            <ChevronsRight size={17} />
            <span>
            I also create engaging and user-friendly 
              <span className="gradient_text font-bold"> UI designs.
              </span>
            </span>
          </p>
          <p className="my-2 flex gap-2">
            <ChevronsRight size={17} />
            <span>
              Im on a mission to become a 
              <span className="gradient_text font-bold"> Frontend </span>
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
        <div className=" md:m-0 md:flex md:gap-4 md:items-center">
          <div className="socials flex items-center gap-2 flex-wrap">
            <HeroSocials />
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
