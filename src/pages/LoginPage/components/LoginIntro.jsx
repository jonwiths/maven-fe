import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';
import { TbMinusVertical } from 'react-icons/tb';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiExclamationCircle } from 'react-icons/hi';

const words = [
  'Learning',
  'Sharing',
  'Exploring',
  'Discovering',
  'Improving',
  'Adapting',
  'Growing'
];

const LoginIntro = () => {
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
                  Sign In and <br /> Start{' '}
                  <span className="block bg-blue-600 text-white px-3 py-5 rounded-2xl">
                    {words[wordIndex]}.
                  </span>
                </h1>
                <h3 className="leading-normal">
                  If don&apos;t have an account <br />
                  You can{' '}
                  <Link to="/enroll" className="text-blue-700 font-semibold">
                    Register here.
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="py-10  flex items-center flex-1 justify-center w-full max-h-[90vh] md:h-[90vh] bg-gray-100 ">
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
                {/* {loginStatus && (
                  <p
                    className={
                      loginStatus !== 'Account creation successful!'
                        ? 'error--msg-landing'
                        : 'success--msg-landing'
                    }
                  >
                    <HiExclamationCircle
                      className={loginStatus !== null ? 'inline' : 'hidden'}
                      size={19}
                      style={{ marginRight: '3px' }}
                    />
                    {loginStatus}
                  </p>
                )} */}
                <div className="w-full max-w-[350px] ">
                  <span className="w-full flex items-center justify-center p-4 gap-1 bg-white rounded-xl mb-2">
                    <FiUser size={25} />
                    <TbMinusVertical size={25} />
                    <input
                      type="email"
                      name="s_email"
                      required={true}
                      autoComplete="off"
                      placeholder="juandelacruz@email.com"
                      className="outline-none border-none w-full p-1 bg-transparent"
                    />
                  </span>
                  <span className="w-full flex items-center justify-center p-4 gap-1 bg-white rounded-xl mb-4">
                    <RiLockPasswordLine size={25} />
                    <TbMinusVertical size={25} />
                    <input
                      // ref={passwordRef}
                      type="password"
                      required={true}
                      name="s_password"
                      autoComplete="off"
                      placeholder="Password"
                      className="outline-none border-none w-full p-1 bg-transparent"
                    />
                  </span>
                </div>
                <div className="max-w-[350px] ">
                  <div className="flex  flex-col items-end mb-3">
                    <Link
                      to="/forgot-password"
                      className="text-blue-700 hover:underline "
                    >
                      Forgot password?
                    </Link>
                  </div>
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
                  LOGIN
                </button>
              </form>

              {/* Google */}
              {/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div> */}

              <div className="md:hidden block mt-10">
                <p className="leading-normal">
                  If don't have an account <br />
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

export default LoginIntro;
