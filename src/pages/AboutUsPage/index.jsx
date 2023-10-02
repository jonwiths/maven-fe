import SignUpBanner from '../../components/ui/Banner/SignUpBanner';
import StatsBanner from '../../components/ui/Banner/StatsBanner';
import PagesHeader from '../../components/ui/Header/PagesHeader';
import Layout from '../../components/ui/Layout/Layout';
import AboutUsIntro from './components/AboutUsIntro';
import Contacts from './components/Contacts';
import CoreValues from './components/CoreValues';
import Faqs from './components/Faqs';
import Map from './components/Map';
import MeetTheTeam from './components/MeetTheTeam';
import Objectives from './components/Objectives';

const AboutUsPage = () => {
  return (
    <>
      <PagesHeader pageTitle="About Maven-edu" />
      <Layout>
        <AboutUsIntro />
        <Objectives />
      </Layout>
      <StatsBanner />
      <Layout>
        <CoreValues />
        <MeetTheTeam />
        <Faqs />
      </Layout>
      <SignUpBanner />
      <Layout>
        <Contacts />
      </Layout>
      <Map />
    </>
  );
};

export default AboutUsPage;
