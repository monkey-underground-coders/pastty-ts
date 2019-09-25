import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { StoreRootState, EditorModes, ReactButtonEvent } from "#/store/types";
import { createPaste, forkPaste, resetEditor } from "#/store/actions/editor";
import ModeSelect from "./components/ModeSelect";
import "./index.scss";

interface NavbarProps extends RouteComponentProps {
  resetEditor: any;
  forkPaste: any;
  createPaste: any;
  currentEditorMode: EditorModes;
  isAuthorized?: boolean;
}

const Navbar = (props: NavbarProps) => {
  const { createPaste, forkPaste, resetEditor, currentEditorMode, isAuthorized = false } = props;

  const resetEditorHandler = (evt: ReactButtonEvent) => {
    resetEditor().then(() => {
      props.history.push("/");
    });
  };

  const createPasteHandler = (evt: ReactButtonEvent) => {
    createPaste().then(() => {
      // Handle navigation here
    });
  };

  const forkPasteHandler = (evt: ReactButtonEvent) => {
    forkPaste().then(() => {
      props.history.push("/");
    });
  };

  return (
    <div className="header-module col-12 no-front-paddings">
      <nav className="navbar navbar-expand navbar-dark bg-dark py-2">
        <Link to="/" className="navbar-brand d-none d-sm-block">
          Pastty
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-sm-auto">
            <li className="nav-item active">
              <button className="btn btn-primary" onClick={resetEditorHandler}>
                <i className="fas fa-plus-circle" /> New
              </button>
            </li>

            <li className="nav-item ml-2">
              {currentEditorMode === EditorModes.Editor ? (
                <button className="btn btn-success" onClick={createPasteHandler}>
                  <i className="fas fa-save" />
                  <span className="ml-2">Save</span>
                </button>
              ) : (
                <button className="btn btn-success" onClick={forkPasteHandler}>
                  <i className="fas fa-code-branch" />
                  <span className="ml-2">Fork</span>
                </button>
              )}
            </li>
            <li className="nav-item ml-2 syntax-select-item">
              <ModeSelect />
            </li>
          </ul>
          <form className="form-inline login-btns">
            {isAuthorized ? (
              <button className="btn btn-outline-success login-btns__signout">
                <i className="fa fa-sign-out-alt" />
                <span className="ml-2">Sign Out</span>
              </button>
            ) : (
              <button className="btn btn-outline-success login-btns__signin">
                <i className="fa fa-sign-in-alt" />
                <span className="ml-2">Sign In</span>
              </button>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state: StoreRootState) => ({
  currentEditorMode: state.editor.currentEditorMode,
});

const mapDispatchToProps = {
  forkPaste,
  createPaste,
  resetEditor,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Navbar),
);
