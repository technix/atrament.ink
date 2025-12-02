---
sidebar_position: 4
---

# Choices *

## Choices appearance

| Tag | Description                |
| :-------- | :------------------------- |
| `# choices: grouped numbered` | Changes the choices appearance. Can be set to any combination of: `grouped` (displayed as button group); `numbered` (displays numbers of choices); `left` or `right` (aligns choice text to the left or right); `row` (show choices in a single row instead of a column) |

| Tag | Description                |
| :-------- | :------------------------- |
| `# SHUFFLE_CHOICES` | Shuffle choice order in this knot. |
| `# PROMPT: What would you like to do?` | Display prompt text before the choices. |


### Choice tags
| Tag | Description                |
| :-------- | :------------------------- |
| `# UNCLICKABLE` | The choice can't be selected. Alternative names: `#DISABLED`, `#INACTIVE` |
| `# CLASS: classname` | Apply CSS class to the choice `<button>` element. |

* Choice appearance: #choices
* #SHUFFLE_CHOICES
* #PROMPT
* #UNCLICKABLE/#DISABLED/#INACTIVE
* Click to continue
  * Standard
  * Configurable


## Click to continue

A single choice with text '>>>' is treated as "click to continue". Choice list is not shown, and player can continue story by clicking the screen or pressing "Space" or "Enter" key. After 3 seconds of inactivity, animated hint is displayed in the bottom of the screen.

```
This story will proceed when user clicks screen.
+ [>>>] -> next_knot
```

You can also provide a delay in **seconds** for the "click to continue". A timed choice is presented as a slightly different circular button. After the delay, story continues automatically.
```
This story will proceed either after user clicks screen or after 3 seconds.
+ [>>>3] -> next_knot
```

Click-to-continue choice can be configured:
* `clickable` - pause before the choice becomes clickable and player can continue the story. If omitted, player can click and continue story immediately.
* `animation` - pause before displaying animation. If omitted, the animation displays immediately.
* `continue` - pause before story continues automatically. If omitted, the game continues only after click or keypress.

All pauses are set in seconds.
```
+ [>>>(clickable=3 animation=5 continue=10)] -> next_knot
```
