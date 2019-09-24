import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { fetchPaste } from "#/store/actions/editor";
import Editor from "#/scenes/Main/Editor";
import "./index.scss";

interface PasteProps extends RouteComponentProps<{ alias: string }> {}

const Paste = (props: PasteProps) => {
  const { alias } = props.match.params;

  return (
    <div className="paste-content d-flex">
      <Editor className="w-100" />
      {/* <div className="sidebar w-30"></div> */}
      <div className="paste-info">
        <div className="paste-info__line">
          <div>Author:</div>
          <div>Senketsu</div>
        </div>
        <div className="paste-info__line">
          <div>Create at:</div>
          <div>Yesterday</div>
        </div>
        <div className="paste-info__line">
          <div>Description:</div>
          <div>lolololol</div>
        </div>
        <div className="paste-info__line">
          <div>Link:</div>
          <div>www.test.com</div>
        </div>
        <div className="paste-info__line">
          <div>Views:</div>
          <div>1000000</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Paste);
