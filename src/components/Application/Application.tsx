import React from "react";
import { Route } from "react-router-dom";
import { fetchPaste, IEditorState } from "store/types";
import { connect } from "react-redux";
import { routes } from "../../config/routes";
import { AppState } from "../../store/reducer";

interface IEditorDispatchProps {
  fetchPaste: typeof fetchPaste;
}

export class Application extends React.Component<
  IEditorDispatchProps & IEditorState
> {
  render() {
    const applicationRoutes: Array<any> = routes.map(
      (route: Record<string, any>, index: number) => (
        <Route {...route} key={index} />
      )
    );

    return (
      <div className={"application-root"}>
        {applicationRoutes}

        <div className={"application-face"}>
          <span>Hello!</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  editor: state.editor
});

const mapDispatchToProps = {
  fetchPaste
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
