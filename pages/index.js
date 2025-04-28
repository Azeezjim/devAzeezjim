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
            className="text-[20px] font-bold sml:text-[35px] md:text-[35px] mt-12"
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
            className="max-w-full px-2 xl:max-w-[900px] mx-auto xl:mx-0 mb-10 xl:mb-16 text-[12px] sml:text-[13.5px] md:text-[15px] text-white"
          >
            <strong className=" text-[12.5px] text-base/4 leading-2 sml:text-[14px] md:text-[15.5px] ">Hey👋, I&apos;m <b className=" font-bold">Garuba Abdulazeez!</b></strong>
            <br />
            <br />
            A creative Front-end and Mobile Developer with a BSc in Computer Science and over 4 years of experience crafting user-centric solutions
            . I specialize in React.js, Next.js, TypeScript, and React Native, building responsive applications that deliver exceptional experiences across platforms.<br />
            My approach combines technical precision with innovative designan ayzing problems, collaborating with teams, and implementing robust solutions. From leading development
            at Mainstream Exelient to engineering secure applications at SQE Holdings, I've consistently improved performance metrics while enhancing user engagement by 20-35%.<br />
            Currently expanding toward cross-platform and full-stack development, I'm learning backend technologies while also exploring web design through WordPress. This versatile
            skill set allows me to create comprehensive digital experiences from concept to deployment. I'm passionate about bringing my technical expertise and collaborative spirit
            to forward-thinking teams.
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
