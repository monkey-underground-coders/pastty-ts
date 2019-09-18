export interface InternalModeOption {
  signature: string;
  value: string;
}

export const modes: Record<string, InternalModeOption> = {
  javascript: {
    signature: "javascript",
    value: "javascript",
  },
  cpp: {
    signature: "clike@text/x-c++src",
    value: "cpp",
  },
  c: {
    signature: "clike@text/x-csrc",
    value: "C",
  },
  java: {
    signature: "clike@text/x-java",
    value: "java",
  },
  "C#": {
    signature: "clike@text/x-csharp",
    value: "c#",
  },
  "Objective-C": {
    signature: "clike@text/x-objectivec",
    value: "objective-c",
  },
  Scala: {
    signature: "clike@text/x-scala",
    value: "scala",
  },
};

export const getModeTitle = (mode: string) => {
  const tokens = mode.split("@");
  return tokens.length > 1 ? tokens[1] : mode;
};
