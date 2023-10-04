import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination, Navigation } from 'swiper/modules';

import it from '../../../assets/images/courses/it.jpg';
import hm from '../../../assets/images/courses/hm-min.jpg';
import soon from '../../../assets/images/courses/soon.jpg';
import math from '../../../assets/images/courses/math-min.jpg';
import entrep from '../../../assets/images/courses/entrep-min.jpg';
import comeng from '../../../assets/images/courses/com-eng-min.jpg';
import english from '../../../assets/images/courses/english-min.jpg';
import accountancy from '../../../assets/images/courses/accountancy-min.jpg';

const coursesImage = [
  {
    id: 1,
    img_link: accountancy,
    label: 'Accountancy'
  },
  {
    id: 2,
    img_link: it,
    label: 'Information Technology'
  },
  {
    id: 3,
    img_link: comeng,
    label: 'Computer Engineer'
  },
  {
    id: 4,
    img_link: math,
    label: 'Education: Mathematics'
  },
  {
    id: 5,
    img_link: english,
    label: 'Education: English'
  },
  {
    id: 6,
    img_link: hm,
    label: 'Hotel Management'
  },
  {
    id: 7,
    img_link: entrep,
    label: 'Entrepreneurship'
  },
  {
    id: 8,
    img_link: soon,
    label: 'Coming soon...'
  }
];

const RecommendedCourses = () => {
  return (
    <section className="py-8" data-aos="fade-up">
      <div className="custom-container p-4">
        <div className="flex flex-col items-center justify-center">
          <h3>Limited Courses</h3>
          <h1 className="mt-4">Choose the path you want to explore</h1>
          <p className="mt-4">
            <em>"Some things start off small and then grow." </em>This is also
            true for us, which is why we prioritize only these{' '}
            <strong> seven (7) courses:</strong>
          </p>
          <div className="my-5"></div>
          <div className="w-full">
            <Swiper
              breakpoints={{
                748: {
                  slidesPerView: 3
                },
                747: {
                  slidesPerView: 1
                }
              }}
              grid={{
                rows: 1
              }}
              spaceBetween={10}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Grid, Pagination, Navigation]}
              className="w-full"
            >
              {coursesImage.map((image) => (
                <SwiperSlide
                  key={image.id}
                  style={{
                    backgroundImage: `url(${image.img_link})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                  className={`bg-red-500 w-full h-[350px]  rounded-xl  flex items-center justify-center  bg-fixed`}
                >
                  <h3 className="text-white w-full p-4 bg-gray-900 bg-opacity-40 text-center font-semibold">
                    {image.label}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/*<div className="grid lg:grid-cols-4 gap-4 w-full place-items-center align-middle ">
             {coursesImage.map((image) => (
              <article
                key={image.id}
                className="h-[250px] md:w-full w-[230px] mx-auto bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-2xl "
                style={{
                  backgroundImage: `url(${image.img_link})`
                }}
              >
                <h3 className="w-full text-white p-2 bg-gray-900 bg-opacity-60 text-3xl text-center">
                  {image.label}
                </h3>
              </article>
            ))} 
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCourses;
