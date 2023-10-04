import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TfiEmail } from 'react-icons/tfi';
import { HiBuildingOffice } from 'react-icons/hi2';
import { GoArrowRight } from 'react-icons/go';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contacts = () => {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [checkDisabled, setCheckDisabled] = useState(
    JSON.parse(localStorage.getItem('isDisabled'))
  );

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 4000);
  }, [errMsg]);

  useEffect(() => {
    const test = JSON.parse(localStorage.getItem('isDisabled'));
    if (test) {
      return;
    } else {
      setTimeout(() => {
        setCheckDisabled(localStorage.getItem('isDisabled'));
      }, 3000);
    }
  }, []);

  const handleSubmitEmailMessageBtn = async (e) => {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      toast.error('Fill up all input!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    } else if (!EMAIL_REGEX.test(email)) {
      toast.error('Invalid Email!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    } else {
      toast.success('Email Sent.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
      localStorage.setItem('isDisabled', JSON.stringify(true));
      setEmail('');
      setMessage('');
      setName('');
      emailRef.current.focus();
    }
  };

  return (
    <div className=" mx-auto w-full flex flex-col items-center mt-5 text-gray-800">
      <h1 className="mb-6 w-full bg-gray-50 p-4 text-center">
        <span className="text-blue-700">CONTACT</span> US
      </h1>
      <div className="flex justify-between items-center w-full  md:flex-row flex-col gap-2">
        <div className="md:flex-1 w-full text-gray-50 p-6 bg-slate-800 rounded-2xl">
          <div className="md:mb-6 mb-4">
            <h3 className="font-bold mb-2 flex items-center gap-4">
              <span>
                <HiBuildingOffice />
              </span>{' '}
              OUR MAIN OFFICE
            </h3>
            <p className="flex items-center gap-1">
              <span>
                <GoArrowRight />
              </span>
              Km. 38 Sitio Gulod, Pulong-Buhangin Sta. Maria, Bulacan
            </p>
          </div>
          <div className="md:mb-6 mb-4">
            <h3 className="font-bold mb-2 flex items-center gap-4">
              <span>
                <TfiEmail />
              </span>{' '}
              OUR BUSINESS EMAIL
            </h3>
            <p className="flex items-center gap-1">
              <span>
                <GoArrowRight />
              </span>
              maven.edu05@gmail.com
            </p>
          </div>

          <div className="md:mb-6 mb-4">
            <h3 className="font-bold mb-2 flex items-center gap-4">
              <span>
                <BsFillTelephoneFill />
              </span>{' '}
              OUR PHONE NUMBER
            </h3>
            <p className="flex items-center gap-1">
              <span>
                <GoArrowRight />
              </span>
              <span className="font-semibold">SMART:</span> +(63) 987 654 3210
            </p>
          </div>
        </div>
        <div className="md:flex-1 w-full bg-slate-800 text-white p-4 rounded-2xl">
          <div className="mb-4 flex flex-col w-full">
            <h3 className="font-bold text-center pb-6">Keep in touch</h3>
            <div className="w-full">
              {checkDisabled && (
                <p className="my-2 p-2 text-white bg-red-500 rounded-xl">
                  Submit button is disabled after sending an email. Come back in
                  few hours.
                </p>
              )}

              <form action="" method="post">
                <div className="mb-4">
                  <label htmlFor="contacts_name">Name</label>
                  <input
                    type="text"
                    value={name}
                    maxLength="50"
                    id="contacts_name"
                    name="contacts_name"
                    placeholder="Juan Dela Cruz"
                    onChange={(e) => setName(e.target.value)}
                    className="md:mt-0 mt-1 p-2 w-full outline-none text-gray-900 rounded-2xl"
                  />
                </div>
                <div className=" mb-4">
                  <label htmlFor="contacts_email ">Email</label>
                  <input
                    type="text"
                    value={email}
                    ref={emailRef}
                    maxLength="50"
                    id="contacts_email"
                    name="contacts_email"
                    placeholder="juandelacruz@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="md:mt-0 mt-1 p-2 w-full outline-none text-gray-900 rounded-2xl"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact_textarea">Message</label>
                  <textarea
                    rows="5"
                    cols="5"
                    maxLength="255"
                    value={message}
                    id="contact_textarea"
                    name="contacts_message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your concern(s). 255 characters max*"
                    className="md:mt-0 mt-1 p-2 w-full outline-none text-gray-900 rounded-2xl"
                  />
                </div>
                {errMsg && (
                  <p
                    className={
                      setErrMsg === 'Email Sent.'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {errMsg}
                  </p>
                )}
              </form>
              <button
                className="px-6 py-2 bg-gray-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-semibold cursor-pointer"
                onClick={handleSubmitEmailMessageBtn}
                disabled={false}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
