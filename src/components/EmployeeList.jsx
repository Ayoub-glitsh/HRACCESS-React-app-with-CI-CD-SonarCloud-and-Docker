import React from "react";

const employees = [
  { matricule: "E001", nom: "ALAMI", salaire: 3000 },
  { matricule: "E002", nom: "RAMI", salaire: 4000 },
  { matricule: "E003", nom: "KABIRI", salaire: 3500 },
];

export default function EmployeeList() {
  return (
    <div>
      <h2>Liste des employés</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Salaire</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.matricule}>
              <td>{e.matricule}</td>
              <td>{e.nom}</td>
              <td>{e.salaire}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { employees };
