import { Link } from 'react-router-dom';

import style from './SignUpBanner.module.css';

const SignUpBanner = () => {
  return (
    <section className=" bg-gray-800">
      <div className={style.wrapper}>
        <div className="md:w-3/5 w-full md:mt-0 flex flex-col items-center">
          <h2 className="md:text-4xl text-2xl text-gray-100 text-center  md:pt-0">
            Be part of our growing community.
          </h2>
          <h2 className="md:text-4xl text-2xl text-gray-100 text-center  md:pt-0">
            Enroll now and be our student.
          </h2>
        </div>
        <Link to="/enroll" className={style.enroll__blue_btn}>
          Enroll Now
        </Link>
      </div>
    </section>
  );
};

export default SignUpBanner;
