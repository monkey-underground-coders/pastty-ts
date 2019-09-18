import React from "react";
import routes from "#/config/routes";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "store/reducer";
import Navbar from "../Navbar";

interface ApplicationProps {}

const Application = (props: ApplicationProps) => {
  const applicationRoutes = routes.map((route: Record<string, any>, index: number) => (
    <Route {...route} key={index} />
  ));

  return (
    <div className="application-root">
      <Navbar />
      {applicationRoutes}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
