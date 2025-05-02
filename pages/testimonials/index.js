// components
import TestimonialSlider from "../../components/TestimonialSlider";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ParticlesContainer from "../../components/ParticlesContainer";

const Testimonials = () => {
  return (
    <div className="bg-primary h-full bg-gradient-to-r from-primary/10 via-blue-800/20 to-black/20 py-20 text-center">
      <ParticlesContainer />
      <div className="container mx-auto h-full flex flex-col justify-center mt-[-40px] md:mt-0">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[25px] font-bold md:text-[35px] h2 mb-8 xl:mb-0"
        >
          What Colleagues <span className="text-accent">Say.</span>
        </motion.h2>
        {/* Testimonial Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
