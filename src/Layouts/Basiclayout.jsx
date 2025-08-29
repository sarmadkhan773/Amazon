import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const BasicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      { <main className="flex-grow">
        {children}
      </main> }

      <Footer />
    </div>
  );
};

export default BasicLayout;
