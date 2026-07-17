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

React 18 + Vite, and nothing else. No router, no UI framework, no icon package:

- The hand-drawn look is plain CSS — wobbly `border-radius`, gradient paper grain, marker
  colours. The rings circling the topic titles are inline SVG ellipses rather than
  `border-radius`, so they always enclose a title however many lines it wraps to.
- Icons are inline SVG in [src/components/Icons.jsx](src/components/Icons.jsx).
- Routing is ~30 lines of hash routing in [src/router.js](src/router.js).
- Fonts are Caveat and Kalam from Google Fonts, loaded in [index.html](index.html).

Hash routing means the build is a pure static file set needing no server rewrite rules, and
`base: './'` in [vite.config.js](vite.config.js) means it works from any sub-path.

## Deploying to GitLab Pages

[.gitlab-ci.yml](.gitlab-ci.yml) builds the site and publishes `dist/` as `public/` on every
push to the default branch. Enable Pages in the project settings and the site appears at
`https://<group>.gitlab.io/<project>/`.

To host it anywhere else, run `npm run build` and serve `dist/` as static files.

## Editing the content

All 39 popups, the six topics, and the homepage notes live in one file:
[src/data/content.js](src/data/content.js). Adding or rewording a concept means editing that
file — no component changes needed.

A topic looks like this:

```js
{
  id: 'how-software-gets-built',
  num: 1,
  title: 'How Software Gets Built',
  color: 'red',            // red | blue | green | yellow | orange | purple
  tagline: '...',          // italic line under the region on the homepage
  focus: '...',            // the concept focus line on the canvas
  trueLesson: '...',       // the highlighted TRUE LESSON callout
  orbit: [{ label, icon }] // the four bullets on the homepage region
  clusters: [...],         // canvas groupings, each listing popup ids
  popups: [...]            // the six Layer 3 deep dives
}
```

A popup declares its visual model by `kind`, and
[src/components/VisualModel.jsx](src/components/VisualModel.jsx) draws it in CSS:

| `kind` | Renders as |
| --- | --- |
| `flow` | Numbered steps with arrows between them |
| `loop` | A flow that notes it returns to the start |
| `ladder` | Rungs climbing a vertical rail |
| `pyramid` | Widest tier at the bottom |
| `list` | Diamond-bulleted points |
| `columns` | Two columns, e.g. safe vs risky |
| `compare` | A weak vs strong example pair |

`icon` names come from the set in [src/components/Icons.jsx](src/components/Icons.jsx) — add a
new path to that file to add a new icon.

## Homepage layout

The map is a 3×3 CSS grid mirroring the sketch, which is worth knowing before moving anything:

```
 1        kicker        2
 6        PLANET        3
 5    people card       4
```

That leaves empty corridors between the columns, and the floating decorations (rocket, stars,
small planets in [src/components/Decorations.jsx](src/components/Decorations.jsx)) are
positioned in those gaps so they never land on text. If you resize the planet or the columns,
re-check those positions. Below 860px the grid collapses to one column and the decorations and
arrows are hidden.

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
