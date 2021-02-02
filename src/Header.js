import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <Link className="header__link" to={"/"}>
        Home
      </Link>
      <Link className="header__link" to={"/about"}>
        About
      </Link>
    </header>
  );
}
