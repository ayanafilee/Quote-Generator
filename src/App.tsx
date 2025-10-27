import "./app.css";
import React, { useState } from "react";

// ✅ Define a Quote type
type Quote = {
  text: string;
  author: string;
};

// ✅ Quotes array with proper typing
const quotes: Quote[] = [
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

function App() {
  // ✅ Use types for all useState hooks
  const [quote, setQuote] = useState<Quote>(quotes[0]);
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>([]);
  const [lists, setLists] = useState<string[]>(["Ayana", "Bana", "Barekegn"]);
  const [newName, setNewName] = useState<string>("");

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteHistory((prev: Quote[]) => [...prev, quote]);
    setQuote(quotes[randomIndex]);
  };

  const addName = () => {
    if (newName.trim() !== "") {
      setLists((prev: string[]) => [...prev, newName]);
      setNewName("");
    }
  };

  const removeLastName = () => {
    if (lists.length > 0) {
      setLists((prev: string[]) => prev.slice(0, -1));
    }
  };

  return lists.length > 0 ? (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-300 to-blue-800">
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

        <div className="mt-4 flex gap-2 justify-center">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Add new name"
            className="border rounded-lg px-2 py-1 text-sm"
          />
          <button
            onClick={addName}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add
          </button>
        </div>

        <button
          onClick={removeLastName}
          className="mt-3 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Remove Last
        </button>

        {quoteHistory.length > 0 && (
          <div className="mt-5 text-left">
            <h3 className="font-semibold mb-1">Previous Quotes:</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside">
              {quoteHistory.slice(-3).map((q, i) => (
                <li key={i}>
                  "{q.text}" – {q.author}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-lg text-gray-800">
      <p>The list must contain exactly 4 items. 0r the items not show</p>
      <button
        onClick={removeLastName}
        className="mt-3 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Remove Extra
      </button>
    </div>
  );
}

export default App;
