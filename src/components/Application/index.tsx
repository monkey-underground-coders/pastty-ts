import React from "react";
import { Route, RouteComponentProps, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "store/reducer";
import Main from "#/scenes/Main";
import Auth from "#/scenes/Auth";
import "./index.scss";

interface ApplicationProps extends RouteComponentProps {}

const Application = (props: ApplicationProps) => {
  return (
    <div className="application-root">
      <div className="application-root__inner">
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({});
const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Application),
);
