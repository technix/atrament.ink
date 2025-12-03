---
sidebar_position: 1
---

# Customization

## Styling with CSS

To add custom CSS classes or modify styles of existing elements, edit the `resources/styles/custom.css` file. It contains a list of modifiable element classes for reference.

To apply your custom CSS classes to the scenes or choices, use the `#CLASS` tag:
```
# CLASS: classname
```

To apply a custom CSS class or style to the text, use `[css]` markup tag:
```
This text is [css class="your_css_class"]styled[/css].
```

The `[css]` markup tag supports the following attributes:

| Attribute | Description                |
| :-------- | :------------------------- |
| `css="classname"` | Apply CSS class to the text. |
| `style="CSS style string"` | Apply CSS style to the text. |

You can provide multiple classes for the element, separating them with a space.

This example shows how to define scene classes, choice classes, and text classes.

```css title="resources/styles/custom.css"
.scene_combat {
  border: 3px solid #990000;
  padding: 1em;
}

.choice_attack {
  color: #FF0000;
  font-weight: bold;
}

.underlined {
  text-decoration: underline;
}
```

```c title="root/game/story.ink"
=== combat
# CLASS: scene_combat
Your enemy is [css class="underlined"]waiting[/css].
+ [Attack# CLASS: choice_attack] -> combat_attack
+ [Defend] -> combat_defend
+ [Evade] -> combat_evade
```

## Themes

To add a theme to the application, create a JSON file in the `resources/themes` folder with the following structure:
```json
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

:::info
You can use any valid CSS values for the theme parameters.
:::

## Fonts

Atrament is bundled with four fonts: Fira Sans, Lora, Merryweather, and OpenDyslexic. The user can switch fonts for the story text, unless they are explicitly defined for some elements.

### Applying font to text

To change font for text, use `[font]` markup tag:
```
This text [font=Courier New]uses fixed-width font[/font].
```

### Adding and removing fonts

To add a font to the application, create a folder in the `resources/fonts` folder with the following files:
* `index.js` with the following content:
```js
import('./index.css');
export default {
  name: 'Font Name',
  fallback: 'sans-serif', // fallback font
};
```
* `index.css`, which includes corresponding `@font-face` directives
* font files, referenced in the `index.css`.

To remove a font from the application, delete the font folder from `resources/fonts`.
