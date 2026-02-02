import { render, screen } from "@testing-library/react";
import SalarySum from "./SalarySum";

test("calcule et affiche la somme des salaires", () => {
  const employees = [
    { matricule: "E001", nom: "ALAMI", salaire: 3000 },
    { matricule: "E002", nom: "RAMI", salaire: 4000 },
    { matricule: "E003", nom: "KABIRI", salaire: 3500 },
  ];

  render(<SalarySum employees={employees} />);

  expect(screen.getByTestId("salary-total")).toHaveTextContent("10500");
});
