import AOS from 'aos';
import 'aos/dist/aos.css';

import TeamCard from '../../../components/ui/Cards/TeamCard';

AOS.init();

const MeetTheTeam = () => {
  return (
    <section data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-12 w-full bg-gray-100 p-4 text-center mt-8">
        MEET THE <strong className="text-blue-600">TEAM</strong>
      </h2>
      <TeamCard />
    </section>
  );
};

export default MeetTheTeam;
