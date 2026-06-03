export default function ComparePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Compare Colleges
      </h1>

      <table className="border w-full">
        <thead>
          <tr>
            <th className="border p-2">Feature</th>
            <th className="border p-2">NIT Jamshedpur</th>
            <th className="border p-2">BIT Mesra</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Fees</td>
            <td className="border p-2">₹120000</td>
            <td className="border p-2">₹200000</td>
          </tr>

          <tr>
            <td className="border p-2">Rating</td>
            <td className="border p-2">4.5</td>
            <td className="border p-2">4.3</td>
          </tr>

          <tr>
            <td className="border p-2">Location</td>
            <td className="border p-2">Jharkhand</td>
            <td className="border p-2">Ranchi</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}