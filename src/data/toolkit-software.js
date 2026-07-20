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
      steps: [
        { icon: 'magnifying-glass', label: 'Identify what is unknown', desc: 'Define the question or problem you want to understand.' },
        { icon: 'book', label: 'Research using trusted sources', desc: 'Gather information from credible and relevant sources.' },
        { icon: 'flask', label: 'Experiment safely', desc: 'Test your ideas in a safe, non-production space.' },
        { icon: 'lightbulb', label: 'Form a hypothesis', desc: "Make an educated guess based on what you've learned." },
        { icon: 'clipboard-check', label: 'Validate or adjust', desc: 'Check your results. Does it hold true? Refine if needed.' },
        { icon: 'rocket', label: 'Apply the learning', desc: "Use it in real projects — and share what you found." }
      ]
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
      steps: [
        { icon: 'bullseye', label: 'Understand the outcome', desc: 'Be clear on the result you need.' },
        { icon: 'list-check', label: 'List knowns and unknowns', desc: 'Separate what you know from the gaps.' },
        { icon: 'diagram-project', label: 'Identify systems involved', desc: 'Map the parts that are affected.' },
        { icon: 'puzzle-piece', label: 'Break into smaller tasks', desc: 'Split it into manageable pieces.' },
        { icon: 'cube', label: 'Deliver the smallest useful version', desc: 'Ship something small but real.' },
        { icon: 'arrows-rotate', label: 'Validate and iterate', desc: 'Check it, learn, and go again.' }
      ]
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
      loop: false,
      steps: [
        { icon: 'brain', label: 'Think through the problem', desc: 'Reason it out before acting.' },
        { icon: 'flask', label: 'Experiment safely', desc: 'Try things where nothing breaks.' },
        { icon: 'magnifying-glass', label: 'Search everything relevant', desc: 'Docs, code, tickets, previous PRs, trusted sources.' },
        { icon: 'lightbulb', label: 'Form a hypothesis', desc: "Decide what you think is going on." },
        { icon: 'comments', label: 'Ask for help with evidence', desc: 'Escalate with context and a specific question.' }
      ]
    },
    reflection: 'Which rung are you on?'
  }
]
