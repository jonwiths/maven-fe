import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import bg from '../../../assets/images/step-2.jpg';

const skills = [
  {
    icon: <AiOutlineCheck />,
    text: 'Updated CV'
  },
  {
    icon: <AiOutlineCheck />,
    text: "Bachelor's degree (Diploma)"
  },
  {
    icon: <AiOutlineCheck />,
    text: "Valid ID’s: (Passport, Driver's License, UMID, PhilHealth ID, TIN ID, Postal ID, NBI Clearance, PRC ID, PWD ID, National ID)"
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Specialized knowledge in your field'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Specialized knowledge in your field'
  },
  {
    icon: <AiOutlineCheck />,
    text: '2+ years of industry experience'
  }
];

const equipment = [
  {
    icon: <AiOutlineCheck />,
    text: 'Laptop or Desktop with camera'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Headset / Earphones'
  },
  {
    icon: <AiOutlineCheck />,
    text: 'Stable internet connection'
  }
];

const MentorRequirements = () => {
  return (
    <>
      <section
        className="w-full my-5 mt-10 text-gray-800overflow-hidden"
        data-aos="fade-right"
      >
        <div className=" flex md:flex-row flex-col-reverse">
          <div className="md:flex-1 w-full flex flex-col md:justify-center justify-start ">
            <h4 className="mt-4 md:text-start text-center">STEP 2</h4>
            <h2 className="font-semibold text-center md:text-left ">
              {' '}
              Sharing your knowledge is admirable, but are you good enough to be
              an E-mentor?
            </h2>
            <p className="mt-4 md:text-left text-justify">
              After passing the Step 1, Step 2 is about sending your background
              information. Here are some of the requirements you need to send on
              our email account. And our team will check it before going to the
              next step. IT ALMOST OVER. Hang in there our future mentor.
            </p>

            <div className="flex flex-col gap-2 mt-4 items-start md:items-start justify-start">
              <h4 className="italic">Skills and Qualification</h4>
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[20px] text-green-700">
                    {skill.icon}
                  </span>
                  <p>{skill.text}</p>
                </div>
              ))}
              <h4 className="mt-4 italic">Technical Equipment</h4>
              {equipment.map((content, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[20px] text-green-700">
                    {content.icon}
                  </span>
                  <p>{content.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-justify md:text-left">
              We want to help our mentors for extra income, but the{' '}
              <strong> main objective </strong>
              of our program is for the students who are eager to step up their
              mode of learning. That's why almost 100% of our E-mentors here are
              teaching for FREE.
            </p>
            <p className="mt-4 text-justify md:text-left mb-2">
              This place if for people who want to share their knowledge
              unconditionally.
            </p>

            <Link
              to="/login"
              className="py-3 px-5 text-center text-white bg-blue-600 font-semibold hover:bg-blue-700 rounded-2xl md:max-w-fit mt-2"
            >
              Login as a mentor
            </Link>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <img
              src={bg}
              alt="Maven edu requirements"
              className="max-h-[500px] max-w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorRequirements;
