import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { MdComputer } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

import style from './HowDoesItWork.module.css';

const contents = [
  {
    icon: <BsFillCalendarCheckFill />,
    title: 'Convenient Study Schedule',
    desc: 'Choose the available time base on your own convienience.'
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Flexibility',
    desc: '  You can choose your mentor based on your needs that you can afford.'
  },
  {
    icon: <MdComputer />,
    title: 'Modern Internet Platform',
    desc: ' You can choose your mentor based on your needs and price that you can afford.'
  }
];

const WhyWeAreBetter = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-gray-50 rounded-xl overflow-hidden p-4 "
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center justify-center md:text-left text-center">
        <div className="flex items-center justify-center pb-5 md:text-left text-center text-gray-800 ">
          <h1 className="font-semibold text-2xl mt-4">
            Why we are the <strong>better than</strong> others?
          </h1>
        </div>
        <div className="grid md:grid-cols-3">
          {contents.map((box) => (
            <div
              key={box.title}
              className=" pt-6 w-full  px-3 text-center"
              data-aos="zoom-in-left"
            >
              <div className=" flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 ">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-600">
                    <span className="text-[25px]">{box.icon}</span>
                  </div>
                  <h6 className="text-xl font-semibold">{box.title}</h6>
                  <p className="mt-2 mb-4 text-gray-600">{box.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBetter;
