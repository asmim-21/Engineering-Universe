// All learning content, assembled from one file per topic and grouped into two
// universes: Software Engineering and Computer Engineering.
//
// TO ADD A POPUP: open the relevant file in ./topics/ (or ./topics/computer/)
// and append an object to its `popups` array — see the comment at the top of
// any topic file.
//
// TO ADD A TOPIC: copy an existing file, edit it, and import + list it in the
// matching universe below. Its position in that universe's `topics` array sets
// its number and its slot on the homepage map (first 3 left, last 3 right).
//
// TO ADD A UNIVERSE: add another entry to the `universes` array with its own
// topics and toolkit.

// --- Software Engineering topics ---
import built from './topics/software/01-how-software-gets-built.js'
import apps from './topics/software/02-how-modern-applications-work.js'
import problems from './topics/software/03-solving-problems-like-an-engineer.js'
import reliable from './topics/software/04-building-reliable-software.js'
import production from './topics/software/05-getting-software-to-production.js'
import effective from './topics/software/06-being-an-effective-engineer.js'

// --- Computer Engineering topics ---
import computers from './topics/computer/01-how-computers-work.js'
import os from './topics/computer/02-operating-systems.js'
import networking from './topics/computer/03-networking-fundamentals.js'
import internet from './topics/computer/04-how-the-internet-works.js'
import security from './topics/computer/05-security-fundamentals.js'
import troubleshooting from './topics/computer/06-systems-troubleshooting.js'

import { toolkit as softwareToolkit } from './toolkit-software.js'
import { toolkit as computerToolkit } from './toolkit-computer.js'

// Each universe owns its topics, its toolkit, and the copy shown on its map.
// `num` and `universe` are stamped onto every topic here so the rest of the app
// never has to know which file a topic came from.
const defineUniverse = (u) => ({
  ...u,
  topics: u.topics.map((topic, i) => ({ ...topic, num: i + 1, universe: u.id }))
})

export const universes = [
  defineUniverse({
    id: 'software',
    name: 'Software Engineering',
    short: 'Software',
    tagline: 'How software is built, delivered, and kept alive.',
    hero: {
      line1: 'The Software',
      line2: 'Engineering',
      em: 'Universe',
      blurb: 'How software is really built — delivery, architecture, problem-solving, reliability, release, and craft.'
    },
    core: {
      kicker: 'At the centre',
      title: 'Engineering thinking',
      quote: '"Software is more than code — it is delivering something that keeps working for real users."'
    },
    topics: [built, apps, problems, reliable, production, effective],
    toolkit: softwareToolkit
  }),
  defineUniverse({
    id: 'computer',
    name: 'Computer Engineering',
    short: 'Computer',
    tagline: 'How computers run software and why systems behave — or fail — the way they do.',
    hero: {
      line1: 'The Computer',
      line2: 'Engineering',
      em: 'Universe',
      blurb: 'What happens underneath software — hardware, systems, networks, and troubleshooting.'
    },
    core: {
      kicker: 'At the centre',
      title: 'Systems thinking',
      quote: '"Look underneath the application — reason about the computer, network, and evidence, not a guess."'
    },
    topics: [computers, os, networking, internet, security, troubleshooting],
    toolkit: computerToolkit
  })
]

export const universeById = Object.fromEntries(universes.map((u) => [u.id, u]))

export const DEFAULT_UNIVERSE = 'software'

// Flattened views across every universe, kept for convenience.
export const topics = universes.flatMap((u) => u.topics)
export const topicById = Object.fromEntries(topics.map((t) => [t.id, t]))

// Every popup, keyed by id, with its owning topic's id and tone attached — lets
// the router resolve "#/topic/x/popup-id" without the caller needing to know
// which topic (or universe) a popup belongs to. Popup ids are unique across all
// universes.
export const allPopups = Object.fromEntries([
  ...universes.flatMap((u) =>
    u.topics.flatMap((t) => t.popups.map((p) => [p.id, { ...p, topicId: t.id, tone: t.tone }]))
  ),
  ...universes.flatMap((u) => u.toolkit.map((p) => [p.id, { ...p, isToolkit: true }]))
])
