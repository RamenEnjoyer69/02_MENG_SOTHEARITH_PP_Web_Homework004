import "./App.css";
import AssignmentsComponent from "./components/AssignmentsComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import { useState, useEffect } from "react";

function App() {
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //  filter when `assignments` or `searchQuery` changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredAssignments(assignments);
    } else {
      setFilteredAssignments(
        assignments.filter((assignment) =>
          assignment.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [assignments, searchQuery]);

  return (
    <div className="font-rubik text-primary-text bg-light-gray flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/6">
        <SidebarComponent />
      </div>

      {/* Top Navigation Bar */}
      <div className="w-5/6 px-10 pt-5 space-y-6">
        <TopNavbarComponent onSearchChange={setSearchQuery} />

        {/* Main Content */}
        <div className="flex justify-between">
          <div className="w-9/12 mt-5 space-y-11 h-[calc(100vh-10rem)] overflow-y-auto">
            <DashboardComponent />
            <AssignmentsComponent
              assignments={filteredAssignments}
              setAssignments={setAssignments}
            />
          </div>

          <div className="w-3/12 pl-10 mt-5">
            <LearningMaterialsComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
