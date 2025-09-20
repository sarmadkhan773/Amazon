import './App.css'
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex items-center bg-gray-700 p-2 text-white overflow-x-auto">
        <button
          onClick={openSidebar}
          className="flex items-center space-x-1 bg-gray-900 px-2 py-1 flex-shrink-0"
        > <div>
            <span className="block w-4 h-0.5 mb-0.5 bg-white"></span>
            <span className="block w-4 h-0.5 mb-0.5 bg-white"></span>
            <span className="block w-4 h-0.5 mb-0.5 bg-white"></span>
          </div>
          <span className="flex-shrink-0 text-xs font-bold">ALL</span>
        </button>
         <div className="flex space-x-1 flex-nowrap ml-1">
          <button className="px-1 py-0.5 text-white text-xs flex-shrink-0"> Todays Deals</button>
          <button className="px-1 py-0.5 text-white text-xs flex-shrink-0">Prime videos</button>
          <button className="px-1 py-0.5 text-white text-xs flex-shrink-0">Best Seller</button>
          <button className="px-1 py-0.5 text-white text-xs flex-shrink-0">Registry</button>
          <button className="px-1 py-0.5 text-white text-xs flex-shrink-0">Customer Service</button>
          <button className="px-1 py-0.5 text-white text-xs flex-shrink-0">CGift cards</button>
          <button className="px-1 py-0.5 text-white text-xs flex-shrink-0">Sell</button>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} openSidebar={openSidebar} />
    </div>
  );
}

export default App;
