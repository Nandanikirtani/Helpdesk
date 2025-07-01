import { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function AppLayout({ activeModal, setActiveModal }) {
  const [activeBar, setActiveBar] = useState(true);
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && (
        <SideBar
          activeBar={activeBar}
          setActiveBar={setActiveBar}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      )}

      <main
        className={`min-h-screen transition-all duration-300 ease-in-out ${
          !hideLayout ? (activeBar ? "ml-64" : "ml-0") : ""
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                activeBar={activeBar}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {!hideLayout && <Footer  activeBar={activeBar}/>}
    </>
  );
}


function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <Router>
      <AppLayout activeModal={activeModal} setActiveModal={setActiveModal} />
    </Router>
  );
}


export default App;
