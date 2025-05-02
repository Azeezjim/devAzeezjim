// testimonial data
const testimonialData = [
  {
    image: '/Images/Austin.jpg',
    name: 'Austin Arrington',
    position: 'Founder Plant Group',
    message:
      "Garuba played a key role in shaping a forward-thinking project aimed at reimagining cybersecurity for the quantum age. His sharp Frontend skills, creativity, and thoughtful approach to interface development were truly impressive. With a strong work ethic, innovative mindset, and a positive attitude, Garuba is a standout developer with limitless potential.",
    linkedin: 'https://www.linkedin.com/in/austin-arrington-a7305b34?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    image: '/Images/Dr. Abdullahi.jpg',
    name: 'Dr. Aabullahi Garuba Ali',
    position: 'Manger FlyBird Aviation',
    message:
      'I had the privilege of working closely with Abdulazeez Garuba at Hubuk Technology Ltd on several financial systems projects as the CEO as of thentime, and his impact was extraordinary. Abdulazeez is a brilliant front-end and mobile developer, combining sharp technical expertise with a relentless pursuit of excellence. His precision, professionalism, and ability to thrive under pressure are truly inspiring. Any team would be fortunate to have his talent and unwavering drive for success and growth.',
    linkedin: 'https://www.linkedin.com/in/abdullahi-garba-ali-ph-d-77b6b121?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    image: '/Images/Isah.jpg',
    name: 'Isah Abba Ibrahim',
    position: 'Software Engineer Snaphunt',
    message:
      "Working alongside Abdulazeez at Hubuk and studying with him at the University of Jos has been truly inspiring. His remarkable programming skills, especially in web development, set him apart as a rare talent. Abdulazeez combines academic brilliance with a relentless drive for excellence, making him an extraordinary asset to any team. His unwavering dedication, sharp intellect, and passion for innovation are nothing short of exceptional. I wholeheartedly recommend him for any endeavor that demands greatness.",
    nkedin: 'https://www.linkedin.com/in/isah-ibrahim?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    image: '/Images/Khail.jpg',
    name: 'Ibrahim Hamman',
    position: 'Graduate Trainee NMPC',
    message:
      'At Eulav, Abdulazeez consistently impressed me with his exceptional problem-solving abilities and unwavering commitment to excellence. He tackles challenges and bugs with remarkable precision and creativity, always pushing for the best solution. Beyond his technical brilliance, his positivity, approachability, and team spirit make him a true driving force within any team. Abdulazeez is a standout professional destined for greatness.',
    nkedin: 'https://www.linkedin.com/in/ibrahim-hamman-23732125a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
              <div className='w-full max-w-[350px] md:mt-[-20px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center '>
                  {/* Avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image
                      src={person.image}
                      width={130}
                      height={130}
                      alt={person.name}
                      className='rounded-full w-[130px] h-[130px] object-cover md:w-[150px] md:h-[150px]'
                    />
                  </div>
                  {/* Name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* Position */}
                  <div className='text-[14px] font-extralight tracking-widest'>
                    {person.position}
                  </div>

                  {/* LinkedIn Button */}
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1 px-3 rounded-md transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>

                </div>
              </div>
              {/* Quote & Message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] mt-[-16px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* Quote Icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* Message */}
                <div className='md:text-[13px] text-[11.5px] xl:text-[15px] text-center md:text-left'>
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
