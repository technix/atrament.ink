---
sidebar_position: 4
---

# Atrament project structure

After generating a project as described in the [Quick Start](quickstart.md) section, you will have the following directory structure:

```
my-atrament-game/
├─ examples/
├─ resources/
│  ├─ externals/
│  ├─ fonts/
│  ├─ locales/
│  ├─ styles/
│  ├─ themes/
├─ src/
├─ root/
│  ├─ game/
│  ├─ logo.png
├─ atrament.config.json
```

:::info
The files and directories **not** mentioned in the diagram above (`node_modules`, `tools`, `vite`, etc.) are parts of the build environment. They should not be deleted or edited unless you know what you are doing.
:::

## Game files

The game files are located in the `root/game` folder. The file `story.ink` is the main Ink script. You can have multiple Ink files and use the `INCLUDE` statement in the `story.ink` to combine them into one.

Media files (images, sounds, music etc) should be placed in this folder. When you provide a path to them, it should be relative to the `root/game` folder:

```bash title="Directory structure"
├─ root/
│  ├─ game/
│  │  ├─ images/
│  │  │  ├─ intro.jpg
│  │  ├─ sounds/
│  │  │  ├─ thunder.mp3
│  │  ├─ story.ink
```

```c title="root/game/story.ink"
=== my_story
IMAGE: images/intro.jpg
PLAY_SOUND: sounds/thunder.mp3
```

The `logo.png` in the `root` folder is used to create icons for both web and desktop applications. Replace it with your own icon, if you want.

## Resources

The `resources` folder contains additional resources for the Atrament Web UI: fonts, language locales, CSS styles, color themes, and external functions.

| Folder | Description |
|---|---|
| `externals` | Contains external function definition files. See "[External functions](atrament-extras/extfunctions.md)". |
| `fonts` | Contains custom fonts. You can add your fonts here or remove existing ones. See "[Customization](atrament-extras/customization.md)". |
| `locales` | Contains translations of the Atrament UI. You can use `en.json` as a boilerplate to create a translation to your language. |
| `styles` | Contains `custom.css` file, where you can define custom CSS classes or override existing ones. See "[Customization](atrament-extras/customization.md)". |
| `themes` | Contains color themes for the application. See "[Customization](atrament-extras/customization.md)". |

## Configuration

The file `atrament.config.json` contains Atrament UI configuration: game title, default font and theme, language and locale, game file path, etc.

## Examples

The `examples` folder contains several Ink scripts as a reference. You may replace the `root/game` content folder with the contents of any of the example folders to run these examples in Atrament.

## Atrament engine code

The `src` folder contains the Atrament UI engine code. Usually, you do not need to modify it.
