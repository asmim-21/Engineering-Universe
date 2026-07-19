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
      whatIs: {
        text: 'Tests give confidence that software behaves as expected and make change safer.',
        ensures: [
          '**Unit:** small pieces of logic',
          '**Integration:** components working together',
          '**End-to-end:** a full user-like flow',
          'Automated tests let you change with confidence'
        ]
      },
      visual: {
        kind: 'pyramid',
        label: 'Testing pyramid — shows different testing scopes and why teams usually need more than one type.',
        steps: [
          { icon: 'cube', label: 'Unit tests', desc: 'Check small pieces of logic.' },
          { icon: 'puzzle-piece', label: 'Integration tests', desc: 'Check components working together.' },
          { icon: 'route', label: 'End-to-end tests', desc: 'Check a full user-like flow.' }
        ]
      },
      example: {
        title: 'Testing recurring bookings',
        items: [
          'Check the recurrence rule generates four dates.',
          'Check the booking service saves them together.',
          'Book a weekly desk and see every date appear.'
        ]
      },
      misconceptions: [
        { wrong: "Testing is only QA's job.", right: 'Everyone writes and cares about tests.' },
        { wrong: 'Tests prove software is perfect.', right: 'Tests reduce risk; they do not prove perfection.' }
      ],
      takeaways: [
        'Different levels give different confidence.',
        'Automation makes repeated change safe.',
        'Testing is feedback, not a chore at the end.'
      ],
      reflection: 'What tests would give us confidence that recurring bookings work?',
      checks: [
        'What does a unit test check?',
        'What does end-to-end cover?',
        'Why use more than one type of test?',
        'What tests would prove recurring bookings work?'
      ]
    },
    {
      id: 'debug',
      title: 'Debugging Process',
      blurb: 'Reproduce, gather evidence, form hypotheses, test carefully, fix, verify, and learn.',
      whatIs: {
        text: 'Debugging is a structured investigation, not guessing: reproduce, gather evidence, test, fix, verify.',
        ensures: [
          'Compare expected vs actual behaviour',
          'Reproduce the issue',
          'Check recent changes and logs',
          'Test one hypothesis at a time'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Bug investigation flow — teaches debugging as a process rather than panic or random edits.',
        loop: false,
        steps: [
          { icon: 'bug', label: 'Issue reported', desc: 'Someone hits a problem.' },
          { icon: 'rotate', label: 'Reproduce', desc: 'Make it happen on demand.' },
          { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Read logs, inputs, and changes.' },
          { icon: 'lightbulb', label: 'Form hypotheses', desc: 'List possible causes.' },
          { icon: 'flask', label: 'Test hypotheses', desc: 'Check one idea at a time.' },
          { icon: 'wrench', label: 'Fix', desc: 'Correct the real cause.' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm the fix works.' },
          { icon: 'shield-halved', label: 'Prevent recurrence', desc: 'Stop it happening again.' }
        ]
      },
      example: {
        title: '"Bookings vanish overnight"',
        items: [
          'Users report bookings gone by morning.',
          'Reproduce by advancing the clock in test.',
          'Read the logs around midnight.',
          'Maybe a cleanup job deletes them.',
          'Disable the job in test and re-check.',
          "Correct the job's date filter.",
          'Confirm bookings survive overnight.',
          'Add a test for the retention rule.'
        ]
      },
      misconceptions: [
        { wrong: 'Debugging is mostly intuition.', right: 'It is evidence and one hypothesis at a time.' },
        { wrong: 'Fixing the symptom ends the job.', right: 'Verify, then prevent recurrence.' }
      ],
      takeaways: [
        'Reproduce before you fix.',
        'Change one thing at a time.',
        'Evidence beats guessing.'
      ],
      reflection: '"Desk bookings disappear overnight." What systems may be involved, and what are three possible hypotheses?',
      checks: [
        'What do you check first?',
        'Why reproduce the issue?',
        'Why test one hypothesis at a time?',
        'What comes after the fix?'
      ]
    },
    {
      id: 'logs',
      title: 'Reading Logs',
      blurb: 'Using errors, timestamps, traces, and system events as clues.',
      whatIs: {
        text: 'Logs and metrics are clues — reading them carefully is a core debugging skill.',
        ensures: [
          '**Logs:** event records of what happened',
          '**Metrics:** numbers like errors, latency, traffic',
          'Read them carefully before escalating',
          'Check recent changes alongside them'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Logs as evidence in an investigation.',
        loop: false,
        steps: [
          { icon: 'bug', label: 'Issue reported', desc: 'A problem surfaces.' },
          { icon: 'file-lines', label: 'Read logs and errors', desc: 'Study the event records.' },
          { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Collect the relevant clues.' },
          { icon: 'lightbulb', label: 'Identify possible causes', desc: 'Narrow down what could be wrong.' },
          { icon: 'flask', label: 'Test one hypothesis at a time', desc: 'Isolate to confirm the cause.' }
        ]
      },
      misconceptions: [
        { wrong: 'Logs are only useful for senior engineers.', right: 'Anyone can read logs to find clues.' },
        { wrong: 'Logs tell you everything.', right: 'They show what happened, not always why.' }
      ],
      takeaways: [
        'Read the error before escalating.',
        'Logs and metrics are evidence.',
        'Correlate logs with recent changes.'
      ],
      reflection: 'Given a set of error messages: what do they tell you, and what do they not tell you?',
      checks: [
        'What do logs tell you?',
        'What do metrics tell you?',
        'What do they not tell you?',
        'What would you check alongside logs?'
      ]
    },
    {
      id: 'review',
      title: 'Code Review Lens',
      blurb: 'Reviewing for correctness, readability, maintainability, testing, risk, and consistency.',
      whatIs: {
        text: 'Reviews improve quality, share knowledge, and catch defects — collaboration, not criticism.',
        ensures: [
          '**Correctness:** does it do what it should?',
          '**Readability & maintainability:** can we understand and change it?',
          '**Testing & risk:** is there proof, and what could break?',
          '**Consistency:** does it follow team patterns?'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Code review lens — a practical checklist for reviewing code.',
        loop: false,
        steps: [
          { icon: 'circle-check', label: 'Correctness', desc: 'Does it do what it should?' },
          { icon: 'book-open', label: 'Readability', desc: 'Can others understand it?' },
          { icon: 'screwdriver-wrench', label: 'Maintainability', desc: 'Is it easy to change later?' },
          { icon: 'flask', label: 'Testing', desc: 'Is there proof it works?' },
          { icon: 'triangle-exclamation', label: 'Risk', desc: 'Could this break something?' },
          { icon: 'ruler', label: 'Consistency', desc: 'Does it follow team patterns?' }
        ]
      },
      misconceptions: [
        { wrong: 'Code review is about proving someone wrong.', right: 'It is shared ownership of quality.' },
        { wrong: '"It works" is enough to approve.', right: 'Also ask "will we understand this later?"' }
      ],
      takeaways: [
        'Review for the reader, not just the runtime.',
        'Feedback is collaboration.',
        'Naming, tests, and risk all matter.'
      ],
      reflection: 'Review a small change and comment on naming, validation, error handling, tests, and risk — constructively.',
      checks: [
        'What does a reviewer look for?',
        'Why review for readability?',
        'How should you give feedback?',
        'What risks might a change carry?'
      ]
    },
    {
      id: 'rca',
      title: 'Root Cause Analysis',
      blurb: 'Distinguishing symptoms, immediate causes, root causes, and prevention.',
      whatIs: {
        text: 'Fixing the symptom is not enough — ask why it happened and what prevents recurrence.',
        ensures: [
          '**Symptom:** what users see',
          '**Immediate cause:** what directly triggered it',
          '**Root cause:** why the system allowed it',
          '**Prevention:** tests, monitoring, or process changes'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From symptom to prevention.',
        loop: false,
        steps: [
          { icon: 'eye', label: 'Symptom', desc: 'What users actually see.' },
          { icon: 'bolt', label: 'Immediate cause', desc: 'What directly triggered it.' },
          { icon: 'magnifying-glass', label: 'Root cause', desc: 'Why the system allowed it.' },
          { icon: 'shield-halved', label: 'Prevention', desc: 'What stops it recurring.' }
        ]
      },
      misconceptions: [
        { wrong: 'If a bug is fixed, the work is done.', right: 'Prevent it from happening again.' },
        { wrong: 'The first cause you find is the root cause.', right: 'Keep asking why until you reach the system reason.' }
      ],
      takeaways: [
        'Symptom, immediate cause, root cause, prevention.',
        'The real fix stops recurrence.',
        'Ask "why" more than once.'
      ],
      reflection: 'What is the difference between fixing a bug and preventing a bug from happening again?',
      checks: [
        'Symptom vs root cause?',
        'What is prevention?',
        'Why is fixing the symptom not enough?',
        'Give an example of a root cause.'
      ]
    },
    {
      id: 'prevention',
      title: 'Prevention Mindset',
      blurb: 'Reducing recurrence through tests, monitoring, validation, documentation, or process changes.',
      whatIs: {
        text: 'Quality is built through testing, review, and learning — prevention is the last step of every fix.',
        ensures: [
          'Add tests, monitoring, or validation',
          'Automate so change stays safe',
          'Ask if a change could break something',
          'Verify the fix, then prevent recurrence'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Prevent recurrence.',
        loop: false,
        steps: [
          { icon: 'wrench', label: 'Fix', desc: 'Correct the underlying issue.' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm it actually works.' },
          { icon: 'shield-halved', label: 'Prevent recurrence', desc: 'Add tests, monitoring, or guards.' }
        ]
      },
      misconceptions: [
        { wrong: 'If a bug is fixed, the work is done.', right: 'Add a guard so it cannot return.' },
        { wrong: "Testing is only QA's job.", right: 'Prevention is everyone\'s responsibility.' }
      ],
      takeaways: [
        'Prevention closes every investigation.',
        'Automated tests make change repeatable.',
        'Learn from failures.'
      ],
      reflection: 'Pick a bug you have seen. What one change would stop it happening again?',
      checks: [
        'What is prevention?',
        'How do tests prevent regressions?',
        'What one change would stop a past bug?',
        'Why is quality not a final checkbox?'
      ]
    }
  ]
}
