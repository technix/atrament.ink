---
sidebar_position: 1
---

# Atrament Core 

This document describes internals of Atrament Core library.

## Data structures

### Scene

```js
{
  content: [],
  text: [],
  tags: {},
  choices: [],
  images: [],
  sounds: [],
  music: [],
  uuid: Number
}
```

| Key | Description                |
| :-------- | :------------------------- |
| `content` | Array of Ink paragraphs: `{text: '', tags: {}, images: [], sounds: [], music: []}` |
| `text` | Array of all story text from all paragraphs of this scene |
| `tags` | Array of all tags from all paragraphs of this scene |
| `choices` | Array of choice objects: `{ id: 0, choice: 'Choice Text', tags: {}}` |
| `images` | Array of all images from all paragraphs of this scene |
| `sound` | Array of all sounds from all paragraphs of this scene |
| `music` | Array of all music tracks from all paragraphs of this scene |
| `uuid` | Unique ID of the scene (`Date.now()`) |


### State

```
{
  settings: {},
  game: {},
  metadata: {},
  scenes: [],
  vars: {} 
}
```

| Key | Description                |
| :-------- | :------------------------- |
| `settings` | Single-level key-value store for application settings |
| `game` | Single-level game-specific data. Atrament populates the following keys: *$pathToInkFile, $inkFile, $gameUUID* |
| `metadata` | Data loaded from Ink file global tags |
| `scenes` | Array of game scenes |
| `vars` | Names and values of auto-observed variables |

### Save

```js
{ id, date, state, game, scenes }
```

| Key | Description                |
| :-------- | :------------------------- |
| `id` | Save slot ID |
| `date` | Save timestamp |
| `state` | JSON structure of Ink state |
| `game` | Content of `game` from Atrament state |
| `scenes` | Content of `scenes` from Atrament state |

Please note that `metadata` and `vars` from the Atrament state are not included in the save. However, they are automatically populated from the Ink state after loading from a save.


## Interfaces

`atrament-core` uses dependency injection. It uses InkJS `Story` constructor 'as-is', and uses custom interfaces for other libraries.

There are four interfaces in `atrament-core`. Their implementation is not included, so developers can use `atrament-core` with the libraries they like. 

### loader
Interface to file operations. The function `init` will be called first, taking the path to the game as a parameter. The function `getAssetPath` should return the full path of a given file. The async function `loadInk` should return the content of a given Ink file, located in the folder defined at initialization time.

```js
{
    async init(path)
    getAssetPath(filename)
    async loadInk(filename)
}
```

### persistent
Interface to persistent storage library.

```js
{
  init()
  async exists(key)
  async get()
  async set(key)
  async remove(key)
  async keys()
}
```

### state
Interface to state management library.

```js
{
  store()
  get()
  setKey(key, value)
  toggleKey(key)
  appendKey(key, value)
  setSubkey(key, subkey, value)
  toggleSubkey(key, subkey)
  appendSubkey(key, subkey, value)
}
```

### sound
Interface to sound management library.
```js
{
  init(defaultSettings)
  mute(flag)
  isMuted()
  setVolume(volume)
  getVolume()
  playSound(soundFile)
  stopSound(soundFile|undefined)
  playMusic(musicFile)
  stopMusic(musicFile|undefined)
}
```

## Events

All events are triggered **after** the action is performed.

| Event | Description | Parameters passed to event handler |
| :---- | :---------- | :--------- |
| `game/init` | Game object is initialized. | `{ pathToInkFile: path, inkFile: file }` |
| `game/initInkStory` | Ink file is loaded. | |
| `game/start` | Game is started. | `{ saveSlot: saveslot }` |
| `game/resume` | Game is resumed from a saved state. | `{ saveSlot: saveslot }` |
| `game/canResume` | Method `canResume` was called. | `{ saveSlot: saveslot }` |
| `game/restart` | Game is restarted (from beginning or from a saved state) | `{ saveSlot: saveslot }` |
| `game/load` | Game is loaded from a specified save slot. | `saveSlot` |
| `game/save` | Game is saved. Parameter `saveType` can have these values: `game` for user saves, `checkpoint` for checkpoints, `autosave` for autosave. Autosave does not have a name. | `{ type: saveType, name: saveName }` |
| `game/listSaves` | Requested a list of saves. | `saveListArray` |
| `game/removeSave` | Saved game is removed from a given slot. | `saveSlot` |
| `game/continueStory` | Ink story continued. | |
| `game/handleTag` | Tag handler was called. | `{ [tagName]: tagValue }` |
| `game/clear` | Game state partial cleanup. | |
| `game/reset` | Game state full cleanup. | |
| `game/getSessions` | Requested a list of game sessions. | `sessionList` |
| `game/deleteSession` | A session is deleted. | `sessionID` |
| `ink/initInkStory` | A new Ink story object is initialized. | |
| `ink/makeChoice` | A choice is made in the Ink script. | `{ id: choiceId }` |
| `ink/getVisitCount` | Visit count for path was requested. | `{ ref: ref, visitCount: value }` |
| `ink/evaluateFunction` | Ink function was called from Atrament. | `{ function: functionName, args: argsArray, result: functionReturnValue }` |
| `ink/getGlobalTags` | List of global tags was requested. | `{ globalTags: globalTagsObject }` |
| `ink/getVariable` | An Ink variable value was requested. | `{ name: variableName }` |
| `ink/getVariables` | A list of all Ink variables was requested. | `inkVariablesObject` |
| `ink/setVariable` | An Ink variable value was set from Atrament. | `{ name: variableName, value: value }` |
| `ink/goTo` | Go to specified path. | `{ knot: ref }` |
| `ink/onError` | Ink script error happened. | `errorEvent` |
| `ink/getScene` | An Ink script scene was requested from Atrament. | `{ scene: sceneObject }` |
| `settings/load` | App settings were loaded from persistent storage. | |
| `settings/save` | App settings were saved to persistent storage. | |
| `settings/get` | App setting value was requested. | `{ name: settingName }` |
| `settings/set` | App setting was set. | `{ name: settingName, value: settingValue }` |
