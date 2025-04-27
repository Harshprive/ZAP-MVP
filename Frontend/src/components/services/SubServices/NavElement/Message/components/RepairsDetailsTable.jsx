// RepairDetailsTable.js
import React from 'react';

const RepairDetailsTable = ({ issues }) => {
  const calculateTotalCost = () => issues.reduce((total, issue) => total + issue.cost, 0);

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
      <h2 className="font-bold text-lg mb-4 text-gray-900">Repair Details</h2>
      <table className="w-full">
        <thead className="border-b border-gray-200">
          <tr>
            <th className="text-left p-2 text-gray-700">Issue</th>
            <th className="text-left p-2 text-gray-700">Replaced Parts</th>
            <th className="text-right p-2 text-gray-700">Cost</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-b border-gray-200">
              <td className="p-2">{issue.description}</td>
              <td className="p-2">{issue.replacedParts.join(', ')}</td>
              <td className="p-2 text-right">${issue.cost}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td colSpan="2" className="p-2 text-right">Total:</td>
            <td className="p-2 text-right">${calculateTotalCost()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RepairDetailsTable;