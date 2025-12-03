---
sidebar_position: 5
---

# Markup

Atrament uses BBCode-style markup tags to modify the text and add interactive elements to Ink text output.

:::warning
Markup tags work only within s single line of text. Use `<br>` HTML tag for line breaks if you need multiline text inside of markup tags.
```c
[block width=50%]This is a first line of text.<br>This is a second line.[/block]
```
:::

:::tip
You may use a glue operator `<>` to make your markup more readable. It allows you to write your markup in multiple lines - they will be combined into one line when Ink script is processed.
```c
[block width=50%]<>
  This is a first line of text.<br><>
  This is a second line.<>
[/block]
```
:::

## Layout


### Blocks

You can use `[block]` markup tag to change text appearance. Blocks can have specified width and text alignment. Several blocks in a row are displayed as one row, so you can create multi-column layout.

```c
// example of a two-column layout
[block width=50%]This is a first block of content.[/block]<>
[block width=50% align=right]Another block of content.[/block]
```

| Attribute | Description                |
| :-------- | :------------------------- |
| `width` | Block width. Can be defined in percents (strongly recommended) or other CSS units. |
| `align` | Horizontal text alignment in the block. Can be set to  `left`, `center`, or `right`. |
| `valign` | Vertical text alignment in the block. Can be set to `top`, `middle`, or `bottom`. |

### Tables

Tables can be created with these markup tags:

```c
[table]<>
  [header]Header 1[ ]Header 2[ ]Header 3[/header]<>
  [row]Cell 1[ ]Cell 2[ ]Cell 3[/row]<>
  [row]Cell 4[ ]Cell 5[ ]Cell 6[/row]<>
[/table]
```

:::warning
Please note glue operator `<>` at the end of each table line - this is required to render the table properly.
:::

The table consists of header `[header][/header]` (optional) and rows `[row][/row]`. The `[ ]` tag is a cell separator.

The `[table]` markup tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `border=false` | Disable table borders. |
| `padding=false` | Disable table cell paddings. Useful if you want to combine images with a table. |
| `columns="20% 20% 60%"` | Set column width. You have to set width for each column in the table. |
| `fixed=true` | Force text wrapping in the cells, so columns always have fixed width. |


## Presentation

### Banner

To display text as a banner block, use `[banner]` markup tag:

```c
[banner]You win![/banner]
```

The `[banner]` tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `style=accent` | Use accent color for text. |
| `allcaps=true` | Display text in all capitals. |

### Info

To display text as an information block, use `[info]` markup tag:

```c
[info]You have found a sword.[/info]
```

The `[info]` tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `font=system` | Use system font. Useful for gameplay tips. |
| `side=highlight` | Add color to the left side of the info box. Can be set to `highlight` or `accent`. | 

### Spoiler

For hidden text use `[spoiler]` markup tag:

```c
To defeat a dragon, you need to [spoiler]fight it with your bare hands.[/spoiler]
```

When user clicks on a spoiler text, it will be displayed. Second click hides it again.


### Highlight

To highlight specific text, use `[highlight]` markup tag. Text is highlighted with accent color.

```c
There is a [highlight]treasure[/highlight] hidden in this cave. 
```

The `[highlight]` tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `color=black` | Sets text color. |
| `bgcolor=yellow` | Sets background color. | 

:::tip
To use hex color codes, you need to escape the `#` symbols:
```c
There is a [highlight color=\#990000 bgcolor=\#EEEEEE]treasure[/highlight] hidden in this cave. 
```
:::


### Progress bar

You can show progress bar with a `[progress]` markup teg:

```c
[progress value=10]Fuel[/progress]
```

By default, progress bar uses 0-100 scale.

The `[progress]` tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `value=10` | Current progress value. |
| `min=0` | Minimal progress bar value. |
| `max=100` | Maximal progress bar value. |
| `style=accent` | Highlight progress bar with accent color. |

## Links

### Choice link

The `[link]` markup tag allows you to create links to choices. This is mostly used for [hypertext](atrament-basics/story.md#hypertext) mode.

```
=== continue_story
[link=Continue game]Click here to continue[/link]

+ [Continue game]
    -> continue_knot
```

### URL

To create an external link, use `[url]` markup tag:

```
Visit [url=http:\/\/atrament.ink/]Atrament[/url] web site.
```

:::warning
Because `//` is a commentary in Ink, you have to escape double slashes in the URL, i.e. `http://` becomes `http:\/\/`.
:::

## Interaction

### Input

To create an input field, use `[input]` markup tag and link variable to it:

```
VAR character_name="John Doe"
=== markup_input
Enter your name:
[input var=character_name]
+ [OK]
-
The character name is "{character_name}".
```

The input field shows current value of the linked variable. The value of the variable changes as user types.

The `[input]` tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `var=your_variable` | Mandatory. Name of the variable to save the entered value. |
| `type=text` | Input type. Can be set to `text` (default) or `number`. If `type` is set to `number`, the value will be passed to the variable as number. |
| `placeholder=Your name` | A placeholder text for input. Displayed if the input value is empty.

### Button

Button can be used to run Ink functions.

```
[button onclick=stats]Show stats[/button]
```

If function has the text output, it will be displayed in a fullscreen overlay window - see [Overlays](../interface_sections.md#overlays). Otherwise, it updates current overlay window, if any.

The `[button]` tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `onclick=your_function` | Mandatory. Name of the function to be called when button is clicked. This function can't take parameters. |
| `disabled=true` | If set, the button is disabled and can't be clicked. |
| `bordered=false` | Don't show button borders. Useful if you use inline image `[img]` as a button content. |
| `display=modal` | If set, the button displays modal overlay instead of fullscreen. |
