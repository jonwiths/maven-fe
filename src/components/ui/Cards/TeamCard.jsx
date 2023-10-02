import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

import alex from '../../../assets/images/profiles/alex-1.jpg';
import jonslogar from '../../../assets/images/profiles/jonslogar-1.jpg';
import arjay from '../../../assets/images/profiles/arjay-1.jpg';
import cherry from '../../../assets/images/profiles/profile-cherry.webp';
import maryJoy from '../../../assets/images/profiles/profile-mary-joy.webp';
import sirBry from '../../../assets/images/profiles/profile-sir-bry1.jpeg';

const aboutTeam = [
  {
    id: 1,
    name: 'John Alexis M. Cochico',
    role: 'Project Manager',
    linked_in:
      'https://www.linkedin.com/in/john-alexis-cochico-604a68258/?fbclid=IwAR3-Ebs0ivq_9liXSbsmIpCkG-ORVAtInUZdJjHS1FQOlYZ6UnZfSyEHc4A',
    facebook: 'https://www.facebook.com/johnalexis.rufo.9',
    img_url: alex
  },
  {
    id: 2,
    name: 'Jonslogar M. Arenque',
    role: 'Full-Stack Developer',
    linked_in: 'https://www.linkedin.com/in/jonslogar-arenque/',
    facebook: 'https://www.facebook.com/jonwiths',
    img_url: jonslogar
  },
  {
    id: 3,
    name: 'Arjay Fox C. Callanta',
    role: 'UI/IX Designer',
    linked_in:
      'https://www.linkedin.com/in/arjay-fox-callanta-82aab2258/?fbclid=IwAR2xsirJySEfaMMxvyGQss1BaNkagIFP_r4AfQdnmDJNsK-apiCojbr09gw',
    facebook: 'https://www.facebook.com/arjayfox.callanta?mibextid=ZbWKwL',
    img_url: arjay
  },
  {
    id: 4,
    name: 'Cherry Joy M. Gumasing',
    role: 'QA Analyst',
    linked_in: 'https://www.linkedin.com/in/cherry-joy-gumasing-833287254/',
    facebook: 'https://www.facebook.com/cjoygumasing?mibextid=ZbWKwL',
    img_url: cherry
  },
  {
    id: 5,
    name: 'Mary Joy G. Gunita',
    role: 'Researcher',
    linked_in: 'https://www.linkedin.com/in/mary-joy-gunita-7b8977258/',
    facebook: 'https://www.facebook.com/maryjoy.gunita?mibextid=ZbWKwL',
    img_url: maryJoy
  },
  {
    id: 6,
    name: 'Bryan Lawrence T. Asistin',
    role: 'Capstone Adviser',
    linked_in: 'https://www.linkedin.com/in/bryanlwrnz/',
    facebook: 'https://www.facebook.com/bryanlwrnz',
    img_url: sirBry
  }
];

const TeamCard = () => {
  return (
    <section className="">
      <Swiper
        breakpoints={{
          748: {
            slidesPerView: 3
          },
          747: {
            slidesPerView: 1
          }
        }}
        grid={{ rows: 1 }}
        navigation={true}
        spaceBetween={20}
        modules={[Navigation]}
        className=""
      >
        {aboutTeam.map((member) => (
          <SwiperSlide
            className="bg-white block rounded-lg shadow-lg cursor-pointer  "
            key={member.id}
          >
            <img
              src={member.img_url}
              style={{ backgroundPosition: top }}
              className="w-full rounded-t-lg max-h-[400px] object-cover"
              alt={member.name}
            />

            <div className="p-6 mb-6 border-2 border-t-0 border-gray-700 text-gray-700  bg-gray-100  rounded-br-lg rounded-bl-lg outline-none shadow-none">
              <h4 className="font-bold text-center hover:text-blue-700">
                {member.name}
              </h4>
              <p className="text-center hover:text-blue-700">{member.role}</p>
              <div className="flex items-center gap-3 justify-center mt-3">
                <a
                  href={member.linked_in}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[23px] hover:text-blue-700"
                >
                  <BsLinkedin />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[23px] hover:text-blue-700"
                >
                  <BsFacebook />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

{
  /* <div className="bg-white block rounded-lg shadow-lg">
              <div className=" bg-no-repeat bg-cover">
                <img
                  src={member.img_url}
                  className="w-full rounded-t-lg max-h-[200px]"
                  alt="..."
                />
              </div>
            </div>

            <div className="p-6 mb-6 border-2 border-gray-700 text-gray-700 bg-gray-100  rounded-br-lg rounded-bl-lg outline-none shadow-none">
              <h4 className="font-bold">{member.name}</h4>
              <p>{member.role}</p>
              <div className="flex items-center gap-3 justify-center mt-3">
                <a
                  href={member.linked_in}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin size={20} />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook size={20} />
                </a>
              </div>
            </div> */
}

export default TeamCard;
