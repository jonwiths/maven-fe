import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import style from './EnrollIntro.module.css';

const words = [
  'Learning',
  'Sharing',
  'Exploring',
  'Discovering',
  'Improving',
  'Adapting',
  'Growing'
];

const EnrollIntro = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <section className="">
        <div className="flex flex-col md:flex-row lg:justify-around justify-center items-center">
          <div className="w-full  hidden md:flex items-center justify-center h-full flex-1">
            <div className="flex items-center justify-center w-full ">
              <div className="text-left">
                <h1 className="font-semibold lg:text-7xl md:text-5xl pb-10 leading-normal">
                  Enroll Now and <br /> Start{' '}
                  <span className="block bg-blue-600 text-white px-3 py-5 rounded-2xl">
                    {words[wordIndex]}.
                  </span>
                </h1>
                <h3 className="leading-normal">
                  If you already have an account <br />
                  You can{' '}
                  <Link to="/login" className="text-blue-700 font-semibold">
                    Login here.
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="py-10 px-4 flex items-center flex-1 justify-center w-full lg:max-h-[90vh] min-h-[90vh] bg-gray-100 text-gray-800">
            <div className="max-w-[350px] mx-auto">
              <h2 className="pb-2">Hey! What&apos;s Up?</h2>
              <p className="font-semibold pb-4 pt-2">
                Please enter your details.
              </p>
              <form
                action=""
                id="login-form"
                className="login-form w-full"
                method="POST"
              >
                <div className="w-full max-w-[350px] ">
                  <label htmlFor="" className={style.label}>
                    First Name
                  </label>
                  <span className={style.form_control}>
                    <input
                      type="text"
                      name=""
                      required={true}
                      autoComplete="off"
                      placeholder="Juan"
                      className="outline-none border-none w-full p-1 bg-transparent"
                    />
                  </span>
                  <label htmlFor="" className={style.label}>
                    Last Name
                  </label>
                  <span className={style.form_control}>
                    <input
                      type="text"
                      name=""
                      required={true}
                      autoComplete="off"
                      placeholder="Dela Cruz"
                      className="outline-none border-none w-full p-1 bg-transparent"
                    />
                  </span>

                  <label htmlFor="" className={style.label}>
                    Email
                  </label>
                  <span className={style.form_control}>
                    <input
                      type="email"
                      name="s_email"
                      required={true}
                      autoComplete="off"
                      placeholder="juandelacruz@email.com"
                      className="outline-none border-none w-full p-1 bg-transparent"
                    />
                  </span>
                  <label htmlFor="" className={style.label}>
                    Password
                  </label>
                  <span className="w-full flex items-center justify-center p-3 gap-1 bg-white rounded-xl mb-4">
                    <input
                      type="password"
                      required={true}
                      name=""
                      autoComplete="off"
                      placeholder="Password"
                      className="outline-none border-none w-full p-1 bg-transparent"
                    />
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm">
                    By clicking the Login button you already read and agree to
                    our{' '}
                    <Link
                      to="/terms-and-conditions"
                      className="underline hover:font-medium"
                    >
                      Terms and conditions
                    </Link>
                    .{' '}
                  </p>
                </div>

                <button
                  type="button"
                  className="py-3 px-5 text-center text-white bg-blue-600 font-semibold hover:bg-blue-700 rounded-2xl w-full mt-2"
                >
                  CREATE ACCOUNT
                </button>
              </form>

              <div className="md:hidden block mt-10">
                <p className="leading-normal">
                  If don&apos;t have an account <br />
                  You can{' '}
                  <Link to="/enroll" className="text-blue-700 font-semibold">
                    Register here.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnrollIntro;
