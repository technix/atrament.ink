---
sidebar_position: 7
---

# Interface *

Toolbar and About menu

## Toolbar

| Tag | Description                |
| :-------- | :------------------------- |
| `# toolbar: toolbar_function` | Use output of this function as a toolbar content. |


## Overlays


Atrament UI can display custom data (inventory, character stats etc.) as an overlay. 

To display an overlay, authors need to define a button with the `[button]` tag, which calls an Ink function. If the function returns text content, it will be displayed as an overlay. The overlay content can have buttons too.

If the first line of the function is a `[title]Overlay Title[/title]` tag, this title will be displayed in the toolbar.

Example of the toolbar and overlays:
```
# toolbar: game_toolbar

...

=== function game_toolbar()
  [button=inventory]Inventory[/button]
  [button=stats]Stats[/button]

=== function inventory()
  [title]Inventory[/title]
  You are carrying:
  ...

=== function stats()
  [title]Character: {character_name}[/title]
  Health: {health}
  ...

```


## "About" screen

| Tag | Description                |
| :-------- | :------------------------- |
| `# about: about_function` | Use output of this function as an "About" screen content. |


Author can add an "About" screen to the game with the `#about` global tag. When it is set, UI shows "About" button on the main game page. Clicking it will display content from the function in the Ink file - see example:
```
# about: game_about

...

=== function game_about()
  <h1>Game Title</h1>
  "About" screen content
  ...

```