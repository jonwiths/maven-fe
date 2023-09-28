import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';

import aboutBg from '../../../assets/images/about-us.webp';
import Accordion from '../../../components/ui/Accordion/Accordion';
const faqs = [
  {
    id: 1,
    item: 'When did Maven-edu start?',
    content:
      'Maven-Edu was created in 2022 as a capstone project in partial fulfillment of the requirements for the degree of Bachelor of Science in Information Technology.'
  },
  {
    id: 2,
    item: 'Is Maven-edu a reliable online tutoring platform?',
    content:
      'Yes, Maven-Edu is a legitimate company that operates with its head office located at Pulong-Buhangin Sta. Maria, Bulacan.'
  },
  {
    id: 3,
    item: 'What is the primary service of Maven-edu?',
    content: 'The primary service of Maven-edu is online mentoring. '
  }
];

const AboutUsIntro = () => {
  return (
    <section>
      <div className="container w-full mx-auto flex flex-col-reverse lg:flex-row">
        <div className="flex-1 w-full ">
          <h5 className="text-blue-800 md:pt-0 pt-2">
            What is this Maven-edu?
          </h5>
          <h2 className="font-semibold">
            <span className="text-blue-700 font-bold">Maven-edu</span>, An
            E-mentoring scheduling platform{' '}
          </h2>
          <p className="py-6 text-justify">
            <span className="font-semibold italic">Maven</span> means that it is
            the best way to show that someone loves knowledge and loves to share
            it. They will often have a great deal of knowledge in a particular
            subject (or multiple subjects). They will always be happy to share
            what they know too.
          </p>
          <h3 className="font-semibold pb-3">
            Maven-edu offers the following:
          </h3>
          <div className="px-2">
            <h4 className="flex items-center gap-2 font-medium py-1">
              <span>
                <BsFillCheckCircleFill size={20} className="text-blue-700 " />
              </span>
              Convience
            </h4>
            <h4 className="flex items-center gap-2 font-medium py-1">
              <span>
                <BsFillCheckCircleFill size={20} className="text-blue-700" />
              </span>
              Flexibility
            </h4>
            <h4 className="flex items-center gap-2 font-medium py-1">
              <span>
                <BsFillCheckCircleFill size={20} className="text-blue-700" />
              </span>
              Easy to access
            </h4>
          </div>
          <h3 className="pt-5 font-semibold">Keep in touch</h3>
          <div className="flex items-center gap-2 font-normal py-1 pl-2">
            <span>
              <FaEnvelope size={20} className="text-blue-700 " />
            </span>
            <h5 className="">maven.edu05@gmail.com</h5>
          </div>
          <h3 className="font-semibold my-5">More about Maven-edu:</h3>
          <div className="flex items-center">
            <Accordion faqs={faqs} />
          </div>
        </div>
        <div className="flex-1 w-full p-2 ">
          <img
            src={aboutBg}
            alt=""
            className="block md:h-[700px] h-[500px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntro;
