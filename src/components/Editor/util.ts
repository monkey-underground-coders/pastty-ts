export const availableModes = [
  {
    signature: "javascript",
    value: "javascript",
  },
  {
    signature: "clike@text/x-c++src",
    value: "cpp",
  },
  {
    signature: "clike@text/x-csrc",
    value: "C",
  },
  {
    signature: "clike@text/x-java",
    value: "java",
  },
  {
    signature: "clike@text/x-csharp",
    value: "c#",
  },
  {
    signature: "clike@text/x-objectivec",
    value: "objective-c",
  },
  {
    signature: "clike@text/x-scala",
    value: "scala",
  },
];

export const getModeTitle = (mode: string) => {
  const tokens = mode.split("@");
  return tokens.length > 1 ? tokens[1] : mode;
};
