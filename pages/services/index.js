// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';

const Services = () => {
  return (
    <div className='bg-primary h-full bg-gradient-to-r from-primary/10 via-blue-800/20 to-black/20 py-8 flex items-center'>
      <ParticlesContainer />
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-2'
            >
              My Services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-[14px] md:text-[16px] leading-relaxed"
            >
              Armed with a BSc in Computer Science and over four years of hands-on experience, I specialize in crafting seamless, high-performance applications using React.js, Next.js, and React Native. From architecting robust state management to fine-tuning load-time performance and integrating secure payment workflows, my work delivers both technical excellence and engaging user experiences. Let&apos;s build the next generation of intuitive, scalable digital products together.
            </motion.p>

          </div>
          {/* service slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
