import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { useEffect } from 'react';
import { MdComputer } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

const content = [
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

const WheWeAreBetter = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="bg-gray-100 py-6 rounded-xl mx-4" data-aos="flip-up">
        <div className="flex items-center justify-center pb-5 md:text-left text-center text-gray-800 ">
          <h1 className="font-semibold text-2xl">
            Why we are the <strong>better than</strong> others?
          </h1>
        </div>
        <div className="flex flex-wrap">
          {content.map((box) => (
            <div
              key={box.title}
              className="lg:pt-10 pt-6 w-full md:w-4/12 px-3 text-center"
              data-aos="zoom-in-left"
            >
              <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
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
      </section>
    </>
  );
};

export default WheWeAreBetter;
