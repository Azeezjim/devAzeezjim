// testimonial data
const testimonialData = [
  {
    image: '/nathan.png',
    name: 'Nathan Taylor',
    position: 'Colleague',
    message:
      "At Galactic Advisors, we pride ourselves on being at the cutting edge, and Ian Main is a remarkable individual who embodies the organization's cutting-edge ethos. He goes beyond his role as a Security Advisor, showcasing self-taught expertise that extends into development. Ian's abilities shine through tasks such as risk assessments, security strategy development, vulnerability analysis, and security audits. His recommendations not only ensure compliance but elevate the organization's security standards.",
  },
  {
    image: '/lindsey.png',
    name: 'Lindsey Elgueda',
    position: 'Manager',
    message:
      'Ian was the best contractor my company has hired over the last 4 years. He has always been punctual, honest, and friendly. We have had a lot of customers compliment his work and his attitude. He is a great asset to any company.',
  },
  {
    image: '/martha2.png',
    name: 'Martha Heymann',
    position: 'Personal Client',
    message:
      'Mr.Mains professionalism makes our working relationship very easy, enjoyable, and creative. I count on him quite a bit and he has always followed through with his commitments. He is a very talented individual and I would recommend him to anyone looking for a web designer or developer.',
  },
];

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Next Image
import Image from 'next/image';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* Avatar, Name, Position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* Avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                      className='rounded-full'
                    />
                  </div>
                  {/* Name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* Position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* Quote & Message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* Quote Icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* Message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
