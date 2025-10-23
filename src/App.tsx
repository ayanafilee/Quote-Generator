import "./app.css";
import React, { useState } from "react";

const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
  },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
];

const lists = ["Ayana", "Bana", "Barekegn"];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return lists.length === 4 ? (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-sky-300 to-blue-800">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <p className="text-lg italic text-gray-800">"{quote.text}"</p>
        <p className="text-sm text-gray-600 mt-3">– {quote.author}</p>

        <button
          onClick={getNewQuote}
          className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          New Quote
        </button>

        <ul className="mt-4 text-left list-disc list-inside">
          {lists.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-lg text-gray-800">
      <p>The list must contain exactly 4 items. and</p>
    </div>
  );
}

export default App;
