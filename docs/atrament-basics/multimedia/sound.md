---
sidebar_position: 2
---

# Sound, music, and video *

* #PLAY_SOUND, #STOP_SOUND
* #AUDIO
* #PLAY_MUSIC, #STOP_MUSIC
* #AUDIOLOOP
* [video]

## Sound


| Tag | Description                |
| :-------- | :------------------------- |
| `# AUDIO: sound.mp3` | Play sound (once). |
| `# PLAY_SOUND: sound.mp3` | Play sound (once). |
| `# STOP_SOUND: sound.mp3` | Stop playing specific sound. |
| `# STOP_SOUND` | Stop playing all sounds. |


## Music

| Tag | Description                |
| :-------- | :------------------------- |
| `# AUDIOLOOP: music.mp3` | Play background music (looped). There can be only one background music track. |
| `# AUDIOLOOP: false` | Stop playing music. |
| `# PLAY_MUSIC: music.mp3` | Play background music (looped). There can be multiple background music tracks, played simultaneously. |
| `# STOP_MUSIC: music.mp3` | Stop playing specific background music. |
| `# STOP_MUSIC` | Stop playing all background music. |

## Video

| Markup | Description                |
| :-------- | :------------------------- |
| `[video]path/to/video.mp4[/video]` | Display video. <br/>Attributes:<br/>`loop=false` disable video loop.<br/>`muted=true` play video muted|