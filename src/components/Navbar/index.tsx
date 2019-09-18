import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { StoreRootState } from "#/store/types";
import "./index.scss";
import ModeSelect from "../ModeSelect";

interface NavbarProps extends RouteComponentProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div className="header-module col-12 no-front-paddings">
      <nav className="navbar navbar-expand navbar-dark bg-dark py-2">
        <a className="navbar-brand  d-none d-sm-block" href="#">
          Pastty
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-sm-auto">
            <li className="nav-item active">
              <Link to="/" className="btn btn-primary">
                <i className="fas fa-plus-circle" /> New
              </Link>
            </li>

            <li className="nav-item ml-2">
              <button className="btn btn-success">
                {true ? (
                  <>
                    <i className="fas fa-code-branch" /> Fork
                  </>
                ) : (
                  <>
                    <i className="fas fa-save" /> Save
                  </>
                )}
              </button>
            </li>
            <li className="nav-item ml-2 syntax-select-item">
              <ModeSelect />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (store: StoreRootState) => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Navbar),
);
