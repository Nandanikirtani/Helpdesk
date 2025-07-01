import React from "react";

const Footer = ({ activeBar }) => {
  return (
    <div
      className={`fixed bottom-0 h-10 p-4 bg-[#55D6C2] flex items-center z-0 w-full transition-all duration-300 ${
        activeBar ? 'ml-0 md:ml-64' : 'ml-0'
      }`}
    >
      <h1 className="text-white font-semibold">Footer</h1>
    </div>
  );
};

export default Footer;
