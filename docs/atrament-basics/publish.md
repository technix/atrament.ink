---
sidebar_position: 10
---


# Publishing


### Web application
Default Atrament UI build is a progressive web application for web server deployment.
```
npm run build-web
```
The standalone web application files will be in `build/web` folder. Use `npm run preview` command to test it in browser at http://localhost:4173/.


### Single file build
```
npm run build-singlefile
```
The game can be exported to a standalone web page, which can be opened locally - similar to Inky or Twine web export.

To export game in a single file format, run `npm run build-singlefile` command. The resulting web page files will be in the `build/singlefile` folder.

*Please note: single file build uses only system fonts to reduce file size. If you want to include all fonts from the `resources/fonts` folder, use `npm run build-singlefile -- -- --embed-fonts` command to build the game.*

### Standalone executables build
```
npm run build-standalone
```
To build standalone executables for Windows, Linux, and MacOS, use `npm run build-standalone` command. The folder with executables for all platforms will be in the `build/standalone` folder. The build also creates ZIP archives for each platform.

### Zipped game content
Atrament UI supports zipped game content, when whole game is loaded into browser as a single zip file. The advantage of this mode is instant asset loading at the cost of increased startup time. However, it makes sense only for default web export mode.

To enable this feature, edit `atrament.config.json` and add `zip` option to it with the name of zip file:
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
*Please note: this option is ignored for development and single file builds.*

### Publishing Atrament games from Inky
You can create a single file Atrament games written with Inky, without setting up an Atrament project. Run this command in the project folder with Ink files to create a single file build:
```
npx atrament-wizard publish
```
