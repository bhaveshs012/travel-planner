import React from "react";
import { convertToINR } from "../../../utils/currencyFormatter";

function BasicTableLayout({ heading, data }) {
  return (
    <div className="bg-gray-100 p-4 w-full rounded-lg">
      <p className="text-center text-md font-bold  underline">{heading}</p>
      <div className="flex items-center justify-center">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-200">
                {data.heading[0]}
              </th>
              <th className="px-4 py-2 border border-gray-200">
                {data.heading[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((item, index) => (
              <tr key={index} className="bg-white even:bg-gray-100">
                <td className="px-4 py-2 border border-gray-200">
                  {item.fullName}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {convertToINR(item.totalAmount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BasicTableLayout;
