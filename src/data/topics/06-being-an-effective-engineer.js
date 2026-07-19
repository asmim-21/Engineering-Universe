export default {
  id: 'effective',
  title: 'Being an Effective Engineer',
  tone: 'c6',
  blurb: 'Communication, documentation, stakeholders, responsible AI use, escalation, and continuous learning.',
  tags: ['Communication', 'Docs', 'Stakeholders', 'AI'],
  popups: [
    {
      id: 'comms',
      title: 'Communication Skills',
      blurb: 'Clear, audience-aware communication that separates facts, assumptions, unknowns, and next steps.',
      whatIs: {
        text: 'Good engineering communication reduces ambiguity — precise, concise, and aware of the audience.',
        ensures: [
          'State context before details',
          'Separate facts from assumptions',
          'Be clear on knowns and unknowns',
          'Adapt depth to the audience'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Engineering communication loop — communication is part of delivery, not separate from it.',
        steps: [
          { icon: 'circle-question', label: 'Problem', desc: 'Start from what needs solving.' },
          { icon: 'magnifying-glass', label: 'Investigate', desc: 'Dig into the details.' },
          { icon: 'book', label: 'Research', desc: 'Find trusted information.' },
          { icon: 'file-lines', label: 'Document', desc: 'Write down what you learn.' },
          { icon: 'comments', label: 'Discuss', desc: 'Align with others.' },
          { icon: 'hammer', label: 'Build', desc: 'Do the work.' },
          { icon: 'share-nodes', label: 'Share outcome', desc: 'Tell people the result.' }
        ]
      },
      misconceptions: [
        { wrong: 'Good engineers only need technical skill.', right: 'Clarity and collaboration create impact too.' },
        { wrong: 'Impressive jargon signals expertise.', right: 'Precise, plain language communicates better.' }
      ],
      takeaways: [
        'Communication is part of delivery.',
        'Context first, details second.',
        'Match the message to the audience.'
      ],
      reflection: 'Explain the same technical decision twice: once to an engineer, once to a stakeholder.',
      checks: [
        'Why state context first?',
        'Facts vs assumptions?',
        'How do you adapt for a stakeholder?',
        'What should you confirm in writing?'
      ]
    },
    {
      id: 'docs',
      title: 'Documentation',
      blurb: 'Useful requirements, design notes, runbooks, handover notes, and decision records.',
      whatIs: {
        text: 'Good docs help future readers understand what exists, why, and how to use, change, or support it.',
        ensures: [
          '**Requirements & design notes:** what and how',
          '**Runbook:** how to operate or troubleshoot',
          '**Handover note:** what changed and what remains',
          '**Decision record:** what was decided and why'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'What good documentation answers.',
        loop: false,
        steps: [
          { icon: 'box', label: 'What exists', desc: "The thing you're describing." },
          { icon: 'circle-question', label: 'Why it exists', desc: 'The reason behind it.' },
          { icon: 'book-open', label: 'How to use it', desc: 'Steps to operate it.' },
          { icon: 'screwdriver-wrench', label: 'How to change it', desc: 'How to modify it safely.' },
          { icon: 'headset', label: 'How to support it', desc: 'How to keep it running.' }
        ]
      },
      misconceptions: [
        { wrong: 'Documentation is admin work.', right: 'It supports delivery and operations.' },
        { wrong: 'Any note counts as documentation.', right: 'Good docs answer what, why, and how.' }
      ],
      takeaways: [
        'Write for the next reader.',
        'Good docs answer what, why, and how.',
        'Stale notes are worse than none.'
      ],
      reflection: 'Improve the note "Fixed booking bug" with context, cause, change, validation, and follow-up actions.',
      checks: [
        'What should good docs answer?',
        'What is a runbook?',
        'What goes in a handover note?',
        'Improve "Fixed booking bug".'
      ]
    },
    {
      id: 'stake',
      title: 'Stakeholder Thinking',
      blurb: 'Understanding users, constraints, trade-offs, risk, time, cost, reliability, and success measures.',
      whatIs: {
        text: 'Technical work sits in a business context — clarify the outcome, trade-offs, and consequences.',
        ensures: [
          'Ask who needs it and what problem it solves',
          'Ask what happens if it is not built',
          'Ask what constraints exist',
          'Ask how success will be measured'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Turning a request into requirements.',
        loop: false,
        steps: [
          { icon: 'comment-dots', label: 'Vague request', desc: 'A fuzzy ask arrives.' },
          { icon: 'circle-question', label: 'Clarifying questions', desc: "Pin down what's meant." },
          { icon: 'scale-balanced', label: 'Constraints and trade-offs', desc: 'Weigh cost, risk, and time.' },
          { icon: 'bullseye', label: 'Success measures', desc: "Decide how you'll judge it." },
          { icon: 'list-check', label: 'Possible requirements', desc: 'Turn it into concrete work.' }
        ]
      },
      misconceptions: [
        { wrong: 'Stakeholders always know exactly what they want.', right: 'They often need help turning wants into requirements.' },
        { wrong: 'Just build the request as stated.', right: 'Clarify outcomes and surface trade-offs first.' }
      ],
      takeaways: [
        'Requests are not requirements.',
        'Different stakeholders mean different things.',
        'Clarify success before building.'
      ],
      reflection: 'Turn "Make desk booking better" into clarifying questions. How might different stakeholders mean different things by "better"?',
      checks: [
        'Turn a vague request into questions.',
        'Why ask "what if we do not build it?"',
        'What might "better" mean to different people?',
        'How is success measured?'
      ]
    },
    {
      id: 'ai',
      title: 'Responsible AI Usage',
      blurb: 'Using AI as an assistant while validating outputs against trusted sources, system context, tests, and reviews.',
      whatIs: {
        text: 'Treat AI as an assistant, not an authority — it accelerates work but you must verify the output.',
        ensures: [
          '**Good uses:** explain code, draft docs, suggest tests',
          '**Risks:** hallucinated APIs, insecure or outdated code',
          'Validate against trusted sources and context',
          'Never paste sensitive data unless approved'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Responsible AI usage — frames AI as a productivity tool that still requires engineering judgement.',
        loop: false,
        steps: [
          { icon: 'robot', label: 'Use AI to accelerate exploration', desc: 'Draft and explore faster.' },
          { icon: 'magnifying-glass', label: 'Validate against trusted sources', desc: 'Check it against reality and context.' },
          { icon: 'flask', label: 'Test the output', desc: "Run it, don't just trust it." },
          { icon: 'file-lines', label: 'Document assumptions', desc: 'Record what you assumed.' },
          { icon: 'user-check', label: 'Ask for review when risk is high', desc: 'Get a human when it matters.' }
        ]
      },
      misconceptions: [
        { wrong: 'AI output can be copied without understanding.', right: 'Review, test, and understand anything generated.' },
        { wrong: 'AI is always right.', right: 'It can be wrong, insecure, or missing context.' }
      ],
      takeaways: [
        'AI accelerates; judgement decides.',
        'Verify against docs and tests.',
        'Guard sensitive information.'
      ],
      reflection: 'Take an AI-suggested solution. What must be verified before trusting it — for security, correctness, and system context?',
      checks: [
        'What must you verify in AI output?',
        'Good uses of AI here?',
        'What are the risks?',
        'When must a human review?'
      ]
    },
    {
      id: 'escalate',
      title: 'Effective Escalation',
      blurb: 'High-quality help requests with context, evidence, hypothesis, and a specific ask.',
      whatIs: {
        text: 'A strong escalation includes context, attempts, evidence, hypothesis, and a specific question.',
        ensures: [
          '**Context & goal:** what and why',
          '**Attempts:** what you already tried',
          '**Evidence:** what you observed',
          '**Hypothesis & question:** your best guess and the ask'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Effective escalation format — a reusable help-seeking template.',
        loop: false,
        steps: [
          { icon: 'circle-info', label: 'Context', desc: "What you're working on." },
          { icon: 'list-check', label: 'What I tried', desc: 'Your attempts so far.' },
          { icon: 'magnifying-glass', label: 'What I found', desc: 'The evidence gathered.' },
          { icon: 'lightbulb', label: 'My hypothesis', desc: 'What you think is happening.' },
          { icon: 'circle-question', label: 'Specific question', desc: 'The exact help you need.' }
        ]
      },
      misconceptions: [
        { wrong: 'Asking for help means failing.', right: 'A clear, evidenced ask shows ownership.' },
        { wrong: 'Dump everything and hope.', right: 'Structure the ask so it is easy to answer.' }
      ],
      takeaways: [
        'Escalate with evidence, not just symptoms.',
        'A specific ask gets a specific answer.',
        'Good escalation demonstrates ownership.'
      ],
      reflection: 'Write a help request using the format. Review it for clarity, evidence, and specificity.',
      checks: [
        'What five parts make a good escalation?',
        'Why include what you tried?',
        'How does this differ from "it broke"?',
        'Write a help request using the format.'
      ]
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      blurb: 'Building habits that help engineers keep improving after each task, bug, release, and review.',
      whatIs: {
        text: 'The independent learning loop is a repeatable way to learn any unfamiliar language, system, or process.',
        ensures: [
          'Identify what is unknown',
          'Research trusted sources',
          'Experiment safely, then hypothesise',
          'Validate, adjust, and apply'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Independent learning loop.',
        steps: [
          { icon: 'magnifying-glass', label: 'Identify what is unknown', desc: 'Name the gap in your knowledge.' },
          { icon: 'book', label: 'Research using trusted sources', desc: 'Gather from credible places.' },
          { icon: 'flask', label: 'Experiment safely', desc: "Try it where it can't hurt." },
          { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Make an educated guess.' },
          { icon: 'clipboard-check', label: 'Validate or adjust', desc: 'Check and refine.' },
          { icon: 'rocket', label: 'Apply the learning', desc: 'Put it to real use.' }
        ]
      },
      misconceptions: [
        { wrong: 'Good engineers only need technical skill.', right: 'Clarity, collaboration, and learning create impact.' },
        { wrong: 'Asking for help means failing.', right: 'Independent learning includes knowing when to ask.' }
      ],
      takeaways: [
        'The loop works for any unknown.',
        'Learning is a habit, not a one-off.',
        'Apply what you learn to the real task.'
      ],
      reflection: 'Write one principle you will use when you next feel stuck on a task.',
      checks: [
        'What are the steps of the loop?',
        'Why experiment before applying?',
        'How do you validate a hypothesis?',
        'What will you do next time you are stuck?'
      ]
    }
  ]
}
