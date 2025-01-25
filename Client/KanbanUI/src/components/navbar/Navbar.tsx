import "../../index.css";
import "../../components/navbar/Navbar.scss";

import logo from "../../icons/kanban-ui-icon.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export const NavBar = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="container flex justify-between">
          {/* Logo Section  */}
          <div className="text-3xl flex items-center self-center gap-2 font-bold uppercase p-4">
            <img src={logo} alt="Logo" />
            <p>KanBoard</p>
          </div>
          {/* right side */}
          <div className="text-3xl flex justify-self-end gap-3 p-4">
            <IoMdNotificationsOutline />
            <CgProfile />
          </div>
        </div>
      </div>
    </>
  );
};
