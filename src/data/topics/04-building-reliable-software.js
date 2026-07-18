export default {
  id: 'reliable',
  title: 'Building Reliable Software',
  tone: 'c4',
  blurb: 'Testing, debugging, logs, review, root cause thinking, and prevention.',
  tags: ['Testing', 'Debugging', 'Review', 'Root cause'],
  popups: [
    {
      id: 'pyramid',
      title: 'Testing Pyramid',
      blurb: 'Unit, integration, and end-to-end tests as different levels of confidence.',
      concept:
        'Testing gives confidence that software behaves as expected and helps prevent defects from reaching users. Tests do not prove software is perfect, but they reduce risk and make change safer. Testing is an engineering feedback mechanism, not a boring task at the end.',
      points: [
        '**Unit tests** check small pieces of logic.',
        '**Integration tests** check components working together.',
        '**End-to-end tests** check a user-like flow through the system.',
        'Manual testing may still be useful for exploration and user experience.',
        'Automated tests help teams make changes repeatedly with confidence.'
      ],
      visual: {
        kind: 'pyramid',
        label: 'Testing pyramid — shows different testing scopes and why teams usually need more than one type.',
        steps: ['Unit tests', 'Integration tests', 'End-to-end tests']
      },
      mistakes: ["Testing is only QA's job"],
      reflection: 'What tests would give us confidence that recurring bookings work?'
    },
    {
      id: 'debug',
      title: 'Debugging Process',
      blurb: 'Reproduce, gather evidence, form hypotheses, test carefully, fix, verify, and learn.',
      concept:
        'Debugging is not guessing. It is a structured investigation. Reproduce the issue, gather evidence, identify what changed, form hypotheses, test them, and verify the fix.',
      points: [
        'Understand the expected behaviour.',
        'Understand the actual behaviour.',
        'Reproduce the issue if possible.',
        'Check recent changes.',
        'Read logs and errors.',
        'Identify possible causes.',
        'Test one hypothesis at a time.',
        'Fix and verify.'
      ],
      visual: {
        kind: 'flow',
        label: 'Bug investigation flow — teaches debugging as a process rather than panic or random edits.',
        steps: ['Issue reported', 'Reproduce', 'Gather evidence', 'Form hypotheses', 'Test hypotheses', 'Fix', 'Verify', 'Prevent recurrence']
      },
      mistakes: ['Debugging is mostly intuition'],
      reflection: '"Desk bookings disappear overnight." What systems may be involved, and what are three possible hypotheses?'
    },
    {
      id: 'logs',
      title: 'Reading Logs',
      blurb: 'Using errors, timestamps, traces, and system events as clues.',
      concept:
        'Error messages and logs are clues. Reading them carefully is a core skill. Logs are event records that help explain what happened, and metrics are numbers that describe system behaviour such as errors, latency, traffic, and resource usage.',
      points: [
        '**Logs:** event records that help explain what happened.',
        '**Metrics:** numbers that describe system behaviour, such as errors, latency, traffic, and resource usage.',
        'Read logs or error messages carefully before escalating.',
        'Logs or metrics may be produced at every step of a request.',
        'Check recent changes alongside the logs.'
      ],
      visual: {
        kind: 'flow',
        label: 'Logs as evidence in an investigation.',
        steps: ['Issue reported', 'Read logs and errors', 'Gather evidence', 'Identify possible causes', 'Test one hypothesis at a time']
      },
      mistakes: ['Logs are only useful for senior engineers'],
      reflection: 'Given a set of error messages: what do they tell you, and what do they not tell you?'
    },
    {
      id: 'review',
      title: 'Code Review Lens',
      blurb: 'Reviewing for correctness, readability, maintainability, testing, risk, and consistency.',
      concept:
        'Code reviews are not just gatekeeping. They improve quality, share knowledge, catch defects, and align the team on maintainability. A reviewer is not only asking "does it work?" but also "will we understand this later?" Treat code review feedback as normal engineering collaboration, not personal criticism.',
      points: [
        '**Correctness:** does the code do what it should?',
        '**Readability:** can another engineer understand it?',
        '**Maintainability:** is it easy to change later?',
        '**Testing:** is there enough evidence the behaviour works?',
        '**Risk:** could this change break something important?',
        '**Consistency:** does it follow team patterns?'
      ],
      visual: {
        kind: 'flow',
        label: 'Code review lens — a practical checklist for reviewing code.',
        steps: ['Correctness', 'Readability', 'Maintainability', 'Testing', 'Risk', 'Consistency']
      },
      mistakes: ['Code review is about proving someone wrong'],
      reflection: 'Review a small change and comment on naming, validation, error handling, tests, and risk — constructively.'
    },
    {
      id: 'rca',
      title: 'Root Cause Analysis',
      blurb: 'Distinguishing symptoms, immediate causes, root causes, and prevention.',
      concept:
        'Fixing the symptom may not fix the underlying problem. Ask why the issue occurred and what would prevent recurrence. For example, if bookings disappear overnight, the immediate bug might be a cleanup job, but the root cause could include missing tests, unclear ownership, or unsafe assumptions in data retention logic.',
      points: [
        '**Symptom:** what users see.',
        '**Immediate cause:** what directly caused the behaviour.',
        '**Root cause:** why the system allowed it to happen.',
        '**Prevention:** tests, monitoring, validation, documentation, or process changes.'
      ],
      visual: {
        kind: 'flow',
        label: 'From symptom to prevention.',
        steps: ['Symptom', 'Immediate cause', 'Root cause', 'Prevention']
      },
      mistakes: ['If a bug is fixed, the work is done'],
      reflection: 'What is the difference between fixing a bug and preventing a bug from happening again?'
    },
    {
      id: 'prevention',
      title: 'Prevention Mindset',
      blurb: 'Reducing recurrence through tests, monitoring, validation, documentation, or process changes.',
      concept:
        'Quality is not a final checkbox. It is built through testing, review, investigation, maintainability, and learning from failures. Prevention is the last step of every investigation, not an optional extra.',
      points: [
        'Prevention: tests, monitoring, validation, documentation, or process changes.',
        'Automated tests help teams make changes repeatedly with confidence.',
        'Reviewing for risk asks whether a change could break something important.',
        'Verify the fix, then prevent recurrence.'
      ],
      visual: {
        kind: 'flow',
        label: 'Prevent recurrence.',
        steps: ['Fix', 'Verify', 'Prevent recurrence']
      },
      mistakes: ['If a bug is fixed, the work is done', "Testing is only QA's job"],
      reflection: 'Pick a bug you have seen. What one change would stop it happening again?'
    }
  ]
}
