---
sidebar_position: 2
---

# Layered images

To create a multi-layered image, use the `[layers]` markup tag:

```
[layers]<>
[picture]map.png[/picture]<>
[picture x=2000 y=650]castle.png[/picture]<>
[picture x=600 y=250]castle.png[/picture]<>
[picture x=2700 y=3150]castle.png[/picture]<>
[picture x=1361 y=2231]swordman.png[/picture]<>
[/layers]
```

The first `[picture]` tag inside the `[layers]` tag is the background. The background is automatically scaled to the screen size. Images used in other `[picture]` tags will also be scaled proportionally.

The attributes `x` and `y` in other `[picture]` tags define the coordinates of the image relative to the upper left corner of the background image. Their values must be specified in **pixels**. If they are not specified, the coordinates 0,0 are used.

## Layers

Markup tag `[layers]` has the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `width=50%` | Sets the width of a layered image. |
| `leftmargin=0.5em` | Sets the left margin of a layered image. |
| `rightmargin=0.5em` | Sets the right margin of a layered image.  |

Markup tag `[picture]` inside of a `[layers]` markup tag has the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `x=10`  | Sets the X coordinate relative to the upper left corner of the background image. If not specified, 0 is used. |
| `y=22`  | Sets the Y coordinate relative to the upper left corner of the background image. If not specified, 0 is used. |
| `to="Choice text"` | If set, clicking on this image will select the corresponding choice option. |
| `onclick=inkFunction` | If set, clicking on this image will call the corresponding Ink function. |
| `display=modal` | If set, Ink function call displays a modal overlay instead of full-screen. |

For the background image, the values of these attributes are ignored.

## Active areas

You can specify active areas on the image, which when clicked will lead to a choice or call a function, with the `[area]` markup tag. The attributes of this tag are the same as those of `[picture]`, but you must specify the size of the active area using the attributes `x, y, width, height` (coordinates of the upper left corner and size of the area) or `x, y, x1, y1` (coordinates of the upper left and lower right corners of the area).

| Attribute | Description                |
| :-------- | :------------------------- |
| `x=10`  | Sets the X coordinate of the upper left corner of the area relative to the upper left corner of the background image. |
| `y=22`  | Sets the Y coordinate of the upper left corner of the area relative to the upper left corner of the background image. |
| `x1=110`  | Sets the X coordinate of the lower right corner of the area relative to the upper left corner of the background image. |
| `y1=122`  | Sets the Y coordinate of the lower right corner of the area relative to the upper left corner of the background image. |
| `width=100`  | Sets the width of the active area. |
| `height=100`  | Sets the width of the active area. |
| `to="Choice text"` | If set, clicking on this area will select the corresponding choice option. |
| `onclick=inkFunction` | If set, clicking on this image will call the corresponding Ink function. |
| `display=modal` | If set, Ink function call displays a modal overlay instead of full-screen. |

Example:

```
[layers]<>
[picture]map.png[/picture]<>
[area x=369 y=2669 width=512 height=512 onclick=inkFunction]<>
[area x=2261 y=2531 with=300 height=100 onclick=otherInkFunction display=modal]<>
[area x=123 y=987 width=110 height=222 to="Choice Text"]<>
[area x=123 y=987 x1=223 y1=1200 to="Choice Text 2"]<>
[/layers]
```
