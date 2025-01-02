import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Twitter, Copy, RefreshCw, Check, ExternalLink } from "lucide-react";

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [copied, setCopied] = useState(false);

  const getNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    while (quotes[randomIndex].text === quote.text && quotes.length > 1) {
      randomIndex = Math.floor(Math.random() * quotes.length);
    }
    setQuote(quotes[randomIndex]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // The "addlink" logic for Twitter sharing
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" — ${quote.author}`
  )}`;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] overflow-hidden relative">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      <main className="z-10 w-full max-w-2xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative"
        >
          {/* Decorative Quote Icon */}
          <div className="absolute top-0 left-10 -translate-y-1/2 bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-600/50">
            <Quote className="text-white w-8 h-8" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={quote.text}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="min-h-[160px] flex flex-col justify-center"
            >
              <h1 className="text-2xl md:text-4xl font-semibold text-slate-100 leading-tight tracking-tight">
                "{quote.text}"
              </h1>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-blue-500" />
                <p className="text-blue-400 font-medium text-lg italic uppercase tracking-widest">
                  {quote.author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action Footer */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {/* Addlink: Twitter */}
              <a
                href={tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share quote on Twitter"
                className="group p-4 bg-slate-800/50 hover:bg-blue-600 text-blue-400 hover:text-white rounded-2xl transition-all duration-300 border border-white/5 shadow-inner"
              >
                <Twitter size={22} className="group-hover:scale-110 transition-transform" />
              </a>

              {/* Copy Button */}
              <button
                onClick={copyToClipboard}
                aria-label="Copy quote to clipboard"
                className="group p-4 bg-slate-800/50 hover:bg-emerald-600 text-emerald-400 hover:text-white rounded-2xl transition-all duration-300 border border-white/5 shadow-inner"
              >
                {copied ? <Check size={22} /> : <Copy size={22} className="group-hover:scale-110 transition-transform" />}
              </button>
            </div>

            <button
              onClick={getNewQuote}
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95 group"
            >
              <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
              Generate Quote
            </button>
          </div>
        </motion.div>

        {/* Portfolio Footer */}
        <p className="text-center mt-8 text-slate-500 text-sm font-light tracking-widest uppercase">
          Build with React & Tailwind • 2026
        </p>
      </main>
    </div>
  );
}

export default App;