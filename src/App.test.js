import { render, screen } from "@testing-library/react";
import App from "./App";

test("affiche le titre HRACCESS", () => {
  render(<App />);
  expect(screen.getByText("HRACCESS")).toBeInTheDocument();
});

test("affiche le composant EmployeeList", () => {
  render(<App />);
  expect(screen.getByText("Liste des employés")).toBeInTheDocument();
});
