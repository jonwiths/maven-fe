import MentorIntro from './components/MentorIntro';
import MentorStep1 from './components/MentorStep1';
import Layout from '../../components/ui/Layout/Layout';
import MentorRequirements from './components/MentorStep2';
import PagesHeader from '../../components/ui/Header/PagesHeader';
import StatsBanner from '../../components/ui/Banner/StatsBanner';
import MentorApplicationProcess from './components/MentorApplicationProcess';

const BecomeAMentorPage = () => {
  return (
    <>
      <PagesHeader pageTitle={'Become a Mentor'} />
      <Layout>
        <MentorIntro />
        <MentorApplicationProcess />
        <MentorStep1 />
        <MentorRequirements />
      </Layout>
      <StatsBanner />
    </>
  );
};

export default BecomeAMentorPage;
