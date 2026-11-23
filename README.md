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
