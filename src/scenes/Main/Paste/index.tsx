import React, { useEffect } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import { fetchPaste } from "#/store/actions/editor";
import Editor from "#/scenes/Main/Editor";
import "./index.scss";
import { connect } from "react-redux";
import { StoreRootState, ExternalPaste } from "#/store/types";
import { modes, InternalModeOption } from "../Editor/util";
import _ from "lodash";
import { formatDateTime } from "#/util/functions";

const constructPasteLink = (alias: string) => `${window.location.href}${alias}`;

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
  }, []);

  if (!pasteData && !pasteLoading && pasteLoadingHasErrors) {
    return redirectHome();
  }

  if (!pasteData) {
    return <div className="text-center">Loading...</div>;
  }

  const author = !_.isEmpty(pasteData.author) ? pasteData.author.username : "Anonymous";
  const creationTime = formatDateTime(new Date(pasteData.creationTime));

  return (
    <div className="paste-content d-flex">
      <Editor readOnly={true} className="w-100" />

      <div className="paste-info">
        <div className="paste-info__line">
          <div>Author:</div>
          <div>{author}</div>
        </div>
        <div className="paste-info__line">
          <div>Create at:</div>
          <div>{creationTime}</div>
        </div>
        {pasteData.description && (
          <div className="paste-info__line">
            <div>Description:</div>
            <div>{pasteData.description}</div>
          </div>
        )}
        <div className="paste-info__line">
          <div>Link:</div>
          <div>{constructPasteLink(alias)}</div>
        </div>
        <div className="paste-info__line">
          <div>Views:</div>
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