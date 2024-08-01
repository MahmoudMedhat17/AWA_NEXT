import { useState, useEffect } from "react";

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(0.2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.scrollY * 0.1;
      const windowHeight = window.innerHeight;
      const scrolledRation =
        scrollTop / windowHeight < 0.2 ? 0.2 : scrollTop / windowHeight;
      const currentScrolledHeight = Math.min(scrolledRation, 1);
      setScrollHeight(currentScrolledHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollHeight;
};

export default useScrollHeight;
