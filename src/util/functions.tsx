import React from "react";
import Page from "#/components/Page";

export const getRenderProperty = (title: string, Component: any) => (props: any) => {
  return (
    <Page title={title}>
      <Component {...props} />
    </Page>
  );
};

export const formatDateTime = (date: Date | string) => {
  if (date === null || date === undefined) return date;

  return new Date(date).toLocaleString("ru", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    hour: "numeric",
    minute: "numeric",
  });
};
