import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Ticket } from "lucide-react";

const SideBar = ({ activeBar,setActiveBar,activeModal, setActiveModal }) => {
  
  return (
    <div>
      {!activeBar && (
        <div className="hidden md:block fixed top-1/2 left-0 z-30 transform -translate-y-1/2">
          <button
            className="me-4 w-8 h-8 text-center text-black bg-[#6A67674D] rounded-r"
            onClick={() => setActiveBar(true)}
          >
            &gt;
          </button>
        </div>
      )}

      {activeBar && (
        <div
          className={`hidden md:block bg-[#6A67674D] h-screen absolute md:w-64 z-20 top-15 left-0 `}
        >
          <div className="w-full p-4 space-y-6 text-2xl font-light mt-6">
            <div className="flex items-center justify-center">
              <p
                className={`me-4 w-4 text-center ${
                  activeModal === "dashboard" ? "visible" : "invisible"
                }`}
              >
                &gt;
              </p>
              <LayoutDashboard className="w-6 h-6  me-2" />
              <button onClick={() => setActiveModal("dashboard")}>
                Dashboard
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p
                className={`me-4 w-4 text-center ${
                  activeModal === "newticket" ? "visible" : "invisible"
                }`}
              >
                &gt;
              </p>
              <PlusCircle className="w-6 h-6 me-2" />
              <button onClick={() => setActiveModal("newticket")}>
                New Ticket
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p
                className={`me-4 w-4 text-center ${
                  activeModal === "myticket" ? "visible" : "invisible"
                }`}
              >
                &gt;
              </p>
              <Ticket className="w-6 h-6 me-4" />
              <button onClick={() => setActiveModal("myticket")}>
                My Ticket
              </button>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="p-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                to="/login"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="p-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                Signup
              </Link>
            </div>
          </div>
          <div
            className="fixed top-1/2 z-30 transform -translate-y-1/2 flex justify-end
          "
          >
            <button
              className="me-4 w-8 h-8 text-center text-black bg-[#6A67674D] rounded-r"
              onClick={() => setActiveBar(false)}
            >
              &lt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
