---
sidebar_position: 2
---

# Atrament Core API

### atrament.version

Atrament version string. Read-only. 

## Base methods

### atrament.defineInterfaces()

Defines interface modules for:
- **loader**: ink file loader
- **persistent**: persistent storage
- **sound**: sound control (optional)
- **state**: state management

Interfaces should be defined **before** calling any other methods.

```
atrament.defineInterfaces({
    loader: loaderInterface,
    persistent: persistentInterface,
    sound: soundInterface,
    state: stateInterface
});
```

### atrament.init(Story, configuration)

Initialize the game engine. Takes two parameters:
- **Story** is an InkJS constructor, imported directly from InkJS
- **configuration** is a configuration object:
    - **applicationID** should be a unique string. It is used to distinguish the persistent storage of your application.
    - **settings** is a default settings object. These settings are immediately applied.

```
import {Story} from 'inkjs';
const config = {
    applicationID: 'your-application-id',
    settings: {
        mute: true,
        volume: 10,
        fullscreen: true
    }
}
atrament.init(Story, config);
```

### atrament.on(event, listener)

Subscribe to specific Atrament events. The **listener** function is called with a single argument containing event parameters.

You can subscribe to all Atrament events:
```js
atrament.on('*', (event, args) => { ... });
```

### atrament.off(event, listener)

Unsubscribe the specified listener from the Atrament event.

### atrament.state

Returns the Atrament state interface. Can be used to operate the state directly:

```
atrament.state.setSubkey('game', 'checkpoint', true);
```

### atrament.store

Return raw store object. It can be used in hooks, for example:

```
const gamestate = useStore(atrament.store);
```

### atrament.interfaces

Returns raw interface objects. It can be used to operate with them directly.

```
const { state, persistent } = atrament.interfaces;
```

## Game methods

### async atrament.game.init(path, file, gameID)

Initialize game object. It is required to perform operations with saves.
Parameters:
- path: path to Ink file
- file: Ink file name
- gameID: optional. If provided, Atrament will use the given ID for save management. Otherwise, it will be generated based on the path and filename.

Event: `'game/init', { pathToInkFile: path, inkFile: file }`


### async atrament.game.initInkStory()

Load the Ink file and initialize the Ink Story object. Then it updates game metadata and initializes variable observers.

Event: `'game/initInkStory'`

### atrament.game.getSaveSlotKey(\{ name, type \})

Returns the save slot identifier for the given save name and type.
Possible save types: `atrament.game.SAVE_GAME`, `atrament.game.SAVE_CHECKPOINT`, `atrament.game.SAVE_AUTOSAVE`. For autosaves, the `name` parameter should be omitted.
The returned value can be used as a `saveslot` parameter.


### async atrament.game.start(saveslot)

If the game is started for the first time, or the initialized game is not the same as the current one, call `initInkStory` first.
Clears the game state and gets initial data for variable observers.
If `saveslot` is defined, load state from the specified save.

Event: `'game/start', { saveSlot: saveslot }`

### async atrament.game.resume()

Resume saved game:
- if autosave exists, resume from autosave
- if checkpoints exist, resume from the newest checkpoint
- otherwise, start a new game

Event: `'game/resume', { saveSlot: saveslot }`

### async atrament.game.canResume()

Returns the save slot identifier if the game can be resumed.

Event: `'game/canResume', { saveSlot: saveslot }`

### async atrament.game.restart(saveslot)

Restart the game from the specified save slot (if `saveslot` is not defined, start a new game). 

Event: `'game/restart', { saveSlot: saveslot }`

### async atrament.game.restartAndContinue(saveslot)

Run `atrament.game.restart`, then run `atrament.game.continueStory()` to regenerate game content.

### async atrament.game.load(saveslot)

Load game state from the specified save slot. 

Event: `'game/load', saveslot`

### async atrament.game.saveGame(name)

Save game state to save slot.

Event: `'game/save', { type: 'game', name }`

### async atrament.game.saveCheckpoint(name)

Save the game state to the checkpoint.

Event: `'game/save', { type: 'checkpoint', name }`

### async atrament.game.saveAutosave()

Save the game state to the autosave slot.

Event: `'game/save', { type: 'autosave' }`

### async atrament.game.listSaves()

Returns an array of all existing saves for the active game.

Event: `'game/listSaves', savesListArray`

### async atrament.game.removeSave(saveslot)

Removes the specified game save slot.

Event: `'game/removeSave', saveslot`

### async atrament.game.existSave(saveslot)

Returns `true` if the specified save slot exists.

### atrament.game.continueStory()

- gets Ink scene content
- run scene processors
- process tags
- updates the Atrament state with the scene content

Event: `'game/continueStory'`

Event for tag handling: `'game/handleTag', { [tagName]: tagValue }`

### atrament.game.makeChoice(id)

Make a choice in Ink. Wrapper for `atrament.ink.makeChoice`.

### atrament.game.defineSceneProcessor(processorFunction)

Register `processorFunction` for scene post-processing. It takes the `scene` object as an argument by reference:

```js
function processCheckpoint(scene) {
    if (scene.tags.CHECKPOINT) {
        scene.is_checkpoint = true;
    }
}
atrament.game.defineSceneProcessor(processCheckpoint);
```

### atrament.game.getAssetPath(file)

Returns the full path to the asset file (image, sound, music).

### atrament.game.clear()

Method to call at the game end. It stops music, and clears `scenes` and `vars` in the Atrament state.

Event: `'game/clear'`

### atrament.game.reset()

Method to call at the game end. It calls `atrament.game.clear()`, then clears `metadata` and `game` in the Atrament state.

Event: `'game/reset'`

### atrament.game.getSession()

Returns the current game session.

### atrament.game.setSession(sessionID)

Sets the current game session. If set to an empty value, reset the session ID to the default.

Event: `'game/setSession', sessionID`

### async atrament.game.getSessions()

Returns a list of existing sessions in a `{ sessionName: numberOfSaves, ... }` format.

Event: `'game/getSessions', sessionList`

### async atrament.game.deleteSession(sessionID)

Delete all saves for a given session.

Event: `'game/deleteSession', sessionID`

### atrament.game.getState()

Get state object for the game (ink state, "game", and "scenes" state keys)

### atrament.game.setState(gameState)

Set the game state from the provided object (same as returned by getState)


## Ink methods

### atrament.ink.initStory()

Initializes Ink story with loaded content.

Event: `'ink/initStory'`

### atrament.ink.story()

Returns the current Story instance.

### atrament.ink.loadState(state)

Load Ink state from JSON.

### atrament.ink.getState()

Returns the current Ink state as a JSON object.

### atrament.ink.makeChoice(id)

Wrapper for `Story.ChooseChoiceIndex`.

Event: `'ink/makeChoice', { id: choiceId }`

### atrament.ink.getVisitCount(ref)

Wrapper for `Story.VisitCountAtPathString`.

Event: `'ink/getVisitCount', { ref: ref, visitCount: value }`

### atrament.ink.evaluateFunction(functionName, argsArray)

Evaluates Ink function, then returns the result of the evaluation. Wrapper for `Story.EvaluateFunction`.

Event: `'ink/evaluateFunction', { function: functionName, args: argsArray, result: functionReturnValue }`

### atrament.ink.getGlobalTags()

Returns parsed Ink global tags.

Event: `'ink/getGlobalTags', { globalTags: globalTagsObject }`

### atrament.ink.getVariable(variableName)

Returns the value of the specified Ink variable.

Event: `'ink/getVariable', { name: variableName }`

### atrament.ink.getVariables()

Returns all variables and their values as a key-value object.

Event: `'ink/getVariables', inkVariablesObject`

### atrament.ink.setVariable(variableName, value)

Sets the value of the specified Ink variable.

Event: `'ink/setVariable', { name: variableName, value: value }`

### atrament.ink.observeVariable(variableName, observerFunction)

Registers observer for a specified variable. Wrapper for `Story.ObserveVariable`.

### atrament.ink.goTo(ref)

Go to the specified Ink knot or stitch. Wrapper for `Story.ChoosePathString`.

Event: `'ink/goTo', { knot: ref }`

### atrament.ink.onError(errorCallback)

When an Ink error occurs, it emits `ink/onError` event and calls the `errorCallback` function with the error event object as an argument.

Event: `'ink/onError', errorEvent`

### atrament.ink.getScene()

Returns **Scene** object.

Event: `'ink/getScene', { scene: sceneObject }`


## Settings methods

Application settings for your application. Loading, saving, and setting values change the `settings` section of the Atrament state.

However, if you need to perform additional actions when the setting is changed, you can define a handler for it - see below. By default, Atrament handles `mute` and `volume` settings this way, muting and setting sound volume, respectively.

### async atrament.settings.load()

Load settings from persistent storage to the Atrament state.

Event: `'settings/load'`

### async atrament.settings.save()

Save settings to persistent storage.

Event: `'settings/save'`

### atrament.settings.get(parameter)

Returns the value of the setting.

Event: `'settings/get', { name: parameter }`

### atrament.settings.set(parameter, value)

Sets the value of the setting.

Event: `'settings/set', { name: parameter, value: value }`

### atrament.settings.toggle(parameter)

Toggles setting (sets `true` to `false` and vice versa).

### atrament.settings.defineHandler(parameter, handlerFunction)

Defines a settings handler. 

For example, you have to run some JavaScript code to toggle full-screen mode in your app.

```js
const fullscreenHandler = (oldValue, newValue) => {
    // do some actions
}

atrament.settings.defineHandler('fullscreen', fullscreenHandler);

// later...

atrament.toggle('fullscreen');
// or
atrament.set('fullscreen', true);

// both these methods will change the setting and run the corresponding handler
```


