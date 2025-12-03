---
sidebar_position: 1
---

# Quick Start

Let's create an Atrament project **in less than 5 minutes**.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 22.12 or above.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a project

Run this command to create a new Atrament project. You can type this command into Command Prompt, PowerShell, Terminal, or any other integrated terminal of your code editor.

```bash
npx atrament-wizard create my-atrament-game
```

The command will ask you some questions. Accept default values by pressing `Enter`; you can change them later.

The command also installs all the necessary dependencies you need to run Atrament.

## Run your game

Run the development server:

```bash
cd my-atrament-game
npm run start
```

The `cd` command changes the directory you're working with. To work with your newly created Atrament project, you'll need to navigate to the project directory in the terminal.

The `npm run start` command builds Atrament Web UI locally and serves it through a development server, ready for you to view at http://localhost:8900/.

## Edit your script

Open `root/game/story.ink` and edit some lines: the game **reloads automatically** and displays your changes.

## Publish your game

To publish your Atrament game as an HTML page (similar to Inky web export or Twine export), run this command in the terminal:

```bash
npm run build-singlefile
```

Your published game will be in the `build/singlefile` folder.