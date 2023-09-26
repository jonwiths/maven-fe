import { Outlet } from 'react-router-dom';
import LadingPageNav from '../components/ui/Navigation/LadingPageNav';
import Footer from '../components/ui/Footer/Footer';

const LandingPageLayout = () => {
  return (
    <>
      <LadingPageNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingPageLayout;
