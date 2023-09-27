import { MdComputer } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

const WheWeAreBetter = () => {
  return (
    <>
      <div className="bg-gray-100 py-6 rounded-xl mx-4">
        <div className="flex items-center justify-center pb-5 md:text-left text-center text-gray-800 ">
          <h1 className="font-semibold text-2xl">
            Why we are the <strong>better than</strong> others?
          </h1>
        </div>
        <div className="flex flex-wrap">
          {/* Box 1 */}
          <div className="lg:pt-10 pt-6 w-full md:w-4/12 px-3 text-center">
            <div className=" flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <BsFillCalendarCheckFill />
                </div>
                <h6 className="text-xl font-semibold">
                  Convenient Study Schedule
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Choose the available time base on your own convienience.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="lg:pt-10 pt-6 w-full md:w-4/12 px-3 text-center">
            <div className=" flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <FaChalkboardTeacher />
                </div>
                <h6 className="text-xl font-semibold">Flexibility</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  You can choose your mentor based on your needs and price that
                  you can afford
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="lg:pt-10 pt-6 w-full md:w-4/12 px-3 text-center">
            <div className=" flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <MdComputer />
                </div>
                <h6 className="text-xl font-semibold">
                  Modern Internet Platform
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Book an e-meeting and meet your e-mentor. meet your e-mentor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WheWeAreBetter;
