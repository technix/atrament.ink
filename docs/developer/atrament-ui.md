---
sidebar_position: 3
---

# Atrament Web UI

## Markup tags

To create a new markup tag, you need to make a Preact component that renders it.

For example, let's create a `[list]` markup tag, which will render `[list]a,b,c[/list]` into `<ul><li>a</li><li>b</li><li>c</li></ul>`.

1. Create a folder `list` in `src/components/markup`. Folder name does not matter.
2. Create `index.jsx` file in this folder

```js title="src/components/markup/list/index.jsx"
import { h } from 'preact';
export default {
  tag: 'list', // this is the tag name.
  replacer: (options, content, markup) => {
    const entries = content.split(',');
    return (<ul>{entries.map((item, index) => <li key={index}>{markup(item)}</li>)}</ul>);
  }
}
```
The `replacer` function takes three arguments:

- `options` is an options object. For example, `[list type=ordered align=left]` will call replacer with options object `{type: "ordered", align: "left"}`.
- `content` is the text inside a tag. Don't forget to render its parts with `markup()`, as in the example above, otherwise other tags in it will not be processed. 
- `markup` is a function that processes markup tags in the text.

If you need to create standalone tag, like `[input]`, add tag options to the definition:

```js
import { h } from 'preact';
export default {
  tag: 'customcomponent',
  tagOptions: { single: true }, // so it does not require closing tag
  replacer: (options, content, markup) => {
    ...
  }
}
```

## InkJS compiler

By default, Atrament uses `inklecate` for Windows, Linux, and macOS. If `inklecate` is not available for the platform, the InkJS compiler will be used.
To force the use of InkJS compiler everywhere, add this line to `atrament.config.json`:

```json
"inkjscompiler": true
```
