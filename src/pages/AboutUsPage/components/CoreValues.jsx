import AOS from 'aos';
import 'aos/dist/aos.css';

import { AiOutlineRise } from 'react-icons/ai';
import { BiHappyBeaming } from 'react-icons/bi';
import { FaHandsHelping } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';

AOS.init();

const coreValues = [
  {
    icon: <BiHappyBeaming />,
    title: 'It makes a difference',
    desc: 'We challenge you to exceed your perceived limits in knowledge enhancement.'
  },
  {
    icon: <AiOutlineRise />,
    title: 'Lift others up',
    desc: 'Self-studying is good, but getting help from others is better.'
  },
  {
    icon: <FaHandsHelping />,
    title: 'We bring knowledge.',
    desc: ' We operate under the premise that knowledge is power.'
  },
  {
    icon: <MdOutlineConnectWithoutContact />,
    title: 'Connecting knowledge',
    desc: 'Strong connections thrive when both parties are mutually invested in knowledge sharing success.'
  }
];

const CoreValues = () => {
  return (
    <section className="mx-auto w-full" data-aos="fade-up">
      <h1 className="text-center p-4 bg-blue-100 ">
        <span className="text-blue-700">CORE</span> VALUES
      </h1>
      <div className="grid md:grid-cols-4 mt-6 gap-4 cursor-pointer">
        {coreValues.map((content) => (
          <div
            key={content.title}
            className="flex flex-col items-center justify-center gap-2 mb-2 bg-gray-50 hover:bg-slate-100 p-2 rounded-2xl hover:transform hover:-translate-y-3 hover:z-10 transition-transform"
          >
            <span className="md:text-[50px] text-[35px] text-blue-600">
              {content.icon}
            </span>
            <h3 className="text-center font-semibold"> {content.title}</h3>
            <p className="text-center">{content.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
