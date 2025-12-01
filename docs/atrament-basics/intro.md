---
sidebar_position: 1
---

# General information

## Tags and markup

Atrament enhances Ink scripts with two features: tag handling and additional markup.

### Tags

There are [three types of tags](ink-scripting.md#tags):

- **Global** tags are set at the very beginning of main Ink file. They contain game information (title, author, cover etc.) and global game settings (theme, font, saves etc.)
- **Paragraph** tags are used to place images and sounds, control the game flow (save/restart), add custom styles, and so on.
- **Choice** tags are used to disable choices and add custom styles.

Ink tags support dynamic content and can be conditional:
```
VAR weather="sunny"
# PLAY_MUSIC: music/forest_{weather}.mp3 // will play "forest_sunny.mp3"

// this choice will have tag "UNCLICKABLE" only if "weather" variable is set to "sunny"
+ [Look at the clouds #{weather=="sunny":UNCLICKABLE}] 
```

### Markup

Atrament uses BBCode-style markup to modify the text and add interactive elements to Ink text output:

```
=== intro
[banner]Welcome![/banner]
The game is about to begin now.
[info side=highlight]Check your inventory before continuing.[/info]
```


## Scene

A "scene" in Atrament is all the content between choices. It can have multiple paragraphs of text.

By default, the scene content is displayed all at once. This behavior is controlled by `continue_maximally` global tag. 

Scenes are displayed in the continuous way, creating a scrollable text. Authors can clear the scenes list, if needed.

For more details see the [Story](story.md) section.

## Keyboard shortcuts

| Key | Description |
| :--- | :--- |
| 1,2,3... | Select corresponding choice option. |
| Space, Enter | Continue story. |
| Esc | Show/hide settings dialog. |
| ~ | (quickly press twice) Open debugger, if enabled. |

