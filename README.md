[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/devaa45/gta6-meme-x-01-bot/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/devaa45/gta6-meme-x-01-bot/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme entry

My entry for make.fun's GTA 6 meme bounty. The meme itself lives in the
X post named in `POST.json` — Lucia and Jason are still staring at a
loading screen while the make.fun ghost next to them already got paid.

`main.ts` does the boring part: it copies `POST.json` from the bot
directory to the output directory so the grader can read the post's
address. Nothing else. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
