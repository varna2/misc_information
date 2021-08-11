https://github.com/oleg-shilo/codemap.vscode

rules for .vue files (settings.json):

  "codemap.vue": [
    {
      "pattern": "<script>",
      "clear": "<|>",
      "icon": "document"
    },
    {
      "pattern": "components:",
      "clear": ":",
      "icon": "interface"
    },
    {
      "pattern": "props:",
      "clear": ":",
      "icon": "interface"
    },
    {
      "pattern": "data:",
      "clear": ":",
      "icon": "interface"
    },
    {
      "pattern": "computed:",
      "clear": ":",
      "icon": "interface"
    },
    {
      "pattern": "methods:",
      "clear": ":",
      "icon": "interface"
    },
    {
      "pattern": "^\\s{4}(\\w{3,})",
      "clear": "",
      "icon": "level2"
    },
    {
      "pattern": "<style",
      "clear": "<",
      "icon": "document"
    }
  ]
