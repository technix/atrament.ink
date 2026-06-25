---
sidebar_position: 3
---

# HTML templates

If you need to display HTML content in your game, you can use HTML templates.

## Template example

1. Create an HTML file in the `resources/templates` directory - for example, `card.html`. The file must have the extension `.htm` or `.html`.

```html title="card.html"
<div class="card">
    <!-- this -->
    <div class="card-title">{{title}}</div>
    <!--
        Add attribute data-mount="content" to an element
        where the [template] tag content will be placed 
    -->
    <div class="card-content" data-mount="content"></div>
</div>
```

Add CSS classes from your template to the `resources/styles` directory, as described in the "[Customization](atrament-extras/customization.md)" section.
 
2. Add the template to your Ink script using the `[template]` markup tag:

```c title="story.ink"
VAR CARD_TITLE="Your Card Yitle"
[template src=card.html var:title="{CARD_TITLE}"]<>
Your content is [highlight]here[/highlight]<>
[/template]
```

## Template variables

Variables are passed to the template via `var:X` attributes. For example, `var:title="Title"` will pass the `title` variable to the template. Any number of variables can be passed to the template.

If you need to pass a variable from Ink, you need to use value substitution. For example, to pass the value of the Ink variable `INK_VARIABLE_WITH_TITLE` to the template, you need to do the following: `var:title="{INK_VARIABLE_WITH_TITLE}"`.

If you need to pass the path to a game resource file (image, sound, video), you must write `GAME_ASSET:` before it, for example, `var:cardImage="GAME_ASSET:yourimage.jpg"` will correspond to `root/game/yourimage.jpg`.

The templates use [mustache](https://mustache.github.io/mustache.5.html) as a templating engine. Please refer to its documentation.

## Template content

The content of the `[template]` markup tag is inserted into the template as a child of the HTML element that has the `data-mount=“content”` attribute. If there is no such element in the template, the content of the `[template]` markup tag will be ignored.

## Nested templated

You can nest templates within each other:

```html title="card.html"
<div class="card" data-mount="content"></div>
```

```html title="card_title.html"
<div class="card-title">{{title}}</div>
```

```html title="card_content.html"
<div class="card-content" data-mount="content"></div>
```

```c title="story.ink"
VAR CARD_TITLE="Your Card Title"
[template src=card.html]<>
  [template src=card_title.html var:title="{CARD_TITLE}"][/template]<>
  [template src=card_content.html]<>
    Your content is [highlight]here[/highlight]<>
  [/template]<>
[/template]
```

## Template layout details

All template content is always wrapped in an HTML `<div>` tag, so the template actually turns into the following HTML code:

```html title="Generated HTML code"
<div>
  <div class="card">
    ...
  </div>
</div>
```

In some cases, this can be a problem.

If your HTML template does not contain block elements, you can change the wrapper tag to `<span>` as follows: `[template src=card.html wrapper=span][/template]`.

You can also apply CSS classes directly to the wrapper tag using the `class` attribute:

```c title="story.ink"
[template src="card.html" class="custom_class"][/template]
```

```html title="Generated HTML code"
<div class="custom_class"> <!-- CSS class will be set for the wrapper tag -->
  <div class="card">
    ...
  </div>
</div>
```
