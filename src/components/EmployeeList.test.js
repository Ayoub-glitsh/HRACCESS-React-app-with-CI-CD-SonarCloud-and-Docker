import { render, screen } from "@testing-library/react";
import EmployeeList from "./EmployeeList";

test("affiche le titre de la liste", () => {
  render(<EmployeeList />);
  expect(screen.getByText("Liste des employés")).toBeInTheDocument();
});

test("affiche tous les employés", () => {
  render(<EmployeeList />);

  expect(screen.getByText("E001")).toBeInTheDocument();
  expect(screen.getByText("ALAMI")).toBeInTheDocument();
  expect(screen.getByText("3000")).toBeInTheDocument();

  expect(screen.getByText("E002")).toBeInTheDocument();
  expect(screen.getByText("RAMI")).toBeInTheDocument();
  expect(screen.getByText("4000")).toBeInTheDocument();

  expect(screen.getByText("E003")).toBeInTheDocument();
  expect(screen.getByText("KABIRI")).toBeInTheDocument();
  expect(screen.getByText("3500")).toBeInTheDocument();
});
