import React from "react";
import routes from "config/routes";
import { Route } from "react-router-dom";
import { fetchPaste } from "store/types";
import { connect } from "react-redux";
import { AppState } from "store/reducer";
import { Paste } from "../../models/paste";

interface ApplicationProps {
  fetchPaste: any;
  editorData: Paste;
}

const Application = (props: ApplicationProps) => {
  const applicationRoutes = routes.map((route: Record<string, any>, index: number) => <Route {...route} key={index} />);

  return (
    <div className="application-root">
      {applicationRoutes}

      <div className="application-face">Hi</div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  editor: state.editor,
});

const mapDispatchToProps = {
  fetchPaste,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
