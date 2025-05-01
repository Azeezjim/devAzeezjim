"use client"

import { useState, useEffect, useRef } from "react"
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb"
import { FaBitbucket, FaCcStripe, FaChevronLeft, FaChevronRight, FaGitAlt, FaHandshake, FaRegComments, FaStripe } from "react-icons/fa"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaJira } from "react-icons/fa"
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAnsible,
  SiChef,
  SiPuppet,
  SiTerraform,
  SiTailwindcss,
  SiReactquery,
  SiPostman,
  SiExpo,
  SiBabylondotjs,
  SiShadcnui,
  SiGithub,
  SiPuppeteer,
  SiClerk,
  SiSwagger,
  SiFormik,
  SiZod,
  SiReacthookform,
  SiStyledcomponents,
  SiEslint,
} from "react-icons/si"


import { AiFillSlackCircle } from "react-icons/ai"
import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"
import { motion, useInView } from "framer-motion"
import { fadeIn } from "../../variants"
import CountUp from "react-countup"
import ParticlesContainer from "../../components/ParticlesContainer"
import { MdSecurity, MdSecurityUpdate } from "react-icons/md"
import { FaFlutter } from "react-icons/fa6"
import { IoLogoFirebase } from "react-icons/io5"
import Bulb from "../../components/Bulb"


const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" className="text-[#e34c26]" />,
          <FaCss3 key="css3" className="text-[#264de4]" />,
          <FaJs key="js" className="text-[#f0db4f]" />,
          <FaReact key="react" className="text-[#61DBFB]" />,
          <SiNextdotjs key="nextjs" className="text-[#f4f5f7]" />,
          <SiStyledcomponents key="styled" className="text-[#db7093]" />,
          <SiTailwindcss key="tailwindcss" className="text-[#46a4f1]" />,
          <SiReactquery key="reactquery" className="text-[#f0db4f]" />,
          <SiPostman key="postman" className="text-[#ff6c37]" />,
          <SiFramer key="framer" className="text-pink-600" />,
          <SiEslint key="eslint" className="text-[#4b32c3]" />,
          <SiShadcnui key="shadcn" className="text-[#f8f8f7]" />,
          <SiBabylondotjs key="babylon" className="text-[#ff6c37]" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" className="text-[#ff7262]" />,
          <SiAdobexd key="adobexd" className="text-[#ff61f6]" />,
          // <SiAdophotoshop key="photoshop" className="text-[#31a8ff]" />,
        ],
      },
      {
        title: "Mobile Development",
        icons: [
          <TbBrandReactNative key="reactnative" className="text-[#61DBFB]" />,
          <SiExpo key="expo" className="text-[#f3f3f3]" />,
          <FaFlutter key="flutter" className="text-[#02569b]" />,
        ],
      },
      {
        title: "State Management & Authentication",
        icons: [
          <TbBrandRedux key="redux" className="text-[#3f1e58]" />,
          <SiChef key="chef" className="text-[#f0db4f]" />,
          <SiPuppeteer key="puppet" className="text-[#f0db4f]" />,
          <SiReactquery key="reactquery" className="text-[#f0db4f]" />,
          <SiReacthookform key="reacthookform" className="text-[#ff3aef]" />,
          <SiZod key="zod" className="text-[#2a2eaa]" />,
          <SiFormik key="formik" className="text-[#5a6ce1]" />,
          <FaCcStripe key="stripe" className="text-[#6772e5]" />,

        ],
      },

      {
        title: "Collaboration Tools & Platforms",
        icons: [
          <AiFillSlackCircle key="slack" className="text-[#eef1f1]" />,
          <FaJira key="jira" className="text-blue-600" />,
          <SiGithub key="github" className="text-[#f5f5f4]" />,
          <FaGitAlt key="git" className="text-[#f5f5f4]" />,
          <FaBitbucket key="bitbucket" className="text-[#0052cc]" />,
          <SiClerk key="clerk" className="text-[#ab3bf6]" />,
          <SiSwagger key="swagger" className="text-[#4ff0a5]" />,
          <SiPostman key="postman" className="text-[#ff6c37]" />,
          <IoLogoFirebase key="firebase" className="text-[#ecc20ad9]" />,
          <FaHandshake key="handshake" className="text-[#ff6c37]" />,
          <FaRegComments key="comments" className="text-[#f0db4f]" />,
          <MdSecurityUpdate key="security" className="text-[#ff6c37]" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "🔹 Web/Mobile Developer - SQE Holdings",
        stage: "Mar 2023 - Present"
      },
      {
        title: "🔹 Frontend Team Lead - Mainstream Exelient",
        stage: "Jul 2023 - Sep 2024"
      },
      {
        title: "🔹 Web/Mobile Developer - Eulav",
        stage: "Oct 2024 - Jan 2025"
      },
      {
        title: "🔹 Web/Mobile Developer - HuBuk Technology",
        stage: "Jun 2022 - Feb 2023"
      }
    ]
  },
  {
    title: "credentials",
    info: [
      {
        title: "🔹 Bachelor of Science in Computer Science",
        stage: "University of Jos, Nigeria",
        link: "https://www.unijos.edu.ng/"
      }
    ]
  },
  {
    title: "volunteer",
    info: [
      {
        title: "🔹 Crowdfunding Platform Developer - Give Aid",
        stage: "2023"
      }
    ]
  }
]

const About = () => {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { once: true, margin: '-50px' })
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  useEffect(() => {
    if (isInView && scrollRef.current) {
      const container = scrollRef.current;
      let scrollPos = 0;
      let scrollTimeout;
      let animationFrameId;

      const scroll = () => {
        if (!isAutoScrolling) return;
        if (container.scrollTop < container.scrollHeight - container.clientHeight) {
          scrollPos += 0.2; // slow scroll
          container.scrollTo({ top: scrollPos, behavior: 'smooth' });
          animationFrameId = requestAnimationFrame(scroll);
        }
      };

      // Start scroll after 5 seconds
      scrollTimeout = setTimeout(() => {
        animationFrameId = requestAnimationFrame(scroll);
      }, 5000);

      const stopAutoScroll = () => {
        setIsAutoScrolling(false);
        clearTimeout(scrollTimeout);
        cancelAnimationFrame(animationFrameId);
      };

      container.addEventListener("touchstart", stopAutoScroll);
      container.addEventListener("wheel", stopAutoScroll);
      container.addEventListener("mousedown", stopAutoScroll);

      return () => {
        clearTimeout(scrollTimeout);
        cancelAnimationFrame(animationFrameId);
        container.removeEventListener("touchstart", stopAutoScroll);
        container.removeEventListener("wheel", stopAutoScroll);
        container.removeEventListener("mousedown", stopAutoScroll);
      };
    }
  }, [isInView, isAutoScrolling]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide()
    if (touchStart - touchEnd < -50) prevSlide()
  }

  const nextSlide = () => setCarouselIndex(prev =>
    prev < aboutData[index].info.length - 1 ? prev + 1 : 0
  )

  const prevSlide = () => setCarouselIndex(prev =>
    prev > 0 ? prev - 1 : aboutData[index].info.length - 1
  )

  useEffect(() => setCarouselIndex(0), [index])

  return (
    <div className="bg-primary min-h-screen bg-gradient-to-r from-primary/10 via-blue-900/40 to-black/20 py-6 px-4 text-center xl:text-left overflow-x-hidden ">
      <Circles />
      <ParticlesContainer />
      <Bulb />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        className="hidden xl:flex absolute bottom-0 -left-[270px] opacity-70 hover:opacity-100 transition-opacity duration-300 ">
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-6 mt-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col xl:max-w-[55%]">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="text-[18px] md:text-[35px] font-bold  text-white">
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="mt-5 md:mt-4 max-h-[200px] md:max-h-[270px]  overflow-y-auto px-4 rounded-xl fancy-scroll touch-pan-y overscroll-contain"
            ref={scrollRef}
          >
            <div className="text-sm text-white/80 text-left leading-relaxed">
              My journey into technology began long ago at the University of Jos, where studying Computer Science opened my eyes to the transformative power of software. Courses in human-computer interaction and software engineering principles ignited a passion for building intuitive digital experiences — a passion that naturally drew me toward frontend and mobile development.
              <br /><br />
              Since then, I&apos;ve embraced a dynamic and fulfilling career path: from developing secure banking interfaces at HuBuk Technology, to leading frontend teams at Mainstream Exelient where I built the MyMakaranta SaaS platform, to crafting fintech platforms like Eulav and delivering performance-driven solutions at SQE Holdings. Each chapter sharpened my ability to simplify complexity and deliver scalable, user-focused applications.
              <br /><br />
              What drives me is the tangible impact of code. Whether it&apos;s reducing load times, increasing engagement, or enabling seamless multi-currency transactions. I&apos;m now expanding my skill set into backend development and WordPress design, with the goal of becoming a versatile full stack and cross-platform mobile engineer capable of owning products from concept to launch.
            </div>


          </motion.div>



          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {[
              { value: 4, label: "Years of Experience" },
              { value: 20, label: "Products Shipped" },
              { value: 10, label: "Startups & Teams Worked With" },
              { value: 60, label: "GitHub Projects & Contributions" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-2 bg-white/5 rounded-lg">
                <div className="text-xl font-extrabold text-accent">
                  <CountUp start={0} end={item.value} duration={3} />+
                </div>
                <div className="text-[10px] md:text-[12px] uppercase tracking-wider text-white/70">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col xl:max-w-[40%]">

          {/* Tab Navigation */}
          <div className="flex flex-wrap w-full gap-x-4 gap-y-2 mb-2 md:mb-4 justify-center xl:justify-start mt-8 md:mt-2">
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`${index === i ?
                  "text-accent after:w-full after:bg-accent" :
                  "text-white/70 after:w-8 after:bg-white/50"
                  } cursor-pointer capitalize text-sm relative after:h-[2px] after:absolute after:-bottom-1 after:left-0 transition-all duration-300`}>
                {item.title}
              </button>
            ))}
          </div>

          {/* Desktop Content */}
          <div className="hidden xl:block flex-1 overflow-y-auto scrollbar-thin h-[600px] pr-2">
            {aboutData[index].info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full p-3.5 bg-black/20 rounded-lg my-2 last:mb-0">
                <div className="font-light text-sm text-white">{item.title}</div>
                {item.stage && <div className="text-xs text-white/70 mt-1">{item.stage}</div>}
                {item.icons && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {item.icons.map((icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-2xl">
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Content */}
          {isMobile && (
            <div
              className="relative w-full flex-1 xl:hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}>
              <div className="min-h-[220px] px-4 py-6 bg-black/20 rounded-lg">
                <motion.div
                  key={`${index}-${carouselIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full flex flex-col gap-y-3 text-white text-center">
                  <div className="font-light text-base">
                    {aboutData[index].info[carouselIndex].title}
                  </div>
                  {aboutData[index].info[carouselIndex].stage && (
                    <div className="text-sm text-white/70">
                      {aboutData[index].info[carouselIndex].stage}
                    </div>
                  )}
                  {aboutData[index].info[carouselIndex].icons && (
                    <div className="flex flex-wrap gap-4 justify-center mt-3">
                      {aboutData[index].info[carouselIndex].icons.map((icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="text-2xl">
                          {icon}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-between items-center mt-4 px-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors">
                  <FaChevronLeft className="w-4 h-4 text-white" />
                </button>
                <div className="text-xs text-white/60">
                  {carouselIndex + 1} of {aboutData[index].info.length}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors">
                  <FaChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default About