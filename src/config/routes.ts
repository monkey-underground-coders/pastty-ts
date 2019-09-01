import React from "react"
import Page from "#/components/Page"
import Application from "#/components/Application";
import Editor from "#/components/Editor";

const getRenderProperty = (props: any) => (title: string, Component: any) => {
  return (<Page title={title}><Component {...props} /></Page>)
}

export default [
  {
    path: "/",
    exact: true,
    render: {(props: any) => (
      <Page title="Pastty"><Application {...props} /></Page>
    )}
  },
  {
    path: "/:alias",
    component: Editor,
  },
];
