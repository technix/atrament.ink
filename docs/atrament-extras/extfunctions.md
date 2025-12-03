---
sidebar_position: 2
---

# External functions

You can define game functions in JavaScript that can be called directly from Ink story.

To declare an external function, add this on top of your main story file:

```c title="story.ink"
EXTERNAL hello(name)
```

Then create a JS file in the `resources/externals` folder with the following content:

```js title="external_hello.js"
function external_function_Hello(name) {
  return `Hello, ${name}`;
}

export default {
  name: "hello", // this is the name of an external function
  external: external_function_Hello
}
```

See `resources/externals/example.js.txt` for more details.

## Fallbacks

By default, if a function defined with `EXTERNAL` is not found in the runtime environment, Ink fails with the "Missing function binding for external" error.

To avoid this, you can create an Ink function with the same name - it will act as a fallback and run if the external function is not found. To enable Ink fallbacks, add `#allow_external_function_fallbacks` global tag to your Ink script.

```
# allow_external_function_fallbacks
Your story begins here.
```