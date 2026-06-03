"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const filtered = colleges.filter((college: any) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        College Discovery Platform
      </h1>

      <input
        type="text"
        placeholder="Search College..."
        className="border p-2 w-full mb-4 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((college: any) => (
        <div
          key={college.id}
          className="border p-4 rounded-lg mb-4"
        >
          <h2 className="text-xl font-bold">
            {college.name}
          </h2>

          <p>📍 {college.location}</p>
          <p>💰 Fees: ₹{college.fees}</p>
          <p>⭐ Rating: {college.rating}</p>
          <p>{college.description}</p>
        </div>
      ))}
    </div>
  );
}
