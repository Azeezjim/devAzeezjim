// Next Image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";
import Circles from "../components/Circles";
import Bulb from "../components/Bulb";

const Home = () => {

  return (
    <div className="bg-primary h-full w-full bg-gradient-to-r from-primary/10 via-blue-800/20 to-black/20">
      {/* text */}
      <Circles />
      <Bulb />
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          {/*Title*/}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[20px] font-bold md:text-[35px] mt-12 md:mt-8"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/*Subtitle*/}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-full px-2 xl:max-w-[900px] mx-auto xl:mx-0 mb-10 xl:mb-16 text-[11.5px] sml:text-[13.5px] md:text-[15px] text-white my-2"
          >
            <strong className="text-[11.5px] sml:text-[14px] md:text-[14.5px]">
              Hey👋, I&apos;m <b className="font-bold">Garuba Abdulazeez</b> 
            </strong>
            a Frontend and Mobile Engineer with a Bachelor&apos;s degree in Computer Science and over 4 years of hands-on experience turning complex ideas into polished, high-impact digital products.
            <br /><br />
            I bring deep expertise in React.js, Next.js, TypeScript, and React Native  building cross-platform experiences that are fast, accessible, and scalable. From shipping secure fintech apps and multi-currency wallets to leading development teams and mentoring engineers, I’ve consistently delivered results that improve performance, drive engagement, and meet real business goals.
            <br /><br />
            My technical foundation is backed by academic training in software engineering principles, algorithms, and system architecture, giving me a holistic view of product development  from frontend finesse to backend logic. I thrive in collaborative environments where ideas are challenged, problems are solved elegantly, and technology is used to make real impact.
            <br /><br />
            Whether you need a performance-obsessed engineer, a design-conscious builder, or a teammate who owns delivery from concept to deployment I’m ready to contribute, grow, and build great things.
          </motion.p>

          {/*Button*/}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Home;
