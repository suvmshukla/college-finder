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
      <div className="max-w-5xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200"
          alt="College"
          className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-8"
        />

        <div className="bg-gray-900/70 p-8 rounded-3xl">
          <h1 className="text-5xl font-bold mb-6 text-blue-400">
            {college.name}
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-2xl">
              <p className="text-lg">📍 {college.location}</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p className="text-lg">💰 ₹{college.fees}</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p className="text-lg">⭐ {college.rating}</p>
            </div>
          </div>

          <p className="text-gray-300 text-lg">
            {college.description}
          </p>

          <Link
            href="/"
            className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}