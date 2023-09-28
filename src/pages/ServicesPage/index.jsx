import StatsBanner from '../../components/ui/Banner/StatsBanner';
import PagesHeader from '../../components/ui/Header/PagesHeader';
import Layout from '../../components/ui/Layout/Layout';
import BonusServices from './components/BonusServices';
import ServicesIntro from './components/ServicesIntro';

const ServicesPage = () => {
  return (
    <>
      <PagesHeader pageTitle="Our Services" />
      <Layout>
        <ServicesIntro />
        <BonusServices />
      </Layout>
      <StatsBanner />
    </>
  );
};

export default ServicesPage;
