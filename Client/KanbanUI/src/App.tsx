import { NavBar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

import "./App.scss";
import { Content } from "./components/content/Content";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <div className="body-sidebar">
          <Sidebar />
        </div>
        <div className="body-content flex-1">
          <Content />
        </div>
      </div>
    </>
  );
}
