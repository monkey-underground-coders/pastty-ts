import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { fetchPaste } from "#/store/actions/editor";

interface PasteProps extends RouteComponentProps<{ alias: string }> {}

const Paste = (props: PasteProps) => {
  const { alias } = props.match.params;

  return <div></div>;
};

export default Paste;
