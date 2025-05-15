import { useEffect, useRef, useState } from "react";
import './App.css';
import Front from './components/Front';
import About from './components/About';
import Skillset from "./components/Skillset";
import WorkEducation from "./components/WorkEducation";
import Playground from "./components/Playground";
import Contact from "./components/Contact";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null); 
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
  
      setAtTop(scrollTop === 0);
      setAtBottom(scrollTop >= maxScroll);
    };

    handleScroll();
  
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const container = containerRef.current;
    if (container) {
      const nextScroll = container.scrollTop + window.innerHeight;
      container.scrollTo({ top: nextScroll, behavior: 'smooth' });
    }
  };

  const scrollToPrev = () => {
    const container = containerRef.current;
    if (container) {
      const nextScroll = container.scrollTop - window.innerHeight;
      container.scrollTo({ top: nextScroll, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="h-screen snap-y snap-mandatory overflow-scroll">
      {!atTop && (
        <a
          onClick={scrollToPrev}
          style={{ width: "44px", height: "44px" }}
          className="fixed top-6 right-6 hover:opacity-80 transition-opacity rotate-180 border border-dark p-2 rounded-full cursor-pointer bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path fill="#000" d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"/>
          </svg>
        </a>
      )}

      <Front />
      <About />
      <Skillset />
      <WorkEducation />
      <Playground />
      <Contact />

      {!atBottom && (
        <a
          onClick={scrollToNext}
          style={{ width: "44px", height: "44px" }}
          className="fixed bottom-6 right-6 hover:opacity-80 transition-opacity border border-dark p-2 rounded-full cursor-pointer bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path fill="#000" d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"/>
          </svg>
        </a>
      )}
    </div>
  );
}
