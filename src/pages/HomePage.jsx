import React,{ useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import QuestionsList from "../components/QuestionsList.jsx";
import Footer from "../components/Footer.jsx";
import RightSidebar from "../components/rightSidebar.jsx";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <Header setSearchQuery={setSearchQuery} />

      <div className="flex flex-grow">

        <div className="w-2/12 ">
          <Sidebar className=" bg-white shadow-md hidden md:block" />
        </div>
        <div className="w-7/12 flex-grow">
          {/* <QuestionsList searchQuery={searchQuery} /> */}
          {/* <h1>Qustionss</h1> */}
        </div>
        <div className="w-3/12 h-full">
          <RightSidebar />
        </div>

      </div>

      {/* <Footer className="bg-gray-800 text-white py-4 text-center" /> */}
    </div>
  );
};

export default HomePage;



