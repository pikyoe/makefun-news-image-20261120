# News image — Friday 20 November 2026

A newspaper front page summing up the world's news of Friday 20 November 2026.

## The image

`entry.png` (1024x1024, JPEG bytes under the `.png` name, as the rules allow)
shows, top to bottom:

- **The day itself** — masthead: FRIDAY 20 NOVEMBER 2026.
- **Lead story** — Trump, Xi and Putin meet in Shenzhen for the first
  three-way summit of the US, Chinese and Russian leaders.
- **Kyiv bridges struck** — Russian overnight strikes hit three bridges in
  Kyiv; Russian missiles also came down in Poland.
- **Tanker burns in Hormuz** — a tanker strike and fire in the Strait of
  Hormuz as the US Navy blockades Iranian shipping.
- **COP31 deadlocked on fossil fuels** — the UN climate summit in Antalya
  ends its scheduled final day with no fossil-fuel breakthrough.
- **Markets** — stocks slide, Bitcoin nears $61,700, Anthropic closes 17%
  above its IPO price on its Nasdaq debut.

Every headline was checked against reporting from 20 November 2026 before
the image was made.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It runs twice with the same bytes and needs no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
