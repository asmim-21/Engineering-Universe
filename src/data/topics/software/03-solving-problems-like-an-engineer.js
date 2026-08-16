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
      whatIs: {
        text: `A large task is intimidating mainly because it is undefined. Breaking it down converts one vague thing into several small things you can estimate, start, review and finish — which is why breakdown is a skill rather than admin.

Split by **outcome**, not by file. "Users can RSVP to an event" cuts across the data model, the application programming interface (API), the screen and the tests; "edit the controller" does not. Each slice should be something you could ship on its own and describe to a non-engineer.

The useful pass through a feature is always the same: outcome, behaviour, data, API, interface, tests, release, documentation. Working through that list surfaces the parts people forget — the data migration, the error states, the thing that has to be told to support. It also exposes what you are **assuming**, which is exactly what to check before writing code.`,
        ensures: [
          'Split a large feature by user outcome rather than by file',
          'Cover data, API, interface, tests, release and documentation',
          'Separate must-haves from nice-to-haves explicitly',
          'Define the smallest version worth shipping first',
          'Write down assumptions and open questions as you go',
          'Produce slices small enough to review in one sitting'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A pass through the parts of any feature.',
        loop: false,
        steps: [
          { icon: 'bullseye', label: 'User outcome', desc: 'Start from the result users need.', purpose: 'Anchor everything in a change someone actually wants.', question: 'What can a user do afterwards that they cannot now?' },
          { icon: 'gears', label: 'Behaviour', desc: 'What the system must do.', purpose: 'List the rules and the error cases, not just the happy path.', question: 'What must it do — and what must it refuse?' },
          { icon: 'database', label: 'Data changes', desc: 'New or changed data.', purpose: 'Decide the schema changes and how existing data migrates.', question: 'What is stored, and what happens to old rows?' },
          { icon: 'plug', label: 'API changes', desc: 'New or changed endpoints.', purpose: 'Define the contract, including failure responses.', question: 'What endpoints change, and does anything break?' },
          { icon: 'window-maximize', label: 'Interface changes', desc: 'Screens and interactions.', purpose: 'Design the screens, empty states and errors.', question: 'What does the user see, including when it fails?' },
          { icon: 'flask', label: 'Testing', desc: 'How you will prove it works.', purpose: 'Choose the checks that would catch a real regression.', question: 'What proof would convince a sceptical reviewer?' },
          { icon: 'rocket', label: 'Release & monitoring', desc: 'Ship it and watch it.', purpose: 'Plan the rollout, the flag and the way back.', question: 'How do we ship this safely and see it working?' },
          { icon: 'file-lines', label: 'Documentation', desc: 'Leave notes for the next person.', purpose: 'Record decisions, the API and what support needs to know.', question: 'What will the next person need to know?' }
        ]
      },
      io: {
        inputs: [
          ['Feature goal', 'User need'],
          ['Outcome'],
          ['Behaviour', 'Existing schema'],
          ['Behaviour', 'Existing contracts'],
          ['Behaviour', 'Designs'],
          ['Behaviour', 'Risks'],
          ['Built feature', 'Feature flag'],
          ['Decisions', 'What was built']
        ],
        outputs: [
          ['A clear outcome'],
          ['Rules and error cases'],
          ['Schema changes', 'Migration plan'],
          ['Endpoint changes', 'Error responses'],
          ['Screen changes', 'Empty and error states'],
          ['A test plan'],
          ['A live, watched release'],
          ['Docs', 'Handover notes']
        ]
      },
      who: [
        'Product Owner, Engineer',
        'Engineer, Business Analyst',
        'Engineer',
        'Engineer',
        'Engineer, Designer',
        'Engineer, quality assurance (QA)',
        'Engineer, DevOps',
        'Engineer'
      ],
      example: {
        title: 'Employees can create social events',
        items: [
          'Outcome: an employee can create an event others can join.',
          'Behaviour: create, edit, RSVP, list; only the creator may edit.',
          'Data: Event and RSVP tables, unique RSVP per person per event.',
          'API: create, list and RSVP endpoints, with clear 400s and 403s.',
          'Interface: an event form, a list screen, and an empty state.',
          'Tests: unit tests for the rules, one end-to-end RSVP journey.',
          'Release: behind a flag for one team first, errors watched.',
          'Docs: the endpoints, the rules, and a note for support.'
        ]
      },
      misconceptions: [
        { wrong: 'Big tasks should be solved in one big push.', right: 'Small reviewable slices reduce risk and show progress.' },
        { wrong: 'Breaking down work is admin overhead.', right: 'It is where you discover the parts nobody thought about.' },
        { wrong: 'Split by technical layer.', right: 'Split by outcome; each slice should be shippable and describable.' },
        { wrong: 'Assumptions can stay in your head.', right: 'Written assumptions get corrected; unwritten ones become bugs.' }
      ],
      takeaways: [
        '**Split by outcome, not by file.** A slice someone can describe in a sentence can also be reviewed, tested and shipped on its own.',
        '**Walk the same checklist every time:** outcome, behaviour, data, API, interface, tests, release, docs. It catches the work people habitually forget.',
        '**The smallest shippable version de-risks the rest.** It proves the approach while the cost of being wrong is still low.',
        '**Error cases are part of the feature.** "What happens when it fails" is where most rework comes from.',
        '**Data migrations are their own task.** Existing rows do not update themselves, and forgetting them turns a release into an incident.',
        '**Write assumptions down as you find them.** They are questions in disguise, and cheap to answer now.',
        '**Must-have versus nice-to-have is a conversation to have early** — with the person who can decide, not in your head at 6pm.',
        '**If a slice cannot be reviewed in one sitting, it is still too big.** Reviewer attention drops sharply with size, and so does the value of the review.'
      ],
      reflection: 'Take a feature request you know and run it through the eight steps. Which step surfaced work you had not thought about — and what would it have cost to discover that after the code was written?',
      checks: [
        'Why split by outcome rather than by technical layer?',
        'What are the parts of the breakdown checklist?',
        'What makes a slice small enough?',
        'Why do data migrations need their own task?',
        'What should you do with an assumption you notice?',
        'Who decides what is a must-have?'
      ]
    },
    {
      id: 'research',
      title: 'Research & Investigation',
      blurb: 'Using docs, code, logs, tickets, previous work, official sources, and validated AI support.',
      whatIs: {
        text: `Strong engineers are not people who know everything. They are people who know **where to look, in what order**, and how much to trust what they find.

The order matters more than the effort. Start inside the system: the code itself, its tests, the logs, past tickets and merged pull requests (PRs) — these tell you what your team actually did and why. Then official documentation for the exact version you are using. Community answers and blog posts come next, and are often outdated. Artificial intelligence (AI) assistants are excellent for orientation and terrible as a final authority: they will produce confident, plausible, non-existent functions.

Whatever the source, the test is the same: **verify against something that runs**. Read the code, check the version, try it in a safe place. A quoted answer that works in your codebase is knowledge; one that merely sounds right is a guess with better grammar.`,
        ensures: [
          'Search the codebase, tests, logs and past tickets before anything else',
          'Prefer official docs for the version you are actually using',
          'Treat blogs and AI output as leads, never as authority',
          'Read error messages fully and take them literally',
          'Verify every answer against something that runs',
          'Know when research has stopped paying and it is time to ask'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The independent learning loop.',
        steps: [
          { icon: 'magnifying-glass', label: 'Name the unknown', desc: 'Define the question you need answered.', purpose: 'Turn a vague feeling of being stuck into one precise question.', question: 'What exactly do I not know?' },
          { icon: 'book', label: 'Search trusted sources', desc: 'Code, tests, logs, tickets, official docs.', purpose: 'Start inside the system, then go to official documentation.', question: 'Has someone here already solved this?' },
          { icon: 'flask', label: 'Experiment safely', desc: 'Try it where nothing can break.', purpose: 'Test the idea locally or in a scratch branch.', question: 'What can I try without risk?' },
          { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'State what you think is true.', purpose: 'Commit to an explanation you can actually test.', question: 'What do I believe, and how would I know?' },
          { icon: 'clipboard-check', label: 'Validate', desc: 'Check the result; refine if wrong.', purpose: 'Confirm against running code, not against a memory.', question: 'Does the evidence support it?' },
          { icon: 'rocket', label: 'Apply and record', desc: 'Use it, and leave a note behind.', purpose: 'Apply the learning and make it findable for the next person.', question: 'Where should this be written down?' }
        ]
      },
      example: {
        title: 'Learning an unfamiliar library',
        items: [
          'Question: how does this library handle retries on timeout?',
          'Search the repo for existing usage; read its official docs for our version.',
          'Try it in a throwaway branch with a deliberately slow endpoint.',
          'Hypothesis: it retries twice, then throws.',
          'Confirm by watching the logs; it actually retries three times.',
          'Use it in the real change and note the behaviour in the PR.'
        ]
      },
      io: {
        inputs: [
          ['A task', 'A knowledge gap'],
          ['Question', 'Code, docs, tickets'],
          ['Information', 'A safe space'],
          ['Observations'],
          ['Hypothesis', 'A test'],
          ['A validated answer']
        ],
        outputs: [
          ['One precise question'],
          ['Gathered evidence'],
          ['Observed behaviour'],
          ['A testable hypothesis'],
          ['A confirmed or corrected answer'],
          ['Applied learning', 'A note for others']
        ]
      },
      who: [
        'Engineer',
        'Engineer, Docs & code owners',
        'Engineer',
        'Engineer',
        'Engineer, Reviewer',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'Research means searching the web.', right: 'The codebase, tests, logs and past tickets come first.' },
        { wrong: 'AI answers can be used as they are.', right: 'They are a starting point; verify against docs and running code.' },
        { wrong: 'Any documentation will do.', right: 'Version matters — answers for v2 can be wrong for v5.' },
        { wrong: 'Researching longer is always better.', right: 'After a fixed timebox, asking is the cheaper option.' }
      ],
      takeaways: [
        '**Start inside the system.** The code, its tests and past pull requests tell you what your team actually decided, which no external source can.',
        '**Read the error message properly.** It usually names the file, the line and the cause; skimming it is the most common self-inflicted delay.',
        '**Check the version.** A confident answer for a different major version is worse than no answer at all.',
        '**AI is a fast orientation tool and an unreliable authority.** Use it to get the vocabulary and the shape, then verify every specific.',
        '**Verify against something that runs.** If you cannot demonstrate it, you do not know it yet.',
        '**Timebox research.** Thirty to sixty minutes without progress is a signal to ask, not a test of character.',
        '**Leave a trail.** A comment, a note in the ticket or a line in the README saves the next person the same hour.',
        '**Knowing where to look is the transferable skill.** The specific answers expire; the habit of finding them does not.'
      ],
      reflection: 'Think of the last thing you were stuck on. Which source finally resolved it, and where did you look before that? What would have got you there twenty minutes sooner?',
      checks: [
        'Where do you look first, and why there?',
        'Why does the version of the documentation matter?',
        'How should AI output be treated?',
        'What does it mean to verify an answer?',
        'How long should you research before asking?',
        'What should you leave behind once you have the answer?'
      ]
    },
    {
      id: 'safe',
      title: 'Safe Experimentation',
      blurb: 'Learning by trying things in local or non-production spaces without creating unnecessary risk.',
      whatIs: {
        text: `Trying things is how engineers learn a system. The skill is doing it where a mistake costs nothing: your own machine, a scratch branch, a development environment, fake data.

Actions differ enormously in **blast radius**. Reading is nearly always safe. Writing to a local database affects only you. Writing to a shared environment affects your team. Anything touching production data, customer records or money can affect people who never agreed to be part of your experiment. Before acting, ask what happens if this is wrong, who notices, and how you would undo it.

That last question is the practical filter. **Reversible** actions can be tried; **irreversible** ones deserve a second opinion first. Being cautious is not the same as being passive — the point is to keep exploring freely by choosing places where being wrong is free.`,
        ensures: [
          'Judge the blast radius of an action before taking it',
          'Prefer local and development environments for exploration',
          'Use dummy data instead of real customer records',
          'Start with read-only investigation before changing anything',
          'Choose reversible steps, and know how to reverse them',
          'Ask first when the impact is unclear or irreversible'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Safety boundary — from zero risk outwards.',
        loop: false,
        steps: [
          { icon: 'laptop', label: 'Local environment', desc: 'Your own machine, nothing shared.', purpose: 'Explore with zero blast radius.', question: 'Can I reproduce this locally first?' },
          { icon: 'laptop-code', label: 'Development environment', desc: 'Shared, but safe to break.', purpose: 'Confirm it behaves the same when integrated.', question: 'Does it still hold with everyone else\'s changes?' },
          { icon: 'table', label: 'Dummy data', desc: 'Fake records, no real people.', purpose: 'Test realistically without touching anyone\'s data.', question: 'Is this data safe to change or expose?' },
          { icon: 'code-branch', label: 'Feature branch', desc: 'Isolated from the main line.', purpose: 'Keep experiments out of everyone else\'s way.', question: 'Is my work isolated and easy to discard?' },
          { icon: 'magnifying-glass', label: 'Read-only first', desc: 'Look before you touch.', purpose: 'Gather evidence without changing state.', question: 'Can I answer this by observing instead?' },
          { icon: 'rotate-left', label: 'Small reversible change', desc: 'Easy to undo if wrong.', purpose: 'Make one change you know how to reverse.', question: 'If this is wrong, how do I undo it — and how fast?' }
        ]
      },
      example: {
        title: 'Investigating a bug safely',
        items: [
          'Reproduce it on your own machine first.',
          'Confirm it in the shared dev environment.',
          'Use seeded dummy accounts, never a real customer record.',
          'Work on a feature branch so nothing lands by accident.',
          'Run read-only queries to see the data before touching it.',
          'Make one small change behind a flag, with a known way back.'
        ]
      },
      misconceptions: [
        { wrong: 'Experimenting is inherently risky.', right: 'In the right environment the risk is close to zero.' },
        { wrong: 'Taking initiative means never checking with anyone.', right: 'Initiative includes asking before irreversible actions.' },
        { wrong: 'A quick query against production is harmless.', right: 'Heavy queries can slow or lock a live system.' },
        { wrong: 'Test data can be a copy of real data.', right: 'Copied customer data carries the same privacy obligations.' }
      ],
      takeaways: [
        '**Ask what the blast radius is** — just me, my team, or real customers? That single question sorts most actions correctly.',
        '**Reversible beats irreversible.** Prefer the version you can undo, and know the undo procedure before you start.',
        '**Read before you write.** Most investigations are answered by looking, and looking cannot break anything.',
        '**Never experiment on production data.** Even a read can be dangerous if it is heavy enough to slow the live system.',
        '**Dummy data is not just convenient, it is a privacy requirement.** Real records in test environments create obligations you do not want.',
        '**Branches make experiments free.** If it goes nowhere, delete it; nothing was risked.',
        '**Being cautious is not being passive.** The point of a safe space is that you can try more things, not fewer.',
        '**When you cannot judge the impact, that is the signal to ask.** Uncertainty about consequences is exactly what a two-minute question resolves.'
      ],
      reflection: 'List three things you could do to investigate a bug: one certainly safe, one you are not sure about, one you should not do alone. What makes the middle one uncertain, and who would you ask?',
      checks: [
        'What does "blast radius" mean?',
        'Why start with read-only investigation?',
        'Why not use copies of real customer data?',
        'What makes an action reversible?',
        'When should you ask before acting?',
        'Why does a safe environment mean you can experiment more?'
      ]
    },
    {
      id: 'ladder',
      title: 'Escalation Ladder',
      blurb: 'Thinking, experimenting, researching, forming a hypothesis, then asking for help with evidence.',
      whatIs: {
        text: `Asking for help is a skill with a shape. Climb a few rungs first — think, try, research, form a hypothesis — and then ask. By that point your question is specific, and specific questions get answered in minutes.

The rungs are not about proving independence. They exist because each one either solves the problem or produces **evidence** that makes someone else's help far more effective. "It fails" invites twenty questions; "it fails with this error, only on staging, after this change, and I think the config differs" invites an answer.

The important exception is **urgency**. When production is broken, customers are affected, or you are about to do something irreversible, escalate immediately. The ladder optimises for learning; incidents optimise for stopping the damage. Knowing which situation you are in is part of the judgement.`,
        ensures: [
          'Work through the rungs before escalating a routine problem',
          'Collect evidence at each step rather than just trying harder',
          'Form a hypothesis you can state in one sentence',
          'Escalate immediately when the situation is urgent or irreversible',
          'Timebox each rung so you do not get stuck being stubborn',
          'Ask in a way that makes helping quick'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Escalation ladder — each rung either solves it or produces evidence.',
        loop: false,
        steps: [
          { icon: 'brain', label: 'Think', desc: 'Reason about the problem first.', purpose: 'Establish what you already know and what is actually being asked.', question: 'What do I understand, and what is the real question?' },
          { icon: 'flask', label: 'Experiment safely', desc: 'Try something in a safe space.', purpose: 'Reproduce it and narrow down where it happens.', question: 'Can I reproduce it, and where exactly does it break?' },
          { icon: 'magnifying-glass', label: 'Research', desc: 'Search code, docs, logs and tickets.', purpose: 'Find out whether this is already known or solved.', question: 'Has anyone here hit this before?' },
          { icon: 'lightbulb', label: 'Form a hypothesis', desc: 'Decide what you think is happening.', purpose: 'Turn scattered observations into one testable claim.', question: 'What is my best explanation?' },
          { icon: 'comments', label: 'Ask with evidence', desc: 'Escalate with context and specifics.', purpose: 'Make it fast and easy for someone to help.', question: 'What exactly do I need from them?' }
        ]
      },
      example: {
        title: 'Stuck on a failing test',
        items: [
          'Read the assertion carefully: it expects two rows, gets none.',
          'Reproduce locally; it passes locally but fails in the pipeline.',
          'Search past pull requests (PRs); two others changed the same fixture recently.',
          'Hypothesis: the shared fixture data is not being reset between runs.',
          'Ask, with the failure output, the difference, and the hypothesis.'
        ]
      },
      io: {
        inputs: [
          ['The problem'],
          ['Understanding', 'A safe space'],
          ['Question', 'Code, docs, history'],
          ['Findings'],
          ['Context', 'Evidence', 'Hypothesis']
        ],
        outputs: [
          ['A defined question'],
          ['A reproduction', 'Observations'],
          ['Findings or prior art'],
          ['A testable hypothesis'],
          ['A clear, evidenced request']
        ]
      },
      who: [
        'You',
        'You',
        'You',
        'You',
        'You, Teammate / Senior'
      ],
      misconceptions: [
        { wrong: 'Asking questions makes you look weak.', right: 'A well-formed question shows you can think and communicate.' },
        { wrong: 'Initiative means never asking.', right: 'Initiative is climbing the rungs, then asking well.' },
        { wrong: 'You should always exhaust every option first.', right: 'When production is down, escalate immediately.' },
        { wrong: 'Struggling longer proves commitment.', right: 'It mostly proves the value of a timebox.' }
      ],
      takeaways: [
        '**Each rung produces evidence even when it fails.** That evidence is what turns an unanswerable question into an answerable one.',
        '**Timebox each rung.** Thirty minutes without progress means move up, not try the same thing more slowly.',
        '**A hypothesis makes help specific.** "I think the fixture is stale" can be confirmed or dismissed in seconds; "it does not work" cannot.',
        '**Urgency overrides the ladder.** Production down, data at risk, or an irreversible action pending: escalate now and explain later.',
        '**Reproducing the problem is often most of the fix.** Half of "I cannot work out why" is really "I have not pinned down when".',
        '**Say what you have already tried.** It saves the helper from suggesting it and shows the shape of the problem.',
        '**Being stuck is normal and expected.** Being stuck silently for two days is what people actually mind.',
        '**Note the answer somewhere.** The next person hitting this — possibly you — should find it without repeating the climb.'
      ],
      reflection: 'How far up the ladder would you climb before asking? Now change the scenario: production is down and customers are affected. What changes, and why is that the right call?',
      checks: [
        'What are the rungs, in order?',
        'What does each rung produce even when it does not solve the problem?',
        'When should you skip the ladder entirely?',
        'How long should you spend on a rung?',
        'Why is a hypothesis worth forming before asking?',
        'What should you do after you get the answer?'
      ]
    },
    {
      id: 'questions',
      title: 'Asking Better Questions',
      blurb: 'Using context, attempts, evidence, hypothesis, and a specific question.',
      whatIs: {
        text: `A good question is easy to answer. That is the whole standard, and it is achieved by supplying five things: **context** (what you are doing), **attempts** (what you tried), **evidence** (what you observed, exactly), **hypothesis** (what you think is happening) and the **ask** (the specific thing you need).

Compare the two versions. "The application programming interface (API) is broken, can you help?" forces the helper to run their own investigation before they can even understand the problem. "Saving a booking returns 500 on staging but works locally; the logs show a null user id; I think the session middleware is not attaching the user; where should that be set on this route?" can be answered in a sentence by anyone who knows the codebase.

Exact evidence matters most. Paste the real error, name the environment, quote the id, say what you expected. Paraphrased symptoms send people looking for the wrong thing — which costs their time as well as yours.`,
        ensures: [
          'Include context, attempts, evidence, hypothesis and a specific ask',
          'Quote exact errors, ids and environments rather than paraphrasing',
          'State what you expected as well as what happened',
          'Ask a question that can be answered in one reply',
          'Choose the right channel and give the helper enough to reproduce',
          'Close the loop by sharing what the answer turned out to be'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A reusable template for asking well.',
        loop: false,
        steps: [
          { icon: 'circle-info', label: 'Context', desc: 'What you are working on.', purpose: 'Set the scene: the task, the branch, the environment.', question: 'What am I working on, and where?' },
          { icon: 'list-check', label: 'What I tried', desc: 'The attempts you made.', purpose: 'Stop the helper suggesting what you already ruled out.', question: 'What have I already eliminated?' },
          { icon: 'magnifying-glass', label: 'What I found', desc: 'Exact errors and observations.', purpose: 'Give the raw evidence, not a summary of it.', question: 'What does the system actually say?' },
          { icon: 'lightbulb', label: 'My hypothesis', desc: 'What you think is going on.', purpose: 'Show your reasoning so it can be corrected.', question: 'What do I think is happening, and why?' },
          { icon: 'circle-question', label: 'Specific ask', desc: 'The exact help you need.', purpose: 'Make the reply short and possible.', question: 'What single thing do I need from them?' }
        ]
      },
      example: {
        title: 'Turning "it broke" into a good question',
        items: [
          'Context: saving a booking on the staging environment, branch `feat/booking-edit`.',
          'Tried: retried, checked the payload, compared with a working local run.',
          'Found: 500 response; the log shows `user_id = null` on that route.',
          'Hypothesis: the session middleware is not applied to this endpoint.',
          'Ask: where is the user id meant to be attached for routes under `/bookings`?'
        ]
      },
      io: {
        inputs: [
          ['Your task', 'Environment'],
          ['Attempts'],
          ['Logs', 'Errors', 'Ids'],
          ['Observations'],
          ['Everything above']
        ],
        outputs: [
          ['Shared context'],
          ['What is already ruled out'],
          ['Concrete evidence'],
          ['A reasoned hypothesis'],
          ['A question answerable in one reply']
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
        { wrong: 'Asking questions is a sign of weakness.', right: 'A precise question saves everyone time and shows judgement.' },
        { wrong: '"It does not work" is enough to start with.', right: 'It forces the helper to run the investigation you already ran.' },
        { wrong: 'Long questions are better questions.', right: 'Specific ones are; detail helps only when it is evidence.' },
        { wrong: 'Once you have the answer, you are done.', right: 'Say what fixed it — that is how the answer becomes findable.' }
      ],
      takeaways: [
        '**Five parts: context, attempts, evidence, hypothesis, ask.** Missing any of them makes the helper reconstruct it themselves.',
        '**Paste the exact error.** Paraphrasing loses the detail that usually identifies the problem outright.',
        '**Say what you expected.** Half of all "bugs" turn out to be a misunderstanding of intended behaviour, which the expectation reveals immediately.',
        '**Ask one specific thing.** An open-ended "any ideas?" gets an open-ended answer, or none at all.',
        '**Name the environment and the branch.** Works-locally-fails-elsewhere is a whole category of problem, and this is the fastest way to spot it.',
        '**Writing the question often answers it.** Explaining it in five parts forces the reasoning that finds the gap.',
        '**Make it reproducible.** A link, a request id, a failing test — anything that lets the helper see it themselves.',
        '**Close the loop.** Post what the fix was; the thread becomes documentation for the next person.'
      ],
      reflection: 'Rewrite a question you have actually asked using the five parts. How much of the answer becomes obvious to you while you are writing it?',
      checks: [
        'What are the five parts of a good question?',
        'Why paste the exact error rather than describe it?',
        'Why state what you expected to happen?',
        'What makes an ask "specific"?',
        'Why does writing the question often solve the problem?',
        'What should you do once you have the answer?'
      ]
    },
    {
      id: 'ambiguity',
      title: 'Ambiguity Framework',
      blurb: 'Working through unclear requirements by identifying goals, constraints, assumptions, and unknowns.',
      whatIs: {
        text: `Real work arrives unclear. "Improve onboarding", "make it faster", "add reporting" are directions, not requirements — and the instinct to start coding is exactly what produces the wrong thing, competently built.

The first move is to **restate the problem in your own words** and check that with whoever asked. Then separate what you **know** from what you **assume** from what you genuinely **do not know**, because those three need different treatment: knowns get used, assumptions get confirmed, unknowns get investigated.

Then reduce scope deliberately. Ask what the **smallest useful version** is — often a measurement rather than a fix. "Improve onboarding" becomes "add tracking to find where people drop out", which is small, valuable, and turns the vague brief into a specific one with data behind it.`,
        ensures: [
          'Restate an unclear request in your own words and confirm it',
          'Separate knowns, assumptions and unknowns',
          'Identify the systems, data and people involved',
          'Define the smallest useful version',
          'Investigate before committing to a solution',
          'Verify against the original goal, not just the ticket text'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'A reusable loop for any unfamiliar task.',
        steps: [
          { icon: 'circle-question', label: 'Understand', desc: 'Restate it in your own words.', purpose: 'Convert a direction into a problem statement someone can confirm.', question: 'What are we really solving, and for whom?' },
          { icon: 'list-check', label: 'Knowns & unknowns', desc: 'Separate facts from gaps.', purpose: 'Make the assumptions visible so they can be checked.', question: 'What do I know, assume, and genuinely not know?' },
          { icon: 'magnifying-glass', label: 'Investigate', desc: 'Dig into data, code and people.', purpose: 'Close the most important unknowns with evidence.', question: 'Which unknown, if wrong, would change everything?' },
          { icon: 'puzzle-piece', label: 'Break it down', desc: 'Split into smaller tasks.', purpose: 'Turn the problem into pieces that can be delivered.', question: 'What are the pieces, and which is smallest and most useful?' },
          { icon: 'map', label: 'Plan', desc: 'Decide the order.', purpose: 'Sequence so the riskiest assumption is tested first.', question: 'What order reduces risk fastest?' },
          { icon: 'person-running', label: 'Deliver incrementally', desc: 'Ship in small steps.', purpose: 'Get something real in front of people early.', question: 'What is the next thing worth shipping?' },
          { icon: 'clipboard-check', label: 'Verify & adjust', desc: 'Check results against the goal.', purpose: 'Measure whether the original problem actually moved.', question: 'Did this change the outcome we cared about?' }
        ]
      },
      example: {
        title: 'A vague "improve onboarding" ticket',
        items: [
          'Restate: fewer people should abandon signup halfway.',
          'Known: the five signup steps. Unknown: which one loses people.',
          'Check analytics, read the code, ask the product manager (PM) what prompted it.',
          'Split into: add tracking, fix the worst step, re-measure.',
          'Plan: measure first — fixing blind is guessing.',
          'Ship the tracking, find step 3 loses 40%, fix step 3.',
          'Confirm drop-off fell, then look at the next worst step.'
        ]
      },
      io: {
        inputs: [
          ['A vague request'],
          ['The restated problem'],
          ['Unknowns', 'Data', 'People'],
          ['Findings'],
          ['Tasks', 'Risks'],
          ['Plan'],
          ['Delivered change', 'Metrics']
        ],
        outputs: [
          ['A confirmed problem statement'],
          ['Knowns, assumptions, unknowns'],
          ['Evidence'],
          ['A task list'],
          ['A risk-ordered plan'],
          ['Small releases'],
          ['Verified progress or a new question']
        ]
      },
      who: [
        'You, Product Owner',
        'You',
        'You, Data, Teammates',
        'You',
        'You, Team',
        'You',
        'You, Users, Product Owner'
      ],
      misconceptions: [
        { wrong: 'Start coding immediately to show progress.', right: 'Understanding first avoids building the wrong thing well.' },
        { wrong: 'Ambiguity means someone did their job badly.', right: 'It usually means the answer is not known yet — including by them.' },
        { wrong: 'You must resolve every unknown before starting.', right: 'Resolve the ones that would change the approach; timebox the rest.' },
        { wrong: 'The ticket text is the requirement.', right: 'The outcome someone wants is the requirement.' }
      ],
      takeaways: [
        '**Restate the problem and get it confirmed.** Two sentences of agreement prevent weeks of confident divergence.',
        '**Assumptions are the dangerous category.** Knowns are safe and unknowns are visible; assumptions look like facts and are not.',
        '**Attack the unknown that would change the approach.** Not all uncertainty matters equally — resolve the load-bearing ones first.',
        '**The smallest useful version is often a measurement.** You cannot improve what you have not located.',
        '**Sequence by risk, not by comfort.** Do the part that could invalidate the plan first, while changing course is still cheap.',
        '**Ask what prompted the request.** The story behind a ticket usually contains the real requirement.',
        '**Verify against the goal, not the ticket.** Shipping exactly what was written and not moving the outcome is a failure with good paperwork.',
        '**Writing it down is the work.** A page of problem statement, assumptions and unknowns is the most valuable thing you can produce on day one.'
      ],
      reflection: 'Take a vague request you have received. Write the restated problem, three assumptions and three unknowns. Which unknown, if it turned out differently, would change what you build?',
      checks: [
        'What is the first move when a request is unclear?',
        'Why are assumptions more dangerous than unknowns?',
        'Which unknowns should you investigate first?',
        'Why is the smallest useful version often a measurement?',
        'What does sequencing by risk mean?',
        'What should you verify at the end — the ticket or the outcome?'
      ]
    }
  ]
}
