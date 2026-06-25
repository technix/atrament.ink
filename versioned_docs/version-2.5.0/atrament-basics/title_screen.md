---
sidebar_position: 2
---

# Title screen

The title screen of the game displays the game title, the author's name, and the cover image.

It is defined by the following global tags:

```
# title: Game Title
# author: Author's name
# cover: images/game_cover.jpg
```

You can change the order of these items, or remove them completely, with the `#title_screen_layout` global tag:

```
# title_screen_layout: cover, title, author
```

Cover image size can be configured. To change the cover image width, add the desired width value as a second parameter of a `#cover` tag:

```
# cover: images/game_cover.jpg 30%
```
