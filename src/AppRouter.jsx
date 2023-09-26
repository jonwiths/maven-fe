import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPageLayout from './layout/LandingPageLayout';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import BecomeAMentorPage from './pages/BecomeAMentorPage';
import LoginPage from './pages/LoginPage';
import EnrollPage from './pages/EnrollPage';
import ForgotPassword from './pages/ForgotPassword';
import ErrorPage from './pages/ErrorPage';

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
