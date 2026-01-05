---
sidebar_position: 3
---

# Introduction to Ink

Ink is a scripting language designed for interactive scripts. It provides a text flow with choices and rich features for dynamic text generation.

Atrament uses Ink to describe the game flow and control the story presentation.

## Text and choices

```c
// this is a comment
This is a paragraph of text.
* Choice 1
    // choices with * will disappear when we visit this paragraph again
    You have selected choice 1.
+ Choice 2
    // choices with + are always available
    You have selected choice 2.
- // this is a "gather" - text flow continues here
Story continues.

// The glue symbol, "<>", combines a multiline string into a single one
This text
<> is displayed
<> as a single line.

// this marks the end of the story
-> END
```

By default, Ink displays the text of the chosen choice as a part of the next paragraph. To avoid this, use this syntax:
```
+ [Choice 1]
```

## Knots and stitches

**Knots** are named sections of your script - you can reference them in your diverts and conditions. **Stitches** are named sections inside of knots - you can reference them by name within the knot, but need to use the full name when referencing them from outside the knot.

```c
// This is a divert to a knot - normal Ink flow does not enter the knots.
-> knot_1

=== knot_1
Text content of the first knot.
+ [Choice 1] -> stitch_1
+ [Choice 2] -> stitch_2

= stitch_1
The first choice was selected.
-> knot_2.stitch_2 // redirect to a specific stitch in another knot

= stitch_2
The second choice was selected.
-> knot_2 // redirect to a knot

=== knot_2
Text content of the second knot.
-> stitch_1 // divert to a stitch inside of this knot

= stitch_1
First stitch of the second knot.
-> END

= stitch_2
Second stitch of the second knot.
-> END
```

## Variables and constants

```c
// define a global variable
VAR city_name = "Kyiv"

// display variable content
Welcome to {city_name}!

// change variable content
~ city_name = "London"

// define a temporary variable: it exists only inside the knot/stitch and is cleared after leaving
=== city_kyiv
~ temp main_street = "Khreshchatyk"
You are on the {main_street} street.
```

Constants are the same as variables, but their value can't be changed.

```c
// define a constant
CONST GOLD_COIN_VALUE = 100

// use a constant in the game
This sword costs {5 * GOLD_COIN_VALUE} coins.
```

## Mathematics

Ink supports the four basic mathematical operations (`+`, `-`, `*`, and `/`), as well as `%` (or `mod`), which returns the remainder after integer division. 

There are also several mathematical functions:

| Function | Description |
| :------- | :---------- |
| `RANDOM(min, max)` | Random number between min and max (both are inclusive). `RANDOM(1,6)` returns an integer between 1 and 6. |
| `POW(x, y)` | `x` power of `y`. `POW(3,2)` will be 9. |
| `INT(x)` | Round to nearest integer. `INT(4.12)` will be 4. |
| `FLOOR(x)` | Round to largest integer. `FLOOR(4.12)` will be 5. |


## Conditions

You may use conditions to change text and show/hide choices. Conditions can involve variables and knot or stitch names (they are boolean variables that are set to `true` after visiting them).

### Conditional text

```c
// show a text if the "know_real_name" is true
{know_real_name:I know his real name.}

// display different if "know_real_name" is true or false
His real name is {know_real_name:Peter Parker|a secret}.

// use complex condition depending on the "hero" variable value
This hero name {
    - hero == "Spider Man":
        <>is Peter Parker
    - hero == "Iron Man":
        <>is Tony Stark
    - else:
        <>remains unknown
}<>.
```

### Conditional choices

To show or hide choices, you can put a condition before the choice text:

```c
VAR weapon = "sword"
-> story
=== story
{
    - weapon == "sword":
        You are holding a sword.
    - weapon == "rifle":
        You are holding a rifle.
    - else:
        You are unarmed.
}
// The choices are displayed depending on the value
// of the "weapon" variable
+ {weapon == "sword"} [Attack with the sword]
    You are swinging your sword.
    -> story
+ {weapon == "rifle"} [Shoot with the rifle]
    You are shooting with your rifle.
    -> story
+ {weapon != "sword"} [Take the sword]
    ~ weapon = "sword"
    -> story
+ {weapon != "rifle"} [Take the rifle]
    ~ weapon = "rifle"
    -> story
+ {weapon} [Hide the weapon] // show this choice if "weapon" is not empty
    ~ weapon = ""
    -> story
```

Knot and stitch names are boolean variables that are set to `true` after visiting them, so you can use:

```c
* { not visit_kyiv } [Visit Kyiv] -> visit_kyiv
+ { visit_kyiv }     [Return to Kyiv] -> visit_kyiv

=== visit_kyiv
...
```

You may use complex conditions with AND (`&&`, `and`) and OR (`||`, `or`):

```c
* { not (visit_kyiv or visit_rome) && (visit_london || visit_new_york) } [ Travel somewhere ] -> visit_someplace
```

## Functions

Functions are basically named knots with special syntax. They can take arguments, return values, and display text.

```c
VAR coins = 0
-> story

=== function coins_change(amount)
  // this function changes the value
  ~ coins = coins + amount

=== function show_coins()
   // this function displays text
   You have {coins} coins.

=== function buy_a_sword()
    // this function returns text which you can later use
    { coins < 5:
        ~ return "Unfortunately, you can not afford a sword"
    - else:
        ~ coins = coins - 5
        ~ return "You have purchased a sword"
    }

=== story
// show_coins function displays text, so when
// the function is called, the text will be shown
~ show_coins()
Make your choice:
+ [Gain 1 coin]
    You get 1 coin.
    ~ coins_change(1) // change the "coins" variable value
    -> story
+ {coins > 0} [Spend 1 coin]
    You spent 1 coin.
    ~ coins_change(-1) // change the "coins" variable value
    -> story
+ [Buy a sword (5 coins)]
    // buy_a_sword function returns a value, so we assign it
    // to a variable and use later in the story
    ~ temp output = buy_a_sword() 
    You visit a local blacksmith. {output}.
    -> story
```


## Tags

Tags in Ink can provide instructions to an outer application.

```c title="story.ink"
// global tags are defined at the very beginning
// of the main ink file
# title: My story
# author: John Doe
VAR current_music = "silence"

-> main
=== main
// paragraph tag is applied to the next paragraph
# IMAGE: illustration.jpg
This is where the story begins.

// tags can have dynamic content:
~ current_music = "story1"
# MUSIC: {current_music}.mp3
What will be your choice?

+ Complete this story #UNCLICKABLE // choice tag, applied to both choice and content after it
    End of story.
    -> END
+ [Choice 1 #UNCLICKABLE] // choice tag, applied to choice only
    End of story 1.
    -> END
+ [Choice 2 #{has_rifle:UNCLICKABLE}] // conditional choice tag, appears only if "has_rifle" is true
    End of story 2.
    -> END
+ [Choice 3]
    # IMAGE: paragraph3.jpg // paragraph tag, applied to text content after the choice
    End of story 3.
    -> END
```

## Multiple Ink files

If your story becomes too big, you can split it into multiple files. One of them becomes the main story file and has to contain `INCLUDE` statements. When Ink script is compiled, these `INCLUDE` statements are replaced with the content of the included files.

:::warning
The INCLUDE statements must be at the very top of the file, immediately after global tags.
:::

```c title="story.ink"
// this is the main story file
# title: My story
# author: John Doe
INCLUDE story1.ink
INCLUDE story2.ink

-> main
=== main
The story starts here.
+ [Choice 1] -> story_knot_1
+ [Choice 2] -> story_knot_2

=== story_end
The story is over.
-> END
```

```c title="story1.ink"
=== story_knot_1
Text content of the first knot.
+ [OK] -> story_end
```

```c title="story2.ink"
=== story_knot_2
Text content of the second knot.
+ [OK] -> story_end
```

## Advanced topics

Ink has many more features: conditional content, threads, lists, etc. Refer to official Ink documentation, "[Writing with Ink](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md)", on their syntax and usage.

## More documentation

* [Writing web-based interactive fiction with Ink](https://www.inklestudios.com/ink/web-tutorial/) - brief tutorial on Ink basics
* [Writing with Ink](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md) - full tutorial on Ink language
* [Running your Ink](https://github.com/inkle/ink/blob/master/Documentation/RunningYourInk.md) - Ink integration with the game engine. Also covers tag syntax.


