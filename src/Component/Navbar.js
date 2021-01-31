import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../Auth/firebase/fire";

export default function navbar() {
  const logOutHandler = () => {
    auth.signOut();
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark text-white-50 "
        style={{
          zIndex: "100",
          position: "absolute",
          top: "0px",
          width: "100vw",
        }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ol className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item text-white-50 mx-4">
              <NavLink to="/">
                <span className="active_class text-white-50">Home</span>
              </NavLink>
            </li>
            <li className="nav-item active text-white-50 mx-4">
              <NavLink to="/listitems">
                <span className="active_class text-white-50">Listitems</span>
              </NavLink>
            </li>
            <li className="nav-item text-white-50 mx-4">
              <NavLink to="/AddItem">
                <span className="active_class text-white-50">AddItem</span>
              </NavLink>
            </li>
            <li className="nav-item text-white-50 mx-4">
              <form>
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  style={{ border: "none", padding: "0px" }}
                >
                  <span
                    className="active_class text-white-50"
                    onClick={logOutHandler}
                    style={{ cursor: "pointer" }}
                  >
                    LogOut
                  </span>
                </button>
              </form>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}
