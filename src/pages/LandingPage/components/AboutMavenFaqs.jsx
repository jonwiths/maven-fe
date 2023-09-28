import { useEffect, useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
  },
  {
    id: 4,
    item: 'How can I apply as an E-mentor?',
    content:
      ' We got you! Just go to Become a Mentor page, you can see it on navigation area, fill up the form and press APPLY FOR E-MENTOR.'
  }
];

const AboutMavenFaqs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [selected, setSelected] = useState(null);

  const handleToggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <>
      <section className="m-4" data-aos="fade-up">
        <div className="container w-full mx-auto flex items-center justify-center flex-col">
          <h1 className="text-gray-700 w-full p-4 text-center">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-gray-700 p-4 mb-2">
            Can't find an <strong className="font-semibold">answer</strong>? You
            can message using our contact information.
          </p>
        </div>
        {faqs.map((faq) => (
          <article
            className="max-w-[600px] mb-1 hover:cursor-pointer mx-auto"
            key={faq.id}
            onClick={() => handleToggle(faq.id)}
          >
            <div
              className={
                selected === faq.id
                  ? 'bg-gray-700 text-white flex justify-between items-center gap-3  border-gray-700 rounded-xl p-2 hover:shadow-lg'
                  : 'flex justify-between items-center gap-3 border hover:bg-gray-100 border-gray-700 rounded-xl p-2 hover:shadow-lg text-gray-700'
              }
            >
              <h4 className="font-semibold ">{faq.item}</h4>
              <span>
                {selected === faq.id ? (
                  <AiFillMinusCircle size={30} />
                ) : (
                  <AiFillPlusCircle size={30} />
                )}
              </span>
            </div>
            <p className={selected === faq.id ? 'p-2 flex' : 'hidden'}>
              {faq.content}
            </p>
          </article>
        ))}
      </section>
    </>
  );
};

export default AboutMavenFaqs;
