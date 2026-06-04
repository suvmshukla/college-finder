"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const filtered = colleges.filter((college) => {
    return (
      college.name.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || college.location === location) &&
      (rating === "" || college.rating >= Number(rating))
    );
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-400">
          CollegeFinder
        </h1>

        <Link
          href="/compare"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
        >
          Compare Colleges
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Dream College 🎓
        </h1>

        <p className="text-gray-400 text-lg">
          Search, Compare and Explore Top Colleges
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4">
        <input
          type="text"
          placeholder="Search College..."
          className="w-full p-4 rounded-xl bg-white text-black border border-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto px-4 flex gap-4 mt-4">
        <select
          className="p-3 rounded-lg text-black flex-1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Ranchi">Ranchi</option>
          <option value="Bihar">Bihar</option>
        </select>

        <select
          className="p-3 rounded-lg text-black flex-1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">All Ratings</option>
          <option value="4">4+</option>
          <option value="4.5">4.5+</option>
        </select>
      </div>

      {/* College Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {filtered.map((college) => (
          <div
            key={college.id}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=600"
              alt="College"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />

            <h2 className="text-2xl font-bold mb-2">
              {college.name}
            </h2>

            <p>📍 {college.location}</p>
            <p>💰 ₹{college.fees}</p>
            <p>⭐ {college.rating}</p>

            <p className="mt-3 text-gray-400">
              {college.description}
            </p>

            <Link
              href={`/college/${college.id}`}
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-400">
        <p>© 2026 CollegeFinder</p>
        <p>Built with Next.js • Prisma • Neon DB</p>
      </footer>
    </div>
  );
}
