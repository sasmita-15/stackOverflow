import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import QuestionsList from "../components/QuestionsList.jsx";
import Footer from "../components/Footer.jsx";
import RightSidebar from "../components/rightSidebar.jsx";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <header className="sticky top-0 z-50 bg-white">
        <Header setSearchQuery={setSearchQuery} />
      </header>
      <div className="flex flex-grow">

        <aside className="w-2/12 hidden md:block sticky top-0 h-screen bg-slate-100">
          <Sidebar />
        </aside>

        <main className="w-7/12 flex-grow p-4 overflow-auto">
          <QuestionsList searchQuery={searchQuery} />
        </main>

        <aside className="w-3/12 sticky top-0 h-screen bg-slate-100">
          <RightSidebar />
        </aside>
      </div>

      <Footer className="bg-gray-800 text-white py-4 text-center" />
    </div>
  );
};

export default HomePage;
