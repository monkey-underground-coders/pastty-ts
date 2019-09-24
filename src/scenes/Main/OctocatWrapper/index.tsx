import React from "react";
import { ReactComponent as GithubIcon } from "#/assets/img/github-logo.svg";

const OctocatWrapper = (props: any) => {
  return (
    <div className="octocat-block">
      <div className="octocat-block__inner">
        <GithubIcon width="100" height="100" />
      </div>
    </div>
  );
};

export default OctocatWrapper;
