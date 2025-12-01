---
sidebar_position: 4
---

# Story *

## Story appearance

| Tag | Description                |
| :-------- | :------------------------- |
| `# continue_maximally: false` | Pause the story after each line. |
| `# single_scene` | Store only the last scene in the Atrament state. |
| `# scenes_align: center` | Scene alignment on the screen. Can be set to `top`, `center`, or `bottom`. |

## CLEAR

| Tag | Description                |
| :-------- | :------------------------- |
| `# CLEAR` | Clear scenes list before saving current scene to Atrament state. |

## Hypertext

| Tag | Description                |
| :-------- | :------------------------- |
| `# hypertext` | Use links instead of choices. |
| `# HYPERTEXT` | Use links instead of choices for this scene. |

If global tag `hypertext` is set, Atrament UI switches to hypertext mode. In this mode choice options are not displayed. However, author can use `[link=target choice text]link text[/link]` to link specific phrases to the choices.

For better user experience in hypertext mode authors can set global tags `single_scene` and `scenes_align: top`.

Author can enable hypertext for a chosen scene with `HYPERTEXT` scene tag.

```
# hypertext
# single_scene
# scenes_align: top

You are standing in an open field west of a white house, 
with a boarded [link=Open door]front door[/link]. 
There is a [link=Examine mailbox]small mailbox[/link] here.

+ [Examine mailbox] -> examine_mailbox
+ [Open door] -> inside_house
```
