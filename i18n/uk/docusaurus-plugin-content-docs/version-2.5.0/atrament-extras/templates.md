---
sidebar_position: 3
---

# HTML-шаблони

Якщо вам потрібно відобразити в грі HTML-контент, ви можете використати HTML-шаблони.

## Приклад HTML-шаблону

1. Створіть HTML-файл в каталозі `resources/templates` - наприклад, `card.html`. Файл повинен мати розширення `.htm` або `.html`.

```html title="card.html"
<div class="card">
    <!-- так підставляються змінні -->
    <div class="card-title">{{title}}</div>
    <!--
        Додайте атрибут data-mount="content" до елементу,
        всередину якого буде вставлений вміст тега [template]
        з Ink сценарію
    -->
    <div class="card-content" data-mount="content"></div>
</div>
```

CSS-класи з вашого шаблону додайте до каталогу `resources/styles`, як описано в розділі "[Оформлення](atrament-extras/customization.md)".
 
2. Додайте шаблон до вашого Ink-сценарію за допомогою тега розмітки `[template]`:

```c title="story.ink"
VAR CARD_TITLE="Заголовок"
[template src=card.html var:title="{CARD_TITLE}"]<>
Вміст шаблону буде [highlight]тут[/highlight]<>
[/template]
```

## Змінні в шаблонах

Змінні передаються в шаблон через атрибути `var:X`. Наприклад, `var:title="Заголовок"` передасть в шаблон зміну `title`. В шаблон можна передати будь-яку кількість змінних.

Якщо вам потрібно передати змінну з Ink, потрібно використати підстановку значення. Скажімо, щоб передати в шаблон значення змінної Ink `INK_VARIABLE_WITH_TITLE`, треба зробити так: `var:title="{INK_VARIABLE_WITH_TITLE}"`.

Якщо вам треба передати шлях до файла ігрового ресурсу (зображення, звуку, відео), перед ним треба написати `GAME_ASSET:`, наприклад, `var:cardImage="GAME_ASSET:yourimage.jpg"` відповідатиме `root/game/yourimage.jpg`.

Шаблони використовують [mustache](https://mustache.github.io/mustache.5.html) в якості шаблонізатора. Ознайомтеся з його документацією.

## Вміст шаблонів

Вміст тега `[template]` вставляється в шаблон як нащадок того HTML-елемента, у якого встановлений атрибут `data-mount="content"`. Якщо такого елемента в шаблоні немає, вміст тега буде проігнорований.

## Вкладені шаблони

Ви можете вкладати шаблони один в одного:

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
VAR CARD_TITLE="Заголовок"
[template src=card.html]<>
  [template src=card_title.html var:title="{CARD_TITLE}"][/template]<>
  [template src=card_content.html]<>
    Вміст шаблону буде [highlight]тут[/highlight]<>
  [/template]<>
[/template]
```

## Особливості шаблонів

Весь вміст шаблону завжди обгортається в HTML-тег `<div>`, тож насправді шаблон перетворюється на такий HTML-код:

```html title="Згенерований HTML-код"
<div>
  <div class="card">
    ...
  </div>
</div>
```

В деяких випадках це може бути проблемою.

Якщо ваш HTML-шаблон не містить блокових елементів, ви можете змінити тег обгорки на `<span>` таким чином: `[template src=card.html wrapper=span][/template]`.

Ви також можете застосувати CSS-класи безпосередньо до тега обгортки за допомогою атрибута `class`:

```c title="story.ink"
[template src="card.html" class="custom_class"][/template]
```

```html title="Згенерований HTML-код"
<div class="custom_class"> <!-- клас буде застосований до тега обгортки -->
  <div class="card">
    ...
  </div>
</div>
```
