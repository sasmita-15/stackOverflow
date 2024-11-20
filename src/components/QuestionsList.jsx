import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const QuestionsList = ({ searchQuery }) => {
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
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error("Error fetching questions", error);
      }
    };

    fetchQuestions();
  }, [filter, searchQuery]);

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
    <div className="questions-list max-w-5xl mx-auto p-6 bg-slate-100">
      <div className="text-3xl pb-4 font-bold">Top Qustions</div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {["activity", "hot", "votes", "month", "week"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === type
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={() => console.log("Add Question clicked")}
          className="px-4 py-2 bg-blue-500 text-white rounded-3xl text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          Add Question
        </button>
      </div>


      <div className="space-y-4">
        {questions.filter((item)=>{
                return searchQuery === '' ? item : item.title.includes(searchQuery)
              }).map((question) => (
          <div
            className="question border border-gray-300 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            key={question.question_id}
          >
            <h3 className="text-lg font-semibold text-black hover:underline">
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
            <p className="text-sm text-gray-600 mt-3 flex justify-between">
              <span>
                Votes: {question.score} | Answers: {question.answer_count} | Views:{" "} {question.view_count}
              </span>
              <span className="text-right">
                Last activity: {moment.unix(question.creation_date).fromNow()}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
