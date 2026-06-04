async function getCollege(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/colleges/${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await getCollege(id);

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
              <p>📍 {college.location}</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p>💰 ₹{college.fees}</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl">
              <p>⭐ {college.rating}</p>
            </div>

          </div>

          <p className="text-gray-300 text-lg">
            {college.description}
          </p>

          <a
            href="/"
            className="inline-block mt-8 bg-blue-500 px-6 py-3 rounded-xl"
          >
            Back to Home
          </a>

        </div>
      </div>
    </div>
  );
}