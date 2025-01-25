import "./Sidebar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { RiTaskLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { useState } from "react";

export const Sidebar = () => {
  const [compress, setCompress] = useState(false);
  const [width, setWidth] = useState("w-64");
  const [roundedButton, setRoundedButton] = useState("");
  const [buttonPos, setButtonPos] = useState("justify-end");

  const compressClick = () => {
    setCompress(true);
    setWidth("w-16");
    setRoundedButton("justify-center");
    setButtonPos("justify-center");
  };

  const expandClick = () => {
    setCompress(false);
    setWidth("w-64");
    setRoundedButton("");
    setButtonPos("justify-end");
  };

  return (
    <>
      <div
        className={`px-2 pb-4 pt-2 h-full border-r-2 sidebar justify-center transition-all duration-300 ${width}`}
      >
        <div
          className={`text-4xl flex mb-5 compress align-center ${buttonPos}`}
        >
          {!compress ? (
            <button onClick={compressClick}>
              <MdOutlineArrowCircleLeft className="compress-button" />
            </button>
          ) : (
            <button onClick={expandClick}>
              <MdOutlineArrowCircleRight className="compress-button" />
            </button>
          )}
        </div>

        <ul className="space-y-4">
          {/* Menu items */}
          <li>
            <a
              href="#home"
              className={`px-4 py-2 rounded block font-semibold flex flex-row ${roundedButton}`}
            >
              <div className="text-2xl">
                <IoHomeOutline />
              </div>
              {!compress ? "Home" : null}
            </a>
          </li>
          <li>
            <a
              href="#tasks"
              className={`px-4 py-2 rounded block font-semibold flex flex-row ${roundedButton}`}
            >
              <div className="text-2xl">
                <RiTaskLine />
              </div>
              {!compress ? "Tasks" : null}
            </a>
          </li>
          <li>
            <a
              href="#members"
              className={`px-4 py-2 rounded block font-semibold flex flex-row ${roundedButton}`}
            >
              <div className="text-2xl">
                <MdPeopleAlt />
              </div>
              {!compress ? "Members" : null}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
