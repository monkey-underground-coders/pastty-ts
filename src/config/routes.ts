import { Application, Editor } from "components";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Application
  },
  {
    path: "/:alias",
    component: Editor
  }
];
