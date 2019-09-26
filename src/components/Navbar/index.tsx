import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { StoreRootState, EditorModes, ReactButtonEvent } from "#/store/types";
import { createPaste, forkPaste, resetEditor } from "#/store/actions/editor";
import ModeSelect from "./components/ModeSelect";
import { Navbar, Nav } from "react-bootstrap";
import "./index.scss";

interface NavbarProps extends RouteComponentProps {
  resetEditor: any;
  forkPaste: any;
  createPaste: any;
  currentEditorMode: EditorModes;
  isAuthorized?: boolean;
}

const MainNavbar = (props: NavbarProps) => {
  const { createPaste, forkPaste, resetEditor, currentEditorMode, isAuthorized = false} = props;

  const resetEditorHandler = (evt: ReactButtonEvent) => {
    resetEditor().then(() => {
      props.history.push("/");
    });
  };

  const createPasteHandler = (evt: ReactButtonEvent) => {
    createPaste().then((alias: string) => {
      props.history.push(`/${alias}`);
    });
  };

  const forkPasteHandler = (evt: ReactButtonEvent) => {
    forkPaste().then(() => {
      props.history.push("/");
    });
  };

  return (
    <div className="header-module">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="/">Pastty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <button className="btn btn-primary" onClick={resetEditorHandler}>
                <i className="fas fa-plus-circle" /> New
              </button>
            </Nav.Item>
            <Nav.Item>
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
            </Nav.Item>
            <Nav.Item>
              <ModeSelect />
            </Nav.Item>
          </Nav>

          <div className="ml-auto">
            <form className="form-inline login-btns nav-item">
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
        </Navbar.Collapse>
      </Navbar>
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
  )(MainNavbar),
);
