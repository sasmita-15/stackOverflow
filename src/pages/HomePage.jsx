import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import QuestionsList from "../components/QuestionsList.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
 
      <Header />

      <div className="flex flex-grow">

        <Sidebar className="w-64 bg-white shadow-md hidden md:block" />

        <div className="flex-grow p-6">
          {/* <QuestionsList /> */}
        </div>
      </div>

      <Footer className="bg-gray-800 text-white py-4 text-center" />
    </div>
  );
};

export default HomePage;



