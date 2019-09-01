import Application from "#/components/Application";
import Editor from "#/components/Editor";

export default [
  {
    path: "/",
    exact: true,
    component: Application,
  },
  {
    path: "/:alias",
    component: Editor,
  },
];
