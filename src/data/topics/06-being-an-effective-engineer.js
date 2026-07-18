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
      concept:
        'Engineering communication should reduce ambiguity. Write and speak in a way that helps others understand context, decisions, risks, and next steps. Good communication is not about using impressive technical language. It is about being precise, concise, and audience aware.',
      points: [
        'State the context before details.',
        'Separate facts from assumptions.',
        'Be clear about what is known and unknown.',
        'Use examples when explaining abstract ideas.',
        'Adapt depth to the audience.',
        'Confirm decisions and next steps in writing when needed.'
      ],
      visual: {
        kind: 'flow',
        label: 'Engineering communication loop — communication is part of delivery, not separate from it.',
        steps: ['Problem', 'Investigate', 'Research', 'Document', 'Discuss', 'Build', 'Share outcome']
      },
      mistakes: ['Good engineers only need technical skill'],
      reflection: 'Explain the same technical decision twice: once to an engineer, once to a stakeholder.'
    },
    {
      id: 'docs',
      title: 'Documentation',
      blurb: 'Useful requirements, design notes, runbooks, handover notes, and decision records.',
      concept:
        'Documentation should help future readers understand what exists, why it exists, how to use it, how to change it, or how to support it. Poor documentation becomes stale notes. Good documentation supports delivery and operations.',
      points: [
        '**Requirements document:** what needs to be achieved and how success will be judged.',
        '**Design note:** proposed approach, options considered, trade-offs, risks, and impacted systems.',
        '**Runbook:** how to operate or troubleshoot a system.',
        '**Handover note:** what changed, what remains, and what someone else needs to know.',
        '**Decision record:** what decision was made and why.'
      ],
      visual: {
        kind: 'flow',
        label: 'What good documentation answers.',
        steps: ['What exists', 'Why it exists', 'How to use it', 'How to change it', 'How to support it']
      },
      mistakes: ['Documentation is admin work'],
      reflection: 'Improve the note "Fixed booking bug" with context, cause, change, validation, and follow-up actions.'
    },
    {
      id: 'stake',
      title: 'Stakeholder Thinking',
      blurb: 'Understanding users, constraints, trade-offs, risk, time, cost, reliability, and success measures.',
      concept:
        'Technical work exists inside a business or user context. Stakeholders may care about cost, risk, time, usability, compliance, reliability, or operational impact. An effective engineer does not blindly implement a request. They clarify the outcome, identify trade-offs, and communicate consequences.',
      points: [
        'Ask who needs the feature.',
        'Ask what problem it solves.',
        'Ask what happens if it is not built.',
        'Ask what constraints exist.',
        'Ask how success will be measured.',
        'Ask who must be informed or consulted.'
      ],
      visual: {
        kind: 'flow',
        label: 'Turning a request into requirements.',
        steps: ['Vague request', 'Clarifying questions', 'Constraints and trade-offs', 'Success measures', 'Possible requirements']
      },
      mistakes: ['Stakeholders always know exactly what they want'],
      reflection: 'Turn "Make desk booking better" into clarifying questions. How might different stakeholders mean different things by "better"?'
    },
    {
      id: 'ai',
      title: 'Responsible AI Usage',
      blurb: 'Using AI as an assistant while validating outputs against trusted sources, system context, tests, and reviews.',
      concept:
        'AI tools can help engineers learn, explore options, summarise unfamiliar concepts, draft code, generate test ideas, and improve documentation. But outputs can be wrong, incomplete, insecure, or inappropriate for the system context. Treat AI as an assistant, not an authority. You must review, test, and understand any generated output.',
      points: [
        '**Good uses:** explain unfamiliar code, generate first-draft documentation, suggest test cases, summarise logs, compare design options, brainstorm questions.',
        '**Risks:** hallucinated APIs, incorrect assumptions, insecure code, outdated guidance, missing company context, overconfidence.',
        '**Validation:** read the output, compare with official docs, test locally, ask a human when risk is high, and never paste sensitive information into tools unless approved.'
      ],
      visual: {
        kind: 'flow',
        label: 'Responsible AI usage — frames AI as a productivity tool that still requires engineering judgement.',
        steps: ['Use AI to accelerate exploration', 'Validate against trusted sources and system context', 'Test the output', 'Document assumptions', 'Ask for review when risk is high']
      },
      mistakes: ['AI output can be copied without understanding'],
      reflection: 'Take an AI-suggested solution. What must be verified before trusting it — for security, correctness, and system context?'
    },
    {
      id: 'escalate',
      title: 'Effective Escalation',
      blurb: 'High-quality help requests with context, evidence, hypothesis, and a specific ask.',
      concept:
        'A strong engineer keeps learning, investigates independently, and escalates clearly when needed. Escalation should include context, what was tried, evidence found, hypothesis, and the specific question. This makes it easier for others to help and demonstrates ownership.',
      points: [
        '**Context:** what are you working on?',
        '**Goal:** what are you trying to achieve?',
        '**Attempts:** what have you already tried?',
        '**Evidence:** what did you observe?',
        '**Hypothesis:** what do you think is happening?',
        '**Question:** what specific help do you need?'
      ],
      visual: {
        kind: 'flow',
        label: 'Effective escalation format — a reusable help-seeking template.',
        steps: ['Context', 'What I tried', 'What I found', 'My hypothesis', 'Specific question']
      },
      mistakes: ['Asking for help means failing'],
      reflection: 'Write a help request using the format. Review it for clarity, evidence, and specificity.'
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      blurb: 'Building habits that help engineers keep improving after each task, bug, release, and review.',
      concept:
        'Technical skill matters, but engineers create impact through clarity, collaboration, judgement, and learning. The independent learning loop gives you a repeatable process for learning unfamiliar technical material — and it works the same way whether the unknown is a language, a system, or a process.',
      points: [
        'Identify what is unknown.',
        'Research using trusted sources.',
        'Experiment safely in a non-production environment.',
        'Form a hypothesis.',
        'Validate or adjust the hypothesis.',
        'Apply the learning.'
      ],
      visual: {
        kind: 'flow',
        label: 'Independent learning loop.',
        steps: ['Identify what is unknown', 'Research using trusted sources', 'Experiment safely', 'Form a hypothesis', 'Validate or adjust', 'Apply the learning']
      },
      mistakes: ['Good engineers only need technical skill', 'Asking for help means failing'],
      reflection: 'Write one principle you will use when you next feel stuck on a task.'
    }
  ]
}
