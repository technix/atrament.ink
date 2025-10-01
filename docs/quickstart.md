---
sidebar_position: 1
---

# Quick Start

Let's create an Atrament project **in less than 5 minutes**.

## Getting Started

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 22.12 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a project

```bash
npx atrament-wizard create my-atrament-game
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Atrament.

## Run your game

Run the development server:

```bash
cd my-atrament-game
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Atrament project, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `root/game/story.ink` and edit some lines: the game **reloads automatically** and displays your changes.
