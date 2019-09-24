import React from "react";
import { Switch, Route, withRouter } from "react-router";
import Editor from "./Editor";
import Paste from "./Paste";
import Navbar from "#/components/Navbar";
import { getRenderProperty } from "#/util/functions";
import OctocatWrapper from "./OctocatWrapper";
import "./index.scss";

const MainScene = (props: any) => {
  const { match } = props;

  return (
    <>
      <div className="main-scene">
        <div className="main-scene__inner">
          <Navbar />

          <Switch>
            <Route
              path={match.url}
              exact={true}
              render={getRenderProperty("Share code | Pastty", Editor)}
            />

            <Route
              path={`${match.url}:alias`}
              exact={true}
              render={getRenderProperty("Paste | Pastty", Paste)}
            />
          </Switch>
        </div>
      </div>

      <OctocatWrapper />
    </>
  );
};

export default withRouter(MainScene);
