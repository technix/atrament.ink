---
sidebar_position: 1
---

# Customization *


## Custom CSS classes

To add custom CSS classes or modify styles of existing elements, edit `resources/styles/custom.css` file. It contains a list of modifiable element classes for reference.


| Tag | Description                |
| :-------- | :------------------------- |
| `# CLASS: classname` | Apply CSS class to the paragraph `<div>` element. |
| `# CLASS: classname` | Apply CSS class to the choice `<button>` element. |

## Themes

To add a theme to the application, create a JSON file in the `resources/themes` folder with the following structure:
```
{
  "name": "custom",
  "theme": {
    "bg-color": "#FCFCFC",
    "fg-color": "#5D576B",
    "shade-color": "rgba(0, 0, 0, 0.1)",
    "font-color": "#333333",
    "accent-bg-color": "#FCFCFC",
    "accent-fg-color": "#F7567C",
    "accent-inverse-color": "#FCFCFC",
    "border-radius": "0.5rem",
    "border-radius-inline": "0.25rem"
  }
}
```
| Theme parameter | Description                |
| :-------- | :------------------------- |
| name | Theme display name. |
| bg-color | App background color. |
| fg-color | Primary color for controls. |
| shade-color | Shadows and highlights. |
| font-color | App and game text color. |
| accent-bg-color | Background for accented elements. |
| accent-fg-color | Foreground for accented elements. |
| accent-inverse-color | Foreground for active accented elements (accent-fg-color is used as a background then). |
| border-radius | Round the corners of choices, modals, and boxes. |
| border-radius-inline | Round the corners of inline buttons. |

*Note: You can use any valid CSS values for the theme.*

## Fonts

To add a font to the application, create a folder in the `resources/fonts` folder with the following files:
* `index.js` with the following content:
```
import('./index.css');
export default {
  name: 'Font Name',
  fallback: 'sans-serif', // fallback font
};
```
* `index.css`, which includes corresponding `@font-face` directives
* font files, referenced in the `index.css`

To remove font from the application, delete the font folder from `resources/fonts`.