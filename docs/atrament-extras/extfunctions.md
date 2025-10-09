---
sidebar_position: 2
---

# External functions


If you add any external functions to your Ink file, the JS function code should be added as a separate `*.js` file to the `resources/externals` folder. See example file `example.js.txt` for details.


| Tag | Description                |
| :-------- | :------------------------- |
| `# allow_external_function_fallbacks` | If the function defined with EXTERNAL is not found, run Ink function with the same name instead. |