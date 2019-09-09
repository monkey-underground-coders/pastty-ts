import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { getModeTitle, availableModes } from "./util";
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

  const options = {
    lineNumbers: true,
    autoFocus: true,
    theme: "gruvbox-dark",
    mode: getModeTitle(mode),
  };

  return (
    <>
      <div>
        <select onChange={changeMode} value={mode}>
          {availableModes.map((mode: any, key: number) => (
            <option key={key} value={mode.signature}>
              {mode.value}
            </option>
          ))}
        </select>
      </div>
      <div className="editor-content">
        <CodeMirror
          value={code}
          onBeforeChange={(editor: any, data: any, value: any) => setCode(value)}
          options={options}
        />
      </div>
    </>
  );
};

export default Editor;
