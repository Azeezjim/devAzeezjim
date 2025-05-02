// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'HuBuk',
          path: '/Images/hubuk.png',
          url: 'https://hubuktechnology.com/',
        },
        {
          title: 'SQE.io',
          path: '/Images/sqe.png',
          url: 'https://sqe.io/',
        },
        {
          title: 'Eulav',
          path: '/Images/eulav.png',
          url: 'https://eulav.io/',
        },
        {
          title: 'MeHub',
          path: '/Images/mehub.png',
          url: '',
        },
        {
          title: 'Give Aid',
          path: '/Images/giveaid.png',
          url: 'https://give-aid-fe.vercel.app/',
        },
        {
          title: 'Starloan',
          path: '/Images/sterlon.png',
          url: '',
        },
      ],
    },
  ],
};

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Next Image
import Image from 'next/image';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className='mb-6 overflow-y-auto max-h-[500px] scrollbar-thin'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image
                        src={image.path}
                        alt={image.title}
                        width={500}
                        height={300}
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* Click Overlay */}
                      <a
                        href={image.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='absolute inset-0 z-10'
                      ></a>
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* Title Part 1 */}
                          <div className='delay-100 font-bold'>
                            Live Project:{' '}
                          </div>
                          {/* Title Part 2 */}
                          <div className='text-white delay-200'>
                            {image.title}
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
