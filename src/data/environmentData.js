export const environmentData = {
  file1: {
    filename: "setting.json",
    code: `
{
  "editor.formatOnSave": true,
    "[javascript]": {
      "editor.formatOnSave": true
  },
  "emmet.includeLanguages": {
    "ejs": "html",
    },
  "files.associations": {
    "*.ejs": "html"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}`,
    language: "language-json",
  },
  // 他のデータを追加できます
};
