---
sidebar_position: 4
---

# Choices

## Appearance

To change the choice appearance, use the `#choices` global tag with a combination of attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `grouped` | Display choices as a button group. |
| `numbered` | Prepend a choice text with a number. |
| `left` | Align choice text to the left. |
| `right` | Align choice text to the right. |
| `row` | Show all choices in a single row. |

```
# choices: grouped numbered left
```

## Shuffled choices

You can display choices in random order with the `#SHUFFLE_CHOICES` knot tag; this can be useful for puzzles. The tag is applied to the choices immediately after the current scene.

```c
=== guess_the_color
# SHUFFLE_CHOICES
What is the color of the grass and leaves?
+ [Red] -> wrong_choice
+ [Orange] -> wrong_choice
+ [Yellow] -> wrong_choice
+ [Green] -> right_choice
+ [Blue] -> wrong_choice
+ [Purple] -> wrong_choice
```

## Prompt

You can display a choice prompt before the choices, using the `#PROMPT` knot tag. The tag is applied to the choices immediately after the current scene.

```c
=== combat
// this text will be shown above the choices
# PROMPT: Choose your action:
Your enemy is waiting.
+ [Attack] -> combat_attack
+ [Defend] -> combat_defend
+ [Evade] -> combat_evade
```

## Disabled choices

Instead of hiding a choice based on a condition, you can make it unclickable with the `#UNCLICKABLE` choice tag (alternate syntax: `#DISABLED`, `#INACTIVE`). The choice will be displayed as disabled, and users will not be able to choose it.

```c
VAR weapon = "sword"
-> story
=== story
{weapon == "sword":You are holding a sword|You are unarmed}.
// The choices are enabled depending on the value
// of the "weapon" variable
+ [Attack with the sword #{weapon == "":UNCLICKABLE}]
    You are swinging your sword.
    -> story
+ [Draw the sword #{weapon == "sword":UNCLICKABLE}]
    ~ weapon = "sword"
    -> story
+ [Hide your weapon #{weapon == "":UNCLICKABLE}]
    ~ weapon = ""
    -> story
+ [Return to map #UNCLICKABLE] // this one is always disabled
    -> story
```

## Click to continue

A single choice with text `>>>` is treated as "click to continue". The choice list is not shown, and the player can continue the story by clicking the screen or pressing the "Space" or "Enter" key. After 3 seconds of inactivity, an animated hint is displayed at the bottom of the screen.

```
This story will proceed when the user clicks the screen.
+ [>>>] -> next_knot
```

You can also provide a delay in **seconds** for the "click to continue". A timed choice is presented as a slightly different circular button. After the delay, the story continues automatically.
```
This story will proceed either after the user clicks the screen or after 3 seconds.
+ [>>>3] -> next_knot
```

Click-to-continue choice can be configured:
* `clickable` - pause before the choice becomes clickable, and the player can continue the story. If omitted, the player can click and continue the story immediately.
* `animation` - pause before displaying animation. If omitted, the animation displays immediately.
* `continue` - pause before the story continues automatically. If omitted, the game continues only after a click or keypress.

All pauses are set in seconds.
```
+ [>>>(clickable=3 animation=5 continue=10)] -> next_knot
```
