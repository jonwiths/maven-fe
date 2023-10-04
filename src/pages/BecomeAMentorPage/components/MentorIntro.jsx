import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import { Link } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdConnectWithoutContact } from 'react-icons/md';
import { FaHandsHelping, FaLightbulb } from 'react-icons/fa';

import homepageBg from '../../../assets/images/mentorbg.jpg';

const threeDesc = [
  {
    icon: <FaHandsHelping />,
    text: 'You are helping others grow'
  },
  {
    icon: <FaLightbulb />,
    text: 'You are giving them fresh ideas'
  },
  {
    icon: <MdConnectWithoutContact />,
    text: 'You are making connections'
  }
];

const MentorIntro = () => {
  return (
    <section
      className="w-full mx-auto flex items-center flex-col"
      data-aos="fade-up"
    >
      <h1 className="font-semibold text-center py-6">
        Want to share knowledge and{' '}
        <strong className="text-blue-700"> become an E-Mentor?</strong>
      </h1>
      <h4 className="text-center mb-4">
        Help us build a new world of sharing knowledge to the future leaders.{' '}
      </h4>
      <h4 className="text-center mb-4">
        Join the high quality instructors who are passionate to share their
        expertise and help students grow.
      </h4>
      <Link
        to="/login"
        className="py-3 px-5 mt-1 text-center text-white bg-blue-600 font-semibold hover:bg-blue-700 rounded-2xl"
      >
        Login as a mentor
      </Link>
      <div className="w-full">
        <p className="text-center my-4">
          Being an E-mentor must have the following:
        </p>
        <div className="flex gap-4 md:flex-row flex-col items-center md:justify-center justify-start">
          <span className="flex items-center gap-2">
            <AiOutlineCheck size={20} className="text-green-700 " />
            Bachelor's Degree
          </span>
          <span className="flex items-center gap-2">
            <AiOutlineCheck size={20} className="text-green-700" />
            2+ years of industry experience
          </span>
          <span className="flex items-center gap-2">
            <AiOutlineCheck size={20} className="text-green-700" />
            Willingness in sharing knowledge
          </span>
        </div>
      </div>
      <div className="py-4">
        <img
          src={homepageBg}
          alt="homepage background"
          className="h-[500px] border-2 border-blue-800 object-cover rounded-2xl"
        />
      </div>
      <div className="mt-12" data-aos="fade-right">
        <h2 className="font-semibold text-center">
          You are not just sharing knowledge.
        </h2>
        <h2 className="font-semibold text-center pb-4">
          You are helping the future of your industry.
        </h2>
        <div className="flex gap-x-5 gap-y-7 mt-6 md:flex-row flex-col">
          {threeDesc.map((desc) => (
            <div
              key={desc.text}
              className="bg-gray-50 flex flex-col items-center border-2 border-gray-300 rounded-xl py-6 px-8 cursor-pointer hover:-translate-y-3 transition-all"
            >
              <span className="text-[35px] text-blue-700 mb-2">
                {desc.icon}
              </span>
              <p className="text-center">{desc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorIntro;
