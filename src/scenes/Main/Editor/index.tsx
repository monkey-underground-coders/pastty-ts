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

interface EditorOwnProps {
  mode: InternalModeOption;
  contents: string;
  className?: string;
  setContents?: any;
  noRightRound?: string;
  readOnly?: boolean;
}

const Editor = (props: EditorOwnProps) => {
  const { mode, contents, setContents, className, readOnly = false } = props;

  const options: CodeMirror.EditorConfiguration = {
    lineNumbers: true,
    autofocus: true,
    theme: "gruvbox-dark",
    mode: getModeTitle(mode.signature),
    placeholder: "// Code",
    matchBrackets: true,
    autoCloseBrackets: true,
    readOnly: readOnly,
  };

  return (
    <>
      <div className={`editor-content ${className}`}>
        <ReactCodeMirror
          value={contents}
          onBeforeChange={(
            editor: CodeMirror.Editor,
            data: CodeMirror.EditorChange,
            value: string,
          ) => setContents(value)}
          options={options}
        />
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
