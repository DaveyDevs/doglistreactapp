import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export function Dog({ dog }) {
  return (
    <li className="dog">
      <Link className="dog__container" to={`/dog/${dog.id}`}>
        <img
          className="dog__img"
          src={dog.image.url}
          alt={"Photo of " + dog.name}
        />
        <p className="dog__name">{dog.name}</p>
      </Link>
    </li>
  );
}

Dog.propTypes = {
  dog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
