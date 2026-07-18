# Software Engineering Universe

An interactive, sketchnote-style learning site covering how real software engineering
works — delivery, architecture, problem solving, reliability, shipping to production, and
working effectively as an engineer.

The homepage is a map: six topic regions sit either side of a central "engineering thinking"
card. Open a region to see its canvas, then open a concept to read a deep-dive sketch card.

## The layer model

| Layer | Format | What it is |
| --- | --- | --- |
| 1 | Full page | The homepage — the map of six topic regions |
| 2 | Full page | One canvas per topic, with clickable concept cards |
| 3 | Popup overlay | A deep-dive sketch card. No further navigation depth |

**46 experiences:** 1 homepage + 6 topic canvases + 36 topic popups + 3 global toolkit popups.

Every Layer 3 popup uses the same four-part template: **Concept → Visual Model → Common
Mistakes → Reflection**. The three toolkit popups (Learning Loop, Problem Breakdown Loop,
Escalation Ladder) are reachable from every page via the **Toolkit** button.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

Requires Node 18+.

## Stack

React 18 + Vite, and nothing else. No router library, no UI framework, no npm icon package:

- The hand-drawn look is plain CSS — wobbly `border-radius`, dotted paper background, and a
  small set of per-topic marker colours (`--c1`…`--c6`).
- Icons are [Font Awesome](https://fontawesome.com/search?ic=free) (free), loaded from a CDN
  in [index.html](index.html) and rendered by the tiny wrapper in
  [src/components/Icon.jsx](src/components/Icon.jsx). To use one, find its name in the Font
  Awesome catalog and write `<Icon name="database" />`.
- Routing is ~30 lines of hash routing in [src/router.js](src/router.js).
- Fonts are Bricolage Grotesque, Gaegu, Public Sans, and JetBrains Mono from Google Fonts,
  loaded in [index.html](index.html).

Hash routing means the build is a pure static file set needing no server rewrite rules, and
`base: './'` in [vite.config.js](vite.config.js) means it works from any sub-path.

## Deploying

`npm run build` produces a self-contained static site in `dist/`. Serve that directory from
any static host — no server-side rendering or rewrite rules required.

## Adding content

All content is data — no component changes needed. It lives in `src/data/`:

```
src/data/
  content.js       assembles everything; topic order here = topic numbering
  toolkit.js       the 3 global toolkit popups
  topics/          one file per topic (title, tone, tags, popups)
```

### Add a popup to an existing topic

1. Open the topic's file in `src/data/topics/`.
2. Append an object to its `popups` array. Every popup uses the same shape:

```js
{
  id: 'my-new-concept',            // used in the URL: #/topic/<topic>/<this>
  title: 'My New Concept',
  blurb: 'One line shown on the canvas card.',
  concept: 'A paragraph explaining the idea.',
  points: ['**Lead-in:** detail.', 'Another point.'],   // optional; **bold** supported
  visual: { kind: 'flow', label: 'Caption under the diagram.', steps: ['Step one', 'Step two'] },
  mistakes: ['A misconception to unlearn.'],             // optional
  reflection: 'A prompt that makes learners apply the concept.'
}
```

That's it — the popup appears as a card on the topic canvas automatically. No separate
grouping or wiring step.

### Add a whole new topic

1. Copy any file in `src/data/topics/` and edit it (`id`, `title`, `tone`, `blurb`, `tags`,
   `popups`).
2. Import it in [src/data/content.js](src/data/content.js) and add it to the `topics` array.
   Its position in that array sets its number and its slot on the homepage map (odd-numbered
   topics go in the left column, even-numbered in the right).

Use `tone` values `c1`–`c6` for the six marker colours defined in
[src/styles.css](src/styles.css).

### Visual models

A popup declares its diagram by `kind`, drawn by
[src/components/VisualModel.jsx](src/components/VisualModel.jsx):

| `kind` | Renders as |
| --- | --- |
| `flow` | A loop — steps arranged around a ring with arrows following the path |
| `pyramid` | Numbered tiers, widest at the bottom |

Both take `{ kind, label, steps: [...] }`. To add a new kind, add a branch to
`VisualModel.jsx` and style it in `styles.css`.

## Homepage layout

The map is a three-column grid: a column of topic cards, the central "engineering thinking"
card, and a second column of topic cards. Odd-numbered topics fill the left column and
even-numbered topics the right, so the cards read 1-2, 3-4, 5-6 across the page. Below 860px
the grid collapses to a single column. Built in
[src/components/Home.jsx](src/components/Home.jsx) from
[src/components/TopicCard.jsx](src/components/TopicCard.jsx).

## Routes

| URL | Shows |
| --- | --- |
| `#/` | Homepage |
| `#/topic/<topicId>` | Topic canvas |
| `#/topic/<topicId>/<popupId>` | Canvas with a popup open |
| `#/toolkit` | The global toolkit sheet, open over the current page |

Because popups are routed, any deep dive can be linked to directly.
