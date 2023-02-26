import Item from "./Item";
import { useState, useEffect } from "react";

const TopNav = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
    <div
      className={
        "fixed flex justify-end m-5 transition-opacity duration-300 top-0 left-0 right-0 z-50 mx-10 animate-fade-in-down hover:opacity-100" +
        (visible ? " opacity-100" : " opacity-0")
      }
      onScroll={handleScroll}
    >
      <ol className="align-middle items-center flex">
        <Item section="home" title="Home" />
        <Item section="about" title="About Me" />
        <Item section="experience" title="Experience" />
        <Item section="projects" title="Major Projects" />
        <Item section="other" title="Other Projects" />
        <Item section="contact" title="Contact Me" />
        <button className="bg-transparent border-[#5381C5] border-2 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-200 hover:bg-opacity-10 text-blue-300 font-bold py-2 px-4 rounded-md my-4">
          <a href="./resume.pdf" download="IvanRomeroResume.pdf">
            <p>Resume</p>
          </a>
        </button>
      </ol>
    </div>
  );
};

export default TopNav;
