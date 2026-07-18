export default {
  id: 'building-reliable-software',
  title: 'Building Reliable Software',
  color: 'yellow',
  titleLines: ['BUILDING', 'RELIABLE SOFTWARE'],
  tagline: 'Quality is a habit, not a phase',
  focus: 'Testing, debugging, logs, review, root cause thinking, and prevention.',
  trueLesson:
    'Quality is not a final checkbox. It is built through testing, review, investigation, maintainability, and learning from failures.',
  orbit: [
    { label: 'Testing strategies', icon: 'square-check' },
    { label: 'Debugging & RCA', icon: 'bug' },
    { label: 'Code reviews', icon: 'code' },
    { label: 'Quality & prevention', icon: 'shield-halved' }
  ],
  clusters: [
    {
      title: 'Confidence',
      note: 'Tests do not prove perfection. They make change safer.',
      popups: ['testing-pyramid', 'code-review-lens']
    },
    {
      title: 'Investigation',
      note: 'Debugging is not guessing.',
      popups: ['debugging-process', 'reading-logs']
    },
    {
      title: 'Learning From Failure',
      note: 'Fixing the symptom may not fix the problem.',
      popups: ['root-cause-analysis', 'prevention-mindset']
    }
  ],
  popups: [
    {
      id: 'testing-pyramid',
      title: 'Testing Pyramid',
      blurb: 'Unit, integration, and end-to-end tests as different levels of confidence.',
      concept: [
        'Testing gives confidence that software behaves as expected and helps prevent defects reaching users. Tests do not prove software is perfect, but they reduce risk and make change safer.',
        'Think of testing as an engineering feedback mechanism, not a boring task at the end.'
      ],
      visual: {
        kind: 'pyramid',
        title: 'Testing pyramid',
        steps: ['Unit tests', 'Integration tests', 'End-to-end tests'],
        purpose:
          'Shows different testing scopes and why teams usually need more than one type.'
      },
      mistakes: [
        'Thinking testing is only QA’s job.',
        'Writing only end-to-end tests, then wondering why the suite is slow and flaky.',
        'Testing that the code does what it does, rather than what it should.'
      ],
      reflection:
        'What tests would give you confidence that recurring bookings work? Name one at each level.'
    },
    {
      id: 'debugging-process',
      title: 'Debugging Process',
      blurb: 'Reproduce, gather evidence, hypothesise, test, fix, verify, learn.',
      concept: [
        'Debugging is not guessing. It is a structured investigation: reproduce the issue, gather evidence, identify what changed, form hypotheses, test them one at a time, and verify the fix.'
      ],
      visual: {
        kind: 'flow',
        title: 'Bug investigation flow',
        steps: [
          'Issue reported',
          'Reproduce',
          'Gather evidence',
          'Form hypotheses',
          'Test hypotheses',
          'Fix',
          'Verify',
          'Prevent recurrence'
        ],
        purpose: 'Teaches debugging as a process rather than panic or random edits.'
      },
      mistakes: [
        'Believing debugging is mostly intuition.',
        'Changing several things at once, then not knowing which one worked.',
        'Skipping "what changed recently?" — usually the cheapest question available.'
      ],
      reflection:
        '"Desk bookings disappear overnight." What is the expected behaviour, and what are your three hypotheses?'
    },
    {
      id: 'reading-logs',
      title: 'Reading Logs',
      blurb: 'Errors, timestamps, traces, and system events as clues.',
      concept: [
        'Error messages and logs are clues, and reading them carefully is a core skill — not a senior one. The log usually tells you what happened, when, and often where.'
      ],
      visual: {
        kind: 'list',
        title: 'What to pull out of a log line',
        steps: [
          'Timestamp — does it line up with the reported issue?',
          'Level — error, warning, or noise?',
          'Message — read all of it, including the cause chain',
          'Trace / correlation id — follow one request across systems',
          'What happened immediately before'
        ],
        purpose: 'Using errors, timestamps, traces, and system events as clues.'
      },
      mistakes: [
        'Assuming logs are only useful for senior engineers.',
        'Reading the top of a stack trace and ignoring the root cause underneath.',
        'Searching for the error text without checking the surrounding timeline.'
      ],
      reflection:
        'Find a real error in a log you have access to. What happened in the ten seconds before it?'
    },
    {
      id: 'code-review-lens',
      title: 'Code Review Lens',
      blurb: 'Correctness, readability, maintainability, testing, risk, consistency.',
      concept: [
        'Code reviews are not gatekeeping. They improve quality, share knowledge, catch defects, and align the team on maintainability. A reviewer asks not only "does it work?" but "will we understand this later?"',
        'Treat review feedback as normal engineering collaboration, not personal criticism.'
      ],
      visual: {
        kind: 'list',
        title: 'Code review lens',
        steps: [
          'Correctness — does the code do what it should?',
          'Readability — can another engineer understand it?',
          'Maintainability — is it easy to change later?',
          'Testing — is there enough evidence the behaviour works?',
          'Risk — could this change break something important?',
          'Consistency — does it follow team patterns?'
        ],
        purpose: 'Gives you a practical checklist for reviewing code.'
      },
      mistakes: [
        'Thinking code review is about proving someone wrong.',
        'Only reviewing style, because style is easy to see.',
        'Approving a change you do not understand.'
      ],
      reflection:
        'Write one review comment that is specific, kind, and about risk rather than taste.'
    },
    {
      id: 'root-cause-analysis',
      title: 'Root Cause Analysis',
      blurb: 'Symptoms, immediate causes, root causes, and prevention.',
      concept: [
        'Fixing the symptom may not fix the underlying problem. Ask why the issue occurred and what would prevent recurrence.',
        'If bookings disappear overnight, the immediate bug might be a cleanup job — but the root cause could be missing tests, unclear ownership, or unsafe assumptions in data retention logic.'
      ],
      visual: {
        kind: 'flow',
        title: 'Four layers of a failure',
        steps: [
          'Symptom — what users see',
          'Immediate cause — what directly caused the behaviour',
          'Root cause — why the system allowed it',
          'Prevention — tests, monitoring, validation, docs, process'
        ],
        purpose: 'Distinguishing symptoms, immediate causes, root causes, and prevention.'
      },
      mistakes: [
        'Thinking the work is done once the bug is fixed.',
        'Stopping at the first "why" that produces a satisfying answer.',
        'Blaming a person when the real answer is a missing guardrail.'
      ],
      reflection:
        'Take a bug you fixed recently. Why did the system allow it to happen at all?'
    },
    {
      id: 'prevention-mindset',
      title: 'Prevention Mindset',
      blurb: 'Reducing recurrence through tests, monitoring, validation, docs, process.',
      concept: [
        'Prevention is what separates fixing a bug from removing a class of bugs. Every incident is an opportunity to make the same failure impossible, or at least loud and early.'
      ],
      visual: {
        kind: 'list',
        title: 'Ways to stop it happening twice',
        steps: [
          'A test that fails if the bug returns',
          'Monitoring or an alert that catches it early',
          'Validation that rejects the bad state at the boundary',
          'Documentation or a runbook so the next person is not lost',
          'A process change where the gap was human, not technical'
        ],
        purpose: 'Prevention turns one painful hour into permanent capability.'
      },
      mistakes: [
        'Fixing quietly and moving on without capturing the lesson.',
        'Adding an alert nobody owns or acts on.',
        'Writing a process rule where a test would have been cheaper.'
      ],
      reflection:
        'What is the difference between fixing a bug and preventing it from happening again?'
    }
  ]
}
