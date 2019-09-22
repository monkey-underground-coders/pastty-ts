import React from "react";
import { connect } from "react-redux";
import CodeMirror from "codemirror";
import { Controlled as ReactCodeMirror } from "react-codemirror2";
import { getModeTitle, modes, InternalModeOption } from "./util";
import { ReactSelectEvent, ReactButtonEvent, StoreRootState } from "#/store/types";
import { setContents } from "#/store/actions/editor";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/gruvbox-dark.css";

interface EditorOwnProps {
  contents: string;
  setContents: any;
  mode: InternalModeOption;
  className?: string;
  noRightRound?: string;
}

const Editor = (props: EditorOwnProps) => {
  const { mode, contents, setContents, className } = props;

  const options = {
    lineNumbers: true,
    autoFocus: true,
    theme: "gruvbox-dark",
    mode: getModeTitle(mode.signature),
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
