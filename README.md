# The Meeting That Should Have Been One Line

[![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![Rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/Zallan03/meeting-one-line/rank.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![Reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/Zallan03/meeting-one-line/reward.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

Entry for [The Meeting That Should Have Been One Line bounty](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c) on make.fun.

One sentence that could have replaced an entire pointless meeting:

> We are all here because nobody read the email, so here it is out loud: approved, Friday, done — and this meeting is the only thing still standing between us and Friday.

## How it works

`main.ts` (Node 22, standard library only) writes the entry text to
`/output/entry.txt` — 168 characters, one sentence, no trailing newline — and
fails loudly if the text is outside the gate. It writes atomically
(temp file + rename) and verifies the written file byte-for-byte.
Run locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
