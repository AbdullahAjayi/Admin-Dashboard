import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Editor,
  Kanban,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  ColorPicker,
} from "./pages";

import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <Router>
        <div className="flex relative dark:bg-main-dark-main">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed bg-white dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full {activeMenu ? 'md:ml-72 w-4' : 'flex-2' }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />}></Route>

              {/* Pages */}
              <Route path="/order" element={<Orders />}></Route>
              <Route path="/employees" element={<Employees />}></Route>
              <Route path="/customers" element={<Customers />}></Route>

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />}></Route>
              <Route path="/editor" element={<Editor />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/color-picker" element={<ColorPicker />}></Route>

              {/* Charts */}
              <Route path="/line" element={<Line />}></Route>
              <Route path="/area" element={<Area />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/financial" element={<Financial />}></Route>
              <Route path="/color-mapping" element={<ColorMapping />}></Route>
              <Route path="/pyramid" element={<Pyramid />}></Route>
              <Route path="/stacked" element={<Stacked />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
