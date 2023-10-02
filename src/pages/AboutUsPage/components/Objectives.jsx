import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutBg from '../../../assets/images/objectives.jpg';

AOS.init();

const Objectives = () => {
  return (
    <section
      className="w-full mx-auto flex flex-col-reverse md:flex-row-reverse gap-4"
      data-aos="fade-right"
    >
      <div className="flex-1 w-full">
        <h5 className="text-blue-800 md:pt-0 pt-2">Objectives</h5>
        <div className=" mb-5">
          <h2 className="font-semibold">
            OUR
            <strong className="text-blue-700"> OBJECTIVES</strong>
          </h2>
          <p className="pt-3 text-justify">
            Maven-edu was made to assist students who want to advance or enhance
            their knowledge, especially those who are struggling with a
            particular subject. This is accomplished by giving mentees support,
            direction, and coaching from mentors with more expertise.
          </p>
        </div>
        <h5 className="text-blue-800 md:pt-0 pt-2">Mission and Vision</h5>
        <div className=" mb-5">
          <h2 className="font-semibold">
            OUR
            <strong className="text-blue-700"> VISION</strong>
          </h2>
          <p className="pt-3 text-justify">
            To empower future professionals the confidence they need to learn,
            communicate, and value the knowledge and skills that will aid them
            succeed in their chosen career paths.
          </p>
        </div>
        <div className="">
          <h2 className="font-semibold">
            OUR
            <strong className="text-blue-700"> MISSION</strong>
          </h2>
          <p className="pt-3 text-justify">
            Maven-edu aims to provide top-quality academic services that foster
            the development of knowledge and skills through one-on-one online
            discussions with the convenience of choosing the time that works
            best for them. Maven-Edu intends to achieve personal educational
            goals.
          </p>
        </div>
      </div>
      <div className="flex-1 w-full md:mt-0 mt-4">
        <img
          src={aboutBg}
          alt="about maven edu"
          className="block md:h-[700px] h-[500px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Objectives;
