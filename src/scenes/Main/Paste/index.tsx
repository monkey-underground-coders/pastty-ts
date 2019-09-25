import React, { useEffect } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import { fetchPaste } from "#/store/actions/editor";
import Editor from "#/scenes/Main/Editor";
import { connect } from "react-redux";
import { StoreRootState, ExternalPaste } from "#/store/types";
import _ from "lodash";
import { formatDateTime } from "#/util/functions";
import CopyToClipboard from 'react-copy-to-clipboard';
import loader from '#/assets/img/loader.svg';
import "./index.scss"


interface PasteProps extends RouteComponentProps<{ alias: string }> {
  fetchPaste: any;
  pasteData: ExternalPaste;
  pasteLoading: boolean;
  pasteLoadingHasErrors: boolean;
}

const Paste = (props: PasteProps) => {
  const { alias } = props.match.params;
  const { pasteData, pasteLoading, pasteLoadingHasErrors } = props;

  const redirectHome = () => {
    return <Redirect to="/" />;
  };

  useEffect(() => {
    props.fetchPaste(alias);
  }, [alias, props]);

  if (!pasteData && !pasteLoading && pasteLoadingHasErrors) {
    return redirectHome();
  }

  if (!pasteData) {
    return (
      <div className="paste-content text-center" style={{ padding: "5rem" }}>
        <img src={loader} width="50" alt="" />
      </div>
    );
  }

  const author = !_.isEmpty(pasteData.author) ? pasteData.author.username : "Anonymous";
  const creationTime = formatDateTime(new Date(pasteData.creationTime));

  return (
    <div className="paste-content d-flex">
      <Editor readOnly={true} className="w-100" />

      <div className="paste-info">
        <div className="paste-info__line">
          <div className="paste-info__line__title">Author</div>
          <div>{author}</div>
        </div>
        <div className="paste-info__line">
          <div className="paste-info__line__title">Create at</div>
          <div>{creationTime}</div>
        </div>
        {pasteData.description && (
          <div className="paste-info__line">
            <div className="paste-info__line__title">Description</div>
            <div>{pasteData.description}</div>
          </div>
        )}
        <div className="paste-info__line">
          <div className = "paste-info__line__title">Link:</div>
          <CopyToClipboard text = {window.location.href} >
          <span>{window.location.href}</span>
          </CopyToClipboard>
        </div>
        <div className="paste-info__line">
          <div className="paste-info__line__title">Views</div>
          <div>{pasteData.views}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreRootState) => ({
  pasteData: state.editor.pasteData as ExternalPaste,
  pasteLoading: state.editor.pasteLoading,
  pasteLoadingHasErrors: state.editor.pasteLoadingHasErrors,
});

const mapDispatchToProps = {
  fetchPaste,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Paste),
);
