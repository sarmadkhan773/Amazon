import React from "react";

const Sidebar = ({ isOpen, openSidebar }) => {
  return (
    <div
    className={`fixed top-0 left-0 h-full w-full sm:w-64 bg-white ${isOpen ? "" : "hidden"}`}
  >
  <button onClick={openSidebar}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✖
      </button>

      <div className="h-full overflow-y-auto">
        <h2 className="text-3xl h-16 w-full text-white flex text-center bg-gray-900 font-bold mb-4">Hello ,Signin</h2>
        <div className="space-y-2">
          <h2 className="text-black font-bold  "> Digital Content & Devices</h2>
          
          <p className=" p-2 text-black ">Prime video</p>
          <p className=" p-2 text-black ">Amazon music</p>
          <p className=" p-2 text-black  ">Amazon app store</p>
          <p className=" p-2 text-black  ">Videos</p>
         
          <hr className="border-t-2 border-gray-300 mt-2"/>

          <h2 className="text-black font-bold  "> Shop by Department</h2>

          <p className=" p-2 text-black ">electronice </p>
          <p className=" p-2 text-black ">computrsv</p>
          <p className=" p-2 text-black  ">smart phones</p>
          <p className=" p-2 text-black  ">art and craft</p>
          <p className=" p-2  text-black ">Electronics</p>
          <hr className="border-t-2 border-gray-300 mt-2"/>

          <h2 className="text-black font-bold  "> Programes and Features</h2>
          <p className=" p-2 text-black ">internationla shopping</p>
          <p className=" p-2 text-black  ">amazon live </p>
          <p className=" p-2 text-black  ">shop by internet</p>
          <p className=" p-2  text-black ">gift card</p>
          <hr className="border-t-2 border-gray-300 mt-2"/>

          <h2 className="text-black font-bold  "> Help & Settings</h2>
          <p className=" p-2 text-black ">Your account </p>
          <p className=" p-2 text-black ">English</p>
          <p className=" p-2 text-black  ">United States</p>
          <p className=" p-2 text-black  ">Customer service </p>
          <p className=" p-2  text-black ">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
