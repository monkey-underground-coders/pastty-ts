import React from "react";
import { Switch, Route, withRouter } from "react-router";

const AuthScene = (props: any) => {
  const { match } = props;

  return (
    <div className="auth-scene">
      <div className="auth-scene__inner">
        <Switch>
          <Route path={match.url} exact={true} render={props => <div>ASDSAJDAHSDHASHDAS</div>} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(AuthScene);
