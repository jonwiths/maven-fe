import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import EnrollPage from './pages/EnrollPage';
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import ForgotPassword from './pages/ForgotPassword';
import BecomeAMentorPage from './pages/BecomeAMentorPage';
import LandingPageLayout from './layout/LandingPageLayout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/become-a-mentor" element={<BecomeAMentorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
