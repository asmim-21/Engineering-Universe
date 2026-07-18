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
      concept:
        'Large tasks feel overwhelming when treated as one thing. Split a feature by outcome, data, UI, API, backend logic, validation, testing, deployment, and documentation. Breaking down work is not just project management. It is how engineers reduce risk and create progress.',
      points: [
        'Start with the user outcome.',
        'Identify major components affected.',
        'Split the work into investigation tasks and implementation tasks.',
        'Separate must-have requirements from nice-to-have requirements.',
        'Create a first small version that can be reviewed or tested.',
        'Track assumptions and open questions.'
      ],
      visual: {
        kind: 'flow',
        label: 'Task breakdown model — a concrete way to break up a large feature.',
        steps: ['User outcome', 'Functional behaviour', 'Data changes', 'API changes', 'UI changes', 'Testing', 'Deployment and monitoring', 'Documentation']
      },
      mistakes: ['Large tasks should be solved in one big step'],
      reflection: 'Take "Employees should be able to create social events" and split it into tasks: data model, API, UI, validation, tests, documentation.'
    },
    {
      id: 'research',
      title: 'Research & Investigation',
      blurb: 'Using docs, code, logs, tickets, previous work, official sources, and validated AI support.',
      concept:
        'Know where to look before escalating. Strong juniors do not know everything; they know how to search. Research includes internal documentation, code search, previous tickets, pull requests, logs, runbooks, official documentation, and AI tools used carefully. The quality of the source matters. Official docs and internal runbooks are usually more reliable than random blogs. AI can accelerate exploration but must be verified.',
      points: [
        'Search existing documentation first when available.',
        'Look for similar code patterns in the repository.',
        'Find previous tickets or pull requests for related work.',
        'Read logs or error messages carefully.',
        'Use official documentation for technologies.',
        'Use AI to explain or summarise, then validate results.'
      ],
      visual: {
        kind: 'flow',
        label: 'Independent learning loop.',
        steps: ['Identify what is unknown', 'Research using trusted sources', 'Experiment safely in a non-production environment', 'Form a hypothesis', 'Validate or adjust the hypothesis', 'Apply the learning']
      },
      mistakes: ['Research means Googling only'],
      reflection: 'Given an unfamiliar repository: what does the system do, where might the feature live, and what questions remain?'
    },
    {
      id: 'safe',
      title: 'Safe Experimentation',
      blurb: 'Learning by trying things in local or non-production spaces without creating unnecessary risk.',
      concept:
        'It is easy to become scared of touching systems because you do not want to break things. Exploration is part of engineering, but it must happen safely. Safe experimentation means using local environments, development environments, dummy data, feature branches, read-only queries, or small reversible changes. Being cautious does not mean being passive.',
      points: [
        '**Good experimentation:** run locally, test with fake data, inspect code, read configs, try a small branch, reproduce safely.',
        '**Risky experimentation:** changing production, running destructive scripts, editing shared data, ignoring security controls, making irreversible changes.',
        'If impact is unclear, ask before acting.',
        'Do not experiment in production, do not delete or mutate real data, do not bypass security, and ask before running anything with unclear impact.'
      ],
      visual: {
        kind: 'flow',
        label: 'Safety boundary.',
        steps: ['Local environment', 'Development environment', 'Dummy data', 'Feature branch', 'Read-only query', 'Small reversible change']
      },
      mistakes: ['Experimenting is always dangerous', 'Taking initiative means working alone forever'],
      reflection: 'Sort a list of actions into safe and risky. Which ones would you ask about first?'
    },
    {
      id: 'ladder',
      title: 'Escalation Ladder',
      blurb: 'Thinking, experimenting, researching, forming a hypothesis, then asking for help with evidence.',
      concept:
        'This teaches initiative without discouraging help-seeking. The goal is not to avoid asking for help — it is to climb the ladder first so that when you do ask, the question is easy to answer and shows what you have already done.',
      points: [
        'Think through the problem.',
        'Experiment safely.',
        'Search docs, code, tickets, previous PRs, and trusted external sources.',
        'Form a hypothesis.',
        'Ask for help with context, evidence, and a specific question.'
      ],
      visual: {
        kind: 'flow',
        label: 'Escalation ladder — shows what good initiative looks like before escalation.',
        steps: ['Think', 'Experiment safely', 'Research', 'Form a hypothesis', 'Ask for help with evidence']
      },
      mistakes: ['Asking questions is bad', 'Taking initiative means working alone forever'],
      reflection: 'How far up the ladder should you climb before asking? Does the answer change if production is down?'
    },
    {
      id: 'questions',
      title: 'Asking Better Questions',
      blurb: 'Using context, attempts, evidence, hypothesis, and a specific question.',
      concept:
        'The goal is not to avoid asking for help. The goal is to ask questions that are easier to answer and show initiative. Use the structure: Context, what I tried, what I found, my hypothesis, the specific question.',
      points: [
        '**Weak question:** "I do not know how to do this."',
        '**Stronger question:** "I am trying to add recurring bookings. I found the existing booking service and the Booking table. I think recurrence needs either generated bookings or a recurrence rule. I am not sure which design fits our system. Can we discuss the trade-off?"'
      ],
      visual: {
        kind: 'flow',
        label: 'Effective escalation format — a reusable help-seeking template.',
        steps: ['Context', 'What I tried', 'What I found', 'My hypothesis', 'Specific question']
      },
      mistakes: ['Asking questions is bad'],
      reflection: 'Rewrite "It does not work" as: I expected X, observed Y, checked A and B, and think C may be the cause. Can you help me confirm D?'
    },
    {
      id: 'ambiguity',
      title: 'Ambiguity Framework',
      blurb: 'Working through unclear requirements by identifying goals, constraints, assumptions, and unknowns.',
      concept:
        'It is tempting to start coding quickly because that feels productive. Professional engineers pause first to understand the goal, constraints, unknowns, risks, and smallest useful outcome. Before coding, you should be able to explain what problem you are solving, who it affects, what success looks like, what systems are involved, and what you still do not know.',
      points: [
        'Restate the problem in your own words.',
        'Identify the user or stakeholder.',
        'List what is known.',
        'List what is unknown.',
        'Identify systems, data, and people involved.',
        'Define the smallest useful version.',
        'Decide what must be clarified before implementation.'
      ],
      visual: {
        kind: 'flow',
        label: 'Problem-solving loop — a reusable approach to any unfamiliar task.',
        steps: ['Understand the problem', 'List knowns and unknowns', 'Investigate sources', 'Break down the work', 'Form a plan', 'Execute incrementally', 'Verify and adjust']
      },
      mistakes: ['Large tasks should be solved in one big step', 'Research means Googling only'],
      reflection: 'What would you do in the first thirty minutes after receiving a vague ticket?'
    }
  ]
}
