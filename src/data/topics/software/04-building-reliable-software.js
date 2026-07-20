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
          { icon: 'cube', label: 'Unit tests', desc: 'Check small pieces of logic.', purpose: 'Check small pieces of logic.', question: 'Does each piece work?' },
          { icon: 'puzzle-piece', label: 'Integration tests', desc: 'Check components working together.', purpose: 'Check components working together.', question: 'Do the parts work together?' },
          { icon: 'route', label: 'End-to-end tests', desc: 'Check a full user-like flow.', purpose: 'Check a full user-like flow.', question: 'Does the whole journey work?' }
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
          { icon: 'bug', label: 'Issue reported', desc: 'Someone hits a problem.', purpose: 'Capture the reported problem.', question: 'What is going wrong?' },
          { icon: 'rotate', label: 'Reproduce', desc: 'Make it happen on demand.', purpose: 'Make it happen on demand.', question: 'Can we trigger it reliably?' },
          { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Read logs, inputs, and changes.', purpose: 'Collect logs, inputs, and changes.', question: 'What does the evidence show?' },
          { icon: 'lightbulb', label: 'Form hypotheses', desc: 'List possible causes.', purpose: 'List possible causes.', question: 'What could cause this?' },
          { icon: 'flask', label: 'Test hypotheses', desc: 'Check one idea at a time.', purpose: 'Check one idea at a time.', question: 'Which cause holds up?' },
          { icon: 'wrench', label: 'Fix', desc: 'Correct the real cause.', purpose: 'Correct the real cause.', question: 'What change fixes it?' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm the fix works.', purpose: 'Confirm the fix works.', question: 'Is it actually fixed?' },
          { icon: 'shield-halved', label: 'Prevent recurrence', desc: 'Stop it happening again.', purpose: 'Stop it happening again.', question: 'How do we prevent a repeat?' }
        ]
      },
      io: {
        inputs: [
          ['User report', 'Symptom'],
          ['Problem', 'Test setup'],
          ['Repro', 'Logs & changes'],
          ['Evidence'],
          ['Candidate causes', 'A test'],
          ['Confirmed cause'],
          ['Fix', 'Repro'],
          ['Root cause']
        ],
        outputs: [
          ['A defined problem'],
          ['A reliable repro'],
          ['Evidence'],
          ['Candidate causes'],
          ['A confirmed cause'],
          ['A fix'],
          ['A verified fix'],
          ['A test or guard']
        ]
      },
      who: [
        'User, Support',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer, QA',
        'Engineer, Team'
      ],
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
          { icon: 'bug', label: 'Issue reported', desc: 'A problem surfaces.', purpose: 'A problem surfaces.', question: 'What is wrong?' },
          { icon: 'file-lines', label: 'Read logs and errors', desc: 'Study the event records.', purpose: 'Study the event records.', question: 'What do the logs say?' },
          { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Collect the relevant clues.', purpose: 'Collect the relevant clues.', question: 'What evidence matters?' },
          { icon: 'lightbulb', label: 'Identify possible causes', desc: 'Narrow down what could be wrong.', purpose: 'Narrow down what could be wrong.', question: 'What could cause this?' },
          { icon: 'flask', label: 'Test one hypothesis at a time', desc: 'Isolate to confirm the cause.', purpose: 'Isolate to confirm the cause.', question: 'Which cause holds up?' }
        ]
      },
      example: {
        title: 'A 500 error after login',
        items: [
          'Users report errors right after signing in.',
          'The logs show a null-pointer at profile load.',
          'Gather the request id, timing, and recent deploys.',
          'Likely the profile service returns null for new users.',
          'Test with a brand-new account and confirm.'
        ]
      },
      io: {
        inputs: [
          ['User report'],
          ['Problem', 'Log files'],
          ['Log lines', 'Metrics'],
          ['Evidence'],
          ['Candidate causes', 'A test']
        ],
        outputs: [
          ['A defined problem'],
          ['Relevant log lines'],
          ['Evidence'],
          ['Candidate causes'],
          ['A confirmed cause']
        ]
      },
      who: [
        'User, Support',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer'
      ],
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
          { icon: 'circle-check', label: 'Correctness', desc: 'Does it do what it should?', purpose: 'Confirm it does what it should.', question: 'Does it do the right thing?' },
          { icon: 'book-open', label: 'Readability', desc: 'Can others understand it?', purpose: 'Ensure others can understand it.', question: 'Can the next person read it?' },
          { icon: 'screwdriver-wrench', label: 'Maintainability', desc: 'Is it easy to change later?', purpose: 'Ensure it can change later.', question: 'Is it easy to change?' },
          { icon: 'flask', label: 'Testing', desc: 'Is there proof it works?', purpose: 'Check there is proof it works.', question: 'Is there proof it works?' },
          { icon: 'triangle-exclamation', label: 'Risk', desc: 'Could this break something?', purpose: 'Weigh what could break.', question: 'What could this break?' },
          { icon: 'ruler', label: 'Consistency', desc: 'Does it follow team patterns?', purpose: 'Check it follows team patterns.', question: 'Does it match our patterns?' }
        ]
      },
      example: {
        title: 'Reviewing a small PR',
        items: [
          'Check the logic actually books the right desk.',
          'Suggest clearer names for two variables.',
          'Flag a function that will be hard to extend.',
          'Ask for a test covering the error path.',
          'Note the change touches shared billing code.',
          "Confirm it follows the team's error-handling pattern."
        ]
      },
      io: {
        inputs: [
          ['The change', 'Requirements'],
          ['The code'],
          ['The code', 'Patterns'],
          ['The change', 'Tests'],
          ['The change', 'Blast radius'],
          ['The code', 'Team standards']
        ],
        outputs: [
          ['A correctness assessment'],
          ['Readability feedback'],
          ['Maintainability feedback'],
          ['Test-coverage feedback'],
          ['A risk assessment'],
          ['Consistency feedback']
        ]
      },
      who: [
        'Reviewer',
        'Reviewer',
        'Reviewer',
        'Reviewer, Author',
        'Reviewer',
        'Reviewer, Author'
      ],
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
          { icon: 'eye', label: 'Symptom', desc: 'What users actually see.', purpose: 'What users actually see.', question: 'What is observed?' },
          { icon: 'bolt', label: 'Immediate cause', desc: 'What directly triggered it.', purpose: 'What directly triggered it.', question: 'What triggered it?' },
          { icon: 'magnifying-glass', label: 'Root cause', desc: 'Why the system allowed it.', purpose: 'Why the system allowed it.', question: 'Why did the system allow it?' },
          { icon: 'shield-halved', label: 'Prevention', desc: 'What stops it recurring.', purpose: 'What stops it recurring.', question: 'How do we prevent a repeat?' }
        ]
      },
      example: {
        title: '"Payment failed" for some users',
        items: [
          'Symptom: some users see "payment failed".',
          'Immediate cause: the payment call times out.',
          'Root cause: no retry or timeout tuning for slow banks.',
          'Prevention: add retries, alerts, and a timeout budget.'
        ]
      },
      io: {
        inputs: [
          ['User report'],
          ['Symptom', 'Evidence'],
          ['Trigger', '"5 whys"'],
          ['Root cause']
        ],
        outputs: [
          ['A clear symptom'],
          ['The trigger'],
          ['The system reason'],
          ['A preventive change']
        ]
      },
      who: [
        'User, Support',
        'Engineer',
        'Engineer, Team',
        'Engineer, Team'
      ],
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
          { icon: 'wrench', label: 'Fix', desc: 'Correct the underlying issue.', purpose: 'Correct the underlying issue.', question: 'What fixes the cause?' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm it actually works.', purpose: 'Confirm it actually works.', question: 'Is it really fixed?' },
          { icon: 'shield-halved', label: 'Prevent recurrence', desc: 'Add tests, monitoring, or guards.', purpose: 'Add tests, monitoring, or guards.', question: 'How do we stop a repeat?' }
        ]
      },
      example: {
        title: 'After fixing a data bug',
        items: [
          'Correct the code that wrote bad dates.',
          'Verify existing records and new writes are correct.',
          'Add a validation rule and a test so it cannot return.'
        ]
      },
      io: {
        inputs: [
          ['Root cause'],
          ['Fix', 'Tests'],
          ['Verified fix']
        ],
        outputs: [
          ['A fix'],
          ['A verified fix'],
          ['Tests, Monitoring, Guards']
        ]
      },
      who: [
        'Engineer',
        'Engineer, QA',
        'Engineer, Team'
      ],
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
