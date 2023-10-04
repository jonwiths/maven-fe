import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { BiLogIn } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineRise } from 'react-icons/ai';

import style from './HowDoesItWork.module.css';

const contents = [
  {
    title: 'Sign Up',
    desc: `Are you looking to join online Learning? Now it’s very simple,
    Now Sign up.`,
    icon: <BiLogIn />
  },
  {
    title: 'Collaborate',
    desc: `Collaborate on your own timing, by scheduling with mentor
    booking`,
    icon: <IoIosPeople />
  },
  {
    title: 'Improvement',
    desc: `You can gather different skill set, and you can become mentor
    too.`,
    icon: <AiOutlineRise />
  }
];

const HowDoesItWork = () => {
  return (
    <section className="bg-white py-8 text-gray-800 " data-aos="fade-up">
      <div className={style.custom__container}>
        <div className="flex flex-col items-center justify-center md:text-left text-center">
          <h3>Mentoring process</h3>
          <h1 className="mt-4">How does it work?</h1>
          <p className="mt-4">
            Looking for new learning setup? We got it for you!
          </p>
          <div
            className="flex lg:flex-row flex-col gap-4  mt-10 justify-around w-full"
            data-aos="fade-right"
          >
            {contents.map((content) => (
              <div key={content.title} className={style.how}>
                <div className=" bg-gray-50 shadow-xl text-gray-800 rounded-full w-24 h-24 flex items-center justify-center">
                  <p className="text-[50px]">{content.icon}</p>
                </div>
                <h3 className="text-center my-2 font-bold text-gray-800">
                  {content.title}
                </h3>
                <p className="text-center">{content.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
