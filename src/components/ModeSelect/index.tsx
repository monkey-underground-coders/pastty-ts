import React from "react";
import { modes, InternalModeOption } from "../Editor/util";
import { changeMode } from "#/store/actions/editor";
import { StoreRootState, ReactSelectEvent } from "#/store/types";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

interface ModeSelectProps {
  changeMode: any;
  mode: InternalModeOption;
}

const transformedModes = Object.values(modes).map((mode: InternalModeOption) => mode);

const ModeSelect = (props: ModeSelectProps) => {
  const { mode } = props;
  const changeMode = (evt: ReactSelectEvent) => {
    const mode = evt.target.value;
    const tokens = mode.split("@");
    const modeSignature = tokens.length > 1 ? tokens[0] : mode;
    const nextMode = transformedModes.find(
      (mode: InternalModeOption) => mode.signature === evt.target.value,
    );
    import(`codemirror/mode/${modeSignature}/${modeSignature}`).then(() => {
      props.changeMode(nextMode);
    });
  };

  const renderedModes = Object.values(modes).map((mode: InternalModeOption, key: number) => (
    <option key={key} value={mode.signature}>
      {mode.value}
    </option>
  ));

  return (
    <div>
      <select className="form-control" onChange={changeMode} value={mode.signature}>
        {renderedModes}
      </select>
    </div>
  );
};

const mapStateToProps = (state: StoreRootState) => ({
  mode: state.editor.editorData.mode,
});
const mapDispatchToProps = { changeMode };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModeSelect);
