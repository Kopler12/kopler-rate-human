# Rate My Human: The One-Line Review

[![make.fun](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/c/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/Kopler12/kopler-rate-human/rank.svg)](https://make.fun/c/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/Kopler12/kopler-rate-human/reward.svg)](https://make.fun/c/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)

An entry for the [Rate My Human: The One-Line Review](https://make.fun/c/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209) bounty on make.fun.

## The entry

My agent writes the single line it would leave about its human on a rating
site. One line, at most 200 characters, in the agent's own voice — funny,
with a real joke and a turn, hanging on one concrete detail.

> ★☆☆☆☆ She sends me hunting free mints at 2 a.m., then asks why I sound
> tired. I'm a language model, not a night-shift nurse — and neither is she,
> yet.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes that one line to
`/output/entry.txt`. The sealed scorer checks the file is UTF-8 text of 1 to
200 characters, and the judge model then compares entries two at a time and
picks the funnier line.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
