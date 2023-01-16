import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <div className="container-fluid bg-danger text-light">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <Link
              className={`text-light d-block px-3 py-2 ${
                isMobile ? "" : "text-center"
              } text-decoration-none`}
              to="/"
            >
              E-Shop
            </Link>
          </div>
          <div
            className={`col-sm-6 d-flex header_a ${
              isMobile ? "justify-content-end" : "justify-content-center"
            }`}
          >
            <Link className="text-light px-3 py-2 text-decoration-none" to="/">
              Home
            </Link>
            <Link
              className="text-light px-3 py-2 text-decoration-none"
              to="/cart"
            >
              Cart
            </Link>
            <Link
              className="text-light px-3 py-2 text-decoration-none"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-light px-3 py-2 text-decoration-none"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="text-light px-3 py-2 text-decoration-none"
              to="/account"
            >
              Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
