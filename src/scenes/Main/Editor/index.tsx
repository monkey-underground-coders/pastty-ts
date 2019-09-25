import React from "react";
import { connect } from "react-redux";
import CodeMirror from "codemirror";
import { Controlled as ReactCodeMirror } from "react-codemirror2";
import { getModeTitle, InternalModeOption } from "./util";
import { StoreRootState } from "#/store/types";
import { setContents } from "#/store/actions/editor";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/gruvbox-dark.css";
import "codemirror/addon/display/placeholder";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/closebrackets";
import _ from "lodash";

interface EditorOwnProps extends React.Props<any> {
  mode: InternalModeOption;
  contents: string;
  className?: string;
  setContents?: any;
  noRightRound?: string;
  readOnly?: boolean;
}

const Editor = (props: EditorOwnProps) => {
  const { mode, className = "" } = props;

  const options: CodeMirror.EditorConfiguration = {
    lineNumbers: true,
    autofocus: true,
    theme: "gruvbox-dark",
    mode: getModeTitle(mode.signature),
    placeholder: "// Code",
    matchBrackets: true,
    autoCloseBrackets: true,
    readOnly: _.get(props, "readOnly", false),
  };

  const editorProps = {
    value: _.get(props, "contents", ""),
    onBeforeChange: (editor: CodeMirror.Editor, data: CodeMirror.EditorChange, value: string) =>
      _.get(props, "setContents", () => {})(value),
    options,
  };

  return (
    <>
      <div className={`editor-content ${className}`}>
        <ReactCodeMirror {...editorProps} />
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreRootState) => ({
  mode: state.editor.editorData.mode,
  contents: state.editor.editorData.contents,
});

const mapDispatchToProps = {
  setContents,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
