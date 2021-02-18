import React, { Fragment } from "react";

const headings = [
  { display: "Name", id: "name" },
  { display: "Gender", id: "gender" },
  { display: "Date of Birth", id: "birthday" },
];

export default (props) => {
  const titleCase = (string = "") => string.replace(string[0], string[0]?.toUpperCase());

  return (
    <div className={"demographic-info"}>
      {headings.map((heading, index) => (
        <Fragment key={index}>
          <h5 className="demographic-info-heading">{heading.display}</h5>
          <p className="demographic-info-detail">{titleCase(props[heading.id])}</p>
        </Fragment>
      ))}
    </div>
  );
};
