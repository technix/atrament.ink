---
sidebar_position: 8
---

# Game saves

Atrament Web UI supports the following save types:

1. **Autosave**. By default, game saves its progress after each choice. If autosave is present for the game, player can continue playing by clicking "Continue" in the main menu. When global tag `autosave: false` is present, autosaving is disabled. If autosaving is disabled and there are no saved checkpoints, "Continue" button will not be available.
2. **Checkpoints**. They are controlled by knot tags `#CHECKPOINT` and `#RESTART_FROM_CHECKPOINT`. Authors can use named checkpoints, adding names to these tags. If there is no autosave, players can continue playing from latest saved checkpoint by clicking "Continue" in the main menu.
3. **Saves**. They are disabled by default. Authors can set global tag `#saves` to define amount of available save slots. Players can save and load games using the slots provided. If global tag `#load_from_checkpoints` is set, players can also load game from any saved checkpoint.

In addition to above, Atrament Web UI supports **sessions**, which can be enabled by global tag `#sessions`. If they are enabled, players have to choose game session before starting a game. Each session has its own autosaves, checkpoints, and saves.


* Autosave
  * #autosave:false
* User saves
  * #saves
  * #SAVEGAME
* Checkpoints
  * #CHECKPOINT
  * #load_from_checkpoints
* Sessions
  * #sessions

| Tag | Description                |
| :-------- | :------------------------- |
| `# sessions: 3` | Amount of game sessions. Each session has its own set of saves. |
| `# autosave: false` | Disables autosaves. |
| `# saves: 5` | Amount of available slots for saves. |
| `# load_from_checkpoints` | Show checkpoints in the list of games to load. |


| Tag | Description                |
| :-------- | :------------------------- |
| `# CHECKPOINT` | Save game to the 'default' checkpoint. |
| `# CHECKPOINT: checkpointName` | Save game to checkpoint `checkpointName`. |
| `# SAVEGAME: saveslot` | Save game to `saveslot`. |
| `# RESTART` | Start game from beginning. |
| `# RESTART_FROM_CHECKPOINT` | Restart game from latest checkpoint. |
| `# RESTART_FROM_CHECKPOINT: checkpointName` | Restart game from named checkpoint. |