import { Link } from 'react-router-dom';

import mavenLogo from '../../../assets/images/logo-main.png';

const links = [
  {
    label: 'Services',
    href: '/services'
  },
  {
    label: 'About Us',
    href: '/about-us'
  },
  {
    label: 'Become a Mentor',
    href: '/become-a-mentor'
  },
  {
    label: 'Enroll Now',
    href: '/enroll'
  }
];

const Footer = () => {
  return (
    <>
      <footer className="shadow bg-slate-900 font-poppins">
        <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <img src={mavenLogo} className="h-8 mr-3" alt="Maven-edu Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Maven-edu
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 ">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={`${link.href}`}
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <Link href="/" className="hover:underline">
              Maven-edu
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
