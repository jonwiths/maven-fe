import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import style from './ServicesIntro.module.css';

import student from '../../../assets/images/student.jpg';
import mentor from '../../../assets/images/mentor.jpg';

const ServicesIntro = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="mt-6" data-aos="fade-up">
        <div className="mx-auto">
          <h1 className="font-semibold text-center ">
            Do you want to <strong className="text-blue-700">change </strong>
            your mode of learning?
          </h1>
          <hr className="max-w-[500px] mx-auto border-gray-500 my-4" />
          <h1 className="font-semibold text-center ">
            Or do you want <strong className="text-blue-700">share</strong> your
            knowledge?
          </h1>
          <p className="text-center pt-6">
            Maven-edu provides a platform for both mentors and students who want
            to both grow. For mentors who have the skills, knowledge,
            experience, and of course, the passion and willingness to share
            them, and for students who seek their expertise, Maven-edu is here
            to give them a positive learning environment.
          </p>

          <div className="flex flex-col mt-4">
            {/* Left */}
            <div
              className="flex md:flex-row flex-col-reverse items-center py-4 gap-x-4"
              data-aos="fade-right"
            >
              <div className="mt-4 md:flex-1 w-full flex items-center justify-center">
                <img
                  src={student}
                  alt="..."
                  className="bg-contain max-h-[500px] w-fit rounded-2xl"
                />
              </div>
              <div className="md:flex-1 w-full flex flex-col items-center md:items-start">
                <h2 className="font-semibold text-blue-700 uppercase text-center md:text-left">
                  Want to top on your class?
                </h2>
                <em className="font-semibold pb-4 text-center md:text-left text-2xl">
                  Welcome to our Student's Portal.
                </em>
                <p className="pb-2">
                  Maven-edu is pleased to introduce to you the online learning
                  platform that will be your partner in education. Enroll now!
                  So we can start your journey.
                </p>
                <div className="flex gap-2 md:flex-row flex-col mb-4">
                  <Link to="/enroll" className={style.rounded__btn_light}>
                    Become a Student
                  </Link>
                  <Link to="/login" className={style.rounded__btn_dark}>
                    Login as a Student
                  </Link>
                </div>
              </div>
            </div>

            {/* Right */}
            <div
              className="flex md:flex-row-reverse flex-col-reverse items-center py-4 gap-x-4"
              data-aos="fade-left"
            >
              <div className="mt-4 md:flex-1 w-full flex items-center justify-center">
                <img
                  src={mentor}
                  alt="..."
                  className="bg-contain max-h-[500px] w-fit rounded-2xl"
                />
              </div>
              <div className="md:flex-1 w-full flex flex-col items-center md:items-start">
                <h2 className="font-semibold  text-blue-700 uppercase text-center md:text-left">
                  Willing to share your knowledge for FREE?
                </h2>
                <em className="font-semibold pb-4 text-center md:text-left text-2xl">
                  Welcome to our Mentor's Portal.
                </em>
                <p className="p-2">
                  Mentoring is an excellent way to build leadership skills,
                  empathy, and teachings. Be a part of someone's career
                  transformation. Take an hour to share your experiences and
                  knowledge!
                </p>
                <div className="flex md:gap-4 gap-2 md:flex-row flex-col mb-4">
                  <Link
                    to="/become-a-mentor"
                    className={style.rounded__btn_light}
                  >
                    Become a Mentor
                  </Link>
                  <Link to="/login" className={style.rounded__btn_dark}>
                    Login as a Mentor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesIntro;
