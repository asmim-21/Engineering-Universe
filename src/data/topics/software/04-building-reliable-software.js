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
        text: `Tests exist so that change stays safe. A codebase without them is one where every improvement is a gamble, which is why teams stop improving code they cannot test.

The three levels answer different questions. **Unit tests** check one piece of logic in isolation — fast (milliseconds), precise about what broke, and where most of your tests should live. **Integration tests** check that pieces work together: the service really writes to the database, the endpoint really returns what the frontend expects. **End-to-end tests** drive the whole system like a user would; they catch problems nothing else can, but they are slow and fail for irritating reasons like timing.

The pyramid shape is the guidance: many unit tests, fewer integration tests, a small number of end-to-end journeys. Inverting it produces a suite that takes an hour, fails randomly, and that everyone learns to ignore — which is worse than having no suite at all.`,
        ensures: [
          'Explain what each level of test actually checks',
          'Know why fast, focused tests should outnumber slow, broad ones',
          'Write a test that fails for one clear reason',
          'Test behaviour and error paths, not just the happy path',
          'Recognise that coverage percentage is not the same as confidence',
          'Understand why flaky tests are worse than missing ones'
        ]
      },
      visual: {
        kind: 'pyramid',
        label: 'Testing pyramid — many fast focused tests, few slow broad ones.',
        steps: [
          { icon: 'cube', label: 'Unit tests — fast, many', purpose: 'Check one function or rule in isolation, in milliseconds.', question: 'Does this piece behave correctly on its own?' },
          { icon: 'puzzle-piece', label: 'Integration tests — fewer', purpose: 'Check the parts really work with each other and with the database.', question: 'Do the pieces fit together as assumed?' },
          { icon: 'route', label: 'End-to-end tests — slow, a handful', purpose: 'Drive the whole system the way a user does.', question: 'Does the journey work in a realistic setup?' }
        ]
      },
      example: {
        title: 'Testing recurring bookings',
        items: [
          'Unit: the recurrence rule turns "weekly for 4 weeks" into four correct dates.',
          'Unit: a rule spanning a clock change still produces four dates.',
          'Unit: an end date before the start date is rejected.',
          'Integration: the booking service saves all four rows in one transaction.',
          'Integration: a clash on week three rolls the whole set back.',
          'End-to-end: a user books a weekly desk and sees four bookings listed.'
        ]
      },
      misconceptions: [
        { wrong: "Testing is quality assurance (QA)'s job.", right: 'Engineers test their own work; QA finds what slipped through.' },
        { wrong: 'Tests prove the software is correct.', right: 'They show specific things are not broken; they cannot prove perfection.' },
        { wrong: '100% coverage means well tested.', right: 'Coverage counts executed lines, not whether anything meaningful was checked.' },
        { wrong: 'More end-to-end tests means more confidence.', right: 'Slow, flaky suites get ignored, which removes confidence entirely.' }
      ],
      takeaways: [
        '**Tests are what make change safe.** Their real value is not proving today\'s code works, but letting you alter it next year without fear.',
        '**Each level answers a different question:** does this logic work, do these parts fit together, does the journey hold up.',
        '**Fast tests get run; slow tests get skipped.** A suite that finishes in seconds is used constantly, which is where most of the benefit comes from.',
        '**A good test fails for one reason** and its name tells you what broke without opening the file.',
        '**Test the error paths.** The happy path is exercised by everyone daily; the failure branch may only ever run in production.',
        '**Coverage is a weak proxy.** Lines executed is not the same as behaviour verified — assertions are what count.',
        '**A flaky test is worse than no test.** Once people start re-running failures, the suite has stopped being a signal.',
        '**Write the test with the fix.** A regression test is the only durable proof that a specific bug is gone.'
      ],
      reflection: 'For a feature you know, write down one unit, one integration and one end-to-end test. Which of the three would have caught the last bug you saw there?',
      checks: [
        'What does each level of the pyramid check?',
        'Why should unit tests outnumber end-to-end tests?',
        'What makes a good test failure message?',
        'Why is high coverage not the same as good testing?',
        'What is wrong with a flaky test?',
        'Why write a test alongside a bug fix?'
      ]
    },
    {
      id: 'debug',
      title: 'Debugging Process',
      blurb: 'Reproduce, gather evidence, form hypotheses, test carefully, fix, verify, and learn.',
      whatIs: {
        text: `Debugging is an investigation, not an act of inspiration. The reliable version is a loop: reproduce it, gather evidence, form one hypothesis, test that hypothesis, and only then change code.

**Reproducing comes first** because everything downstream depends on it. Without a reliable reproduction you cannot tell whether your fix worked or whether the problem simply did not appear this time. Narrowing the reproduction — which user, which environment, which input, since when — usually points straight at the cause.

The discipline that separates fast debugging from slow is **changing one thing at a time**. Editing four things and re-running gives you no information about which mattered, and often introduces a second bug behind the first. And the classic first question is still the best: what changed? Most breakage follows a deploy, a config change, a data change or a dependency update.`,
        ensures: [
          'Reproduce a problem reliably before attempting a fix',
          'Gather evidence from logs, inputs and recent changes',
          'State one hypothesis at a time and test it',
          'Bisect the problem space rather than guessing',
          'Verify the fix against the original reproduction',
          'Close the loop by preventing recurrence'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Bug investigation — evidence first, one change at a time.',
        loop: false,
        steps: [
          { icon: 'bug', label: 'Issue reported', desc: 'Someone hits a problem.', purpose: 'Capture the symptom precisely, in the reporter\'s terms.', question: 'What exactly did they see, and when?' },
          { icon: 'rotate', label: 'Reproduce', desc: 'Make it happen on demand.', purpose: 'Get a reliable trigger — the foundation for everything else.', question: 'Can I make it fail whenever I want?' },
          { icon: 'magnifying-glass', label: 'Gather evidence', desc: 'Logs, inputs, and recent changes.', purpose: 'Collect facts before forming opinions.', question: 'What does the system say happened — and what changed recently?' },
          { icon: 'lightbulb', label: 'Form hypotheses', desc: 'List possible causes.', purpose: 'Turn evidence into a few candidate explanations.', question: 'What could produce exactly this?' },
          { icon: 'flask', label: 'Test one at a time', desc: 'Check a single idea.', purpose: 'Change one variable so the result means something.', question: 'Does this one hypothesis survive?' },
          { icon: 'wrench', label: 'Fix the cause', desc: 'Correct the real problem.', purpose: 'Fix the cause, not the symptom you happened to see.', question: 'Am I fixing why it happened, or just hiding it?' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm against the reproduction.', purpose: 'Prove it with the same trigger that used to fail.', question: 'Does the original reproduction now pass?' },
          { icon: 'shield-halved', label: 'Prevent recurrence', desc: 'Add a test or a guard.', purpose: 'Make this specific failure impossible to reintroduce.', question: 'What stops this coming back?' }
        ]
      },
      io: {
        inputs: [
          ['User report', 'Symptom'],
          ['Symptom', 'Environment', 'Data'],
          ['Reproduction', 'Logs', 'Change history'],
          ['Evidence'],
          ['Candidate causes', 'A single change'],
          ['Confirmed cause'],
          ['Fix', 'Reproduction'],
          ['Root cause']
        ],
        outputs: [
          ['A precise problem statement'],
          ['A reliable reproduction'],
          ['Evidence and a timeline'],
          ['Candidate causes'],
          ['A confirmed cause'],
          ['A fix'],
          ['A verified fix'],
          ['A regression test or guard']
        ]
      },
      who: [
        'User, Support',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer',
        'Engineer, quality assurance (QA)',
        'Engineer, Team'
      ],
      example: {
        title: '"Bookings vanish overnight"',
        items: [
          'Report: bookings made after 5pm are gone by morning.',
          'Reproduce: create one at 5pm in test and advance the clock past midnight.',
          'Evidence: the nightly cleanup job logs "removed 14 expired bookings".',
          'Hypothesis: the cleanup compares dates in the wrong timezone.',
          'Test: run the job against one booking with logging on — it deletes a future one.',
          'Fix: compare in UTC and exclude bookings whose date is still ahead.',
          'Verify: the original 5pm reproduction now survives the clock change.',
          'Prevent: a unit test pinning the retention rule across a timezone boundary.'
        ]
      },
      misconceptions: [
        { wrong: 'Debugging is mostly intuition.', right: 'It is evidence, one hypothesis at a time; intuition just picks the order.' },
        { wrong: 'The crash location is the bug.', right: 'It is where the problem became visible, often far from the cause.' },
        { wrong: 'Fixing the symptom ends the job.', right: 'Verify against the reproduction, then prevent recurrence.' },
        { wrong: 'Change several things to find it faster.', right: 'Then you cannot tell which change mattered — or what you broke.' }
      ],
      takeaways: [
        '**Reproduce first.** Without a reliable trigger you cannot know whether a fix worked or the bug merely hid.',
        '**Narrowing the reproduction is doing the debugging.** Which user, which input, which environment, since when — those four questions solve a surprising share of bugs.',
        '**Ask what changed.** Deploys, configuration, data and dependency updates cause most sudden breakage.',
        '**Change one thing at a time.** Otherwise a passing run tells you nothing about which change was responsible.',
        '**The crash site is a symptom.** Bad data written an hour ago surfaces wherever it is read, not where it was created.',
        '**Bisect the problem space.** Halving where the fault can be — by commit, by layer, by input — beats reading everything.',
        '**Verify with the original reproduction.** "It seems fine now" is not a result.',
        '**Every fix ends with prevention.** A regression test is how a bug becomes permanently gone rather than temporarily absent.'
      ],
      reflection: '"Bookings disappear overnight." Before reading any code, write three hypotheses and the single piece of evidence that would eliminate each one. Which would you check first, and why that one?',
      checks: [
        'Why reproduce before fixing?',
        'What four questions narrow a reproduction quickly?',
        'Why is "what changed recently?" such a productive question?',
        'Why change only one thing at a time?',
        'Why is the crash location often not the cause?',
        'What should happen after a fix is verified?'
      ]
    },
    {
      id: 'logs',
      title: 'Reading Logs & Signals',
      blurb: 'Using errors, timestamps, traces, and system events as clues.',
      whatIs: {
        text: `Logs are the system telling you what it did. Metrics are the same story as numbers — request rates, error rates, latency — and traces follow one request across every service it touched.

Reading them well is mostly about **narrowing**. Start from a timestamp and a request or correlation id, then follow that one request rather than scrolling through everything. Read the **first** error rather than the loudest: later errors are often consequences of the first one. And always check the level — an ERROR that appears a thousand times a day is either a real problem everyone has stopped seeing, or a WARNING wearing the wrong label.

Logs answer "what happened and in what order". They rarely answer "why" on their own, so pair them with what changed: recent deploys, configuration edits, feature flags, upstream incidents. That combination — timeline plus change history — resolves most investigations.`,
        ensures: [
          'Find the relevant lines using time, level and a request id',
          'Read the first error rather than the last',
          'Distinguish logs, metrics and traces and what each is good for',
          'Correlate a spike with recent deploys or config changes',
          'Recognise what logs cannot tell you',
          'Write log messages that will be useful to someone else at 3am'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Logs as evidence — from a symptom to a confirmed cause.',
        loop: false,
        steps: [
          { icon: 'bug', label: 'Symptom and time', desc: 'A problem, with a window.', purpose: 'Pin down when it happened; that window is your filter.', question: 'What broke, and between which times?' },
          { icon: 'file-lines', label: 'Find the first error', desc: 'Read the earliest, not the loudest.', purpose: 'Later errors are usually consequences of the first.', question: 'What is the earliest thing that went wrong?' },
          { icon: 'link', label: 'Follow one request', desc: 'Use the correlation or request id.', purpose: 'Trace a single journey across services instead of reading everything.', question: 'What happened to this exact request?' },
          { icon: 'chart-line', label: 'Check the metrics', desc: 'Errors, latency, traffic.', purpose: 'See whether it is one request or a pattern, and when it started.', question: 'Is this isolated, and when did the shape change?' },
          { icon: 'code-branch', label: 'Correlate with changes', desc: 'Deploys, config, flags.', purpose: 'Line the timeline up against what the team changed.', question: 'What changed just before it started?' },
          { icon: 'flask', label: 'Confirm the cause', desc: 'Test the explanation.', purpose: 'Verify the story the evidence tells.', question: 'Does this explanation account for all of it?' }
        ]
      },
      example: {
        title: 'A 500 error after login',
        items: [
          'Support reports errors just after sign-in, starting around 09:20.',
          'The first error at 09:18 is a null reference loading a profile.',
          'Following one request id shows the profile service returned an empty body.',
          'Metrics show 500s starting at 09:15 and rising steadily.',
          'A deploy went out at 09:14 changing the profile response.',
          'Confirmed with a brand-new account, which has no profile row yet.'
        ]
      },
      io: {
        inputs: [
          ['User report', 'Time window'],
          ['Log search', 'Levels'],
          ['Request id', 'Trace'],
          ['Dashboards'],
          ['Deploy history', 'Config changes'],
          ['Hypothesis', 'A test']
        ],
        outputs: [
          ['A bounded search'],
          ['The first real error'],
          ['One request\'s journey'],
          ['Scale and start time'],
          ['A likely trigger'],
          ['A confirmed cause']
        ]
      },
      who: [
        'User, Support',
        'Engineer',
        'Engineer',
        'Engineer, site reliability engineer (SRE)',
        'Engineer, DevOps',
        'Engineer'
      ],
      misconceptions: [
        { wrong: 'Logs are for senior engineers.', right: 'They are the most accessible evidence there is — start there.' },
        { wrong: 'Logs tell you why something happened.', right: 'They tell you what and when; the why is usually inferred.' },
        { wrong: 'The loudest error is the cause.', right: 'The first error usually is; the rest are consequences.' },
        { wrong: 'More logging is always better.', right: 'Noise hides signal, and volume costs money and attention.' }
      ],
      takeaways: [
        '**Start with a time window and narrow.** Unfiltered logs are unreadable; a two-minute window around the failure usually is not.',
        '**Read the first error, not the last.** Cascading failures produce dramatic later errors that are pure consequence.',
        '**A correlation id turns scattered lines into one story** across every service a request touched. If your system has one, learn how to search by it.',
        '**Metrics tell you scale and start time; logs tell you detail.** Together they answer "how bad, since when, and what exactly".',
        '**Always check what changed.** A metric that turns at 09:14 and a deploy at 09:14 is rarely a coincidence.',
        '**Logs record what the author thought worth recording.** Absence of evidence is not evidence of absence.',
        '**Write logs for the person debugging at 3am** — include the identifiers, the values that mattered, and no secrets.',
        '**Levels are a contract.** If ERROR fires constantly, people stop reacting to it, and the one that mattered goes unnoticed.'
      ],
      reflection: 'Find a recent error in a system you can access. Can you tell what happened, which request it belonged to, and what changed just before? Which of those was hardest — and what logging would have made it easy?',
      checks: [
        'How do you narrow down which log lines matter?',
        'Why read the first error rather than the last?',
        'What does a correlation id let you do?',
        'What do metrics tell you that logs do not?',
        'What can logs never tell you?',
        'What makes a log message useful to someone else?'
      ]
    },
    {
      id: 'review',
      title: 'Code Review Lens',
      blurb: 'Reviewing for correctness, readability, maintainability, testing, risk, and consistency.',
      whatIs: {
        text: `Code review has two jobs: catching problems before they reach users, and spreading knowledge so more than one person understands each part of the system. The second is often the more valuable, and it is why juniors should review seniors' work too.

A useful review passes over six things: **correctness** (does it do what the ticket says, including the edge cases), **readability** (will someone unfamiliar follow it), **maintainability** (what happens when this needs to change), **testing** (is there proof, and does it cover the failure paths), **risk** (what else could this affect), and **consistency** (does it match how this codebase does things).

How feedback is written decides whether it lands. Be specific and about the code — "this throws when the list is empty" rather than "this is careless". Ask rather than instruct when you might be missing context. Separate blocking concerns from preferences, and approve when something is good enough rather than identical to what you would have written.`,
        ensures: [
          'Review against the six lenses rather than by instinct',
          'Check edge cases and error paths, not just the described behaviour',
          'Give specific, actionable feedback about the code',
          'Distinguish blocking issues from personal preference',
          'Ask questions when the author may know something you do not',
          'Approve at "good enough", not at "how I would have written it"'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Six lenses to pass over any change.',
        loop: false,
        steps: [
          { icon: 'circle-check', label: 'Correctness', desc: 'Does it do what it should?', purpose: 'Check the logic against the requirement, including edge cases.', question: 'Does this do the right thing, including when inputs are odd?' },
          { icon: 'book-open', label: 'Readability', desc: 'Can others follow it?', purpose: 'Judge whether an unfamiliar reader could follow the intent.', question: 'Would someone new understand this without help?' },
          { icon: 'screwdriver-wrench', label: 'Maintainability', desc: 'Is it easy to change later?', purpose: 'Consider the next change this code will need.', question: 'What happens when this has to change?' },
          { icon: 'flask', label: 'Testing', desc: 'Is there proof it works?', purpose: 'Check the tests cover the behaviour and the failure paths.', question: 'What would fail if this logic were wrong?' },
          { icon: 'triangle-exclamation', label: 'Risk', desc: 'What else could this affect?', purpose: 'Look beyond the diff at shared code, data and migrations.', question: 'What is the blast radius if this is wrong?' },
          { icon: 'ruler', label: 'Consistency', desc: 'Does it match our patterns?', purpose: 'Keep the codebase coherent rather than a collection of styles.', question: 'Does this follow how we do things here?' }
        ]
      },
      example: {
        title: 'Reviewing a small pull request',
        items: [
          'Correctness: the booking uses the desk id from the request, not the session.',
          'Readability: two variables named `d` and `tmp` — suggest real names.',
          'Maintainability: a fourth branch added to a switch that keeps growing.',
          'Testing: no test for the "desk already booked" path.',
          'Risk: it touches the shared availability helper used by billing.',
          'Consistency: errors returned as strings, while the codebase uses error types.'
        ]
      },
      io: {
        inputs: [
          ['The change', 'The requirement'],
          ['The code'],
          ['The code', 'Likely future changes'],
          ['The change', 'The tests'],
          ['The change', 'Shared code', 'Data'],
          ['The code', 'Team standards']
        ],
        outputs: [
          ['Correctness findings'],
          ['Readability suggestions'],
          ['Maintainability concerns'],
          ['Missing-test requests'],
          ['A risk assessment'],
          ['Consistency notes']
        ]
      },
      who: [
        'Reviewer',
        'Reviewer',
        'Reviewer',
        'Reviewer, Author',
        'Reviewer, Author',
        'Reviewer, Author'
      ],
      misconceptions: [
        { wrong: 'Review is about proving someone wrong.', right: 'It is shared ownership of quality and shared knowledge.' },
        { wrong: '"It works" is enough to approve.', right: 'Someone has to understand and change it in a year.' },
        { wrong: 'Only seniors should review.', right: 'Reviewing is how anyone learns the system; questions are useful too.' },
        { wrong: 'Every comment must be addressed by changing code.', right: 'A good answer can be an explanation — that is the conversation working.' }
      ],
      takeaways: [
        '**Review has two purposes:** catching problems and spreading knowledge. Optimising only for the first wastes most of the value.',
        '**Six lenses beat instinct:** correctness, readability, maintainability, testing, risk, consistency. They also stop reviews collapsing into style opinions.',
        '**Look beyond the diff.** The risky part is often the shared function it calls or the data it migrates, which the diff does not show.',
        '**Be specific and about the code.** "This throws when the list is empty" is actionable; "this is sloppy" is not, and it is about the person.',
        '**Ask before insisting.** The author often has context the diff cannot show, and a question surfaces it without a standoff.',
        '**Label blocking versus preference.** Mixing must-fix with nice-to-have wastes time and breeds resentment.',
        '**Small pull requests get real reviews.** Reviewer attention is finite; a 2,000-line diff gets a rubber stamp.',
        '**Approve at good enough.** Review is not a mechanism for making other people write code the way you would.'
      ],
      reflection: 'Look back at review comments you have given or received. How many were about correctness or risk, and how many were about preference? What would you keep and what would you drop?',
      checks: [
        'What are the two purposes of code review?',
        'What are the six lenses?',
        'Why look beyond the lines shown in the diff?',
        'What makes a review comment actionable?',
        'Why distinguish blocking comments from preferences?',
        'Why do small pull requests get better reviews?'
      ]
    },
    {
      id: 'rca',
      title: 'Root Cause Analysis',
      blurb: 'Distinguishing symptoms, immediate causes, root causes, and prevention.',
      whatIs: {
        text: `When something breaks there are usually three different answers to "why", and confusing them is what makes the same incident happen twice.

The **symptom** is what people experienced: "payments failed for some customers". The **immediate cause** is the mechanical trigger: "the payment call timed out". The **root cause** is why the system permitted that to become a failure: "there is no retry and no timeout budget, so one slow provider fails the whole request". Fixing only the immediate cause makes today's incident go away and tomorrow's identical.

The usual technique is to keep asking **why** until the answer stops being about one event and starts being about the system — a missing guard, an untested path, a process that let it through. And root cause work is about mechanisms, not people: "someone deployed on Friday" is not a root cause, "an untested config change could reach production unreviewed" is.`,
        ensures: [
          'Separate symptom, immediate cause and root cause',
          'Keep asking why until the answer describes the system',
          'Distinguish a fix from a preventive change',
          'Write a blameless account focused on mechanisms',
          'Identify the specific guard that would have stopped it',
          'Recognise when the root cause is process rather than code'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From what users saw to what stops it happening again.',
        loop: false,
        steps: [
          { icon: 'eye', label: 'Symptom', desc: 'What users actually experienced.', purpose: 'State the impact in user terms, with scale and duration.', question: 'Who was affected, how badly, and for how long?' },
          { icon: 'bolt', label: 'Immediate cause', desc: 'What directly triggered it.', purpose: 'Identify the mechanical trigger in this specific instance.', question: 'What went wrong, technically, right before?' },
          { icon: 'magnifying-glass', label: 'Root cause', desc: 'Why the system allowed it.', purpose: 'Keep asking why until the answer is about the system, not the event.', question: 'Why was this failure possible at all?' },
          { icon: 'shield-halved', label: 'Prevention', desc: 'What stops it recurring.', purpose: 'Choose a concrete guard: test, alert, constraint or process change.', question: 'What would catch this before users do next time?' }
        ]
      },
      example: {
        title: '"Payment failed" for some users',
        items: [
          'Symptom: 4% of payments failed for 40 minutes on Tuesday morning.',
          'Immediate cause: calls to one bank timed out after 30 seconds.',
          'Root cause: no retry and no per-provider timeout, so one slow bank fails checkout.',
          'Prevention: retries with backoff, a timeout budget, and an alert on provider latency.'
        ]
      },
      io: {
        inputs: [
          ['User reports', 'Metrics'],
          ['Symptom', 'Logs', 'Traces'],
          ['Trigger', 'Repeated "why"'],
          ['Root cause']
        ],
        outputs: [
          ['Impact: who, how many, how long'],
          ['The technical trigger'],
          ['A system-level explanation'],
          ['A specific preventive change']
        ]
      },
      who: [
        'Users, Support',
        'Engineer',
        'Engineer, Team',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'The bug is fixed, so the work is done.', right: 'Until something prevents it, it can return next month.' },
        { wrong: 'The first cause you find is the root cause.', right: 'Keep asking why until the answer is about the system.' },
        { wrong: 'Root cause analysis identifies who made the mistake.', right: 'It identifies the mechanism that let a mistake become an incident.' },
        { wrong: 'Every incident has exactly one root cause.', right: 'Most have several contributing factors that lined up.' }
      ],
      takeaways: [
        '**Symptom, immediate cause, root cause are three different answers.** Fixing only the middle one guarantees a repeat.',
        '**Keep asking why until the answer is systemic.** The stopping point is a missing guard, an untested path, or a process gap — not an event.',
        '**"Human error" is never a root cause.** The question is why the system allowed a normal human mistake to reach users.',
        '**Blameless does not mean consequence-free.** It means the output is a change to the system, because that is what actually prevents recurrence.',
        '**Most incidents have several contributing factors.** A missing test *and* a missing alert *and* an unclear runbook usually all had to line up.',
        '**Measure impact in user terms:** how many, how badly, for how long. That is what decides how much prevention is worth.',
        '**Prevention must be specific and assigned.** "Be more careful" is not a change; "add a timeout budget and alert on p99 latency" is.',
        '**Write it down while it is fresh.** A short honest account is worth more than a polished one produced a fortnight later.'
      ],
      reflection: 'Take an incident you have seen. Write the symptom, the immediate cause and the root cause as three separate sentences. Does your root cause describe the system — or a person having a bad day?',
      checks: [
        'What is the difference between an immediate cause and a root cause?',
        'How do you know when to stop asking "why"?',
        'Why is "human error" not a root cause?',
        'What does "blameless" actually mean?',
        'Why do most incidents have more than one contributing factor?',
        'What makes a preventive action a real one?'
      ]
    },
    {
      id: 'prevention',
      title: 'Prevention Mindset',
      blurb: 'Reducing recurrence through tests, monitoring, validation, documentation, or process changes.',
      whatIs: {
        text: `Prevention is the last step of every fix, and the one most often skipped because the pressure is off once the symptom is gone.

The choice of guard should match how the failure happened. A logic error wants a **regression test**. Bad data wants a **validation rule or database constraint**. A failure nobody noticed for hours wants an **alert**. A step someone forgot wants **automation** — or, failing that, a **checklist**. A confusing system wants **documentation**. Picking the wrong guard is why teams add a test for something that was never a code problem.

Prefer guards that cannot be forgotten. Automated checks in the pipeline, constraints in the database and alerts that page someone all keep working when everyone is busy; a note in a wiki does not. And prevention has a budget — every guard costs time to write and maintain, so weight it by how bad the failure was and how likely it is to return.`,
        ensures: [
          'Choose a guard that matches how the failure actually happened',
          'Prefer automated guards over remembered ones',
          'Add a regression test for every bug fixed',
          'Use alerts for failures that would otherwise go unnoticed',
          'Judge how much prevention a given risk deserves',
          'Treat prevention as part of the fix, not an optional extra'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Closing the loop after a failure.',
        loop: false,
        steps: [
          { icon: 'wrench', label: 'Fix the cause', desc: 'Correct the underlying issue.', purpose: 'Address the root cause rather than the visible symptom.', question: 'Am I fixing why it happened?' },
          { icon: 'circle-check', label: 'Verify', desc: 'Confirm with the reproduction.', purpose: 'Prove it against the trigger that used to fail.', question: 'Does the original failure case now pass?' },
          { icon: 'shield-halved', label: 'Add the right guard', desc: 'Test, constraint, alert or automation.', purpose: 'Match the guard to the type of failure.', question: 'What kind of failure was this, and what catches that kind?' }
        ]
      },
      example: {
        title: 'After fixing a bad-dates bug',
        items: [
          'Fix: correct the timezone handling that wrote dates a day early.',
          'Verify: the reproduction passes, and existing bad rows are corrected.',
          'Guard: a unit test for the boundary, plus a constraint rejecting impossible dates.'
        ]
      },
      io: {
        inputs: [
          ['Root cause'],
          ['Fix', 'Reproduction'],
          ['Verified fix', 'Failure type']
        ],
        outputs: [
          ['A corrected system'],
          ['A verified fix', 'Corrected data'],
          ['Tests', 'Constraints', 'Alerts', 'Automation']
        ]
      },
      who: [
        'Engineer',
        'Engineer, quality assurance (QA)',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'The bug is fixed, so we are done.', right: 'Without a guard, the same change can reintroduce it next week.' },
        { wrong: 'Prevention means writing a document.', right: 'Documents are the weakest guard; automation is the strongest.' },
        { wrong: 'Every incident deserves maximum prevention.', right: 'Weight the effort by impact and likelihood.' },
        { wrong: 'Prevention is QA\'s responsibility.', right: 'The person who fixed it is best placed to guard it.' }
      ],
      takeaways: [
        '**Every fix ends with a guard.** Otherwise you have removed today\'s instance of the bug, not the bug.',
        '**Match the guard to the failure:** test for logic, constraint for data, alert for silence, automation for forgotten steps, docs for confusion.',
        '**Automated guards beat remembered ones.** Anything relying on people being careful under pressure will eventually not happen.',
        '**A regression test is the cheapest permanent memory** your team has of a bug that once cost it a day.',
        '**Alerts are for failures nobody would otherwise see.** If the only way you learn is a customer complaining, that is the gap to close.',
        '**Fix the data as well as the code.** Bad rows written by a bug outlive the deploy that fixed it.',
        '**Prevention has a budget.** Weight it by impact and likelihood; not every one-off deserves a permanent system.',
        '**Guards are documentation that cannot go stale.** A constraint or test states the rule and enforces it at the same time.'
      ],
      reflection: 'Pick a bug you have seen twice. What single guard would have stopped the second occurrence — and why do you think it was not added the first time?',
      checks: [
        'Why is prevention part of the fix?',
        'How do you choose which kind of guard to add?',
        'Why are automated guards stronger than documented ones?',
        'When is an alert the right guard?',
        'Why fix the data as well as the code?',
        'How much prevention does a given failure deserve?'
      ]
    }
  ]
}
