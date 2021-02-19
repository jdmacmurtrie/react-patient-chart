import React, { Fragment } from "react";

export default ({ handleChange, handleClick, handleKeyPress, showError, value }) => (
  <Fragment>
    <label className="search">
      Search by Patient ID
      <div className="input-block">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        {showError && <div className="error">Please enter a valid patient ID</div>}
      </div>
    </label>
    <button className="search-button" onClick={handleClick}>
      Search
    </button>
  </Fragment>
);
