---
sidebar_position: 2
---

# Зовнішні функції

Ви можете створити ігрові функції на JavaScript і запускати їх з Ink сценарію.

Щоб визначити зовнішню функцію, додайте цей оператор на початку вашого головного Ink файлу:

```c title="story.ink"
EXTERNAL hello(name)
```

Потім створіть JavaScript файл в каталозі `resources/externals` з таким змістом:

```js title="external_hello.js"
function external_function_Hello(name) {
  return `Hello, ${name}`;
}

export default {
  name: "hello", // ім'я зовнішньої функції
  external: external_function_Hello
}
```

Дивіться докладніше в файлі `resources/externals/example.js.txt`.

## Резервний варіант

Якщо функція, визначена за допомогою оператора `EXTERNAL` не знайдена під час відтворення сценарію, Ink видає помилку "Missing function binding for external".

Щоб уникнути цього, ви можете створити Ink функцію з таким самим ім'ям. Вона буде резервним варіантом, який запускається, якщо відповідна зовнішня функція не знайдена. Щоб увімкнуи цю функціональність, додайте глобальний тег `#allow_external_function_fallbacks` в головний Ink файл.

```
# allow_external_function_fallbacks
Ваша історія починається тут.
```
