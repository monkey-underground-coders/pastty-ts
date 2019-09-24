import React from "react"
import Page from "#/components/Page";

export const getRenderProperty = (title: string, Component: any) => (props: any) => {
  return (
    <Page title={title}>
      <Component {...props} />
    </Page>
  );
};
