import React from "react";
import Page from "#/components/Page";
import Paste from "#/components/Paste";
import Editor from "#/components/Editor";

const getRenderProperty = (title: string, Component: any) => (props: any) => {
  return (
    <Page title={title}>
      <Component {...props} />
    </Page>
  );
};

export default [
  {
    path: "/",
    exact: true,
    render: getRenderProperty("Pastty", Editor),
  },
  {
    path: "/:alias",
    render: getRenderProperty("Paste", Paste),
  },
];
