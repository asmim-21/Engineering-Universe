// Global toolkit popups — reachable from every page via the "Toolkit" button.
// Same shape as topic popups, minus `misconceptions`. Each loop is written to
// stand entirely on its own: read just this and you should know exactly what
// to do next time you're stuck, overwhelmed, or about to ask for help.
export const toolkit = [
  {
    id: 'learning-loop',
    title: 'Learning Loop',
    blurb: 'Unknown → research → experiment safely → form hypothesis → validate → apply learning.',
    concept: 'Reach for this the moment you hit unfamiliar technology, an unread part of the codebase, or a tool you have never touched. It turns "I don\'t know this" into a calm, repeatable process instead of a panic spiral — it is the same loop senior engineers use, they just move through it faster.',
    visual: {
      kind: 'flow',
      label: 'Independent learning loop.',
      steps: [
        { icon: 'magnifying-glass', label: 'Identify what is unknown', desc: "Name the exact gap in one sentence — not \"I don't understand auth\", but \"I don't know how our token refresh actually works.\"", purpose: 'Turn a vague feeling of confusion into one specific, answerable question.', question: "What exactly don't I understand yet?" },
        { icon: 'book', label: 'Research using trusted sources', desc: 'Check official docs, the actual code, and existing tickets before anything else — leave forums and random blog posts for last.', purpose: 'Gather reliable information before guessing or asking anyone.', question: 'Where would the real answer already be written down?' },
        { icon: 'flask', label: 'Experiment safely', desc: 'Try it in a local branch, a sandbox, or a throwaway script — somewhere a wrong guess costs nothing.', purpose: 'Test your understanding without risking anything real.', question: "Where can I try this if I'm wrong, with zero consequence?" },
        { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Write down, in one sentence, what you now believe is true — so you can check it, not just feel it.', purpose: 'Convert scattered findings into one clear, testable belief.', question: 'What do I now think is actually going on?' },
        { icon: 'clipboard-check', label: 'Validate or adjust', desc: "Run the real case and compare it to your hypothesis — if it's wrong, that's information, not failure; refine it and try again.", purpose: 'Confirm your hypothesis holds under a real test, not just in theory.', question: 'Did the result actually match what I expected?' },
        { icon: 'rocket', label: 'Apply the learning', desc: 'Use it in the real task at hand, and leave a note — a comment, a doc line, a message — so the next person learns faster than you did.', purpose: 'Turn private understanding into delivered work and shared knowledge.', question: 'How do I use this right now, and who else needs to know?' }
      ]
    },
    reflection: 'What is the unknown in front of you right now — and where would the real answer already be written down?'
  },
  {
    id: 'problem-breakdown-loop',
    title: 'Problem Breakdown Loop',
    blurb: 'Outcome → knowns → unknowns → systems → tasks → smallest useful delivery → iterate.',
    concept: 'Reach for this the moment a task feels too big to start — a vague ticket, an open-ended feature, or a "can you look into X". It stops you freezing or over-building by forcing the work into one small, shippable first slice, with the rest queued up behind it.',
    visual: {
      kind: 'flow',
      label: 'Problem breakdown loop.',
      steps: [
        { icon: 'bullseye', label: 'Understand the outcome', desc: "State in one sentence what changes for the user or system once this is done — if you can't, you're not ready to start yet.", purpose: 'Anchor every later decision in the actual result needed.', question: 'What result am I actually trying to produce?' },
        { icon: 'list-check', label: 'List knowns and unknowns', desc: 'Write two short lists side by side: what you already know for certain, and what you are assuming or guessing.', purpose: 'Separate solid ground from the parts that still need investigation.', question: "What am I sure of, and what am I just assuming?" },
        { icon: 'diagram-project', label: 'Identify systems involved', desc: 'Name every service, table, API, or team this will touch — surprises usually hide in the one system you forgot to check.', purpose: 'Map the blast radius before you touch any of it.', question: 'What parts of the system does this actually reach?' },
        { icon: 'puzzle-piece', label: 'Break into smaller tasks', desc: 'Split the work into pieces you could each finish and demo in under a day — if a piece is bigger than that, split it again.', purpose: 'Turn one large, risky task into several small, checkable ones.', question: 'What is the next piece small enough to finish today?' },
        { icon: 'cube', label: 'Deliver the smallest useful version', desc: "Ship the thinnest version that actually works end-to-end — even if it's ugly, manual, or missing edge cases for now.", purpose: 'Get something real in front of feedback as early as possible.', question: 'What is the smallest version that is genuinely useful?' },
        { icon: 'arrows-rotate', label: 'Validate and iterate', desc: 'Check it against the outcome from step one, get real feedback, and fold what you learn into the next slice.', purpose: "Confirm you're still building the right thing before going further.", question: 'Does this still match the outcome I started with?' }
      ]
    },
    reflection: 'What is the smallest useful version of your current task — and what would you cut to ship it today?'
  },
  {
    id: 'escalation-ladder',
    title: 'Escalation Ladder',
    blurb: 'Think → experiment safely → research → form hypothesis → ask for help with context and evidence.',
    concept: "Climb this before you ask anyone for help — on a bug, a blocker, or anything you're stuck on. Working through each rung first means that when you do ask, you ask a sharp, specific question that costs someone else thirty seconds instead of thirty minutes.",
    visual: {
      kind: 'flow',
      label: 'Escalation ladder.',
      loop: false,
      steps: [
        { icon: 'brain', label: 'Think through the problem', desc: 'Spend a few focused minutes reasoning about it alone before touching anything else — most blockers loosen slightly just from this.', purpose: 'Use your own understanding before spending anyone else\'s time.', question: 'What do I already know that could explain this?' },
        { icon: 'flask', label: 'Experiment safely', desc: 'Try the smallest safe thing that would confirm or rule out your first idea.', purpose: 'Turn a guess into evidence with a low-risk test.', question: 'What quick, safe test would tell me something new?' },
        { icon: 'magnifying-glass', label: 'Search everything relevant', desc: 'Check docs, the codebase, tickets, past PRs, and commit history — the answer has often already been solved once.', purpose: "Rule out that this has already been answered somewhere.", question: 'Has someone already hit and solved this before?' },
        { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Write one sentence naming what you now think is actually wrong.', purpose: 'Arrive at a specific, nameable suspicion, not just confusion.', question: 'What do I think is actually causing this?' },
        { icon: 'comments', label: 'Ask for help with evidence', desc: 'Share what you were trying to do, what you tried, what you found, and your best guess — then ask one precise question.', purpose: 'Make it fast and easy for someone else to help you.', question: 'What is the one specific thing I need answered?' }
      ]
    },
    reflection: 'Which rung are you on right now — and what would climbing one more rung actually get you?'
  }
]
