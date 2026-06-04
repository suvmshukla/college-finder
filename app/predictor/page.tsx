"use client";

import { useState } from "react";
import Link from "next/link";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const predictCollege = () => {
    const r = Number(rank);

    if (r <= 10000) {
      setResult(["IIT Patna"]);
    } else if (r <= 30000) {
      setResult(["NIT Jamshedpur"]);
    } else {
      setResult(["BIT Mesra"]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        College Predictor 🎯
      </h1>

      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-3xl shadow-xl">
        <label className="block mb-3 text-lg">
          Enter JEE Rank
        </label>

        <input
          type="number"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          placeholder="Enter Your Rank"
          className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={predictCollege}
          className="w-full bg-blue-500 hover:bg-blue-600 p-4 rounded-xl font-semibold"
        >
          Predict College
        </button>

        {result.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Recommended Colleges
            </h2>

            {result.map((college, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-xl mb-3"
              >
                🎓 {college}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}