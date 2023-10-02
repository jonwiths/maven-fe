import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import style from './Hero.module.css';
import logo from '../../../assets/images/logo-main.png';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="hero" className={style.wrapper} data-aos="fade-up">
        <div className={`${style.left__wrapper} `}></div>

        <div className={style.right__wrapper}>
          <h1 className={style.invest}>Investing in </h1>
          <h1 className={style.knowledge}>Knowledge and</h1>
          <h1 className={style.future}>Your Future</h1>
          <p className="text-lg mb-4 text-gray-600">
            We are ready to help you grow together, Start developing right now!
          </p>
          <Link to="/enroll" className={style.enroll__blue_btn}>
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
