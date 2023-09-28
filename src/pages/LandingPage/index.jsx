import SignUpBanner from '../../components/ui/Banner/SignUpBanner';
import StatsBanner from '../../components/ui/Banner/StatsBanner';
import Layout from '../../components/ui/Layout/Layout';
import AboutMavenFaqs from './components/AboutMavenFaqs';
import Hero from './components/Hero';
import HowDoesItWork from './components/HowDoesItWork';
import RecommendedCourses from './components/RecommendedCourses';
import WhyWeAreBetter from './components/WhyWeAreBetter';

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
        <WhyWeAreBetter />
        <AboutMavenFaqs />
      </Layout>
      <StatsBanner />
    </>
  );
};

export default LandingPage;
