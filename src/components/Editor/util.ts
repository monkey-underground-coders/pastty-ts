export interface InternalModeOption {
  signature: string;
  value: string;
}

export const modes: Record<string, InternalModeOption> = {
  JavaScript: {
    signature: "javascript",
    value: "JavaScript",
  },
  "JavaScript (JSX)": {
    signature: "jsx",
    value: "JavaScript (JSX)",
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
  CSS: {
    signature: "css",
    value: "CSS",
  },
  "CSS (SASS/SCSS)": {
    signature: "sass",
    value: "CSS (SASS/SCSS)",
  },
  CommonLisp: {
    signature: "commonlisp",
    value: "CommonLisp",
  },
  Groovy: {
    signature: "groovy",
    value: "Groovy",
  },
  Haskell: {
    signature: "haskell",
    value: "Haskell",
  },
  Elm: {
    signature: "elm",
    value: "Elm",
  },
  Erlang: {
    signature: "erlang",
    value: "Erlang",
  },
  "Go lang": {
    signature: "go",
    value: "Go lang",
  },
  "HTML/CSS/JS": {
    signature: "htmlmixed",
    value: "HTML/CSS/JS",
  },
  Nginx: {
    signature: "nginx",
    value: "Nginx",
  },
  PHP: {
    signature: "php",
    value: "PHP",
  },
  Pug: {
    signature: "pug",
    value: "Pug",
  },
  Perl: {
    signature: "perl",
    value: "Perl",
  },
  Python: {
    signature: "python",
    value: "Python",
  },
  Ruby: {
    signature: "ruby",
    value: "Ruby",
  },
  Rust: {
    signature: "rust",
    value: "Rust",
  },
  SQL: {
    signature: "sql",
    value: "SQL",
  },
  Swift: {
    signature: "swift",
    value: "Swift",
  },
  XML: {
    signature: "xml",
    value: "XML",
  },
  YAML: {
    signature: "yaml",
    value: "YAML",
  },
};

export const getModeTitle = (mode: string) => {
  const tokens = mode.split("@");
  return tokens.length > 1 ? tokens[1] : mode;
};
