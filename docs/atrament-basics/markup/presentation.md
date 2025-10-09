---
sidebar_position: 2
---

# Presentation

Note: it is not possible to wrap multiple paragraphs with these tags. Use `<br>` tag for line breaks if you need multiline text in tags.


| Markup | Description                |
| :-------- | :------------------------- |
| `[progress value={variable}]Inner text[/progress]` | Displays a progress bar.<br/>Attributes:<br/>`value=x` current progressbar value<br/>`min=x` minimal progressbar value<br/>`max=x` maximal progressbar value<br/>`style=accent` highlight progressbar with accent theme color |
| `[spoiler]text[/spoiler]` | Hidden text. Text visibility toggles on click. |
| `[info]text[/info]` | Display text as an information block. Since this is a block element, it is recommended to use it on a whole paragraph.<br/>Attributes:<br/>`font=system` use system font<br/>`side=n` add color to the left infobox side. Possible values: `highlight`, `accent`. |
| `[banner]text[/banner]` | Display text as an banner block. Since this is a block element, it is recommended to use it on a whole paragraph.<br/>Attributes:<br/>`style=accent` use accent color<br/>`allcaps=true` display text in all capitals |
| `[css]text[/css]` | Applies CSS classed and/or styles to the text.<br/>Attributes:<br/>`class=CSS_class` applies CSS class to the text.<br/>`style="CSS style string"` applies CSS style to the text. |
| `[font=Courier New]text[/font]` | Applies font to the text. |
| `[highlight]text[/highlight]`<br/>`[highlight color=yellow bgcolor=black]Text[/highlight]` | Highlights text with accent color.<br/>Optional parameters `bgcolor` and `color` allow to set both background and foreground color for text. |