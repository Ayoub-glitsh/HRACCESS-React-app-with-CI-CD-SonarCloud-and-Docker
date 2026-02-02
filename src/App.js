import React from "react";
import EmployeeList, { employees } from "./components/EmployeeList";
import SalarySum from "./components/SalarySum";

function App() {
  return (
    <div className="App">
      <h1>HRACCESS</h1>
      <EmployeeList />
      <SalarySum employees={employees} />
    </div>
  );
}

export default App;
