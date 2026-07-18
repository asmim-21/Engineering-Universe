// All learning content, assembled from one file per topic.
//
// Structure mirrors the layered site architecture:
//   Layer 1 = homepage (built from `topics` + `toolkit` + `stickies`)
//   Layer 2 = one canvas per topic (`topics[].clusters`)
//   Layer 3 = popups (`topics[].popups` and `toolkit`)
//
// TO ADD CONTENT, see "Adding content" in the README. In short:
//   - New popup:  add an object to the `popups` array of a topic file and
//     reference its id from a cluster.
//   - New topic:  copy an existing file in ./topics/, edit it, and add it to
//     the list below. Order here decides its number and homepage position.

import howSoftwareGetsBuilt from './topics/how-software-gets-built.js'
import howModernApplicationsWork from './topics/how-modern-applications-work.js'
import solvingProblemsLikeAnEngineer from './topics/solving-problems-like-an-engineer.js'
import buildingReliableSoftware from './topics/building-reliable-software.js'
import gettingSoftwareToProduction from './topics/getting-software-to-production.js'
import beingAnEffectiveEngineer from './topics/being-an-effective-engineer.js'

export { toolkit } from './toolkit.js'
import { toolkit } from './toolkit.js'

export const topics = [
  howSoftwareGetsBuilt,
  howModernApplicationsWork,
  solvingProblemsLikeAnEngineer,
  buildingReliableSoftware,
  gettingSoftwareToProduction,
  beingAnEffectiveEngineer
].map((topic, i) => ({ ...topic, num: i + 1 }))

// Small bits of homepage copy (left rail).
export const stickies = {
  mindset: [
    {
      title: 'Be Curious',
      icon: 'lightbulb',
      highlight: 'hl-yellow',
      lines: ['Ask questions.', 'Challenge assumptions.']
    },
    {
      title: 'Solve Problems',
      icon: 'mountain',
      highlight: 'hl-green',
      lines: ['Break it down.', 'Try things.', 'Learn.']
    },
    {
      title: 'Build Together',
      icon: 'people-group',
      highlight: 'hl-purple',
      lines: ['Communicate.', 'Share knowledge.', 'Lift others.']
    }
  ]
}

export const safetyBoundary =
  'Explore, but stay inside the boundary: do not experiment in production, do not delete or mutate real data, do not bypass security, and ask before running anything with unclear impact.'

// Lookup helpers ------------------------------------------------------------

export const topicById = Object.fromEntries(topics.map((t) => [t.id, t]))

export const allPopups = Object.fromEntries([
  ...topics.flatMap((t) => t.popups.map((p) => [p.id, { ...p, topicId: t.id, color: t.color }])),
  ...toolkit.map((p) => [p.id, { ...p, color: 'ink', isToolkit: true }])
])
