import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes.config";

import { NavBar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

import "./App.scss";
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <Router>
          <div className="body-sidebar">
            <Sidebar />
          </div>
          <div className="body-content flex-1">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
              </Routes>
            </Suspense>
          </div>
        </Router>
      </div>
    </>
  );
}
