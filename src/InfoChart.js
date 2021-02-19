import React, { Fragment } from "react";
import ConditionRows from "./ConditionRows";

const demographicHeadings = [
  { display: "Name", id: "name", leadingRow: true },
  { display: "Gender", id: "gender" },
  { display: "Date of Birth", id: "birthday" },
];
const conditionHeadings = [
  { display: "Condition", id: "name", leadingRow: true },
  { display: "Date Asserted", id: "assertedDate" },
  { display: "For more information", id: "link" },
];

export default ({ demographicInfo, conditions = [] }) => {
  const titleCase = (string = "") => string.replace(string[0], string[0]?.toUpperCase());

  return (
    <table>
      {!demographicInfo ? (
        <td align="center" colspan="2">
          NO DATA
        </td>
      ) : (
        <Fragment>
          {demographicHeadings.map((heading, index) => {
            const leadingRowClass = heading.leadingRow ? "leading-row-demographic" : "";

            return (
              <tr key={index} className={leadingRowClass}>
                <td>{heading.display}</td>
                <td>{titleCase(demographicInfo[heading.id])}</td>
              </tr>
            );
          })}
          <ConditionRows conditions={conditions} />
        </Fragment>
      )}
    </table>
  );
};
