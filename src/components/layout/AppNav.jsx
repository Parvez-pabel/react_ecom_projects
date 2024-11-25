import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/plainb-logo.svg";
import src from "../../assets/images/icons8-search-30.png"

const AppNav = () => {
  return (
    <>
      <div className="container-fluid text-white p-2 bg-success">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <span>
                <span className="f-12">
                  <i className="bi bi-envelope"></i> Support@PlanB.com{" "}
                </span>
                <span className="f-12 mx-2">
                  <i className="bi bi-envelope"></i> 01774688159{" "}
                </span>
              </span>
            </div>
            <div className="col-md-6">
              <span className="float-end">
                <span className="bodySmall mx-2">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="bodySmall mx-2">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="bodySmall">
                  <i className="bi bi-facebook"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="" width="96px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav06"
            aria-controls="nav06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav06">
            <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
              <span className="nav-item me-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </span>
            </ul>
          </div>
          <div className=" d-lg-flex">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                <img src={src} alt="" />
              </button>
            </div>
            <Link
              to="/cart"
              type="button"
              className="btn ms-2 btn-light position-relative"
            >
              <i className="bi text-dark bi-bag"></i>
            </Link>
            <Link
              to="/wish"
              type="button"
              className="btn ms-2 btn-light d-flex"
            >
              <i className="bi text-dark bi-heart"></i>
            </Link>
            <Link
              type="button"
              className="btn ms-3 btn-success d-flex"
              to="/profile"
            >
              Profile
            </Link>
            <Link
              type="button"
              className="btn ms-3 btn-success d-flex"
              to="/profile"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNav;
