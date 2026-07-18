export default {
  id: 'being-an-effective-engineer',
  title: 'Being an Effective Engineer',
  color: 'purple',
  titleLines: ['BEING AN', 'EFFECTIVE ENGINEER'],
  tagline: 'People, purpose and impact',
  focus:
    'Communication, documentation, stakeholders, responsible AI use, escalation, and continuous learning.',
  trueLesson:
    'Technical skill matters, but engineers create impact through clarity, collaboration, judgement, and learning.',
  orbit: [
    { label: 'Communication', icon: 'comments' },
    { label: 'Documentation', icon: 'file-lines' },
    { label: 'Stakeholders', icon: 'users' },
    { label: 'AI tools & ethics', icon: 'wand-magic-sparkles' }
  ],
  clusters: [
    {
      title: 'Being Understood',
      note: 'Communication is part of delivery, not separate from it.',
      popups: ['communication-skills', 'documentation']
    },
    {
      title: 'Being Useful',
      note: 'Technical work exists inside a business and user context.',
      popups: ['stakeholder-thinking', 'responsible-ai']
    },
    {
      title: 'Getting Better',
      note: 'Ownership shows in how you ask and how you learn.',
      popups: ['effective-escalation-topic', 'continuous-learning']
    }
  ],
  popups: [
    {
      id: 'communication-skills',
      title: 'Communication Skills',
      blurb: 'Separating facts, assumptions, unknowns, and next steps.',
      concept: [
        'Engineering communication should reduce ambiguity. Good communication is not about impressive technical language — it is about being precise, concise, and audience aware.'
      ],
      visual: {
        kind: 'list',
        title: 'Habits that reduce ambiguity',
        steps: [
          'State the context before details',
          'Separate facts from assumptions',
          'Be clear about what is known and unknown',
          'Use examples when explaining abstract ideas',
          'Adapt depth to the audience',
          'Confirm decisions and next steps in writing when needed'
        ],
        purpose: 'Shows that communication is part of delivery, not separate from it.'
      },
      mistakes: [
        'Thinking good engineers only need technical skill.',
        'Presenting an assumption with the confidence of a fact.',
        'Explaining the implementation when the audience asked about impact.'
      ],
      reflection:
        'Take your last status update. Which sentence was a fact, and which was actually an assumption?'
    },
    {
      id: 'documentation',
      title: 'Documentation',
      blurb: 'Requirements, design notes, runbooks, handover notes, decision records.',
      concept: [
        'Documentation should help future readers understand what exists, why it exists, how to use it, how to change it, or how to support it. Poor documentation becomes stale notes. Good documentation supports delivery and operations.'
      ],
      visual: {
        kind: 'list',
        title: 'Document types worth knowing',
        steps: [
          'Requirements — what must be achieved and how success is judged',
          'Design note — approach, options, trade-offs, risks, impacted systems',
          'Runbook — how to operate or troubleshoot a system',
          'Handover note — what changed, what remains, what to know',
          'Decision record — what was decided and why'
        ],
        purpose: 'Useful documentation is written for the person who arrives after you.'
      },
      mistakes: [
        'Thinking documentation is admin work.',
        'Recording what the code does instead of why the decision was made.',
        'Writing a doc nobody can find.'
      ],
      reflection:
        'Improve "Fixed booking bug." Add context, cause, change, validation, and follow-up actions.'
    },
    {
      id: 'stakeholder-thinking',
      title: 'Stakeholder Thinking',
      blurb: 'Users, constraints, trade-offs, risk, time, cost, reliability, success measures.',
      concept: [
        'Technical work exists inside a business or user context. Stakeholders may care about cost, risk, time, usability, compliance, reliability, or operational impact.',
        'An effective engineer does not blindly implement a request. They clarify the outcome, identify trade-offs, and communicate consequences.'
      ],
      visual: {
        kind: 'list',
        title: 'Questions that surface the real request',
        steps: [
          'Who needs the feature?',
          'What problem does it solve?',
          'What happens if it is not built?',
          'What constraints exist?',
          'How will success be measured?',
          'Who must be informed or consulted?'
        ],
        purpose: 'The request is the symptom. The outcome is the thing.'
      },
      mistakes: [
        'Assuming stakeholders always know exactly what they want.',
        'Implementing the literal request and ignoring the underlying goal.',
        'Discovering the compliance constraint after the design is finished.'
      ],
      reflection:
        '"Make desk booking better." What might three different stakeholders each mean by "better"?'
    },
    {
      id: 'responsible-ai',
      title: 'Responsible AI Usage',
      blurb: 'AI as an assistant, validated against sources, context, tests, and review.',
      concept: [
        'AI tools can help you learn, explore options, summarise unfamiliar concepts, draft code, generate test ideas, and improve documentation. But outputs can be wrong, incomplete, insecure, or inappropriate for your system context.',
        'Treat AI as an assistant, not an authority. Review, test, and understand anything it generates.'
      ],
      visual: {
        kind: 'flow',
        title: 'Responsible AI usage',
        steps: [
          'Use AI to accelerate exploration',
          'Validate against trusted sources and system context',
          'Test the output',
          'Document assumptions',
          'Ask for review when risk is high'
        ],
        purpose: 'Frames AI as a productivity tool that still requires engineering judgement.'
      },
      mistakes: [
        'Thinking AI output can be copied without understanding.',
        'Trusting an API that sounds plausible but does not exist.',
        'Pasting sensitive information into tools that are not approved.'
      ],
      reflection:
        'Take an AI suggestion you would use. What must be verified before you trust it — security, correctness, or system context?'
    },
    {
      id: 'effective-escalation-topic',
      title: 'Effective Escalation',
      blurb: 'Help requests with context, evidence, hypothesis, and a specific ask.',
      concept: [
        'Escalation should include context, what was tried, evidence found, your hypothesis, and the specific question. This makes it easier for others to help and demonstrates ownership.'
      ],
      visual: {
        kind: 'flow',
        title: 'Effective escalation format',
        steps: [
          'Context — what are you working on?',
          'Goal — what are you trying to achieve?',
          'Attempts — what have you already tried?',
          'Evidence — what did you observe?',
          'Hypothesis — what do you think is happening?',
          'Question — what specific help do you need?'
        ],
        purpose: 'Provides a reusable help-seeking template.'
      },
      mistakes: [
        'Thinking asking for help means failing.',
        'Escalating a problem without escalating the evidence.',
        'Asking five people the same question instead of one person a good question.'
      ],
      reflection:
        'Write a help request for your current blocker using all six parts. Is the ask genuinely specific?'
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      blurb: 'Habits that keep you improving after each task, bug, release, and review.',
      concept: [
        'Every task, bug, release, and review is a chance to learn something you keep. The engineers who improve fastest are the ones who notice what surprised them and write it down before it fades.'
      ],
      visual: {
        kind: 'loop',
        title: 'Engineering communication loop',
        steps: [
          'Problem',
          'Investigate',
          'Research',
          'Document',
          'Discuss',
          'Build',
          'Share outcome'
        ],
        purpose: 'Learning compounds when it is shared, not just experienced.'
      },
      mistakes: [
        'Learning something the hard way and telling nobody.',
        'Collecting tutorials instead of applying one thing.',
        'Assuming the next system will work like the last one.'
      ],
      reflection:
        'Write one principle you will use the next time you feel stuck on a task.'
    }
  ]
}
