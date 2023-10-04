import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import { FaLightbulb } from 'react-icons/fa';

const contents = [
  {
    icon: <FaLightbulb />,
    step: 'STEP 1',
    title: 'APPLY ONLINE',
    current: true,
    desc: 'Your adventure can begin by sending us an email.'
  },
  {
    icon: <FaLightbulb />,
    step: 'STEP 2',
    title: 'WAIT FOR CONFIRMATION',
    current: false,
    desc: 'Our team will get back to you as soon as we receive your email.'
  },
  {
    icon: <FaLightbulb />,
    step: 'STEP 3',
    title: 'MEET THE TEAM',
    current: false,
    desc: "Let's get to know one another and pass the assessment."
  },
  {
    icon: <FaLightbulb />,
    step: 'STEP 4',
    title: 'START TEACHING',
    current: false,
    desc: 'Start teaching after opening the necessary number of slots.'
  }
];

const MentorApplicationProcess = () => {
  return (
    <section className="md:mt-10 mt-4" data-aos="fade-down">
      <div className=" mx-auto flex flex-col">
        <h1 className="font-semibold text-center my-4">
          E-Mentor Application Process
        </h1>
        <div className="grid md:grid-cols-4 gap-x-2 mt-4">
          {contents.map((content) => (
            <div
              key={content.step}
              className={
                content.current
                  ? `flex flex-col items-center p-4 border-4 bg-gray-100 hover:bg-white mb-2 
            rounded-2xl text-gray-700 border-blue-500 hover:border-blue-700 cursor-pointer  shadow-inner`
                  : `flex flex-col items-center p-4 border-4 border-slate-200 bg-slate-50
            mb-2 rounded-2xl text-gray-500 cursor-pointer`
              }
            >
              <span
                className={
                  content.current ? 'text-[35px] text-blue-700' : 'text-[35px]'
                }
              >
                {content.icon}
              </span>
              <p className="mt-2 text-center">{content.step}</p>
              <h4
                className={
                  content.current
                    ? 'font-bold text-center uppercase text-blue-700'
                    : 'font-bold text-center uppercase text-blue-400'
                }
              >
                {content.title}
              </h4>
              {content.current && (
                <p className="mt-2 py-1 px-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium">
                  You are here
                </p>
              )}
              <p className="text-justify md:text-center mt-3">{content.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center mt-10">
          <p>Go now and apply using our contact info</p>
          <strong className="md:mt-4 mt-6 font-semibold text-center">
            If you still have more questions about being an e-mentor, feel free
            to message us.
          </strong>
          <p className="mt-2">Email: maven.edu05@gmail.com</p>
          <p className="mt-2">Phone: (+63)912 345 6789</p>
        </div>
      </div>
      <hr className="border text-gray-800 mt-6" />
    </section>
  );
};

export default MentorApplicationProcess;
