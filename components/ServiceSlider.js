// icons
import { RxArrowTopRight } from 'react-icons/rx';

import {
  SiNextdotjs,
  SiGithub,
  SiRedux,
  SiReact,
  SiFastapi,
} from 'react-icons/si';
import { IoLogoFigma } from "react-icons/io5";
import { FaCode, FaHandshake, FaRegComments } from "react-icons/fa";
import { MdSpeed, MdSecurity } from "react-icons/md";

import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
const serviceData = [
  {
    icon: <SiNextdotjs />,
    title: 'Web Development',
    description: 'Crafting exceptional digital experiences with React, Next.js, and Tailwind CSS, transforming complex requirements into elegant, responsive web solutions with optimal performance.'
    },
  {
    icon: <SiGithub />,
    title: 'Git/Github',
    description: 'Mastering collaborative development through GitHub with expert command of Git workflows, ensuring seamless version control and efficient team collaboration on all projects.',
    url: 'https://github.com/Azeezjim',
  },
  {
    icon: <SiReact />,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile experiences with React Native and Expo that deliver native performance while maintaining code efficiency.'
  },
  {
    icon: <IoLogoFigma />,
    title: 'UI/UX Design',
    description: "Translating vision into reality with meticulous attention to pixel-perfect implementation, ensuring designs maintain their integrity while delivering seamless user experiences.",
  },
  {
    icon: <MdSpeed />,
    title: 'Performance Optimization',
    description: 'Enhancing application speed and responsiveness through advanced techniques that reduce load times and improve user satisfaction.'
  },
  {
    icon: <SiFastapi />,
    title: 'API Integration',
    description: 'Seamlessly connecting frontend interfaces with backend services through RESTful APIs, ensuring reliable data exchange and system functionality.'
  },
  {
    icon: <SiRedux />,
    title: 'State Management',
    description: 'Implementing sophisticated state management solutions using Redux, Zustand, and React Query for seamless data flow and optimal performance.'
  },
  {
    icon: <FaCode />,
    title: 'Form Handling',
    description: 'Mastering complex form implementations with React Hook Form, Formik, and Zod validation for intuitive, error-resistant user interactions.'
  },
  {
    icon: <MdSecurity />,
    title: 'Secure Authentication',
    description: 'Implementing robust authentication systems with Clerk and custom solutions to protect user data and ensure application security.'
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* Click Overlay */}
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute inset-0 z-10'
              ></a>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & description */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[400px] leading-normal text-[13px]'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl '>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
