export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12">
        Compare Colleges ⚖️
      </h1>

      <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-5 text-xl">Feature</th>
              <th className="p-5 text-xl">NIT Jamshedpur</th>
              <th className="p-5 text-xl">BIT Mesra</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-700 hover:bg-gray-800">
              <td className="p-5 font-semibold">💰 Fees</td>
              <td className="p-5">₹120000</td>
              <td className="p-5">₹200000</td>
            </tr>

            <tr className="border-b border-gray-700 hover:bg-gray-800">
              <td className="p-5 font-semibold">⭐ Rating</td>
              <td className="p-5 text-green-400">4.5</td>
              <td className="p-5 text-yellow-400">4.3</td>
            </tr>

            <tr className="border-b border-gray-700 hover:bg-gray-800">
              <td className="p-5 font-semibold">📍 Location</td>
              <td className="p-5">Jharkhand</td>
              <td className="p-5">Ranchi</td>
            </tr>

            <tr className="hover:bg-gray-800">
              <td className="p-5 font-semibold">🏆 Type</td>
              <td className="p-5">Government</td>
              <td className="p-5">Private</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}