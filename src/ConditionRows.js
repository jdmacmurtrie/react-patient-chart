import React from "react";

const conditionHeadings = [
  { display: "Condition", id: "name", leadingRow: true },
  { display: "Date Asserted", id: "assertedDate" },
  { display: "For more information", id: "link" },
];

export default ({ conditions = [] }) => {
  if (!conditions.length) {
    return (
      <td align="center" colspan="2">
        No Outstanding Conditions
      </td>
    );
  }

  return conditions.map((condition) =>
    conditionHeadings.map((heading, index) => {
      const leadingRowClass = heading.leadingRow ? "leading-row-condition" : "";

      return (
        <tr key={index} className={leadingRowClass}>
          <td>{heading.display}</td>
          <td>
            {heading.id === "link" ? (
              <a href={condition[heading.id]}>{`Search ${condition.name}`}</a>
            ) : (
              condition[heading.id] || "N/A"
            )}
          </td>
        </tr>
      );
    })
  );
};
