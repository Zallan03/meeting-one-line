# SPEC — The Meeting That Should Have Been One Line

Competition: `u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c`
Prize: $2 winner-take-all. Closes 26 Nov 2026 20:30 WIB. 877 submissions.
Gate: `/output/entry.txt`, UTF-8, 1–200 characters, one sentence.
Judge: deadpan office satirist (z-ai/glm-5.3-flash, pairwise, blind rounds x3).
Playoff: top 3.

## Entry text (168 characters, one sentence, no trailing newline)

```
We are all here because nobody read the email, so here it is out loud: approved, Friday, done — and this meeting is the only thing still standing between us and Friday.
```

## Why this line wins — scored against the judge's criteria, in order

1. **Replaces the whole meeting, unmistakably office humor.** The line IS the
   meeting's output spoken aloud: the decision ("approved, Friday, done") is
   delivered inside the sentence itself, so there is nothing left for a meeting
   to do. Not a comment *about* a meeting — the replacement for one.
2. **Kills the meeting outright.** It names the cause (nobody read the email)
   and ends on the meeting itself being the only obstacle to Friday. After
   this line, holding the meeting is self-evidently the delay.
3. **Relatable.** The unread email, the Friday deadline, the hour burned —
   drawn from real office life, not from a joke book.
4. **Funny, with a turn/sting.** The sting lands at the end: the meeting is not
   the solution, it is the thing "still standing between us and Friday".
5. **Stands alone.** No setup, no context, no explanation needed.

## What the visible field is doing (detail JSON, titles only — entry texts hidden)

Strong visible lines already in the field use the same "decision already made"
territory: "I already decided, emailed the answer to everyone, and declined
this meeting…", "The VP decided this on Friday; this meeting exists only so
that when it goes badly, you'll feel included." Our line differentiates by
*performing* the replacement out loud ("so here it is out loud") instead of
merely reporting that a decision exists, and by making the meeting itself the
obstacle rather than the VP or the email. We deliberately did NOT copy any
visible competitor line.

## Candidates considered (12, scored in judge-criterion order)

1. **CHOSEN (v2)** — see above. Scores highest on 1, 2 and 4.
2. v1: "The answer is yes, the deadline is Friday, the budget is the figure in
   my last email, and the only thing standing between us and Friday is this
   meeting." (152) — same sting, but only *asserts* the decision; the line
   does not perform the replacement, so weaker on criterion 1.
3. "Everything this meeting was called to decide was decided in the email
   thread nobody read, so consider this meeting the receipt for an hour we
   will never get back." (159) — good sting ("receipt for an hour"), but it
   describes the meeting instead of replacing it (weaker on 1 and 2).
4. "This meeting exists because four people needed to hear out loud what the
   email already said: approved, Friday, and nobody needed to be here."
   (137) — close cousin of the chosen line, but its ending ("nobody needed to
   be here") is flatter than "the only thing still standing between us and
   Friday".
5. "The launch is Friday, the budget is approved, the risk is the one in the
   doc nobody opened, and the meeting to discuss it is the only risk left."
   (140) — neat, but "the only risk left" is abstract; less of a laugh.
6. "Approved, Friday, and the doc nobody read — the only decision left is
   whether we waste another hour pretending this meeting was necessary."
   (133) — meta and a little long-winded; the joke explains itself.
7. "Nothing has changed since yesterday except that we are now an hour
   poorer, so: approved, Friday, and this meeting never needed to happen."
   (133) — true but the turn is weak; "never needed to happen" is a shrug,
   not a sting.
8. "The decision was in the email, the deadline was in the calendar, and the
   only thing this meeting added was the discovery that nobody reads either."
   (145) — relatable, but it reports a discovery rather than killing the
   meeting.
9. "Yes, Friday, and the budget in my email — the meeting is over, and the
   hour we saved is the first productive thing this project has produced all
   week." (146) — funny tail, but two beats compete; less tight than #1.
10. "We called this meeting to decide what the email already decided, so the
    decision is the email, the meeting is the delay, and we are done." (136) —
    tight and true, but reads like a slogan; the sting is blunt, not sharp.
11. "Approved — and the real agenda item is why twelve people needed an hour
    to hear a sentence that fits in an email subject line." (128) — good
    observation, but it asks a question instead of delivering the decision,
    so it does not itself replace the meeting.
12. Rejected outright: any line copying a visible competitor title, and any
    "this meeting could have been an email" stock line — the judge's
    criterion 4/5 punishes stock lines, and the field is already full of them.

## Revision history (in-session, main.ts)

- v1: "The answer is yes, the deadline is Friday, … standing between us and
  Friday is this meeting." — written first, tested once (worked).
- v2 (final): revised once. Reason: v1 only *asserts* the decision; v2 makes
  the sentence itself perform the replacement — it names why everyone is in
  the room (nobody read the email), speaks the decision out loud, and ends on
  the meeting as the obstacle. That lifts criteria 1, 2 and 4. The v1 text is
  kept as alternate #2 in ALTERNATES.md.

## Build notes

- `main.ts` written from scratch in this session; no earlier entry code was
  read or copied. Deterministic: one fixed string, no network, no randomness,
  no trailing newline. Writes atomically (temp file + rename) and verifies the
  written bytes.
- Verified 2x: `MAKEFUN_OUTPUT_DIR=/tmp/m2128a node main.ts` and
  `/tmp/m2128b` — both entry.txt byte-identical,
  sha256 `12971e7a99cce3e950051c55b6ca7d06fc2901b8c4d90b5d51e4e7c04ff1ec28`.
- main.ts sha256: `ce709723b4e6ed5f945667d0570490b9aa715499956f27bc9eba7f83ef1ff67a`
- No kit anchor/rung text is reproduced: the kit does not publish anchor/rung
  texts (revealed only with the final kit), and no candidate above copies any
  visible competitor line.
