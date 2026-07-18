// Global toolkit popups — reachable from every page via the "Toolkit" button.
// Same shape as topic popups, minus `mistakes`.
export const toolkit = [
  {
    id: 'learning-loop',
    title: 'Learning Loop',
    blurb: 'Unknown → research → experiment safely → form hypothesis → validate → apply learning.',
    concept: 'This gives you a repeatable process for learning unfamiliar technical material.',
    visual: {
      kind: 'flow',
      label: 'Independent learning loop.',
      steps: ['Identify what is unknown', 'Research using trusted sources', 'Experiment safely in a non-production environment', 'Form a hypothesis', 'Validate or adjust the hypothesis', 'Apply the learning']
    },
    reflection: 'What is the unknown in front of you right now?'
  },
  {
    id: 'problem-breakdown-loop',
    title: 'Problem Breakdown Loop',
    blurb: 'Outcome → knowns → unknowns → systems → tasks → smallest useful delivery → iterate.',
    concept: 'This prevents you from being overwhelmed by large or vague tasks.',
    visual: {
      kind: 'flow',
      label: 'Problem breakdown loop.',
      steps: ['Understand the outcome', 'List knowns and unknowns', 'Identify systems involved', 'Break the work into smaller tasks', 'Deliver the smallest useful version', 'Validate and iterate']
    },
    reflection: 'What is the smallest useful version of your current task?'
  },
  {
    id: 'escalation-ladder',
    title: 'Escalation Ladder',
    blurb: 'Think → experiment safely → research → form hypothesis → ask for help with context and evidence.',
    concept: 'This teaches initiative without discouraging help-seeking.',
    visual: {
      kind: 'flow',
      label: 'Escalation ladder.',
      steps: ['Think through the problem', 'Experiment safely', 'Search docs, code, tickets, previous PRs, and trusted external sources', 'Form a hypothesis', 'Ask for help with context, evidence, and a specific question']
    },
    reflection: 'Which rung are you on?'
  }
]
