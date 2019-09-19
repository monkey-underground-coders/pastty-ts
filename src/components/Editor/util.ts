export interface InternalModeOption {
  signature: string;
  value: string;
}

export const modes: Record<string, InternalModeOption> = {
  JavaScript: {
    signature: "javascript",
    value: "JavaScript",
  },
  "C++": {
    signature: "clike@text/x-c++src",
    value: "C++",
  },
  "C lang": {
    signature: "clike@text/x-csrc",
    value: "C lang",
  },
  Java: {
    signature: "clike@text/x-java",
    value: "Java",
  },
  "C Sharp": {
    signature: "clike@text/x-csharp",
    value: "C Sharp",
  },
  "Objective-C": {
    signature: "clike@text/x-objectivec",
    value: "Objective-C",
  },
  Scala: {
    signature: "clike@text/x-scala",
    value: "Scala",
  },
};

export const getModeTitle = (mode: string) => {
  const tokens = mode.split("@");
  return tokens.length > 1 ? tokens[1] : mode;
};
