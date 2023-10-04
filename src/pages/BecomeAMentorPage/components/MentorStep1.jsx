import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MentorStep1 = () => {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [schedSent, setSchedSent] = useState('');

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
    setDate(newDate);
    console.log(newDate); //value picked from date picker
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || name === '') {
      setSchedSent('Please fill up all input');
    } else if (!EMAIL_REGEX.test(email)) {
      setSchedSent('Invalid email');
    } else if (date <= moment(new Date()).format('YYYY-MM-DD')) {
      setSchedSent('Select date that 1 or more days ahead from now');
    } else {
      toast.success('Email Sent.');
    }

    setDate(moment().format('YYYY-MM-DD'));
    setEmail('');
    setName('');
  };

  useEffect(() => {
    setTimeout(() => {
      setSchedSent('');
    }, 8000);
  }, [schedSent]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('btnDisbled', false);
    }, 21000000);
  }, [schedSent]);
  return (
    <div className="text-gray-800 md:mb-10 mb-0 my-5" data-aos="fade-down">
      <div
        className="flex flex-col items-center w-full justify-center my-4"
        id="step-1"
      >
        <h4 className="mt-4 mb-2">STEP 1</h4>
        <h2 className="mb-4 font-semibold text-center md:text-left">
          Set a meeting schedule to our team
        </h2>

        <form
          action=""
          method="POST"
          className="mt-4 p-4 border-2 border-blue-700 w-full max-w-[600px] rounded-2xl "
        >
          <p className="text-center mb-5">Please fill up the form</p>
          <div className="mt-2 flex md:flex-row flex-col gap-2 items-center justify-between font-medium w-full">
            <label htmlFor="sched-date" className=" w-full">
              Enter the date
            </label>
            <input
              disabled
              type="date"
              value={date}
              id="sched-date"
              name="schedDate"
              onChange={onChangeDate}
              className="p-2 outline-none cursor-pointer w-full"
            />
          </div>
          <div className="mt-2 flex md:flex-row flex-col gap-2 items-center justify-between font-medium w-full">
            <label htmlFor="name" className="w-full">
              Enter your name
            </label>
            <input
              id="name"
              disabled
              required
              name="name"
              type="text"
              value={name}
              maxLength={75}
              placeholder="Juan Dela Cruz"
              className="p-2 outline-none cursor-pointer w-full"
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
            />
          </div>
          <div className="mt-2 flex md:flex-row flex-col gap-2 items-center justify-between font-medium w-full">
            <label htmlFor="email" className=" w-full">
              Enter your email
            </label>
            <input
              disabled
              required
              type="email"
              name="email"
              id="email"
              maxLength={75}
              value={email}
              placeholder="example@email.com"
              className="p-2 outline-none cursor-pointer w-full"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
          </div>
          {schedSent && (
            <p
              className={
                schedSent !==
                'Email is sent. We will inform you right after we see your message. Thanks!'
                  ? 'mt-2 max-w-[500px] text-center text-red-600'
                  : 'mt-2 max-w-[500px] text-center text-green-600'
              }
            >
              {schedSent}
            </p>
          )}
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handleSubmit}
              className="max-w-[140px] mx-auto w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-xl text-white font-medium "
              disabled={true}
            >
              Submit
            </button>
          </div>
          <p className="mt-4 text-orange-600 text-center">
            As of now, we are not accepting mentors. Email us for more updates.
          </p>
        </form>
      </div>
    </div>
  );
};

export default MentorStep1;
