---
sidebar_position: 10
---


# Publishing

Atrament project can be published as a single HTML file, a progressive web application, or as a standalone executable for desktop.

## Single file

To export a game as a single HTML file (similar to Inky web export or Twine export), run this command in the terminal:

```bash
npm run build-singlefile
```

The resulting web page files will be in the `build/singlefile` folder.

:::tip
Single file build uses only system fonts to reduce output file size. If you want to include all fonts from the `resources/fonts` folder, use `npm run build-singlefile -- -- --embed-fonts` command to build the game.
:::


## Web application

To export a game as a [progressive web application](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), run this command in the terminal:

```bash
npm run build-web
```

The resulting web application files will be in `build/web` folder. 

To preview your application, run this command in the terminal:
```bash
npm run preview
``` 
The app will be available at http://localhost:4173/.

## Desktop executables

:::info
Atrament uses [NeutralinoJS](https://neutralino.js.org/) to create executables for desktop OSes.
:::


To build standalone executables for Windows, Linux, and MacOS, run this command in the terminal:

```
npm run build-standalone
```

:::warning
On first run, this command downloads NeutralinoJS build toolchain, so internet connection is required.
:::


Executable files for all platforms will be in the `build/standalone` folder. The build also creates ZIP archives for each platform.



