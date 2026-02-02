import { render, screen } from "@testing-library/react";
import App from "./App";


test("affiche HRACCESS et les sections", () => {
  render(<App />);
  expect(screen.getByText("HRACCESS")).toBeInTheDocument();
  expect(screen.getByText("Liste des employés")).toBeInTheDocument();
  expect(screen.getByText("Total des salaires")).toBeInTheDocument();
});


