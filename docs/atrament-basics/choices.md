---
sidebar_position: 4
---

# Choices

## Appearance

To change the choice appearance, use `#choices` global tag with a combination of attributes:

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

You can display choices in random order with `#SHUFFLE_CHOICES` knot tag, this can be useful for puzzles. The tag is applied to the choices immediately after current scene.

```c
=== guess_the_color
# SHUFFLE_CHOICES
What is the color of grass and leaves?
+ [Red] -> wrong_choice
+ [Orange] -> wrong_choice
+ [Yellow] -> wrong_choice
+ [Green] -> right_choice
+ [Blue] -> wrong_choice
+ [Purple] -> wrong_choice
```

## Prompt

You can display choice prompt before the choices, using `#PROMPT` knot tag. The tag is applied to the choices immediately after current scene.

```c
=== combat
// this text will be shown above choices
# PROMPT: Choose your action:
Your enemy is waiting.
+ [Attack] -> combat_attack
+ [Defend] -> combat_defend
+ [Evade] -> combat_evade
```

## Disabled choices

Instead of hiding choice based on condition, you can make it unclickable with `#UNCLICKABLE` choice tag (alternate syntax: `#DISABLED`, `#INACTIVE`). The choice will be displayed as disabled, and users will not be able to choose it.

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

A single choice with text `>>>` is treated as "click to continue". Choice list is not shown, and player can continue story by clicking the screen or pressing "Space" or "Enter" key. After 3 seconds of inactivity, animated hint is displayed in the bottom of the screen.

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
