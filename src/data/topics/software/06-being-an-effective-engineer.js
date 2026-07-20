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
          { icon: 'circle-question', label: 'Problem', desc: 'Start from what needs solving.', purpose: 'Start from what needs solving.', question: 'What needs solving?' },
          { icon: 'magnifying-glass', label: 'Investigate', desc: 'Dig into the details.', purpose: 'Dig into the details.', question: 'What is going on?' },
          { icon: 'book', label: 'Research', desc: 'Find trusted information.', purpose: 'Find trusted information.', question: 'What do reliable sources say?' },
          { icon: 'file-lines', label: 'Document', desc: 'Write down what you learn.', purpose: 'Write down what you learn.', question: 'What should be captured?' },
          { icon: 'comments', label: 'Discuss', desc: 'Align with others.', purpose: 'Align with others.', question: 'Are we aligned?' },
          { icon: 'hammer', label: 'Build', desc: 'Do the work.', purpose: 'Do the work.', question: 'What do we build?' },
          { icon: 'share-nodes', label: 'Share outcome', desc: 'Tell people the result.', purpose: 'Tell people the result.', question: 'Who needs to know the result?' }
        ]
      },
      example: {
        title: 'Proposing a caching change',
        items: [
          'Pages are slow — that is the problem to solve.',
          'Investigate which pages and when they are slow.',
          'Research caching options and team standards.',
          'Write a short design note on the approach.',
          'Discuss trade-offs with the team.',
          'Build the cache behind a flag.',
          'Share the latency improvement with stakeholders.'
        ]
      },
      io: {
        inputs: [
          ['A need'],
          ['Problem'],
          ['Findings', 'Sources'],
          ['Information'],
          ['Note', 'Team'],
          ['Agreed approach'],
          ['Outcome']
        ],
        outputs: [
          ['A clear problem'],
          ['Findings'],
          ['Trusted information'],
          ['A written note'],
          ['Alignment'],
          ['Working software'],
          ['A clear update']
        ]
      },
      who: [
        'You, Stakeholders',
        'You',
        'You',
        'You',
        'You, Team',
        'You, Team',
        'You, Stakeholders'
      ],
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
          { icon: 'box', label: 'What exists', desc: "The thing you're describing.", purpose: 'Describe the thing itself.', question: 'What is this?' },
          { icon: 'circle-question', label: 'Why it exists', desc: 'The reason behind it.', purpose: 'Explain the reason behind it.', question: 'Why does it exist?' },
          { icon: 'book-open', label: 'How to use it', desc: 'Steps to operate it.', purpose: 'Show how to operate it.', question: 'How do I use it?' },
          { icon: 'screwdriver-wrench', label: 'How to change it', desc: 'How to modify it safely.', purpose: 'Explain how to modify it safely.', question: 'How do I change it?' },
          { icon: 'headset', label: 'How to support it', desc: 'How to keep it running.', purpose: 'Explain how to keep it running.', question: 'How do I support it?' }
        ]
      },
      example: {
        title: 'Documenting a booking service',
        items: [
          'Describe what the booking service does.',
          'Explain why it replaced the old flow.',
          'Show how to call its main endpoints.',
          'Note how to add a new booking rule safely.',
          'List common failures and how to recover.'
        ]
      },
      io: {
        inputs: [
          ['The system', 'Its scope'],
          ['Context', 'Decisions'],
          ['The system', 'Steps'],
          ['The code', 'Patterns'],
          ['Failure modes', 'Runbook']
        ],
        outputs: [
          ['A clear description'],
          ['The rationale'],
          ['A usage guide'],
          ['A change guide'],
          ['A support guide']
        ]
      },
      who: [
        'Author (engineer)',
        'Author, Decision-makers',
        'Author, Users',
        'Author, Future engineers',
        'Author, Support, On-call'
      ],
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
          { icon: 'comment-dots', label: 'Vague request', desc: 'A fuzzy ask arrives.', purpose: 'Receive the initial ask.', question: 'What was actually asked for?' },
          { icon: 'circle-question', label: 'Clarifying questions', desc: "Pin down what's meant.", purpose: 'Pin down what is meant.', question: 'What do they really need?' },
          { icon: 'scale-balanced', label: 'Constraints and trade-offs', desc: 'Weigh cost, risk, and time.', purpose: 'Weigh cost, risk, and time.', question: 'What are the limits?' },
          { icon: 'bullseye', label: 'Success measures', desc: "Decide how you'll judge it.", purpose: 'Decide how to judge it.', question: 'How will we know it worked?' },
          { icon: 'list-check', label: 'Possible requirements', desc: 'Turn it into concrete work.', purpose: 'Turn it into concrete work.', question: 'What should we build?' }
        ]
      },
      example: {
        title: '"Make desk booking better"',
        items: [
          'A manager asks to "make desk booking better".',
          'Ask who struggles, and what "better" means to them.',
          'Weigh a rewrite against a small fix given the deadline.',
          'Agree success is fewer failed bookings per week.',
          'Draft requirements for clearer availability and error messages.'
        ]
      },
      io: {
        inputs: [
          ['Stakeholder ask'],
          ['Raw request', 'Stakeholders'],
          ['Understanding', 'Cost / risk / time'],
          ['Outcome', 'Constraints'],
          ['Everything above']
        ],
        outputs: [
          ['A raw request'],
          ['Shared understanding'],
          ['Known constraints'],
          ['Success measures'],
          ['Candidate requirements']
        ]
      },
      who: [
        'Stakeholder',
        'Engineer, Business Analyst, Stakeholder',
        'Engineer, Product Owner',
        'Product Owner, Stakeholder',
        'Business Analyst, Engineer'
      ],
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
          { icon: 'robot', label: 'Use AI to accelerate exploration', desc: 'Draft and explore faster.', purpose: 'Draft and explore faster.', question: 'What can AI speed up?' },
          { icon: 'magnifying-glass', label: 'Validate against trusted sources', desc: 'Check it against reality and context.', purpose: 'Check it against reality and context.', question: 'Is it actually correct?' },
          { icon: 'flask', label: 'Test the output', desc: "Run it, don't just trust it.", purpose: "Run it, don't just trust it.", question: 'Does it work when run?' },
          { icon: 'file-lines', label: 'Document assumptions', desc: 'Record what you assumed.', purpose: 'Record what you assumed.', question: 'What did we assume?' },
          { icon: 'user-check', label: 'Ask for review when risk is high', desc: 'Get a human when it matters.', purpose: 'Get a human when it matters.', question: 'Does this need a human check?' }
        ]
      },
      example: {
        title: 'Using AI to draft a function',
        items: [
          'Ask AI to draft a date-parsing function.',
          'Check its API calls against the real library docs.',
          'Run it against edge-case inputs.',
          'Note the assumption that dates are UTC.',
          'Ask a senior to review before it touches billing.'
        ]
      },
      io: {
        inputs: [
          ['A task', 'A prompt'],
          ['Draft', 'Trusted sources'],
          ['Draft', 'Test cases'],
          ['Decisions'],
          ['A risky change']
        ],
        outputs: [
          ['A draft or explanation'],
          ['A validated draft'],
          ['Test results'],
          ['Recorded assumptions'],
          ['A human review']
        ]
      },
      who: [
        'You, AI assistant',
        'You',
        'You',
        'You',
        'You, Reviewer / Senior'
      ],
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
          { icon: 'circle-info', label: 'Context', desc: "What you're working on.", purpose: 'Set the scene.', question: 'What am I working on?' },
          { icon: 'list-check', label: 'What I tried', desc: 'Your attempts so far.', purpose: 'List your attempts.', question: 'What have I already tried?' },
          { icon: 'magnifying-glass', label: 'What I found', desc: 'The evidence gathered.', purpose: 'Share the evidence.', question: 'What did I observe?' },
          { icon: 'lightbulb', label: 'My hypothesis', desc: 'What you think is happening.', purpose: 'State your best guess.', question: 'What do I think is happening?' },
          { icon: 'circle-question', label: 'Specific question', desc: 'The exact help you need.', purpose: 'Ask the exact thing.', question: 'What exactly do I need?' }
        ]
      },
      example: {
        title: 'Escalating a blocked deployment',
        items: [
          'Context: the deploy to staging fails at the migration step.',
          'Tried: re-ran it, checked credentials, read the pipeline logs.',
          'Found: the migration user lacks ALTER permission.',
          'Hypothesis: the staging DB role is missing a grant.',
          'Question: who owns staging DB grants, and can we add ALTER?'
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
          { icon: 'magnifying-glass', label: 'Identify what is unknown', desc: 'Name the gap in your knowledge.', purpose: 'Name the gap in your knowledge.', question: "What don't I understand?" },
          { icon: 'book', label: 'Research using trusted sources', desc: 'Gather from credible places.', purpose: 'Gather from credible places.', question: 'Where is the reliable answer?' },
          { icon: 'flask', label: 'Experiment safely', desc: "Try it where it can't hurt.", purpose: "Try it where it can't hurt.", question: 'What can I try safely?' },
          { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Make an educated guess.', purpose: 'Make an educated guess.', question: 'What do I think is true?' },
          { icon: 'clipboard-check', label: 'Validate or adjust', desc: 'Check and refine.', purpose: 'Check and refine.', question: 'Does it hold up?' },
          { icon: 'rocket', label: 'Apply the learning', desc: 'Put it to real use.', purpose: 'Put it to real use.', question: 'How do I apply it?' }
        ]
      },
      example: {
        title: 'Learning a new deployment tool',
        items: [
          'Name what you do not yet understand about the tool.',
          'Read its official docs and your team runbook.',
          'Try a deploy in a sandbox environment.',
          'Guess the config your service needs.',
          'Run it and confirm the deploy succeeds.',
          'Use it for the real service with confidence.'
        ]
      },
      io: {
        inputs: [
          ['A task', 'A gap'],
          ['Question', 'Docs'],
          ['Knowledge', 'Sandbox'],
          ['Observations'],
          ['Hypothesis', 'A test'],
          ['A validated answer']
        ],
        outputs: [
          ['A clear question'],
          ['Gathered knowledge'],
          ['Observations'],
          ['A hypothesis'],
          ['A validated answer'],
          ['Applied skill']
        ]
      },
      who: [
        'You',
        'You, Docs & team',
        'You',
        'You',
        'You',
        'You, Team'
      ],
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
    },
    {
      id: 'etiquette',
      title: 'Corporate Etiquette',
      blurb: 'The everyday basics that help a new graduate make a good impression: email, meetings, timing, honesty, and accountability.',
      whatIs: {
        text: 'Professional etiquette is about being clear, responsive, honest, and reliable in everyday workplace interactions.',
        ensures: [
          'Reply to emails promptly and clearly',
          'Accept or decline meetings professionally',
          'Be on time and prepared',
          'Be honest if you do not know something',
          'Take accountability when you make a mistake'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The basics of workplace professionalism.',
        loop: false,
        steps: [
          { icon: 'envelope', label: 'Check and reply', desc: 'Read messages and respond promptly.', purpose: 'Respond promptly and clearly.', question: 'What needs a reply?' },
          { icon: 'calendar', label: 'Handle meetings well', desc: 'Accept, decline, or propose alternatives professionally.', purpose: 'Manage meetings respectfully.', question: 'Do I need to attend?' },
          { icon: 'clock', label: 'Be punctual', desc: 'Arrive on time and be prepared.', purpose: 'Show reliability.', question: 'Am I ready?' },
          { icon: 'comments', label: 'Be honest', desc: 'Say when you do not know something and ask for help.', purpose: 'Show honesty and good judgement.', question: 'What do I actually know?' },
          { icon: 'check', label: 'Take accountability', desc: 'If you make a mistake, own it, fix it, and learn from it.', purpose: 'Build trust through accountability.', question: 'What should I own and fix?' },
          { icon: 'handshake', label: 'Follow through', desc: 'Do what you said you would do.', purpose: 'Build trust.', question: 'What is my next step?' }
        ]
      },
      example: {
        title: 'A good first-week impression',
        items: [
          'Reply to a manager email with a short acknowledgement and next step.',
          'Decline a meeting politely if you cannot attend and suggest another time.',
          'Arrive early, bring notes, and be ready to contribute.',
          'Say, “I am not sure yet, but I will find out,” instead of pretending you know.',
          'If you miss a deadline or send the wrong file, own it quickly and propose a fix.',
          'If you promise to send an update by 3 pm, send it by 3 pm and confirm it is done.'
        ]
      },
      io: {
        inputs: [
          ['An email', 'A meeting request'],
          ['A work situation'],
          ['Your schedule', 'Your preparation'],
          ['Your knowledge', 'Your uncertainty'],
          ['Your mistake', 'Your next action'],
          ['Your commitments']
        ],
        outputs: [
          ['An email reply with a clear next step'],
          ['A meeting response that is polite and professional'],
          ['A reputation for being punctual and prepared'],
          ['A message that is honest about what you know'],
          ['A quick ownership response when something goes wrong'],
          ['A completed action or update you promised']
        ]
      },
      who: [
        'You, Manager, Team',
        'You, Team',
        'You, Team',
        'You, Everyone',
        'You, Everyone',
        'You, Team'
      ],
      misconceptions: [
        { wrong: 'Etiquette is only about being formal.', right: 'It is mainly about being clear, honest, and dependable.' },
        { wrong: 'If you are busy, you can ignore messages.', right: 'A quick acknowledgement is better than silence.' },
        { wrong: 'Admitting a mistake makes you look weak.', right: 'Owning it early usually builds more trust.' }
      ],
      takeaways: [
        'Professionalism is built from small habits.',
        'Clear replies and good timing matter.',
        'Honesty and accountability build trust.'
      ],
      reflection: 'Write a short email reply, a polite meeting response, and a brief apology-plus-fix message you could use this week.',
      checks: [
        'How should you reply to an email when you need more time?',
        'What is a professional way to decline a meeting?',
        'Why does punctuality matter?',
        'How should you respond if you do not know something?',
        'What should you do if you make a mistake?' 
      ]
    }
  ]
}
