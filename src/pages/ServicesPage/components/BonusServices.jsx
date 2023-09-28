import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { TbCurrencyPeso } from 'react-icons/tb';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineRise } from 'react-icons/ai';

import style from './BonusServices.module.css';

AOS.init();

const contents = [
  {
    title: 'Free',
    desc: `All contents are free.`,
    icon: <TbCurrencyPeso />
  },
  {
    title: 'Industry-level Mentors',
    desc: `Mentors are required to have at least 2-year minimum industry level on there field.`,
    icon: <IoIosPeople />
  },
  {
    title: 'Room for Improvement',
    desc: `You can gather different skill set, and you can become mentor
    too.`,
    icon: <AiOutlineRise />
  }
];

const BonusServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-gray-100 py-8 text-gray-800 rounded-xl"
      data-aos="fade-up"
    >
      <div className={style.custom__container}>
        <div className="flex flex-col items-center justify-center md:text-left text-center">
          <h3>Notable Bonuses</h3>
          <h1 className="mt-4">Extra Features</h1>
          <p className="mt-4">Looking for new features? We got it for you!</p>
          <div
            className="flex lg:flex-row flex-col gap-4  mt-10 justify-around w-full"
            data-aos="fade-right"
          >
            {contents.map((content) => (
              <div key={content.title} className={style.how}>
                <div className=" bg-gray-50 shadow-xl text-gray-800 rounded-full w-24 h-24 flex items-center justify-center">
                  <p className="text-[50px] ">{content.icon}</p>
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

export default BonusServices;
