let ProgrammingLanguage = [
  "python",
  "java",
  "c",
  "ruby",
  "perl",
  "r",
  "javascript",
  "css",
  "html",
  "php",
  "sql",
  "mysql",
  "cobol",
  "scala",
  "abap",
  "xml",
  "kotlin",
  "matlab",
  "typescript",
  "pascal"
];

function randomWord(){
  return ProgrammingLanguage[
    Math.floor(Math.random() * ProgrammingLanguage.length)
  ];
}

export {randomWord};