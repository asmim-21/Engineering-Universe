export default {
  id: 'solving-problems-like-an-engineer',
  title: 'Solving Problems Like an Engineer',
  color: 'green',
  titleLines: ['SOLVING PROBLEMS', 'LIKE AN ENGINEER'],
  tagline: 'From confusion to clarity',
  focus:
    'Ambiguity, investigation, safe experimentation, problem breakdown, and focused escalation.',
  trueLesson:
    'Engineers are paid to navigate uncertainty. The first step is not always coding or asking for help; it is understanding, investigating, breaking down, and forming a plan.',
  orbit: [
    { label: 'Embrace ambiguity', icon: 'circle-question' },
    { label: 'Research & learn', icon: 'magnifying-glass' },
    { label: 'Experiment safely', icon: 'flask' },
    { label: 'Escalate smartly', icon: 'stairs' }
  ],
  clusters: [
    {
      title: 'Before You Code',
      note: 'Understand the goal, constraints, unknowns, and smallest useful outcome.',
      popups: ['ambiguity-framework', 'problem-breakdown']
    },
    {
      title: 'Find Out For Yourself',
      note: 'Strong juniors do not know everything. They know how to search.',
      popups: ['research-investigation', 'safe-experimentation']
    },
    {
      title: 'Then Ask Well',
      note: 'Initiative without isolation.',
      popups: ['escalation-ladder-topic', 'asking-better-questions']
    }
  ],
  popups: [
    {
      id: 'ambiguity-framework',
      title: 'Ambiguity Framework',
      blurb: 'Identifying goals, constraints, assumptions, and unknowns.',
      concept: [
        'Cadets often want to start coding quickly because it feels productive. Professional engineers pause first to understand the goal, constraints, unknowns, risks, and smallest useful outcome.',
        'Before coding, you should be able to explain what problem you are solving, who it affects, what success looks like, what systems are involved, and what you still do not know.'
      ],
      visual: {
        kind: 'list',
        title: 'Before you write a line of code',
        steps: [
          'Restate the problem in your own words',
          'Identify the user or stakeholder',
          'List what is known',
          'List what is unknown',
          'Identify systems, data, and people involved',
          'Define the smallest useful version',
          'Decide what must be clarified before implementation'
        ],
        purpose: 'Ambiguity is the job, not an obstacle to the job.'
      },
      mistakes: [
        'Treating a vague ticket as a complete specification.',
        'Confusing "I have started coding" with "I have made progress".',
        'Hiding assumptions instead of writing them down.'
      ],
      reflection:
        'You receive "employees should be able to organise social events". Write five questions you would ask first.'
    },
    {
      id: 'problem-breakdown',
      title: 'Problem Breakdown Loop',
      blurb: 'Turning big or vague work into smaller, understandable tasks.',
      concept: [
        'Large tasks feel overwhelming when treated as one thing. Breaking down work is not project management — it is how engineers reduce risk and create progress.'
      ],
      visual: {
        kind: 'flow',
        title: 'Task breakdown model',
        steps: [
          'User outcome',
          'Functional behaviour',
          'Data changes',
          'API changes',
          'UI changes',
          'Testing',
          'Deployment and monitoring',
          'Documentation'
        ],
        purpose: 'Gives you a concrete way to break up a large feature.'
      },
      mistakes: [
        'Trying to solve a large task in one big step.',
        'Splitting by technology instead of by deliverable outcome.',
        'Never separating must-have from nice-to-have.'
      ],
      reflection:
        'Split your current task into investigation tasks and implementation tasks. Which one is genuinely blocking the others?'
    },
    {
      id: 'research-investigation',
      title: 'Research & Investigation',
      blurb: 'Docs, code, logs, tickets, previous work, official sources, validated AI.',
      concept: [
        'Research includes internal documentation, code search, previous tickets and pull requests, logs, runbooks, official documentation, and AI tools used carefully.',
        'The quality of the source matters. Official docs and internal runbooks are usually more reliable than random blogs. AI can accelerate exploration but must be verified.'
      ],
      visual: {
        kind: 'list',
        title: 'Where to look, roughly in order',
        steps: [
          'Search existing documentation first',
          'Look for similar code patterns in the repository',
          'Find previous tickets or pull requests for related work',
          'Read logs and error messages carefully',
          'Use official documentation for technologies',
          'Use AI to explain or summarise — then validate'
        ],
        purpose: 'Knowing where to look is a skill you can practise deliberately.'
      },
      mistakes: [
        'Thinking research means Googling only.',
        'Trusting a blog post over the repository you are actually working in.',
        'Reading the error message’s first line and stopping there.'
      ],
      reflection:
        'Next time you are stuck, list the sources you checked before asking. Was the answer already in one of them?'
    },
    {
      id: 'safe-experimentation',
      title: 'Safe Experimentation',
      blurb: 'Learning by trying things without creating unnecessary risk.',
      concept: [
        'Exploration is part of engineering, but it must happen safely. Safe experimentation means local environments, dev environments, dummy data, feature branches, read-only queries, or small reversible changes.',
        'Being cautious does not mean being passive. If impact is unclear, ask before acting.'
      ],
      visual: {
        kind: 'columns',
        title: 'Safe vs risky',
        left: {
          heading: 'Good experimentation',
          items: [
            'Run locally',
            'Test with fake data',
            'Inspect code and read configs',
            'Try a small branch',
            'Reproduce safely'
          ]
        },
        right: {
          heading: 'Risky experimentation',
          items: [
            'Changing production',
            'Running destructive scripts',
            'Editing shared data',
            'Ignoring security controls',
            'Making irreversible changes'
          ]
        },
        purpose: 'Explore freely inside the boundary; ask before crossing it.'
      },
      mistakes: [
        'Believing experimenting is always dangerous, so never trying anything.',
        'Running a script you do not understand because someone shared it.',
        'Testing against production "just to check something quickly".'
      ],
      reflection:
        'What is one thing you have avoided trying out of fear? Where could you try it safely today?'
    },
    {
      id: 'escalation-ladder-topic',
      title: 'Escalation Ladder',
      blurb: 'Think, experiment, research, hypothesise, then ask with evidence.',
      concept: [
        'The goal is not to avoid asking for help. It is to arrive at the question having already done the work only you could do — which is what makes the question easy for someone else to answer.'
      ],
      visual: {
        kind: 'ladder',
        title: 'Escalation ladder',
        steps: [
          'Think through the problem',
          'Experiment safely',
          'Search docs, code, tickets, previous PRs, trusted sources',
          'Form a hypothesis',
          'Ask for help with context, evidence, and a specific question'
        ],
        purpose: 'Shows what good initiative looks like before escalation.'
      },
      mistakes: [
        'Thinking asking questions is bad.',
        'Thinking taking initiative means working alone forever.',
        'Climbing every rung for a question someone could answer in ten seconds.'
      ],
      reflection:
        'How long should you sit on a blocker before escalating? What makes that number right for your team?'
    },
    {
      id: 'asking-better-questions',
      title: 'Asking Better Questions',
      blurb: 'Context, attempts, evidence, hypothesis, and a specific question.',
      concept: [
        'A good question shows initiative and is easy to answer. The structure is always the same: context, what I tried, what I found, my hypothesis, the specific question.'
      ],
      visual: {
        kind: 'compare',
        title: 'Weak vs strong',
        weak: 'I do not know how to do this.',
        strong:
          'I am trying to add recurring bookings. I found the existing booking service and the Booking table. I think recurrence needs either generated bookings or a recurrence rule. I am not sure which design fits our system. Can we discuss the trade-off?',
        purpose: 'Same amount of not-knowing. Completely different question.'
      },
      mistakes: [
        'Saying "it does not work" without expected vs actual behaviour.',
        'Asking for the answer instead of asking to confirm a hypothesis.',
        'Waiting until you are fully blocked and out of time.'
      ],
      reflection:
        'Rewrite "it does not work" as "I expected X, observed Y, checked A and B, and think C may be the cause. Can you help me confirm D?"'
    }
  ]
}
