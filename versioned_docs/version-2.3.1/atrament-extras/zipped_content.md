---
sidebar_position: 3
---

# Zipped game content
Atrament UI supports zipped game content, when the whole game is loaded into the browser as a single zip file. The advantage of this mode is instant asset loading at the cost of increased startup time. However, it makes sense only for the web application export mode.

To enable this feature, edit `atrament.config.json` and add `zip` option to it with the name of the zip file:
```
{
  ...
  "game": {
    "path": "game",
    "source": "gamefile.ink",
    "zip": "yourgame.zip"
  }
}
```
:::warning
This option is ignored for development and single-file builds.
:::
