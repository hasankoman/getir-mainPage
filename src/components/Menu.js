import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";

import { useWindowWidth } from "@react-hook/window-size";

export default function Menu(item) {
  const [isOpen, setIsOpen] = useState(true);
  const windowWidth = useWindowWidth();

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
    console.log(isOpen);
  }, [windowWidth]);

  return (
    <div className="md:col-span-1 lg:col-span-2">
      <h6
        className="text-[18px] text-getir-purple-100 cursor-pointer flex items-center gap-3"
        onClick={toggleCollapse}
      >
        {item.title}{" "}
        <button className="md:hidden w-6 h-6 place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
          <span>
            {
              <IoIosArrowDown
                className={`transition-all transform ${
                  isOpen ? "-rotate-180" : ""
                }`}
                size={14}
              />
            }
          </span>
        </button>
      </h6>
      <Collapse isOpened={isOpen}>
        <nav className="transition-all ease-linear">
          <ul className="flex flex-col gap-3 mt-4 text-sm text-[#191919] ">
            {item.links.map((link, index) => (
              <li>
                <a href="!#" key={index}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Collapse>
    </div>
  );
}
