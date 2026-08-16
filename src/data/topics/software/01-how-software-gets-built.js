// TO ADD A POPUP: append an object to `popups` below. TO ADD A TOPIC: copy
// this file, edit it, and list it in ../content.js — its position there sets
// its number and homepage slot.
export default {
  id: 'built',
  title: 'How Software Gets Built',
  tone: 'c1',
  blurb: 'Software delivery, SDLC, Agile, roles, environments, and the journey from idea to value.',
  tags: ['SDLC', 'Agile', 'Roles', 'Environments'],
  popups: [
    {
      id: 'sdlc',
      title: 'Software Development Lifecycle (SDLC)',
      blurb: 'End-to-end software journey from idea to value and ongoing improvement.',
      whatIs: {
        text: `The software development lifecycle (SDLC) is the repeatable process a team uses to turn an idea into working software that keeps working. The stages are always roughly the same — understand, design, build, test, release, look after — because each one answers a question you cannot skip without paying for it later.

The point of naming the stages is **risk**. A misunderstood requirement caught in a conversation costs minutes; the same mistake found after release costs a rewrite, an incident, and someone's trust. Every stage exists to catch a particular kind of mistake at the cheapest moment.

Coding is one stage of seven. That surprises people coming from coursework, where the code *is* the deliverable. In industry the code is the middle of a longer story that starts with a problem worth solving and continues for years after release.`,
        ensures: [
          'Name the stages and say what question each one answers',
          'Explain why coding is only one part of delivery',
          'See how each stage reduces a specific risk',
          'Understand that testing runs throughout, not only at the end',
          'Know that release starts maintenance rather than ending the work',
          'Recognise the feedback loop from live use back into new requirements'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'SDLC flow — coding is one stage in a larger delivery lifecycle.',
        steps: [
          { icon: 'lightbulb', label: 'Idea', desc: 'A need or opportunity appears.', purpose: 'Identify a problem worth solving before anyone designs a solution.', question: 'What problem exists, and for whom?' },
          { icon: 'list-check', label: 'Requirements', desc: 'Agree the problem and what success means.', purpose: 'Turn a vague request into needs, constraints and acceptance criteria.', question: 'What should we build, and how will we know it is right?' },
          { icon: 'compass-drafting', label: 'Design', desc: 'Decide how the solution will work.', purpose: 'Choose the architecture, data model, interface and integrations.', question: 'How will it work, and what are the trade-offs?' },
          { icon: 'code', label: 'Development', desc: 'Build it in code and configuration.', purpose: 'Implement the design in small, reviewed, tested pieces.', question: 'Can we build it, and is it understandable?' },
          { icon: 'flask', label: 'Testing', desc: 'Verify behaviour and find defects.', purpose: 'Check it does what was agreed, including the awkward cases.', question: 'Does it work — and what happens when it does not?' },
          { icon: 'rocket', label: 'Deployment', desc: 'Release it to an environment.', purpose: 'Get the change to users safely, with a way back if it goes wrong.', question: 'Can users use it, and can we undo it?' },
          { icon: 'arrows-rotate', label: 'Maintenance', desc: 'Monitor, fix, and improve over time.', purpose: 'Keep it working, patch it, and feed real use back into the next idea.', question: 'Is it healthy, and how can we make it better?' }
        ]
      },
      example: {
        title: 'Spotify — offline playlists',
        items: [
          'Users on commutes lose signal and lose their music.',
          'Download playlists; sync when back online; storage limits agreed.',
          'Where files are stored, how sync resolves conflicts, what the UI shows.',
          'Build download and playback in the mobile apps.',
          'Test downloads, offline playback, part-downloads, full storage.',
          'Ship in version 3.2 to the app stores, staged by region.',
          'Fix sync bugs, speed it up, add smart downloads from usage data.'
        ]
      },
      io: {
        inputs: [
          ['Market needs', 'User pain', 'Business goals'],
          ['Idea', 'User research', 'Constraints'],
          ['Requirements', 'Tech options', 'Standards'],
          ['Design docs', 'Code standards', 'Tools'],
          ['Code', 'Test cases', 'Test data'],
          ['Tested build', 'Release plan', 'Infrastructure'],
          ['Live system', 'User feedback', 'Monitoring']
        ],
        outputs: [
          ['Problem statement', 'Opportunity'],
          ['Requirements', 'User stories', 'Acceptance criteria'],
          ['Architecture', 'Data model', 'user interface and user experience (UI/UX) designs'],
          ['Source code', 'Config', 'Unit tests'],
          ['Test results', 'Defect reports', 'Quality signals'],
          ['Live release', 'Release notes', 'Rollback plan'],
          ['Patches', 'Improvements', 'New requirements']
        ]
      },
      who: [
        'Product Owner, Stakeholders',
        'Product Owner, Business Analyst',
        'Architect, Designer, Engineers',
        'Developers',
        'Engineers, quality assurance (QA), Testers',
        'DevOps, Release Manager',
        'Support, DevOps, whole team'
      ],
      misconceptions: [
        { wrong: 'Coding is software engineering.', right: 'Coding is one stage; engineering is the whole outcome.' },
        { wrong: 'Testing happens at the end.', right: 'Testing runs throughout — the later a defect is found, the more it costs.' },
        { wrong: 'A feature is finished once released.', right: 'Release begins monitoring, support and improvement.' },
        { wrong: 'The stages must happen once, in strict order.', right: 'Teams loop through them continuously, often weekly.' }
      ],
      takeaways: [
        '**Every stage removes a specific risk.** Requirements guard against building the wrong thing; testing guards against building it wrongly; deployment practice guards against breaking what already worked.',
        '**Defects get more expensive the later they are found.** A misunderstanding caught in conversation costs minutes; the same one caught in production costs an incident.',
        '**Coding is roughly a seventh of the job.** The rest is understanding, deciding, verifying, releasing and supporting.',
        '**Quality is built in, not tested in.** Testing reveals quality that is already there or already missing; it cannot add it afterwards.',
        '**Deployment is a beginning.** Most of a system\'s life — and most of its cost — happens after the first release.',
        '**The lifecycle is a loop, not a line.** Real use produces feedback, which becomes the next requirement.',
        '**Acceptance criteria are the contract.** "Done" means the agreed criteria are met, not that the code runs on your machine.',
        '**Skipping a stage does not remove it.** It just moves the work to a worse moment, usually under pressure.'
      ],
      reflection: 'Take a feature you use daily. Which stage do you think it is in right now, and what would have to be true for it to have skipped design entirely?',
      checks: [
        'Why do requirements come before development?',
        'Which risk does each stage reduce?',
        'Why is maintenance part of the lifecycle rather than an afterthought?',
        'What does "quality is built in, not tested in" mean?',
        'What happens to cost when a defect is found late?',
        'What makes the lifecycle a loop rather than a line?'
      ]
    },
    {
      id: 'agile',
      title: 'Agile Mindset',
      blurb: 'Iterative delivery, feedback, collaboration, and adapting as learning happens.',
      whatIs: {
        text: `Agile is a way of working that delivers value in small increments and adapts as the team learns. Instead of planning everything up front and finding out at the end whether it was right, a team ships something small, puts it in front of real users, and lets the result shape the next step.

Most teams run some form of **Scrum** or **Kanban**. Scrum works in fixed **sprints** (usually one or two weeks) with a prioritised **backlog**, a short daily **stand-up** to coordinate, a **review** to show what was built, and a **retrospective** to improve how the team works. Kanban drops the fixed sprint and limits how much work is in progress at once.

The mindset matters more than the ceremonies. Agile is not "no planning" — it is planning continuously in small pieces, because a plan made before you have learned anything is the least informed plan you will ever have.`,
        ensures: [
          'Explain why small increments beat one big bet',
          'Describe a sprint, a backlog, and what "done" means',
          'Know what stand-up, review and retrospective are each for',
          'Treat changing requirements as expected, not as failure',
          'Use real feedback to decide what happens next',
          'Tell the difference between practising Agile and performing ceremonies'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The core behaviour is iteration — build, validate, learn, adjust.',
        steps: [
          { icon: 'hammer', label: 'Build a small useful piece', desc: 'Ship a small, usable increment.', purpose: 'Deliver something small enough to finish and real enough to judge.', question: 'What is the smallest genuinely useful piece?' },
          { icon: 'circle-check', label: 'Validate it', desc: 'Put it in front of real feedback.', purpose: 'Get evidence from users or stakeholders, not opinions from the room.', question: 'What does real use tell us?' },
          { icon: 'lightbulb', label: 'Learn', desc: 'See what the feedback teaches you.', purpose: 'Separate what you assumed from what turned out to be true.', question: 'Which assumption was wrong?' },
          { icon: 'pen-ruler', label: 'Adjust', desc: 'Change direction based on what you learned.', purpose: 'Re-prioritise the backlog with what you now know.', question: 'What should the next increment be?' }
        ]
      },
      io: {
        inputs: [
          ['Prioritised backlog', 'Sprint goal'],
          ['Increment', 'Real users'],
          ['Feedback', 'Usage data'],
          ['Insights', 'New priorities']
        ],
        outputs: [
          ['A working increment'],
          ['Evidence, not opinion'],
          ['A corrected assumption'],
          ['An adjusted backlog']
        ]
      },
      who: [
        'Developers, Team',
        'Users, Product Owner',
        'Whole team',
        'Product Owner, Team'
      ],
      example: {
        title: 'Adding a "dark mode" toggle',
        items: [
          'Ship a basic on/off toggle to a small group of users.',
          'Watch usage and collect comments for a week.',
          'Learn most people expected it to follow the system setting.',
          'Add an "auto" option next, and de-prioritise custom themes.'
        ]
      },
      misconceptions: [
        { wrong: 'Agile means no planning.', right: 'Agile plans continuously, in small increments.' },
        { wrong: 'Stand-up is a status report for the manager.', right: 'It is a short coordination point for the team.' },
        { wrong: 'More ceremonies means more agile.', right: 'Delivered, validated value is the measure.' },
        { wrong: 'A sprint is a deadline to rush towards.', right: 'A sprint is a fixed window for learning, not a crunch.' }
      ],
      takeaways: [
        '**Small increments shorten the feedback loop.** The sooner something real is in front of a user, the sooner you find out whether the idea was right.',
        '**The backlog is a prioritised list, not a promise.** It is expected to change as the team learns; that is the mechanism working, not failing.',
        '**Each ceremony has one job:** stand-up coordinates today, review shows the work, retrospective improves how the team works, planning picks the next slice.',
        '**"Done" needs a shared definition** — usually built, reviewed, tested, documented and releasable. Without it, "done" means "done on my machine".',
        '**Changing requirements are information.** They usually mean someone learned something; treating them as failure encourages hiding the learning.',
        '**Agile does not remove design.** It spreads design across increments instead of finishing it before any evidence exists.',
        '**Velocity is a planning aid, not a target.** Optimising the number rather than the outcome is how teams get busy and deliver less.',
        '**Retrospectives only work if something changes.** One concrete improvement per cycle beats a long list nobody acts on.'
      ],
      reflection: 'Which ceremony would you miss most if your team dropped it tomorrow — and what would silently get worse over the following month?',
      checks: [
        'What is a backlog for, and who orders it?',
        'Why keep each increment small?',
        'What is the difference between a review and a retrospective?',
        'How does Agile handle a requirement that changes mid-sprint?',
        'What does a shared "definition of done" prevent?',
        'What is the difference between being agile and performing ceremonies?'
      ]
    },
    {
      id: 'roles',
      title: 'Software Roles',
      blurb: 'How different roles contribute to delivery and why software is a team sport.',
      whatIs: {
        text: `Software is delivered by teams, not lone heroes. Each role exists because someone has to hold a particular concern: what is most valuable, what "correct" means, whether it will still work at 3am, whether the data is safe.

Knowing the roles is practical, not academic. It tells you **who to ask** when you are blocked — priorities to the Product Owner, requirements to the Business Analyst, structure to the Architect, live-system behaviour to the site reliability engineer (SRE) — and it tells you which conversation you are actually having.

Titles vary between companies and one person often wears several hats, especially in small teams. The concerns do not disappear when the titles do; someone still has to own them.`,
        ensures: [
          'Name the common roles and the concern each one owns',
          'Know who to approach for priorities, requirements and reliability',
          'Understand that quality is shared, not delegated to testers',
          'See how the same feature looks different from each perspective',
          'Recognise that one person may cover several roles',
          'Identify who is affected when something goes wrong'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Who a product touches, and what each group cares about.',
        loop: false,
        steps: [
          { icon: 'briefcase', label: 'Business stakeholders', desc: 'Care about value, cost, and outcomes.', purpose: 'Decide whether the work is worth funding, and what comes first.', question: 'Is this worth doing now?' },
          { icon: 'user', label: 'End users', desc: 'Live with the experience day to day.', purpose: 'Judge whether the software actually helps them.', question: 'Does this make my job easier?' },
          { icon: 'code', label: 'Engineering', desc: 'Design, build, and maintain the system.', purpose: 'Turn the need into software that can be changed safely later.', question: 'How do we build it well enough to live with?' },
          { icon: 'headset', label: 'Support', desc: 'Help users when things go wrong.', purpose: 'Resolve user problems and feed patterns back to the team.', question: 'What are users struggling with?' },
          { icon: 'server', label: 'Operations', desc: 'Keep it running in production.', purpose: 'Keep the live system healthy, available and recoverable.', question: 'Is it healthy, and can we recover it?' },
          { icon: 'shield-halved', label: 'Security & compliance', desc: 'Guard data, access, and the rules.', purpose: 'Protect data and make sure obligations are met.', question: 'Is it safe, and are we allowed to do this?' }
        ]
      },
      example: {
        title: 'Who a desk-booking feature touches',
        items: [
          'Managers funding it want fewer empty desks and lower cost.',
          'Employees want to book a desk in under ten seconds.',
          'Engineers build it and will maintain it for years.',
          'Support handles "my booking vanished" on Monday mornings.',
          'Operations keeps the booking service up during the 9am rush.',
          'Security ensures nobody can see who sits where without cause.'
        ]
      },
      io: {
        inputs: [
          ['Business goals', 'Budget'],
          ['The live experience'],
          ['Requirements', 'Constraints'],
          ['User problems'],
          ['Live system', 'Alerts'],
          ['Data flows', 'Access rules']
        ],
        outputs: [
          ['Priorities', 'Funding decisions'],
          ['Needs', 'Feedback', 'Complaints'],
          ['Working, maintainable software'],
          ['Resolutions', 'Escalations', 'Patterns'],
          ['Uptime', 'Recovery', 'Capacity'],
          ['Safeguards', 'Approvals', 'Audit trail']
        ]
      },
      misconceptions: [
        { wrong: "Testing is the tester's job.", right: 'Quality is shared; engineers test their own work first.' },
        { wrong: 'The Product Owner has thought of everything.', right: 'Engineers surface gaps, risks and edge cases nobody considered.' },
        { wrong: 'Engineers never talk to users.', right: 'Talking to users is the fastest way to learn what matters.' },
        { wrong: 'Ops is someone else\'s problem after release.', right: 'How you build it decides how painful it is to run.' }
      ],
      takeaways: [
        '**Each role owns a concern, not a task list.** Priorities, correctness, structure, reliability and safety all need an owner, whatever the titles are.',
        '**Knowing the roles tells you who to ask.** Being blocked for a day on a question someone could answer in five minutes is a coordination failure, not a technical one.',
        '**Everyone owns quality.** Testers find what slipped through; they cannot be the only line of defence.',
        '**The same feature looks different from each seat.** "Fast enough" means something different to a user, an accountant and an on-call engineer.',
        '**Support and operations are early-warning systems.** Repeated tickets are design feedback arriving in a different format.',
        '**Small teams merge roles, not concerns.** If nobody owns reliability, it is not covered — it is just invisible until it fails.',
        '**Talking to users beats speculating about them.** Ten minutes of observation resolves arguments that surveys and opinions cannot.',
        '**Handover is a real cost.** The more roles a change crosses, the more the delay comes from waiting rather than working.'
      ],
      reflection: 'Pick a product you use. Who funds it, who uses it, who supports it, and who gets paged when it breaks at 2am? Which of those perspectives would you naturally forget?',
      checks: [
        'Who owns priorities and trade-off decisions?',
        'Who is responsible for quality?',
        'Who keeps the system running in production?',
        'Who would you ask about an ambiguous requirement?',
        'Why does support hear about problems first?',
        'What happens when nobody owns reliability?'
      ]
    },
    {
      id: 'envs',
      title: 'Environments',
      blurb: 'Why Dev, Test/UAT, and Production exist and how they reduce delivery risk.',
      whatIs: {
        text: `An environment is a complete running copy of the system — its code, configuration, data and infrastructure. Teams keep several so that mistakes happen where they are cheap.

**Development (Dev)** is where engineers build and experiment; breaking it is normal and costs nothing. **Test / user acceptance testing (UAT)** is more stable and uses realistic but non-real data; it is where a change is validated before anyone outside sees it. Some teams add **Staging**, a near-identical rehearsal of production. **Production (Prod)** has real users, real data and real consequences.

A change is **promoted** through these environments — the same build, moving forward with more confidence at each step. What differs between them is data, scale and configuration, which is exactly why "it works on my machine" proves so little.`,
        ensures: [
          'Explain what an environment is and why more than one exists',
          'Describe what Dev, Test/UAT and Production are each for',
          'Understand promotion: the same build moving forward',
          'Know why real data belongs only in Production',
          'Identify what differs between environments and why that causes bugs',
          'Treat production changes with proportionate care'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Environment separation — confidence grows as a change is promoted.',
        loop: false,
        steps: [
          { icon: 'laptop-code', label: 'Development (Dev)', desc: 'Where engineers build and experiment.', purpose: 'Make change cheap: break things, try things, iterate quickly.', question: 'Is this safe to try here? (Almost always yes.)' },
          { icon: 'vial', label: 'Test / UAT', desc: 'Where the change is validated.', purpose: 'Prove the change behaves as agreed, using realistic data.', question: 'Does it do what we agreed, including the edge cases?' },
          { icon: 'globe', label: 'Production (Prod)', desc: 'Live: real users and real impact.', purpose: 'Serve real users, with monitoring and a way to roll back.', question: 'Is it safe for real users — and can we undo it?' }
        ]
      },
      example: {
        title: 'Promoting a change',
        items: [
          'A developer builds and tests the change on Dev with fake data.',
          'Testers and business users validate the same build in UAT.',
          'It is released to real users in Production, watched, and reversible.'
        ]
      },
      io: {
        inputs: [
          ['New code', 'Fake test data'],
          ['The built change', 'Realistic data', 'Test cases'],
          ['Approved release', 'Real data', 'Real load']
        ],
        outputs: [
          ['A built, unit-tested change'],
          ['A validated change', 'Sign-off'],
          ['Live software', 'Monitoring signals']
        ]
      },
      who: [
        'Developers',
        'Testers, quality assurance (QA), Business users',
        'DevOps, Release Manager, Users'
      ],
      misconceptions: [
        { wrong: 'Production is just another environment.', right: 'It has real users, real data and real consequences.' },
        { wrong: 'If it works on my machine, it works everywhere.', right: 'Data, config and scale differ — that is where bugs hide.' },
        { wrong: 'Testing with real customer data is fine.', right: 'Real data in lower environments is a privacy and legal risk.' },
        { wrong: 'A hotfix straight to Prod is faster.', right: 'It is faster until it is not, and unverified changes cause incidents.' }
      ],
      takeaways: [
        '**Separation keeps mistakes cheap.** A bug in Dev is a lesson; the same bug in Production is an incident with an audience.',
        '**Promote the same build.** Rebuilding for each environment means you tested something you never shipped.',
        '**Differences between environments are where bugs live** — different data volumes, different configuration, different integrations.',
        '**Real data stays in Production.** Copying customer data into test environments is a privacy problem waiting to be discovered.',
        '**Configuration belongs outside the build.** Same artefact, different settings per environment; anything else invites "it worked in UAT".',
        '**UAT answers a different question from unit tests:** not "does the code do what we coded", but "does this solve the business problem".',
        '**Every production change needs a way back.** A rollback plan is part of being ready to release, not an admission of doubt.',
        '**Skipping environments does not save time on average.** It trades a small certain delay for an occasional very expensive one.'
      ],
      reflection: 'For a system you know: what is allowed to be broken in each environment, and what absolutely is not? Where does customer data live, and who can see it?',
      checks: [
        'Why separate Dev from Production?',
        'What is UAT for, and who does it?',
        'What does "promoting a change" mean?',
        'Why should the same build move through the environments?',
        'Why should real customer data not be copied into test environments?',
        'What should exist before any production release?'
      ]
    },
    {
      id: 'journey',
      title: 'Feature Journey',
      blurb: 'How an idea moves through clarification, design, build, test, release, feedback, and improvement.',
      whatIs: {
        text: `A feature request arrives as a sentence and leaves as a system people rely on. The journey in between is mostly about **removing ambiguity** — turning "let users update their profile" into decisions about which fields, who is allowed, what happens to old data, and what "saved" means when the network drops.

Each step forward increases confidence and cost. Clarifying is cheap, building is expensive, fixing in production is the most expensive of all. That ordering is the whole reason the journey looks like this.

Release is not the finish line. The feature then generates usage data, support tickets and new requests, and those become the next version. Most software you use has been through this loop dozens of times.`,
        ensures: [
          'Trace a request from raw idea through to live use',
          'Ask clarifying questions before designing anything',
          'Turn a request into agreed, testable acceptance criteria',
          'Understand why integration and validation come before release',
          'See release as the start of feedback rather than the end of work',
          'Judge what goes wrong when a step is skipped'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Feature journey — ambiguity falls and confidence rises at each step.',
        loop: false,
        steps: [
          { icon: 'inbox', label: 'Feature request', desc: 'Someone asks for a capability.', purpose: 'Capture the need in the requester\'s own words.', question: 'What is being asked for, and by whom?' },
          { icon: 'circle-question', label: 'Clarifying questions', desc: 'Pin down what is really needed.', purpose: 'Replace assumptions with answers before any design exists.', question: 'What do they actually mean by this?' },
          { icon: 'list-check', label: 'Requirements', desc: 'Agree the problem and success criteria.', purpose: 'Write down what it must do and how it will be judged.', question: 'What must be true for this to be accepted?' },
          { icon: 'compass-drafting', label: 'Design choices', desc: 'Decide how to build it.', purpose: 'Pick an approach and name the trade-offs it accepts.', question: 'How will it work, and what are we giving up?' },
          { icon: 'code', label: 'Development', desc: 'Implement and test it locally.', purpose: 'Build it in small reviewed pieces with tests alongside.', question: 'Does it work, and can someone else read it?' },
          { icon: 'laptop-code', label: 'Dev environment', desc: 'Integrate it with the team.', purpose: 'Prove it works with everyone else\'s changes, not just alone.', question: 'Does it still work once integrated?' },
          { icon: 'vial', label: 'Test/UAT environment', desc: 'Validate before real users.', purpose: 'Confirm it meets the agreed criteria with realistic data.', question: 'Does it hold up outside the happy path?' },
          { icon: 'globe', label: 'Production', desc: 'Release it to users.', purpose: 'Release safely, watch it, keep a way back.', question: 'Are real users succeeding with it?' },
          { icon: 'comments', label: 'Feedback and iteration', desc: 'Learn from use and improve.', purpose: 'Turn usage, tickets and data into the next change.', question: 'What does real use say we got wrong?' }
        ]
      },
      io: {
        inputs: [
          ['User need', 'Business goal'],
          ['Raw request', 'Stakeholders'],
          ['Answers', 'Constraints'],
          ['Requirements', 'Tech options'],
          ['Design', 'Standards'],
          ['Code', "Team's build"],
          ['Integrated build', 'Test cases'],
          ['Validated build', 'Release plan'],
          ['Usage', 'Tickets', 'Feedback']
        ],
        outputs: [
          ['A captured request'],
          ['Shared understanding'],
          ['Requirements', 'Acceptance criteria'],
          ['A chosen approach', 'Known trade-offs'],
          ['Working code', 'Tests'],
          ['An integrated change'],
          ['A validated release', 'Sign-off'],
          ['A live feature', 'Monitoring'],
          ['Improvements', 'The next request']
        ]
      },
      example: {
        title: '"Let users update their profile"',
        items: [
          'Support asks: users cannot fix a mistyped name.',
          'Which fields? Who approves an email change?',
          'Name, photo and email; email requires re-verification.',
          'Form layout, validation rules, what happens on save failure.',
          'Build the form and the save endpoint, with tests.',
          "Integrate with the team's build; fix a clash with sign-up.",
          'Validate long names, huge photos, duplicate emails.',
          'Release the profile editor to all users.',
          'Add photo cropping after users upload sideways pictures.'
        ]
      },
      who: [
        'User, Stakeholder',
        'Business Analyst, Product Owner',
        'Product Owner, Business Analyst',
        'Developer, Designer, Architect',
        'Developers',
        'Developers',
        'Testers, quality assurance (QA), Business users',
        'DevOps, Release Manager',
        'Product Owner, Support, Users'
      ],
      misconceptions: [
        { wrong: 'A feature is finished once released.', right: 'Release starts monitoring, feedback and improvement.' },
        { wrong: 'Skipping clarifying questions saves time.', right: 'It risks building the wrong thing very well.' },
        { wrong: 'Feedback is a complaint to deflect.', right: 'Feedback is design information arriving late but free.' },
        { wrong: 'The requester always knows what they need.', right: 'They know the problem; the solution is worked out together.' }
      ],
      takeaways: [
        '**Most of the journey is removing ambiguity.** By the time you write code, the hard questions should already have answers.',
        '**Clarify before you build.** The cheapest moment to change a feature is while it is still a sentence.',
        '**Acceptance criteria make "done" objective.** Without them, "done" is a matter of opinion — usually two conflicting ones.',
        '**Integration is where surprises live.** Code that works alone can still break when it meets everyone else\'s changes.',
        '**Validation is progressive.** Unit tests, integration, user acceptance testing (UAT) and a watched release each catch a different class of problem.',
        '**Release is the start of learning.** Usage data and support tickets tell you what interviews never will.',
        '**Skipped steps reappear later.** Missing clarification becomes rework; missing validation becomes an incident.',
        '**The requester owns the problem; the team owns the solution.** Asking "what are you trying to achieve?" reframes a demand into a design conversation.'
      ],
      reflection: 'Take a request you have heard phrased in one line. Write the three clarifying questions that would most change what gets built — and estimate what each would have cost if asked only after release.',
      checks: [
        'What happens if you skip clarifying questions?',
        'What do acceptance criteria give you?',
        'Why validate in UAT before Production?',
        'Why can code that works locally still fail after integration?',
        'Is a released feature "done"? Why not?',
        'Where does user feedback enter the cycle?'
      ]
    },
    {
      id: 'pitfalls',
      title: 'Common Pitfalls',
      blurb: 'Beginner mistakes such as building the wrong thing, skipping steps, poor communication, and ignoring quality.',
      whatIs: {
        text: `Most early-career mistakes are not technical. They come from carrying a coursework mindset into a product: the assignment is finished when it runs, the marker is the only user, and nobody maintains it afterwards. In industry, none of those hold.

The shift is from **"what code do I write?"** to **"what problem are we solving, under what constraints, and how will we know it worked?"** The same feature request produces very different results depending on which question you start from.

The other recurring pitfall is silence. Going quiet when blocked, guessing at an ambiguous requirement, or not flagging a slipping estimate all convert small problems into late ones. Almost every experienced engineer has learned this the expensive way.`,
        ensures: [
          'Start from the problem rather than the implementation',
          'Surface blockers and ambiguity early instead of guessing',
          'Recognise that "it runs" is not the same as "it is done"',
          'Consider failure modes and constraints before building',
          'Define what success looks like in advance',
          'Treat maintenance and teamwork as part of the job'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From a coding mindset to an engineering one.',
        loop: false,
        steps: [
          { icon: 'code', label: 'What code do I write?', desc: 'The coding-only mindset.', purpose: 'The natural but narrow starting point from coursework.', question: 'Am I only thinking about the implementation?' },
          { icon: 'bullseye', label: 'What problem are we solving?', desc: 'Engineering starts with the problem.', purpose: 'Anchor the work to an outcome someone actually needs.', question: 'Whose problem is this, and what changes if we fix it?' },
          { icon: 'lock', label: 'What are the constraints?', desc: 'Time, cost, risk, and context.', purpose: 'Design within reality: deadlines, budgets, existing systems, rules.', question: 'What limits the possible solutions?' },
          { icon: 'triangle-exclamation', label: 'What could go wrong?', desc: 'Think through the failure modes.', purpose: 'Consider failures before users find them for you.', question: 'How could this fail, and what happens then?' },
          { icon: 'circle-check', label: 'How will we know it worked?', desc: 'Define what success looks like.', purpose: 'Agree a measurable outcome before building.', question: 'What would prove this succeeded?' }
        ]
      },
      example: {
        title: 'Adding a "notify me" button',
        items: [
          'Coding-only view: add a button and an endpoint, done.',
          'Real problem: people keep missing desk availability.',
          'Constraints: email limits, no new infrastructure, this sprint.',
          'Failure modes: spam, failed sends, notifying the wrong person.',
          'Success: users are notified reliably and miss fewer desks.'
        ]
      },
      misconceptions: [
        { wrong: 'Software engineering equals coding.', right: 'Coding is one part; engineering is the whole outcome.' },
        { wrong: 'Asking questions makes me look inexperienced.', right: 'Asking early is cheaper than guessing wrong.' },
        { wrong: 'Being quiet while stuck shows independence.', right: 'Silence turns a one-hour problem into a lost week.' },
        { wrong: '"It works on my machine" means it is done.', right: 'Done means integrated, tested, reviewed and releasable.' }
      ],
      takeaways: [
        '**Start with the problem, not the implementation.** The best-written solution to the wrong problem still fails.',
        '**Ambiguity does not resolve itself.** A guess disguised as a decision surfaces weeks later as rework.',
        '**Raise blockers early and specifically.** "I am stuck on X, I tried Y and Z, I need A" is a request people can answer in minutes.',
        '**"It runs" is the lowest bar.** Handling bad input, concurrent users and failure is what separates a demo from a feature.',
        '**Estimates are forecasts, not promises** — but a silently slipping estimate is a broken promise. Update it as soon as you know.',
        '**Read the surrounding code before adding to it.** Matching existing patterns is usually more valuable than importing your favourite ones.',
        '**Someone will maintain this, probably you.** Write for the person debugging it at 2am with no context.',
        '**Ask what success looks like before you build.** If nobody can answer, that is the most important finding of the day.'
      ],
      reflection: 'Think of a time you built something that was not what was wanted. At which point could a single question have caught it — and what stopped you asking?',
      checks: [
        'Name one thing that happens before coding starts.',
        'Name one thing that happens after deployment.',
        'Why is "it runs" not enough?',
        'What should you do when a requirement is ambiguous?',
        'How should you raise a blocker usefully?',
        'How is engineering different from coding?'
      ]
    }
  ]
}
