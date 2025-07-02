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
          <div className="mb-10">
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

        {activeModal === "newticket" && (
          <div>
            <h2 className="text-2xl font-semibold">Create New Ticket</h2>
            <form className="w-full min-h-screen p-10 flex flex-col  items-center bg-white">
              <div className="w-full max-w-4xl">
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-between ">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor="ticketno"
                      >
                        Ticket No:
                      </label>
                      <input
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        type="text"
                        name="ticketno"
                        id="ticketno"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-between">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor="date"
                      >
                        Date:
                      </label>
                      <input
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        type="text"
                        name="date"
                        id="date"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-between ">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor="name"
                      >
                        Name:
                      </label>
                      <input
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        type="text"
                        name="name"
                        id="name"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-between ">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor="dept"
                      >
                        Department:
                      </label>
                      <input
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        type="text"
                        name="dept"
                        id="dept"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4 md:mt-0 ">
                  <label
                    className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                    htmlFor=""
                  >
                    Subject:
                  </label>
                  <input
                    className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                    type="text"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <div className="w-full md:w-1/2">
                    <div className="flex flex-col justify-between ">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor="cat"
                      >
                        Category:
                      </label>
                      <input
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        type="text"
                        name="cat"
                        id="cat"
                      />
                    </div>
                    <div className="flex flex-col justify-between ">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor="type"
                      >
                        Type:
                      </label>
                      <input
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        type="text"
                        name="type"
                        id="type"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor="pir"
                      >
                        Priority:
                      </label>
                      <input
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        type="text"
                        name="pir"
                        id="pir"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex flex-col">
                      <label
                        className="text-start text-xl px-3 py-2 w-40 whitespace-nowrap"
                        htmlFor=""
                      >
                        Description:
                      </label>
                      <textarea
                        className="bg-[#C4C4C4A1] px-3 py-2 rounded-lg flex-1"
                        rows="8"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#55D6C2] text-black font-semibold px-8 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
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
