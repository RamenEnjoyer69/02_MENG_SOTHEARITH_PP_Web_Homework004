import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div className="w-full ">
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="w-full grid grid-cols-4 gap-4">
        {dashboard?.map((data) => (
          <div key={data?.id}>
            <div
              className={`flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto ${data?.color}`}
            >
              <div className={`p-3 rounded-xl ${data?.color}`}>
                <img src={data?.icon} alt="file icon" />
              </div>
              <div>
                <p className="text-xl font-semibold">{data?.totalTasks}</p>
                <p className="text-gray-400">{data?.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
