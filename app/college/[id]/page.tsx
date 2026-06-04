import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">College Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white p-8">
      <div className="max-w-6xl mx-auto">

        {/* Dynamic College Image */}
        <img
          src={
            college.image ||
            "https://images.unsplash.com/photo-1562774053-701939374585?w=1200"
          }
          alt={college.name}
          className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-8"
        />

        <div className="bg-gray-900/70 p-8 rounded-3xl">

          <h1 className="text-5xl font-bold text-blue-400 mb-6">
            {college.name}
          </h1>

          <div className="grid md:grid-cols-4 gap-6 mb-8">

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p>📍 {college.location}</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p>💰 ₹{college.fees}</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p>⭐ {college.rating}</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p>💼 {college.placements}</p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">
            Overview
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            {college.description}
          </p>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">
            Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-xl">
              B.Tech Computer Science
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              B.Tech Electronics
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              B.Tech Mechanical
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">
            Placements
          </h2>

          <div className="bg-gray-800 p-6 rounded-2xl mb-8">
            <p className="text-xl">
              Average Package: {college.placements}
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-blue-300">
            Reviews
          </h2>

          <div className="bg-gray-800 p-6 rounded-2xl">
            <p>
              ⭐ Students have rated this college {college.rating}/5 based on
              academics, placements and campus life.
            </p>
          </div>

          <Link
            href="/"
            className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
          >
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}