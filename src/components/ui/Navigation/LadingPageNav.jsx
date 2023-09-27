import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import style from './LandingPageNav.module.css';
import mainLogo from '../../../assets/images/logo-main.png';

const links = [
  {
    label: 'Home',
    href: '/'
  },
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
  }
];

const LadingPageNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className={style.nav}>
        <div className={style.wrapper}>
          <div className="flex  justify-around flex-2 gap-x-6">
            <Link to="/" className="flex items-center">
              <img
                src={mainLogo}
                className="lg:h-8 h-6 lg:mr-3 mr-1"
                alt="Meven-edu Logo"
              />
              <span className="self-center lg:text-2xl text-xl font-semibold whitespace-nowrap text-gray-800">
                Maven-edu
              </span>
            </Link>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className={style.link__ul}>
                {links.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        isActive
                          ? style.link__navlink_active
                          : style.link__navlink
                      }
                      aria-current="page"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex md:order-2 flex-1 justify-end">
            <div className=" lg:flex hidden items-center gap-1 ">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? `${style.link__navlink_active} text-lg`
                    : `${style.link__navlink} text-lg`
                }
                aria-current="page"
              >
                Login
              </NavLink>
              <Link to="/enroll" className={style.btn_enroll}>
                Enroll Now
              </Link>
            </div>
            <button type="button" onClick={toggleMobileNav}>
              <HiMenuAlt3 className="text-[24px] text-gray-800 lg:hidden block" />
            </button>
          </div>
        </div>
      </nav>

      {isMobileNavOpen && (
        <nav
          className={`p-4 font-poppins lg:hidden fixed top-0 left-0 z-30 h-screen w-full bg-gray-50 transition ease-in-out`}
        >
          <div className="absolute top-4 right-4">
            <button type="button" onClick={toggleMobileNav}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center  text-lg">
            <Link to="/" className="flex items-center">
              <img
                src={mainLogo}
                className="lg:h-8 h-6 lg:mr-3 mr-1"
                alt="Meven-edu Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">
                Maven-edu
              </span>
            </Link>
            <div className="mt-5 flex items-center flex-col">
              {links.map((link) => (
                <div key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      isActive
                        ? style.link__navlink_mobile
                        : style.link__navlink_mobile
                    }
                    onClick={toggleMobileNav}
                    aria-current="page"
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="mt-2 mb-6 border border-gray-300 w-full"></div>
            <div className="flex flex-col w-full gap-2 items-center">
              <Link
                to="/login"
                className={`${style.link__navlink_mobile} text-center`}
                onClick={toggleMobileNav}
              >
                Login
              </Link>
              <Link
                to="/enroll"
                className={`${style.btn__enroll_mobile}`}
                onClick={toggleMobileNav}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default LadingPageNav;
