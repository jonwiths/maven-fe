import { Link } from 'react-router-dom';

import style from './Hero.module.css';
import logo from '../../../assets/images/logo-main.png';

const Hero = () => {
  return (
    <>
      <article className={style.wrapper}>
        <div className={`${style.left__wrapper} `}>
          <div className="w-full h-full flex flex-col ">
            {/* <Link to="/" className="relative w-full h-full ">
              <div className="hover:bg-gray-50 hover:-translate-y-1 cursor-pointer absolute md:top-40 md:left-0 top-20 left-7 bg-white rounded-full py-2 px-4  shadow-lg">
                <div className="w-full flex justify-between items-center gap-x-2">
                  <div className="">
                    <img
                      src={logo}
                      alt=""
                      className="w-10 h-10 rounded-full "
                    />
                  </div>
                  <div className="flex flex-col leading-3 justify-center pt-1 item">
                    <p className="font-bold">Mentor Jane</p>
                    <p className="text-sm text-orange-600">Mathematics</p>
                  </div>
                </div>
              </div>
            </Link> */}

            {/* <Link to="/" className="relative w-full h-full ">
              <div className="hover:bg-gray-50 hover:-translate-y-1 cursor-pointer  absolute md:top-40 md:right-0 top-20 right-7 bg-white rounded-full py-2 px-4  shadow-lg">
                <div className="w-full flex justify-between items-center gap-x-2">
                  <div className="">
                    <img
                      src={logo}
                      alt=""
                      className="w-10 h-10 rounded-full "
                    />
                  </div>
                  <div className="flex flex-col leading-3 justify-center pt-1 item">
                    <p className="font-bold">Mentor John</p>
                    <p className="text-sm text-orange-600">English</p>
                  </div>
                </div>
              </div>
            </Link> */}
          </div>
        </div>

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
      </article>
    </>
  );
};

export default Hero;
