---
sidebar_position: 1
---

# What is Atrament

Atrament is a modular tool to create text games or interactive fiction stories for the web and desktop. It uses [Ink](https://www.inklestudios.com/ink/) as a scripting language and JavaScript+CSS as a runtime and presentation layer.

Most of this documentation describes how to create games with Atrament Web UI.

Example of a game made with Atrament:

!["The Coiled Crown"](/img/doc/the-coiled-crown.png)


## Components

Atrament consists of several JS libraries and applications: Atrament Core, Atrament Web, Atrament Web UI, and Atrament Wizard.

The easiest way to create your own game with Atrament is to use Atrament Web UI - it provides a ready-to-use game engine with various features. However, experienced developers can use the Atrament Web library as a part of their web application, or Atrament Core if they want to create a NodeJS application or use their own set of libraries.


### Atrament Core

**Atrament Core** is a wrapper around [inkjs](https://github.com/y-lohse/inkjs), which implements basic features and can be used with any libraries. It manages game state, tag parsing, persistent state storage, and sound. [Source code](https://github.com/technix/atrament-core), [NPM package](https://www.npmjs.com/package/@atrament/core).

### Atrament Web

**Atrament Web** is a library for browsers which uses `nanostores` to manage story state, `localforage` to manage persistent storage, and `howlerjs` to manage sound. Can be used in any browser-based projects. [Source code](https://github.com/technix/atrament-web), [NPM package](https://www.npmjs.com/package/@atrament/web).

### Atrament Web UI

**Atrament Web UI** is a web application written in `preact` (React-like web framework), which can be used to create feature-rich games for both web and desktop:

* manages game sessions, saves, loads, and checkpoints;
* custom markup: blocks, tables, info boxes, headers, progress bars, click-to-continue, etc;
* additional interactive elements: buttons, inputs;
* extra screens like inventory, character stats, etc. can be created with overlays;
* multimedia support: images, background, sound, music, and video;
* story debugger: you can watch and edit variables, run Ink functions, etc;
* customizable themes, fonts, and CSS styles;
* export game as a web application (with PWA support), single HTML-file (Twine-like), or as an executable for desktop OS

[Source code](https://github.com/technix/atrament-web-ui), [feature showcase](https://technix.github.io/atrament-web-ui/).

### Atrament Wizard

**Atrament Wizard** is a command-line utility for Atrament projects, which can be run with `npx`:
```bash
npx atrament-wizard
```
[Source code](https://github.com/technix/atrament-wizard), [NPM package](https://www.npmjs.com/package/atrament-wizard).
