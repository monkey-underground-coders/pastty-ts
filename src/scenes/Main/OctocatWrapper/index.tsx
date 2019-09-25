import React from "react";
import { ReactComponent as GithubIcon } from "#/assets/img/github-logo.svg";
import "./index.scss";

const OctocatWrapper = (props: any) => {
  return (
    <div className="octocat-block">
      <div className="octocat-block__inner">
        <a
          href="https://github.com/phen0menon/pastty-ts/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon width="50" height="50" />
        </a>
      </div>
    </div>
  );
};

export default OctocatWrapper;
