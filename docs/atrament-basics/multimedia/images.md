---
sidebar_position: 1
---

# Images

## Paragraph illustrations

| Tag | Description                |
| :-------- | :------------------------- |
| `# IMAGE: some/picture.jpg` | Show image before paragraph text. |

| Markup | Description                |
| :-------- | :------------------------- |
| `[picture]path/to/image.jpg[/picture]` | Display image (same as `#IMAGE` knot tag). The image is sized automatically to fit the container. When using images inside of the `[block]` tags, you may want to set picture margins.<br/>Attributes:<br/>`width=50%` sets picture width.<br/>`leftmargin=0.5em` sets left margin. <br/>`rightmargin=0.5em` sets right margin.|

## Inline images

| Markup | Description                |
| :-------- | :------------------------- |
| `[img]path/to/image.jpg[/img]` | Display inline image. |


## Backgrounds

| Tag | Description                |
| :-------- | :------------------------- |
| `# background: some/picture.jpg` | Set background image for the game backdrop. |

| Tag | Description                |
| :-------- | :------------------------- |
| `# BACKGROUND: some/picture.jpg` | Set background image for the game text. Use `# BACKGROUND: false` to unset it. |
| `# PAGE_BACKGROUND: some/picture.jpg` | Set background image for the game backdrop. Use `# PAGE_BACKGROUND: false` to unset it. |
