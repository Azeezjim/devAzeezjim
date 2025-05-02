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
    <div className="flex items-center gap-x-3.5 md:gap-x-5 text-2xl">
        <Link
        href=""
        onClick={(e) => {
          window.open(
            "https://drive.google.com/file/d/1hVEh-eCMq7ECHMljo0_ldvNRX1vPDTNk/view?usp=drivesdk",
            "_blank"
          );
        }}
        className="hover:text-accent transition-all duration-300"
      >
        <HiDocumentText />
      </Link>
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
    
    </div>
  );
};

export default Socials;
