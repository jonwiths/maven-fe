import { useEffect, useState } from 'react';

import style from './GoToTopButton.module.css';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check when to show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling animation
    });
  };

  return (
    <button
      className={`${style.go_to_top_btn} ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Go to Top
    </button>
  );
};

export default GoToTopButton;
