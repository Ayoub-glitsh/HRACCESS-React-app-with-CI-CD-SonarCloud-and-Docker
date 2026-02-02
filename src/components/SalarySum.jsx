import React from "react";

export default function SalarySum({ employees }) {
  const total = employees.reduce((sum, e) => sum + e.salaire, 0);

  return (
    <div>
      <h2>Total des salaires</h2>
      <p data-testid="salary-total">{total}</p>
    </div>
  );
}
