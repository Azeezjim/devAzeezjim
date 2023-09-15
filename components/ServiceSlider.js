// icons
import { RxArrowTopRight } from 'react-icons/rx';

import {
  SiAnsible,
  SiReactos,
  SiNextdotjs,
  SiFirebase,
  SiGooglecloud,
  SiGithub,
} from 'react-icons/si';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
const serviceData = [
  {
    icon: <SiGithub />,
    title: 'Github',
    description: "View my Github profile and see what I'm working on!",
    url: 'https://github.com/immain',
  },
  {
    icon: <SiReactos />,
    title: 'Mobile UI/UX',
    description: "I've been designing and developing for the web since 2019.",
  },
  {
    icon: <SiAnsible />,
    title: 'Automation',
    description: 'Automated Game Servers, Discord Bots, and more!',
  },
  {
    icon: <SiNextdotjs />,
    title: 'Development',
    description: 'Used React, NextJS, and TailwindCSS to build this site!',
  },
  {
    icon: <SiFirebase />,
    title: 'Cyber Security',
    description: 'Risk Management, Penetration Testing, and Audits.',
  },
  {
    icon: <SiGooglecloud />,
    title: 'Cloud Computing',
    description:
      'Focus on AWS, but also have experience with Azure and Linode.',
  },
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
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
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
