// testimonial data
const testimonialData = [
  {
    image: '/Images/Dr. Abdullahi.jpg',
    name: 'Dr. Aabullahi Garuba Ali',
    position: 'CEO HuBuk Technology Ltd',
    message:
      'I had the privilege of working closely with Abdulazeez Garuba at Hubuk Technology Ltd on several financial systems projects as the CEO as of thentime, and his impact was extraordinary. Abdulazeez is a brilliant front-end and mobile developer, combining sharp technical expertise with a relentless pursuit of excellence. His precision, professionalism, and ability to thrive under pressure are truly inspiring. Any team would be fortunate to have his talent and unwavering drive for success and growth.',
  },
  {
    image: '/Images/Isah.jpg',
    name: 'Isah Abba Ibrahim',
    position: 'Colleague',
    message:
      "Working alongside Abdulazeez at Hubuk and studying with him at the University of Jos has been truly inspiring. His remarkable programming skills, especially in web development, set him apart as a rare talent. Abdulazeez combines academic brilliance with a relentless drive for excellence, making him an extraordinary asset to any team. His unwavering dedication, sharp intellect, and passion for innovation are nothing short of exceptional. I wholeheartedly recommend him for any endeavor that demands greatness.",
  },
  {
    image: '/Images/Khail.jpg',
    name: 'Khalil Ibrahim',
    position: 'Frontend DEv at Eulav',
    message:
      'At Eulav, Abdulazeez consistently impressed me with his exceptional problem-solving abilities and unwavering commitment to excellence. He tackles challenges and bugs with remarkable precision and creativity, always pushing for the best solution. Beyond his technical brilliance, his positivity, approachability, and team spirit make him a true driving force within any team. Abdulazeez is a standout professional destined for greatness.',
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
      className='h-[550px] md:h-[430px] w-full'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-8'>
              {/* Avatar, Name, Position */}
              <div className='w-full max-w-[350px] md:mb-[-40px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center '>
                  {/* Avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image
                      src={person.image}
                      width={130}
                      height={210}
                      alt={person.name}
                      className='rounded-full w-[130px] h-[130px] object-cover md:w-[150px] md:h-[150px]'
                    />
                  </div>
                  {/* Name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* Position */}
                  <div className='text-[14px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* Quote & Message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] mt-[-16px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* Quote Icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* Message */}
                <div className='text-[12px] xl:text-[15px] text-center md:text-left'>
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
