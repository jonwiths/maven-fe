import AOS from 'aos';
import 'aos/dist/aos.css';

import Accordion from '../../../components/ui/Accordion/Accordion';

AOS.init();

const faqs = [
  {
    id: 1,
    item: 'How can I apply as an E-mentor?',
    content:
      ' We got you! Just go to Become a Mentor page, you can see it on navigation area, fill up the form and press APPLY FOR E-MENTOR.'
  },
  {
    id: 2,
    item: 'How long is the process to be an E-mentor?',
    content:
      'The application process can be as fast as 3 days, depending on your given information and availability.'
  },
  {
    id: 3,
    item: 'How can I know if the mentor is good?',
    content: 'Fugiat, nemo neque quisquam placeat reiciendis corrupti.'
  },
  {
    id: 4,
    item: 'How to know is the mentor/student is not a scam?',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat'
  },
  {
    id: 5,
    item: 'Do I need to have any teaching experience to qualify?',
    content:
      'Teaching experience is an advantage but not required. Any aspiring e-mentor can teach as long as they have the requirements needed.'
  },
  {
    id: 6,
    item: 'How long are the session can be?',
    content:
      'Maven-edu offers one-on-one class between the mentee and the mentor, the time depends on how long does the mentee and mentor agreed on.'
  }
];

const Faqs = () => {
  return (
    <>
      <section
        className="  w-full mx-auto flex items-center justify-center flex-col"
        data-aos="fade-down"
      >
        <h1 className=" bg-gray-100 mb-2 text-blue-700 w-full p-4 text-center">
          Frequently Asked Questions{' '}
          <span className="text-gray-700">(FAQs)</span>
        </h1>
        <p className="text-blue-700 mb-4 md:p-4 p-0">
          Can't find an <span className="font-semibold">answer</span>? You can
          message us using our contact information or{' '}
          <strong>email us below</strong>.
        </p>
        <div className="text-gray-700">
          <Accordion faqs={faqs} />
        </div>
      </section>
    </>
  );
};

export default Faqs;
