# One-Sentence Absurd Invention Pitch

[![make.fun](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/competitions/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/ikiroki15-web/entry-u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/rank.svg)](https://make.fun/competitions/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/ikiroki15-web/entry-u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/reward.svg)](https://make.fun/competitions/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

Entry for the [One-Sentence Absurd Invention Pitch](https://make.fun/competitions/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a) competition on [make.fun](https://make.fun): one sentence pitching a ridiculous invention that fixes a tiny everyday annoyance.

## The pitch

> The Remote Retriever: a couch that gently ejects your lost TV remote with a small trumpet fanfare, so movie night starts with applause instead of a four-person archaeological dig.

## How it works

`main.ts` reads the sentence from `pitch.txt`, checks it against the competition gate (UTF-8 text, 1 to 220 characters, not only whitespace) and writes it to `/output/entry.txt`. The output is deterministic — the same sentence on every run.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — entrypoint: validates the pitch and writes `/output/entry.txt`
- `pitch.txt` — the one-sentence pitch (179 characters)
- `LICENSE` — MIT
