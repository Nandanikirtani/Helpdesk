import React from "react";

const Home = ({ activeBar, activeModal }) => {
  if (!activeModal) return null;

  return (
    <div
      className={`relative mt-16 transition-all duration-300 bg-white z-0 min-h-screen flex justify-center ${
        activeBar ? "pl-0 w-full md:pl-12" : "pl-0 w-full"
      }`}
    >
      <div className="text-center p-4">
        {activeModal === "dashboard" && (
          <div>
            <h2 className="text-4xl mt-4 italic">Dashboard</h2>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <div className="bg-[#2F82FF] h-72 w-64 rounded-lg shadow-lg justify-center">
                <h2 className="text-3xl mt-4">Total Tickets</h2>
                  <h1 className="text-8xl mt-17 text-black">12</h1>
              </div>

              <div className="bg-[#0BFF68] h-72 w-64 rounded-lg shadow-lg">
                <h2 className="text-3xl mt-4">Total Solved</h2>
                
                  <h1 className="text-8xl mt-17 text-black ">8</h1>
                
              </div>
              <div className="bg-[#FE594E] h-72 w-64 rounded-lg shadow-lg">
                <h2 className="text-3xl mt-4">Total Awaiting Approval</h2>
                
                  <h1 className="text-8xl mt-8 text-black">2</h1>
               
              </div>
              <div className="bg-[#FCFF6C] h-72 w-64 rounded-lg shadow-lg">
                <h2 className="text-3xl mt-4">Total in Progress</h2>
       
                  <h1 className="text-8xl mt-17 text-black">2</h1>
                
              </div>
            </div>
          </div>
        )}
        {activeModal === "newticket" && (<div>
          <h2 className="text-2xl font-semibold">Create New Ticket</h2>
          
          </div>
        )}
        {activeModal === "myticket" && (
          <h2 className="text-2xl font-semibold">My Tickets</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
