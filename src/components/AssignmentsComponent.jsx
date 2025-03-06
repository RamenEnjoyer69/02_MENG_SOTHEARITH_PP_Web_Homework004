import React from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent({ assignments, setAssignments }) {
  return (
    <div>
      <div className="flex justify-between">
        {/* head */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent data={assignments} setData={setAssignments} />
      </div>

      {/*uuh display em here */}
      <div className="grid lg:grid-cols-3 mt-5 gap-5">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <CardComponent
              key={assignment.name}
              name={assignment.name}
              dueDate={assignment.dueDate}
              progress={assignment.progress}
              description={assignment.description}
            />
          ))
        ) : (
          <p className="text-gray-400">No assignments found.</p>
        )}
      </div>
    </div>
  );
}
