import { Application, Editor } from "components";

export default [
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
