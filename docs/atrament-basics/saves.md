---
sidebar_position: 8
---

# Saves and sessions

Atrament supports autosaves, checkpoints, and user saves.

## Autosave

By default, Atrament saves game progress after each choice. If autosave is present for the game, player can continue playing by clicking "Continue" in the main menu.

To disable autosave feature, add `#autosave` global tag to your script and set it to `false`:

```c
# autosave: false
```

## Checkpoints

Checkpoints are controlled by knot tags. 

To save the game to a checkpoint, use `#CHECKPOINT` knot tag:

```c
=== story1
# CHECKPOINT
The story goes on.
```

Later, you can restore the game from a checkpoint - i.e. load saved state of the game:

```c
Unfortunately, you lost this battle.
+ [Try again]
  # RESTART_FROM_CHECKPOINT
  ->DONE // this is needed to avoid loose ends in the script
```

You can have multiple checkpoints by naming them:

```c
=== story2
# CHECKPOINT: level1
You are entering first level of the dungeon.
```

And restart the game from a specified checkpoint:

```c
Unfortunately, you lost this battle.
+ [Try again]
  // if no checkpoint name is specified, RESTART_FROM_CHECKPOINT uses the latest checkpoint
  # RESTART_FROM_CHECKPOINT
+ [Restart from level 1]
  # RESTART_FROM_CHECKPOINT: level1
-
->DONE
```

If you want the checkpoints to be visible in the "Load game" menu, add `#load_from_checkpoints` global tag to your script and set it to `true`:

```c
# load_from_checkpoints: true
```

## Saves

To enable saves, add `#saves` global tag to your script and set its value to the number of save slots:

```c
# saves: 5
```

When saves are enabled, players can save and load games using the slots provided.

## Sessions

Atrament supports multiple user sessions for games. To enable this feature, add `#sessions` global tag to your script and set its value to the number of sessions:

```c
# sessions: 3
```

When sessions are enabled, players will have to choose a game session before starting a game. Each session has its own autosaves, checkpoints, and saves.

Players can delete sessions. When session is deleted, all associated saves are deleted too.
