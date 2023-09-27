import { IoIosPeople } from 'react-icons/io';
import { FaChalkboardTeacher } from 'react-icons/fa';

const StatsBanner = () => {
  const totalStudents = 10;
  const totalMentors = 3;

  return (
    <article className="p-4 bg-blue-800 text-gray-100">
      <div className="container w-full mx-auto flex items-center justify-between sm:flex-row flex-col">
        <div className="pt-5 md:pt-0">
          <h2 className="lg:text-4xl text-3xl text-center md:pt-0">
            Our Growing Statistics.
          </h2>{' '}
        </div>
        <div className="py-5  flex gap-x-10 gap-y-3 sm:flex-row flex-col">
          <div className="flex gap-2 items-center">
            <IoIosPeople className="md:mr-3 mr-2 text-[45px]" />
            <h3 className="font-bold">{totalStudents}</h3>
            <h4>Enrolled Students</h4>
          </div>
          <div className="flex gap-2 items-center">
            <FaChalkboardTeacher
              size={40}
              className="md:mr-3 mr-2 text-[45px]"
            />
            <h3 className="font-bold">{totalMentors}</h3>
            <h4>Active Mentors</h4>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StatsBanner;
