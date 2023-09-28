import PagesHeader from '../../components/ui/Header/PagesHeader';
import Layout from '../../components/ui/Layout/Layout';
import AboutUsIntro from './components/AboutUsIntro';

const AboutUsPage = () => {
  return (
    <>
      <PagesHeader pageTitle="About Maven-edu" />
      <Layout>
        <AboutUsIntro />
      </Layout>
    </>
  );
};

export default AboutUsPage;
