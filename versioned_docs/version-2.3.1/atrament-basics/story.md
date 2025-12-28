---
sidebar_position: 3
---

# Story

## Appearance

### Scenes alignment

Atrament outputs scenes in the middle of the screen. You can change scene alignment with the `#scenes_align` global tag, setting it to `top`, `center`, or `bottom`.

```
# scenes_align: center
``` 


### Scene behavior

Atrament outputs all the paragraphs between choice blocks as one scene. If you need line-by-line output, add `#continue_maximally` global tag to your story and set it to `false`:

```
# continue_maximally: false
```

## History

Atrament shows a scrollable history of previous scenes. If you don't need it, you can disable it with the `#single_scene` global tag:

```
# single_scene
```

To clear scene history, you can use the `#CLEAR` knot tag. This is useful when the player enters a new location or conversation.

```c
=== house_scene
# CLEAR
You are standing in an open field west of a white house.
```

## Restart

To restart the game from the beginning, you can use `#RESTART` knot tag:

```c
=== game_over
Game over.
+ [Restart]
    #RESTART
    ->DONE
```

## Hypertext

In the hypertext mode, the choices are not displayed below the scene text. You can link specific portions of scene text to the choices.

To enable this mode for the whole game, use the `#hypertext` global tag. There is no way to turn it off later.

```c
# hypertext
```

However, you can enable hypertext for certain scenes only. Use `#HYPERTEXT` knot tag to enable it for a specific scene:

```c
=== house_scene
# HYPERTEXT

// links use the choice text as a reference
You are standing in an open field west of a white house, 
with a boarded [link=Open door]front door[/link]. 
There is a [link=Examine mailbox]small mailbox[/link] here.

+ [Examine mailbox] -> examine_mailbox
+ [Open door] -> inside_house
```

![Hypertext](/img/doc/hypertext.png)

If your entire game is in a hypertext mode, it is recommended to set the following global tags:
* `#single_scene` - disables scrollable history
* `#scenes_align: top` - aligns text to the top of the window
