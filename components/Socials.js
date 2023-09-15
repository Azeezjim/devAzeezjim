// links
import Link from "next/link";

// icons
import {
  RiGithubFill,
  RiCodepenFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";

import { HiDocumentText } from "react-icons/hi2";

import { SiCodecademy } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href="https://www.linkedin.com/in/immain/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href="https://github.com/Immain"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href="https://codepen.io/Immain"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiCodepenFill />
      </Link>
      <Link
        href="https://www.codecademy.com/profiles/immain"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <SiCodecademy />
      </Link>
      <Link
        href=""
        onClick={(e) => {
          window.open(
            "https://drive.google.com/file/d/1gae8jmqaSvITD54QwBWh9aFm6vdEU3DN/view?usp=sharing",
            "_blank"
          );
        }}
        className="hover:text-accent transition-all duration-300"
      >
        <HiDocumentText />
      </Link>
    </div>
  );
};

export default Socials;
