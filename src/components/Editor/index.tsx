import React from "react";
import { connect } from "react-redux";
import CodeMirror from "codemirror";
import { Controlled as ReactCodeMirror } from "react-codemirror2";
import { getModeTitle, modes, InternalModeOption } from "./util";
import { ReactSelectEvent, ReactButtonEvent, StoreRootState } from "#/store/types";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/gruvbox-dark.css";

interface EditorOwnProps {
  mode: InternalModeOption;
}

const Editor = (props: EditorOwnProps) => {
  const { mode } = props;
  const [code, setCode] = React.useState("// Code");

  const createPaste = (e: ReactButtonEvent) => {
    const stringifiedContent = JSON.stringify(code);
    console.log(stringifiedContent);
  };

  const options = {
    lineNumbers: true,
    autoFocus: true,
    theme: "gruvbox-dark",
    mode: getModeTitle(mode.signature),
  };

  return (
    <>
      <div className="editor-content">
        <ReactCodeMirror
          value={code}
          onBeforeChange={(
            editor: CodeMirror.Editor,
            data: CodeMirror.EditorChange,
            value: string,
          ) => setCode(value)}
          options={options}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={createPaste}>
          Save Code
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreRootState) => ({
  mode: state.editor.editorData.mode,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
