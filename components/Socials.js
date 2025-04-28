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

import { SiCodecademy, SiHashnode } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href="https://www.linkedin.com/in/garuba-abdul-azeez-713273167"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href="https://github.com/Azeezjim"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href="https://hashnode.com/@Azeezjim"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <SiHashnode />
      </Link>
      <Link
        href="https://codepen.io/SirAzeeJim"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiCodepenFill />
      </Link>
      <Link
        href=""
        onClick={(e) => {
          window.open(
            "https://drive.google.com/file/d/1LRo6jZ484ugdNC7KWzszDa-1bIcDNd_G/view?usp=drive_link",
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
