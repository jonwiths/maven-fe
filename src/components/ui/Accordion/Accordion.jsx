import React, { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const Accordion = ({ faqs }) => {
  const [selected, setSelected] = useState(null);

  const handleToggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <article>
      {faqs.map((faq) => (
        <article
          className="max-w-[600px] mb-1 hover:cursor-pointer mx-auto"
          key={faq.id}
          onClick={() => handleToggle(faq.id)}
        >
          <div
            className={
              selected === faq.id
                ? 'bg-gray-700 text-white flex justify-between items-center gap-3  border-gray-700 rounded-xl p-2 hover:shadow-lg'
                : 'flex justify-between items-center gap-3 border hover:bg-gray-100 border-gray-700 rounded-xl p-2 hover:shadow-lg text-gray-700'
            }
          >
            <h4 className="font-semibold ">{faq.item}</h4>
            <span>
              {selected === faq.id ? (
                <AiFillMinusCircle size={30} />
              ) : (
                <AiFillPlusCircle size={30} />
              )}
            </span>
          </div>
          <p className={selected === faq.id ? 'p-2 flex' : 'hidden'}>
            {faq.content}
          </p>
        </article>
      ))}
    </article>
  );
};

export default Accordion;
