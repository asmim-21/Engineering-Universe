// All learning content, assembled from one file per topic.
//
// TO ADD A POPUP: open the relevant file in ./topics/ and append an object
// to its `popups` array — see the comment at the top of any topic file.
//
// TO ADD A TOPIC: copy an existing file in ./topics/, edit it, and import +
// list it below. Its position in the `topics` array sets its number and its
// slot on the homepage map (first 3 go left, last 3 go right).

import built from './topics/01-how-software-gets-built.js'
import apps from './topics/02-how-modern-applications-work.js'
import problems from './topics/03-solving-problems-like-an-engineer.js'
import reliable from './topics/04-building-reliable-software.js'
import production from './topics/05-getting-software-to-production.js'
import effective from './topics/06-being-an-effective-engineer.js'

export { toolkit } from './toolkit.js'
import { toolkit } from './toolkit.js'

export const topics = [built, apps, problems, reliable, production, effective].map((topic, i) => ({
  ...topic,
  num: i + 1
}))

export const topicById = Object.fromEntries(topics.map((t) => [t.id, t]))

// Every popup, keyed by id, with its owning topic's id and tone attached —
// lets the router resolve "#/topic/x/popup-id" without the caller needing
// to know which topic a popup belongs to.
export const allPopups = Object.fromEntries([
  ...topics.flatMap((t) => t.popups.map((p) => [p.id, { ...p, topicId: t.id, tone: t.tone }])),
  ...toolkit.map((p) => [p.id, { ...p, isToolkit: true }])
])
