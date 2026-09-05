# Software Engineering Universe

An interactive, sketch-style guide to how software engineering, computer systems, and programming really work.

This site brings together three learning universes — Software Engineering, Computer Engineering, and Programming — into one visual map. It helps you explore how software is built, how systems behave, and how engineers think through real problems in a simple, approachable experience.

## What this site contains

This project is a data-driven, static web experience that presents learning content as an interactive map rather than a traditional course page.

- A homepage that acts like a visual universe map with topic regions and a central “engineering thinking” card.
- Three major learning universes:
  - Software Engineering
  - Computer Engineering
  - Programming
- Topic canvases for each topic, with concept cards you can open.
- Popup-style deep dives for each concept, each following a consistent structure:
  - Concept
  - Visual Model
  - Common Mistakes
  - Reflection
- A global toolkit that can be opened from any page, with reusable thinking models such as the Learning Loop, Problem Breakdown Loop, and Escalation Ladder.
- A lightweight, static experience built with React and Vite, with content stored as data rather than hardcoded in components.

## What content it covers

### Software Engineering
This universe focuses on how software is actually built and delivered in practice.

- How software gets built
- How modern applications work
- Solving problems like an engineer
- Building reliable software
- Getting software to production
- Being an effective engineer

### Computer Engineering
This universe looks at the systems underneath software and how they behave.

- How computers work
- Operating systems
- Networking fundamentals
- How the internet works
- Security fundamentals
- Systems troubleshooting

### Programming
This universe covers programming fundamentals and the craft of writing maintainable code.

- Bash
- Python
- Java
- C
- Object-oriented programming
- Data structures and algorithms
- Design patterns
- Clean coding practices

### Toolkit concepts
Each universe has its own toolkit of practical thinking models. Examples include:

- Learning Loop
- Problem Breakdown Loop
- Escalation Ladder
- Language Learning Loop
- Debugging Loop
- Code Review Mindset
- Refactoring Safely

## How the experience is structured

The site uses a simple layered flow:

- Home page: the full map of topics, with tabs for switching universes
- Topic canvas: a focused view of one topic with its concept cards
- Popup: a deep-dive explanation of a single idea
- Toolkit overlay: a universe-specific collection of reusable thinking models available from any page

The app uses hash-based routes, so each view can be linked directly:

```text
#/                         Software Engineering home
#/software                 Software Engineering home
#/computer                 Computer Engineering home
#/programming              Programming home
#/software/toolkit         Software Engineering toolkit
#/topic/<topic-id>         Topic canvas
#/topic/<topic-id>/<id>    Topic canvas with a concept popup
```

The legacy `#/toolkit` route opens the default Software Engineering toolkit.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

Requires Node 18+.

## Tech stack

The site is intentionally lightweight:

- React 18 + Vite
- Plain CSS for the hand-drawn, sketchnote-style visual feel
- Hash-based routing for simple static deployment without server rewrites
- Content stored in data files rather than embedded in UI components

## Content structure

All of the learning content lives under [src/data](src/data), and the app reads it from there.

- [src/data/content.js](src/data/content.js) assembles the universes and topics
- [src/data/toolkit-software.js](src/data/toolkit-software.js), [src/data/toolkit-computer.js](src/data/toolkit-computer.js), and [src/data/toolkit-programming.js](src/data/toolkit-programming.js) define the toolkit content
- [src/data/topics](src/data/topics) contains one topic file per learning area

This makes it easy to add new topics or concept popups without changing the UI itself.
