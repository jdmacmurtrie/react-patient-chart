import React, { Fragment } from "react";
import ConditionRows from "./ConditionRows";

const demographicHeadings = [
  { display: "Name", id: "name", leadingRow: true },
  { display: "Gender", id: "gender" },
  { display: "Date of Birth", id: "birthday" },
];

export default ({ demographicInfo, conditions = [] }) => {
  const titleCase = (string = "") => string.replace(string[0], string[0]?.toUpperCase());

  return (
    <table>
      <tbody>
        {!demographicInfo ? (
          <tr>
            <td align="center" colSpan="2">
              NO DATA
            </td>
          </tr>
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
      </tbody>
    </table>
  );
};
