import React from "react";
import CodeMirror from "codemirror";
import { Controlled as ReactCodeMirror } from "react-codemirror2";
import { getModeTitle, availableModes } from "./util";

import "codemirror/addon/hint/";

import "codemirror/addon/hint/show-hint";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/gruvbox-dark.css";

interface EditorOwnProps {}

const Editor = (props: EditorOwnProps) => {
  const [code, setCode] = React.useState("// Code");
  const [mode, setMode] = React.useState("javascript");

  const changeMode = (e: any) => {
    const mode = e.target.value;
    const tokens = mode.split("@");
    const modeSignature = tokens.length > 1 ? tokens[0] : mode;
    import(`codemirror/mode/${modeSignature}/${modeSignature}`).then(() => {
      setMode(mode);
    });
  };

  const createPaste = (e: any) => {
    const stringifiedContent = JSON.stringify(code);
  };

  const options = {
    lineNumbers: true,
    autoFocus: true,
    theme: "gruvbox-dark",
    mode: getModeTitle(mode),
  };

  return (
    <>
      <div>
        <select className="form-control" onChange={changeMode} value={mode}>
          {availableModes.map((mode: any, key: number) => (
            <option key={key} value={mode.signature}>
              {mode.value}
            </option>
          ))}
        </select>
      </div>
      <div className="editor-content">
        <ReactCodeMirror
          value={code}
          onBeforeChange={(editor: any, data: any, value: any) => setCode(value)}
          options={options}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={createPaste}>
          Send
        </button>
      </div>
    </>
  );
};

export default Editor;
