import React from "react";
import routes from "#/config/routes";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "store/reducer";
import Navbar from "../Navbar";
import "./index.scss";

interface ApplicationProps {}

const Application = (props: ApplicationProps) => {
  const applicationRoutes = routes.map((route: Record<string, any>, index: number) => (
    <Route {...route} key={index} />
  ));

  return (
    <div className="application-root">
      <div className="application-root__inner">
        <Navbar />

        {applicationRoutes}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
