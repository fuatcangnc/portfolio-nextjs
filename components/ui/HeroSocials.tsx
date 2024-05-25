import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

type SocialTypes = {
  text: string;
  icon: JSX.Element;
};
const socials: SocialTypes[] = [
  {
    text: "Behance",
    icon: <FaBehance />,
  },
  {
    text: "Dribble",
    icon: <FaDribbble />,
  },
  {
    text: "Github",
    icon: <FaGithub />,
  },
  {
    text: "Twitter",
    icon: <FaTwitter />,
  },
];
function HeroSocials() {
  return (
    <>
      {socials?.map((social, index) => (
        <div
          key={index}
          className="flex group justify-center items-center flex-grow h-10 relative gap-1 px-2 py-4 rounded-xl bg-white hover:bg-gray-800 cursor-pointer  border border-[#e8eef3]"
        >
          <div className="text-[#090513] group-hover:text-white transition-colors duration-300">
            {social?.icon}
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#090513] group-hover:text-white transition-colors duration-300">
            {social?.text}
          </p>
        </div>
      ))}
    </>
  );
}

export default HeroSocials;
