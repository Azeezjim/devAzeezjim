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
    <div className='bg-primary h-full bg-gradient-to-r from-primary/10 via-blue-800/20 to-black/20 py-36 flex items-center'>
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
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-white text-[12px] sl:text-[12.5px] md:text-[14px] lg:text-[15px] xl:text-[18px] leading-6'
            >
              I transform digital visions into reality through expert development services that blend
              technical precision with creative flair. Whether collaborating with teams or taking on
              contracts, I deliver exceptional results that drive business value. My approach combines innovative
              problem-solving with meticulous execution, ensuring projects meet the highest standards.
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
