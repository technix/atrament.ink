---
sidebar_position: 7
---

# Interface

Atrament has several customizable UI elements:
- toolbar above the text
- overlay
- "About" screen in the main menu

## Toolbar

By default, toolbar contains the title of your game. To customize the toolbar, add `#toolbar` global tag to your main Ink story and set it to function which will generate toolbar content:

```c
# toolbar: player_toolbar
VAR health = 100
VAR strength = 5

=== function player_toolbar()
    Health: {health} | Strength: {strength}
```

The toolbar content refreshes:
- when player makes a choice
- after calling other Ink functions

Toolbar can contain buttons and other active content.

## Overlay

Atrament can display custom data (inventory, character stats etc.) as an overlay.

First, you need to define an overlay function, which has to generate text content. Then, assign it to the `[button]` tag. If the first line of the function is a `[title]Overlay Title[/title]` tag, this title will be displayed in the toolbar.

Example of the toolbar with overlays:
```
# toolbar: game_toolbar

=== function game_toolbar()
  [button onclick=inventory]Inventory[/button]
  [button onclick=stats]Stats[/button]

=== function inventory()
  [title]Inventory[/title]
  You are carrying:
  ...

=== function stats()
  [title]Character: {character_name}[/title]
  Health: {health}
  ...
```

The overlay content can have buttons and other active content. If function, assigned to button, has text output, it will be displayed as a new overlay. Otherwise, current overlay content will be refreshed.

The overlay can be displayed as a modal window instead of a fullscreen. To do so, add `display=modal` attribute to the button:
```
[button onclick=inventory display=modal]Inventory[/button]
```

## "About" screen

You can add an "About" screen to the game with the `#about` global tag. When it is present, UI shows "About" button on the main game page. Clicking it will display content from the function defined in the `#about` tag:
```
# about: game_about

=== function game_about()
  [banner]Game Title[/banner]
  "About" screen content
  ...
```
