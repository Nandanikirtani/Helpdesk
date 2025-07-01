import { useState } from "react";
import React from "react";
import { Bell, LogOut, User } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("BM");
  return (
    <div className="fixed flex bg-[#55D6C2] justify-between h-16 w-full top-0 left-0 z-50">
      <h1 className="text-white text-4xl font-bold text-start p-2 ms-2 mt-1 ">
        Helpdesk
      </h1>

      <div className="flex items-center space-x-2 md:space-x-6 text-black me-2 md:me-6">
        <div className="flex items-center ">
          <button
            className={`flex border border-black justify-center h-6 w-8 md:h-8 md:w-10 p-2 items-center  ${
              active === "BM" ? "bg-black text-white" : " text-black"
            }`}
            onClick={() => setActive("BM")}
          >
            BM
          </button>
          <button
            className={`flex border border-black justify-center h-6 w-8 md:h-8 md:w-10 p-2 items-center ${
              active === "BI" ? "bg-black text-white" : " text-black"
            }`}
            onClick={() => setActive("BI")}
          >
            BI
          </button>
        </div>
        <Bell className="cursor-pointer text-xl" />
        <User className="cursor-pointer text-xl" />
        <LogOut className="cursor-pointer text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
