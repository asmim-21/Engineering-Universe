export default {
  id: 'problems',
  title: 'Solving Problems Like an Engineer',
  tone: 'c3',
  blurb: 'Ambiguity, investigation, safe experimentation, problem breakdown, and focused escalation.',
  tags: ['Ambiguity', 'Research', 'Breakdown', 'Escalation'],
  popups: [
    {
      id: 'breakdown',
      title: 'Problem Breakdown Loop',
      blurb: 'Turning big or vague work into smaller, understandable tasks.',
      whatIs: {
        text: 'Large tasks get manageable when you split them by outcome, data, UI, API, tests, and docs.',
        ensures: [
          'Start from the user outcome',
          'Split into investigation and implementation',
          'Separate must-haves from nice-to-haves',
          'Ship a small, reviewable first version'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Task breakdown model — a concrete way to break up a large feature.',
        loop: false,
        steps: [
          { icon: 'bullseye', label: 'User outcome', desc: 'Start from the result users need.', purpose: 'Anchor the work in the result users need.', question: 'What outcome do users need?' },
          { icon: 'gears', label: 'Functional behaviour', desc: 'What the system must do.', purpose: 'Define what the system must do.', question: 'What must it do?' },
          { icon: 'database', label: 'Data changes', desc: 'New or changed data.', purpose: 'Identify new or changed data.', question: 'What data changes?' },
          { icon: 'plug', label: 'API changes', desc: 'New or changed endpoints.', purpose: 'Identify new or changed endpoints.', question: 'What endpoints change?' },
          { icon: 'window-maximize', label: 'UI changes', desc: 'Screens and interactions.', purpose: 'Define the screens and interactions.', question: 'What does the user see?' },
          { icon: 'flask', label: 'Testing', desc: "How you'll prove it works.", purpose: 'Decide how to prove it works.', question: 'How will we prove it works?' },
          { icon: 'rocket', label: 'Deployment and monitoring', desc: 'Ship it and watch it.', purpose: 'Ship it safely and watch it.', question: 'How do we ship and watch it?' },
          { icon: 'file-lines', label: 'Documentation', desc: 'Leave notes for the next person.', purpose: 'Leave notes for the next person.', question: 'What should we write down?' }
        ]
      },
      io: {
        inputs: [
          ['Feature goal', 'User need'],
          ['Outcome'],
          ['Behaviour', 'Data model'],
          ['Behaviour', 'Contracts'],
          ['Behaviour', 'Designs'],
          ['Behaviour', 'Risks'],
          ['Built feature', 'Feature flags'],
          ['What was built']
        ],
        outputs: [
          ['A clear outcome'],
          ['A behaviour list'],
          ['Schema changes'],
          ['Endpoint changes'],
          ['Screen changes'],
          ['A test plan'],
          ['A live, watched release'],
          ['Docs', 'Handover notes']
        ]
      },
      who: [
        'Product Owner, Engineer',
        'Engineer, Business Analyst',
        'Engineer',
        'Engineer',
        'Engineer, Designer',
        'Engineer, QA',
        'Engineer, DevOps',
        'Engineer'
      ],
      example: {
        title: 'Employees can create social events',
        items: [
          'Employees can create and share events.',
          'Create, edit, RSVP, and list events.',
          'Add Event and RSVP tables.',
          'Add create, list, and RSVP endpoints.',
          'Add an event form and a list screen.',
          'Unit and end-to-end tests for RSVPs.',
          'Ship behind a flag; watch errors.',
          'Document the feature and its API.'
        ]
      },
      misconceptions: [
        { wrong: 'Large tasks should be solved in one big step.', right: 'Break them into small, reviewable pieces.' },
        { wrong: 'Breaking down work is just admin.', right: 'It reduces risk and creates visible progress.' }
      ],
      takeaways: [
        'Split by outcome, not by file.',
        'A smaller first version derisks the rest.',
        'Track assumptions and open questions.'
      ],
      reflection: 'Take "Employees should be able to create social events" and split it into tasks: data model, API, UI, validation, tests, documentation.',
      checks: [
        'How would you split a large feature?',
        'What is a must-have vs a nice-to-have?',
        'What is the smallest reviewable version?',
        'Where do assumptions get tracked?'
      ]
    },
    {
      id: 'research',
      title: 'Research & Investigation',
      blurb: 'Using docs, code, logs, tickets, previous work, official sources, and validated AI support.',
      whatIs: {
        text: 'Strong juniors do not know everything — they know how to search trusted sources first.',
        ensures: [
          'Check docs, code, tickets, and past PRs',
          'Read logs and error messages carefully',
          'Prefer official docs over random blogs',
          'Use AI to explore, then verify'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Independent learning loop.',
        steps: [
          { icon: 'magnifying-glass', label: 'Identify what is unknown', desc: 'Define the question you need to answer.', purpose: 'Define the question to answer.', question: "What don't we know yet?" },
          { icon: 'book', label: 'Research using trusted sources', desc: 'Gather from credible, relevant sources.', purpose: 'Gather from credible sources.', question: 'Where is the reliable answer?' },
          { icon: 'flask', label: 'Experiment safely', desc: 'Try ideas in a non-production space.', purpose: 'Try ideas where nothing breaks.', question: 'What can we test safely?' },
          { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Make an educated guess.', purpose: 'Make an educated guess.', question: 'What do we think is true?' },
          { icon: 'clipboard-check', label: 'Validate or adjust', desc: 'Check the result; refine if needed.', purpose: 'Check the result and refine.', question: 'Does it hold up?' },
          { icon: 'rocket', label: 'Apply the learning', desc: 'Use what you learned for real.', purpose: 'Use what you learned for real.', question: 'How do we apply it?' }
        ]
      },
      example: {
        title: 'Learning an unfamiliar library',
        items: [
          'Pin down what the library actually does.',
          'Read its official docs and existing usage in the repo.',
          'Try it in a throwaway branch.',
          'Guess how to wire it into the feature.',
          'Run it and confirm the behaviour.',
          'Use it in the real change with confidence.'
        ]
      },
      io: {
        inputs: [
          ['A task', 'A knowledge gap'],
          ['Question', 'Docs, code, tickets'],
          ['Information', 'A safe space'],
          ['Observations'],
          ['Hypothesis', 'A test'],
          ['A validated answer']
        ],
        outputs: [
          ['A clear question'],
          ['Gathered information'],
          ['Observations'],
          ['A hypothesis'],
          ['A confirmed or refined answer'],
          ['Applied learning']
        ]
      },
      who: [
        'Engineer',
        'Engineer, Docs & code owners',
        'Engineer',
        'Engineer',
        'Engineer, Reviewer',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'Research means Googling only.', right: 'Docs, code, tickets, logs, and runbooks come first.' },
        { wrong: 'AI answers can be trusted as-is.', right: 'AI accelerates exploration but must be verified.' }
      ],
      takeaways: [
        'Know where to look before escalating.',
        'Source quality matters.',
        'Verify AI against trusted sources.'
      ],
      reflection: 'Given an unfamiliar repository: what does the system do, where might the feature live, and what questions remain?',
      checks: [
        'Where do you look before asking for help?',
        'Which sources are most reliable?',
        'How should you use AI here?',
        'What questions remain after research?'
      ]
    },
    {
      id: 'safe',
      title: 'Safe Experimentation',
      blurb: 'Learning by trying things in local or non-production spaces without creating unnecessary risk.',
      whatIs: {
        text: 'Exploration is part of engineering — do it in safe places so mistakes cannot hurt real users.',
        ensures: [
          'Use local and dev environments',
          'Work with dummy data and feature branches',
          'Prefer read-only or reversible changes',
          'If impact is unclear, ask before acting'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Safety boundary.',
        loop: false,
        steps: [
          { icon: 'laptop', label: 'Local environment', desc: 'Your own machine, nothing shared.', purpose: 'Explore on your own machine, nothing shared.', question: 'Can I try this locally first?' },
          { icon: 'laptop-code', label: 'Development environment', desc: 'A shared but safe space.', purpose: 'Confirm it in a shared but safe space.', question: 'Does it hold in a shared env?' },
          { icon: 'table', label: 'Dummy data', desc: 'Fake data, no real impact.', purpose: 'Use fake data so no real user is affected.', question: 'Is this data safe to touch?' },
          { icon: 'code-branch', label: 'Feature branch', desc: 'Isolated from the main line.', purpose: 'Stay isolated from the main line.', question: 'Is my work isolated?' },
          { icon: 'magnifying-glass', label: 'Read-only query', desc: 'Look without changing anything.', purpose: 'Look without changing anything.', question: 'Can I just observe first?' },
          { icon: 'rotate-left', label: 'Small reversible change', desc: 'Easy to undo if wrong.', purpose: 'Prefer changes that are easy to undo.', question: 'Can I undo this easily?' }
        ]
      },
      example: {
        title: 'Exploring a bug safely',
        items: [
          'Reproduce it on your own machine first.',
          'Confirm it in the shared dev environment.',
          'Use dummy data so no real user is affected.',
          'Work on a feature branch, off the main line.',
          'Start with read-only queries to look around.',
          'Make one small, reversible change to test a fix.'
        ]
      },
      misconceptions: [
        { wrong: 'Experimenting is always dangerous.', right: 'Safe spaces make experimenting low-risk.' },
        { wrong: 'Taking initiative means working alone forever.', right: 'Initiative includes asking when impact is unclear.' }
      ],
      takeaways: [
        'Cautious does not mean passive.',
        'Never experiment on production data.',
        'Reversible beats irreversible.'
      ],
      reflection: 'Sort a list of actions into safe and risky. Which ones would you ask about first?',
      checks: [
        'What makes an experiment safe?',
        'What is a risky action to avoid?',
        'When should you ask first?',
        'Sort three actions into safe and risky.'
      ]
    },
    {
      id: 'ladder',
      title: 'Escalation Ladder',
      blurb: 'Thinking, experimenting, researching, forming a hypothesis, then asking for help with evidence.',
      whatIs: {
        text: 'Climb the ladder before asking — so when you do ask, the question is easy to answer.',
        ensures: [
          'Think it through first',
          'Experiment safely',
          'Research docs, code, and tickets',
          'Ask with context, evidence, and a specific question'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Escalation ladder — shows what good initiative looks like before escalation.',
        loop: false,
        steps: [
          { icon: 'brain', label: 'Think', desc: 'Reason about the problem first.', purpose: 'Reason about the problem first.', question: 'What do I already understand?' },
          { icon: 'flask', label: 'Experiment safely', desc: 'Try something in a safe space.', purpose: 'Try something in a safe space.', question: 'What can I test safely?' },
          { icon: 'magnifying-glass', label: 'Research', desc: 'Search docs, code, and tickets.', purpose: 'Search docs, code, and tickets.', question: 'Where might the answer be?' },
          { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Decide what you think is happening.', purpose: 'Decide what you think is happening.', question: 'What do I think is wrong?' },
          { icon: 'comments', label: 'Ask for help with evidence', desc: 'Escalate with context and specifics.', purpose: 'Escalate with context and specifics.', question: 'What exactly do I need?' }
        ]
      },
      example: {
        title: 'Stuck on a failing test',
        items: [
          'Think through what the test actually asserts.',
          'Try tweaks in a safe branch.',
          'Search the docs and past PRs for the pattern.',
          'Hypothesise the fixture data is stale.',
          'Ask with the error, your attempts, and your guess.'
        ]
      },
      io: {
        inputs: [
          ['The problem'],
          ['Understanding', 'A safe space'],
          ['Question', 'Docs & code'],
          ['Findings'],
          ['Context', 'Evidence']
        ],
        outputs: [
          ['Initial understanding'],
          ['Observations'],
          ['Findings'],
          ['A hypothesis'],
          ['A clear, evidenced question']
        ]
      },
      who: [
        'You',
        'You',
        'You',
        'You',
        'You, Teammate / Senior'
      ],
      misconceptions: [
        { wrong: 'Asking questions is bad.', right: 'Good questions, backed by evidence, are valued.' },
        { wrong: 'Taking initiative means never asking.', right: 'Initiative is climbing the rungs, then asking well.' }
      ],
      takeaways: [
        'Effort before escalation makes help easy to give.',
        'Bring evidence, not just "it broke".',
        'Ask sooner if production is down.'
      ],
      reflection: 'How far up the ladder should you climb before asking? Does the answer change if production is down?',
      checks: [
        'How far up the ladder before asking?',
        'Does the answer change if production is down?',
        'What should a good question include?',
        'What are the rungs of the ladder?'
      ]
    },
    {
      id: 'questions',
      title: 'Asking Better Questions',
      blurb: 'Using context, attempts, evidence, hypothesis, and a specific question.',
      whatIs: {
        text: 'Good questions are easy to answer and show initiative: context, attempts, evidence, hypothesis, ask.',
        ensures: [
          'State the context',
          'Say what you tried',
          'Share what you found',
          'Give your hypothesis and a specific question'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Effective escalation format — a reusable help-seeking template.',
        loop: false,
        steps: [
          { icon: 'circle-info', label: 'Context', desc: "What you're working on.", purpose: 'Set the scene.', question: 'What am I working on?' },
          { icon: 'list-check', label: 'What I tried', desc: 'The attempts you made.', purpose: 'List your attempts.', question: 'What have I already tried?' },
          { icon: 'magnifying-glass', label: 'What I found', desc: 'The evidence you gathered.', purpose: 'Share the evidence.', question: 'What did I observe?' },
          { icon: 'lightbulb', label: 'My hypothesis', desc: 'What you think is going on.', purpose: 'State your best guess.', question: 'What do I think is happening?' },
          { icon: 'circle-question', label: 'Specific question', desc: 'The exact help you need.', purpose: 'Ask the exact thing.', question: 'What exactly do I need?' }
        ]
      },
      example: {
        title: 'Turning "it broke" into a good question',
        items: [
          'Context: the booking API returns 500 on save.',
          'Tried: retried, checked inputs, read the logs.',
          'Found: a null user id in the failing request.',
          'Hypothesis: the session is not attaching the user.',
          'Question: where should the user id be set on this route?'
        ]
      },
      io: {
        inputs: [
          ['Your task'],
          ['Attempts'],
          ['Logs', 'Evidence'],
          ['Observations'],
          ['Everything above']
        ],
        outputs: [
          ['Shared context'],
          ['A list of what was tried'],
          ['Observations'],
          ['A hypothesis'],
          ['A precise ask']
        ]
      },
      who: [
        'You',
        'You',
        'You',
        'You',
        'You, Helper'
      ],
      misconceptions: [
        { wrong: 'Asking questions is bad.', right: 'A precise, evidenced question saves everyone time.' },
        { wrong: '"It does not work" is enough.', right: 'Say what you expected, observed, and checked.' }
      ],
      takeaways: [
        'Structure turns a vague ask into a clear one.',
        'Evidence makes help fast.',
        'A specific question gets a specific answer.'
      ],
      reflection: 'Rewrite "It does not work" as: I expected X, observed Y, checked A and B, and think C may be the cause. Can you help me confirm D?',
      checks: [
        'What makes a weak question weak?',
        'What five parts make a strong one?',
        'Rewrite "it does not work" well.',
        'Why include what you already tried?'
      ]
    },
    {
      id: 'ambiguity',
      title: 'Ambiguity Framework',
      blurb: 'Working through unclear requirements by identifying goals, constraints, assumptions, and unknowns.',
      whatIs: {
        text: 'Professionals pause first to understand the goal, constraints, unknowns, and smallest useful outcome.',
        ensures: [
          'Restate the problem in your own words',
          'List knowns and unknowns',
          'Identify systems, data, and people involved',
          'Define the smallest useful version'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Problem-solving loop — a reusable approach to any unfamiliar task.',
        steps: [
          { icon: 'circle-question', label: 'Understand the problem', desc: 'Restate it in your own words.', purpose: 'Restate it in your own words.', question: 'What are we really solving?' },
          { icon: 'list-check', label: 'List knowns and unknowns', desc: 'Separate facts from gaps.', purpose: 'Separate facts from gaps.', question: 'What do I know and not know?' },
          { icon: 'magnifying-glass', label: 'Investigate sources', desc: 'Dig into docs, code, and people.', purpose: 'Dig into docs, code, and people.', question: 'Where are the answers?' },
          { icon: 'puzzle-piece', label: 'Break down the work', desc: 'Split it into smaller tasks.', purpose: 'Split it into smaller tasks.', question: 'What are the pieces?' },
          { icon: 'map', label: 'Form a plan', desc: 'Decide the order of attack.', purpose: 'Decide the order of attack.', question: 'What order makes sense?' },
          { icon: 'person-running', label: 'Execute incrementally', desc: 'Deliver in small steps.', purpose: 'Deliver in small steps.', question: 'What is the next small step?' },
          { icon: 'clipboard-check', label: 'Verify and adjust', desc: 'Check results and adapt.', purpose: 'Check results and adapt.', question: 'Did it work — and what now?' }
        ]
      },
      example: {
        title: 'A vague "improve onboarding" ticket',
        items: [
          'Restate: reduce drop-off during signup.',
          'Known: the funnel; unknown: where users quit.',
          'Check analytics, code, and ask the PM.',
          'Split into: measure, fix the worst step, retest.',
          'Plan: instrument first, then fix, then verify.',
          'Ship the tracking, then the top fix.',
          'Confirm drop-off fell; iterate on the next step.'
        ]
      },
      io: {
        inputs: [
          ['A vague ticket'],
          ['The problem'],
          ['Unknowns', 'Sources'],
          ['Findings'],
          ['Tasks'],
          ['Plan'],
          ['Deliveries', 'Results']
        ],
        outputs: [
          ['A clear problem'],
          ['Knowns & unknowns'],
          ['Findings'],
          ['A task list'],
          ['An ordered plan'],
          ['Small deliveries'],
          ['Verified progress']
        ]
      },
      who: [
        'You, Product Owner',
        'You',
        'You, Docs & teammates',
        'You',
        'You',
        'You',
        'You, Users'
      ],
      misconceptions: [
        { wrong: 'Start coding immediately to feel productive.', right: 'Understanding first avoids building the wrong thing.' },
        { wrong: 'Research means Googling only.', right: 'Investigate docs, code, and people too.' }
      ],
      takeaways: [
        'Understand before you build.',
        'Name what you do not know.',
        'Define the smallest useful outcome.'
      ],
      reflection: 'What would you do in the first thirty minutes after receiving a vague ticket?',
      checks: [
        'What would you do in the first 30 minutes?',
        'What is known vs unknown?',
        'Who and what systems are involved?',
        'What is the smallest useful version?'
      ]
    }
  ]
}
