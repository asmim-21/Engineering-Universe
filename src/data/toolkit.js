// Global toolkit popups, reachable from every page.
// Same four-part template as topic popups: concept, visual, mistakes, reflection.
// Layer 3 popups available from every page via the persistent toolkit panel.
export const toolkit = [
  {
    id: 'learning-loop',
    title: 'Learning Loop',
    icon: 'arrows-rotate',
    blurb: 'A repeatable process for learning unfamiliar technical material.',
    concept: [
      'This gives you a repeatable process for learning unfamiliar technical material. You do not need to know everything — you need a way to figure it out.'
    ],
    visual: {
      kind: 'loop',
      title: 'Independent learning loop',
      steps: [
        'Identify what is unknown',
        'Research using trusted sources',
        'Experiment safely in a non-production environment',
        'Form a hypothesis',
        'Validate or adjust the hypothesis',
        'Apply the learning'
      ],
      purpose: 'Unknown → research → experiment → hypothesise → validate → apply.'
    },
    mistakes: [
      'Reading endlessly instead of trying something small.',
      'Experimenting without a hypothesis, so the result teaches nothing.',
      'Learning something and never applying it to the actual task.'
    ],
    reflection: 'What is the one unknown that, if resolved, would unblock the rest of your task?'
  },
  {
    id: 'problem-breakdown-loop',
    title: 'Problem Breakdown Loop',
    shortTitle: 'Problem Breakdown',
    icon: 'puzzle-piece',
    blurb: 'Prevents you from being overwhelmed by large or vague tasks.',
    concept: [
      'This prevents large or vague tasks from becoming overwhelming. Start from the outcome, not from the code.'
    ],
    visual: {
      kind: 'loop',
      title: 'Problem breakdown loop',
      steps: [
        'Understand the outcome',
        'List knowns and unknowns',
        'Identify systems involved',
        'Break the work into smaller tasks',
        'Deliver the smallest useful version',
        'Validate and iterate'
      ],
      purpose:
        'Outcome → knowns → unknowns → systems → tasks → smallest useful delivery → iterate.'
    },
    mistakes: [
      'Breaking work down by file rather than by outcome.',
      'Defining a "smallest version" that still takes three weeks.',
      'Never revisiting the breakdown once the work starts.'
    ],
    reflection: 'What is the smallest version of your task that someone could actually review?'
  },
  {
    id: 'escalation-ladder',
    title: 'Escalation Ladder',
    icon: 'stairs',
    blurb: 'Teaches initiative without discouraging help-seeking.',
    concept: [
      'This teaches initiative without discouraging help-seeking. Climb the rungs, then ask well.'
    ],
    visual: {
      kind: 'ladder',
      title: 'Escalation ladder',
      steps: [
        'Think through the problem',
        'Experiment safely',
        'Search docs, code, tickets, previous PRs, and trusted external sources',
        'Form a hypothesis',
        'Ask for help with context, evidence, and a specific question'
      ],
      purpose:
        'Think → experiment safely → research → form hypothesis → ask with context and evidence.'
    },
    mistakes: [
      'Skipping straight to rung five.',
      'Refusing to ever reach rung five.',
      'Asking without the evidence you already collected on rungs one to four.'
    ],
    reflection: 'Which rung do you personally tend to skip — and what does that cost you?'
  }
]
