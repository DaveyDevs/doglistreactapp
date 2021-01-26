import React from "react";
import PropTypes from "prop-types";

export function Filter({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <label className="filter">
        Search:
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          value={filter}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
