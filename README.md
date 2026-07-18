# Software Engineering Universe

An interactive, sketchnote-style learning site that turns the **Software Engineering
Bootcamp** facilitator guide into something cadets can explore on their own.

The homepage is a hand-drawn universe map: six topic regions orbit the central idea of
engineering thinking. Click a region to open its canvas, click a concept to open a deep-dive
sketch card.

## The layer model

| Layer | Format | What it is |
| --- | --- | --- |
| 1 | Full page | The universe homepage — one visual map, six topic regions |
| 2 | Full page | One canvas per topic, with clickable concept clusters |
| 3 | Popup overlay | A deep-dive sketch card. No further navigation depth |

**46 experiences:** 1 homepage + 6 topic canvases + 36 topic popups + 3 global toolkit popups.

Every Layer 3 popup uses the same four-part template: **Concept → Visual Model → Common
Mistakes → Reflection / Challenge**. The three toolkit popups (Learning Loop, Problem Breakdown
Loop, Escalation Ladder) are reachable from every page.

The site is organised around engineering concepts rather than workshop numbers or example
projects, so it stays reusable if the bootcamp's running order or example project changes.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

Requires Node 18+.

## Stack

React 18 + Vite, and nothing else. No router, no UI framework, no npm icon package:

- The hand-drawn look is plain CSS — wobbly `border-radius`, gradient paper grain, marker
  colours.
- Icons are [Font Awesome](https://fontawesome.com/search?ic=free) (free, solid style),
  loaded from a CDN in [index.html](index.html) and rendered by the tiny wrapper in
  [src/components/Icon.jsx](src/components/Icon.jsx). To use an icon, find its name in the
  Font Awesome catalog and write `<Icon name="database" />` (or `icon: 'database'` in the
  content data).
- Routing is ~30 lines of hash routing in [src/router.js](src/router.js).
- Fonts are Caveat and Kalam from Google Fonts, loaded in [index.html](index.html).

Hash routing means the build is a pure static file set needing no server rewrite rules, and
`base: './'` in [vite.config.js](vite.config.js) means it works from any sub-path.

## Deploying to GitLab Pages

[.gitlab-ci.yml](.gitlab-ci.yml) builds the site and publishes `dist/` as `public/` on every
push to the default branch. Enable Pages in the project settings and the site appears at
`https://<group>.gitlab.io/<project>/`.

To host it anywhere else, run `npm run build` and serve `dist/` as static files.

## Adding content

All content is data, no component changes needed. It lives in `src/data/`:

```
src/data/
  content.js       assembles everything; topic order here = topic numbering
  toolkit.js       the 3 global toolkit popups
  topics/          one file per topic (title, homepage bullets, clusters, popups)
```

### Add a popup to an existing topic

1. Open the topic's file in `src/data/topics/`.
2. Add an object to its `popups` array. Every popup uses the same four-part template:

```js
{
  id: 'my-new-concept',            // used in the URL: #/topic/<topic>/<this>
  title: 'My New Concept',
  blurb: 'One line shown on the canvas card.',
  concept: ['Paragraph one.', 'Paragraph two.'],
  visual: { kind: 'flow', title: '...', steps: ['...'], purpose: '...' },
  mistakes: ['...', '...'],
  reflection: 'A prompt that makes learners apply the concept.'
}
```

3. Reference its `id` from one of the topic's `clusters` so it appears on the canvas.

### Add a whole new topic

1. Copy any file in `src/data/topics/` and edit it (`id`, `title`, `color`, `orbit`,
   `clusters`, `popups`).
2. Import it in [src/data/content.js](src/data/content.js) and add it to the `topics` array.
   Its position in that array sets its number. The homepage map has six slots; topics beyond
   six are reachable from the topic-to-topic navigation on every canvas.

### Visual models

A popup declares its visual model by `kind`, and
[src/components/VisualModel.jsx](src/components/VisualModel.jsx) draws it in CSS:

| `kind` | Renders as |
| --- | --- |
| `flow` | Numbered steps with arrows between them |
| `loop` | A flow that notes it returns to the start |
| `ladder` | Rungs climbing a vertical rail |
| `pyramid` | Widest tier at the bottom |
| `list` | Diamond-bulleted points |
| `columns` | Two columns, e.g. safe vs risky (`left`/`right` with `heading` + `items`) |
| `compare` | A weak vs strong example pair (`weak`/`strong` strings) |

To add a new kind, add a `case` to the `switch` in `VisualModel.jsx` and style it in
`styles.css`.

### Icons

`icon` values are Font Awesome names — browse
[fontawesome.com/search?ic=free](https://fontawesome.com/search?ic=free), copy the name
(e.g. `database`, `code-branch`), done.

## Homepage layout

The map is a 3×3 CSS grid mirroring the sketch:

```
 1        kicker        2
 6        PLANET        3
 5    people card       4
```

The six slots are assigned to topics by array order in
[src/components/Home.jsx](src/components/Home.jsx). The doodles (rocket, stars, planets,
and the short arrows pointing at the regions) are emoji and Font Awesome icons placed by
the `PLANET_DOODLES` array at the top of that file. They are anchored to the planet's own
box with pixel offsets, so they hug the planet and can never drift onto the surrounding
text — edit positions there, no drawing code involved. Below 860px the grid collapses to
one column and the arrows are hidden.

## Routes

| URL | Shows |
| --- | --- |
| `#/` | Homepage |
| `#/topic/<topicId>` | Topic canvas |
| `#/topic/<topicId>/<popupId>` | Canvas with a popup open |
| `#/toolkit/<popupId>` | Homepage with a toolkit popup open |

Because popups are routed, any deep dive can be linked to directly — useful for dropping a
single concept into a workshop chat.

## Notes for facilitators

The guide's principle applies here too: this site supports the workshop, it is not the
workshop. The strongest delivery is still drawing diagrams live and letting cadets reason
through scenarios. Use the popups as prompts, and as somewhere for cadets to go afterwards.

## Source material

- `Cadet Software Engineering Bootcamp 2.pdf` — the facilitator guide (curriculum, teaching
  points, diagrams, misconceptions, activities)
- `software_engineering_universe_layers.pdf` — the layered site architecture (layer model,
  popup inventory, popup template)
