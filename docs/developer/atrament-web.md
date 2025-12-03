---
sidebar_position: 2
---

# Atrament Web

Atrament Web is a browser build of Atrament Core. It is bundled with a specific set of interface implementations:

- loader: fetch + fflate
- persistent: [localForage](https://github.com/localForage/localForage) / Neutralinojs storage
- state: [nanostores](https://github.com/nanostores/nanostores)
- sound: [howler.js](https://github.com/goldfire/howler.js)
- platform: web / Neutralinojs

The library detect environment to define which interface to use for persistent storage and platform features.

## Usage

Initialization and game start:
```js
import atrament from '@atrament/web';

atrament.init({
    applicationID: 'your-application-id',
    settings: {}
});

await atrament.game.init('/path/to', 'inkfile.ink.json');
await atrament.game.start();
atrament.game.continueStory();
```

State in components:

```js
import { useStore } from '@nanostores/preact';

const gameState = useStore(atrament.store);
```

## Loading progress tracking

In addition to standard loader methods, Atrament Web provides `onProgress` handler to track download progress:
```js
function progressTracker({ percent, receivedLength, totalLength}) {
  console.log(`Downloaded ${receivedLength} out of ${totalLength} (${percent})%`);
}

atrament.interfaces.loader.onProgress(progressTracker);

await atrament.game.init('/path/to', 'inkfile.ink.json');
```
