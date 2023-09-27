import SignUpBanner from '../../components/ui/Banner/SignUpBanner';
import StatsBanner from '../../components/ui/Banner/StatsBanner';
import Layout from '../../components/ui/Layout/Layout';
import Hero from './components/Hero';
import HowDoesItWork from './components/HowDoesItWork';
import RecommendedCourses from './components/RecommendedCourses';
import WheWeAreBetter from './components/WheWeAreBetter';

const LandingPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <HowDoesItWork />
      </Layout>
      <SignUpBanner />
      <Layout>
        <RecommendedCourses />
        <WheWeAreBetter />
      </Layout>
      <StatsBanner />
    </>
  );
};

export default LandingPage;
