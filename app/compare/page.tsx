"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ComparePage() {
  const [colleges, setColleges] = useState<any[]>([]);
  console.log("COLLEGES:", colleges);
  const [college1, setCollege1] = useState<any>(null);
  const [college2, setCollege2] = useState<any>(null);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setColleges(data);
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-6">
        Compare Colleges ⚖️
      </h1>

      <p className="text-center text-white mb-8">
        Colleges Loaded: {colleges.length}
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
        <select
          className="w-full p-4 rounded-xl bg-white text-black border border-gray-300"
          defaultValue=""
          onChange={(e) =>
            setCollege1(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )
            )
          }
        >
          <option value="">Select First College</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="w-full p-4 rounded-xl bg-white text-black border border-gray-300"
          defaultValue=""
          onChange={(e) =>
            setCollege2(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )
            )
          }
        >
          <option value="">Select Second College</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {college1 && college2 && (
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600">
                <th className="p-5 text-xl">Feature</th>
                <th className="p-5 text-xl">{college1.name}</th>
                <th className="p-5 text-xl">{college2.name}</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-5 font-semibold">📍 Location</td>
                <td className="p-5">{college1.location}</td>
                <td className="p-5">{college2.location}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="p-5 font-semibold">💰 Fees</td>
                <td className="p-5">₹{college1.fees}</td>
                <td className="p-5">₹{college2.fees}</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="p-5 font-semibold">⭐ Rating</td>
                <td className="p-5">{college1.rating}</td>
                <td className="p-5">{college2.rating}</td>
              </tr>

              <tr>
                <td className="p-5 font-semibold">📝 Description</td>
                <td className="p-5">{college1.description}</td>
                <td className="p-5">{college2.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="text-center mt-10">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}