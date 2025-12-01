---
sidebar_position: 1
---

# Layout *

## Blocks

| Markup | Description                |
| :-------- | :------------------------- |
| `[block]text[/block]` | Defines a text block.<br/>Attributes:<br/>`width=value` block width. Can be defined in percents (recommended) or other CSS units.<br/>`align=left` aligns text horizontally in the block. Possible values: `left`, `center`, `right`<br/>`valign=top` aligns text vertically in the block. Possible values: `top`, `middle`, `bottom` |

## Tables

You can make tables with the following markup:
```
[table]<>
  [header]Header 1[ ]Header 2[ ]Header 3[/header]<>
	[row]Cell 1[ ]Cell 2[ ]Cell 3[/row]<>
	[row]Cell 4[ ]Cell 5[ ]Cell 6[/row]<>
[/table]
```
Please note `<>` operator at the end of each table line - this is required to render the table properly.

The table consists of header `[header][/header]` (optional) and rows `[row][/row]`. The `[ ]` is a cell separator.

Attributes of the `[table]` tag:
* `border=false` disables table borders.
* `padding=false` disables table cell paddings.
* `columns="20% 20% 60%"` sets column width. You have to set width for each column in the table.
* `fixed=true` forces text wrapping, so columns always have fixed width.
