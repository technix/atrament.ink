---
sidebar_position: 3
---

# Interaction

| Markup | Description                |
| :-------- | :------------------------- |
| `[button=function]Text[/button]`<br/>`[button onclick=function]Text[/button]` | Display button, call a function when clicked. If function outputs a text, it will be displayed as a new overlay content. If not, current overlay content will be updated.<br/>Attributes:<br/>`onclick=function` function to be called when clicked.<br/>`disabled=true` disables the button<br/>`bordered=false` hide button borders<br/>`display=modal` display modal instead of overlay when clicked |
| `[link=target choice text]Text[/link]` | Creates a link. When clicked, the target choice is activated, and game continues. |
| `[input var=variable]` | Input element, sets value of given variable. Default value of this field is read from the same variable. Disabled on the inactive scenes. <br/>Attributes:<br/>`var=n` variable name to change<br/>`type=number` input type. Possible values: `text`, `number`.<br/>`placeholder=text` placeholder text |
| `[url=https:\/\/atrament.ink]link text[/url]` | Creates a link to an web resource. When clicked, the resource is opened in a new browser tab. *Note: you have to escape "/" symbols in the URL, as shown in the example.* |
