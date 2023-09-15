import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAmazonaws,
  SiGooglecloud,
  SiDigitalocean,
  SiAnsible,
  SiChef,
  SiPuppet,
  SiTerraform,
  SiPython,
  SiPowershell,
  SiDjango,
  SiFlask,
  SiGnubash,
  SiMicrosoftoffice,
  SiAdobecreativecloud,
  SiAffinity,
  SiMicrosoftazure,
  SiMicrosoftteams,
  SiZoom,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 className="text-[#e34c26]" />,
          <FaCss3 className="text-[#264de4]" />,
          <FaJs className="text-[#f0db4f]" />,
          <FaReact className="text-[#61DBFB]" />,
          <SiNextdotjs className="text-[#f4f5f7]" />,
          <SiFramer className="text-pink-600" />,
          <FaWordpress className="text-[#00749C]" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma className="text-[#ff7262]" />,
          <SiAdobexd className="text-[#ff61f6]" />,
          <SiAdobephotoshop className="text-[#31a8ff]" />,
        ],
      },
      {
        title: "Cloud Platforms",
        icons: [
          <SiAmazonaws className="text-[#ff9900]" />,
          <SiGooglecloud className="text-[#fa3913]" />,
          <SiDigitalocean className="text-[#0080ff]" />,
          <SiMicrosoftazure className="text-[#0089d6]" />,
        ],
      },
      {
        title: "Automation",
        icons: [
          <SiAnsible className="text-white" />,
          <SiChef className="text-orange-500" />,
          <SiPuppet className="text-orange-400" />,
          <SiTerraform className="text-purple-500" />,
        ],
      },
      {
        title: "Scripting",
        icons: [
          <SiPython className="text-[#ffe873]" />,
          <SiFlask className="text-[#46afc2]" />,
          <SiGnubash className="text-[#]" />,
          <SiDjango className="text-[#32AC7B]" />,
          <SiPowershell className="text-[#4375CD]" />,
        ],
      },
      {
        title: "Applications",
        icons: [
          <SiMicrosoftoffice className="text-orange-500" />,
          <SiAdobecreativecloud className="text-red-500" />,
          <SiAffinity className="text-pink-400" />,
          <SiZoom className="text-[#2D8CFF]" />,
          <SiMicrosoftteams className="text-[#6264A7]" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "🔹 IT Support Specialist - Midnight Technologies",
        stage: "Sep 2019 - Pres.",
      },
      {
        title: "🔹 Security Engineer - Galactic Advisors",
        stage: "Sep 2022 - Aug 2023",
      },
      {
        title: "🔹 IT Support - Robert Half Technology",
        stage: "May 2019 - Sep 2019",
      },
      {
        title: "🔹 IT Specialist  - American Ambulance",
        stage: "Jan 2017 - May 2019",
      },
      {
        title: "🔹 Help Desk Support - Boeing",
        stage: "Aug 2016 - Jan 2017",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: " 🔹Codecademy - Code Foundations ",
        stage: "March 2023",
      },
      {
        title: " 🔹Codecademy - Learn How to Code",
        stage: "March 2023",
      },
    ],
  },
  {
    title: "volunteer",
    info: [
      {
        title: " 🔹Amp Surf - Pismo Beach, CA, Event Assistant",
        stage: "2022 - Present",
      },
      {
        title: " 🔹NSS - San Joaquin Valley Grotto",
        stage: "2019 - Present",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[270px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-scroll xl:overflow-visible no-scrollbar">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 capitalize"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Embarking on a career change to become a Full Stack Engineer was a
            captivating journey that led me to learn numerous skills and create
            my own magnificent portfolio site. The decision to transition into
            tech was daunting, but I embraced the challenge with enthusiasm.
            With each step of the journey, I discovered new facets of the
            technology world. I delved into various programming languages, such
            as HTML, CSS, JavaScript, and Python, and familiarized myself with
            popular frameworks like React and Node.js. Like the protagonist in a
            story, I faced hurdles, but the pursuit of knowledge fueled my
            determination.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={10} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={40} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={15} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* github*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={60} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  GitHub Repos
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-7 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div
                          key={`icon-${item.title}-${iconIndex}`}
                          className="text-2xl text-white "
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
