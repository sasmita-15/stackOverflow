import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("activity");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.stackexchange.com/2.3/questions/",
          {
            params: {
              order: "desc",
              sort: filter,
              site: "stackoverflow",
            },
          }
        );
        setLoading(false);
        setQuestions(response.data.items);
        console.log(response.data.items.length)
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error("Error fetching questions", error);
      }
    };

    fetchQuestions();
  }, [filter]); // Re-fetch data when the filter changes

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold">
        Something went wrong. Please try again later.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <div className="text-xl text-gray-500 animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="questions-list max-w-5xl mx-auto p-6">
      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        {["activity", "hot", "votes" , "month", "week"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              filter === type
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((question) => (
          <div
            className="question border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            key={question.question_id}
          >
            <h3 className="text-lg font-semibold text-blue-600 hover:underline">
              <a href={question.link} target="_blank" rel="noopener noreferrer">
                {question.title}
              </a>
            </h3>
            <div className="tags mt-2 flex flex-wrap gap-2">
              {question.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Votes: {question.score} | Answers: {question.answer_count} | Views:{" "}
              {question.view_count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
