---
sidebar_position: 9
---

# Debugging

To enable the debugger, set the global tag `#debug` in your main Ink script:

```c title="story.ink"
# title: Your Story
# debug
```

The debugger window opens when you double-press the `~` key or click the debugger button on the screen.

![Debugger button](/img/doc/debugger-button.png)

## Sections

### Info

Displays story file name, story seed, turn index, and current story path.

### Global tags

Displays story global tags. Unknown tags are highlighted.

### Variables

Displays current values of Ink variables. You can filter variables by name.

To edit the variable, click on its value. Edit the value, then click `>` to save the variable, or `X` to cancel.

### Visits

Shows visited story paths and the count of visits.

### Functions

To run an Ink function, enter its name into the 'Run function' input, then enter its arguments into the 'Arguments' input, and click `>>>` to see the output.

Arguments should be JSON-formatted. For example, to run this function:
```c
=== function test_function(name, age)
   My name is {name}, and I am {age} years old.
```

input these values into form fields:

| Input | Value |
| :--- | :--- |
| Run function | `test_function` |
| Arguments | `[ "Peter Parker", 18 ]` |

### Navigation

Enter the path value into the "Go to path:" input and click the `>>>` button. The game will go to the path specified and continue from there.

You can see the valid path examples in the **Visits** sections. Knots are referenced by name: `knot_name`, stitches are referenced by knot and stitch name, separated with a dot: `knot_name.stitch_name`.
