// All learning content for the Software Engineering Universe.
//
// Structure mirrors the layered site architecture:
//   Layer 1 = homepage (built from `topics` + `toolkit` + `stickies`)
//   Layer 2 = one canvas per topic (`topics[].clusters`)
//   Layer 3 = popups (`topics[].popups` and `toolkit`)
//
// Every popup follows the same four-part template: concept, visual model,
// common mistakes, reflection.

export const stickies = {
  mindset: [
    {
      title: 'Be Curious',
      icon: 'bulb',
      highlight: 'hl-yellow',
      lines: ['Ask questions.', 'Challenge assumptions.']
    },
    {
      title: 'Solve Problems',
      icon: 'mountain',
      highlight: 'hl-green',
      lines: ['Break it down.', 'Try things.', 'Learn.']
    },
    {
      title: 'Build Together',
      icon: 'users',
      highlight: 'hl-purple',
      lines: ['Communicate.', 'Share knowledge.', 'Lift others.']
    }
  ],
  notes: [
    'You don’t need to know everything. You just need a way to figure it out.',
    'There is no perfect path. Keep learning and keep building.',
    'Software is built by people. For people. Let’s build it well.'
  ]
}

export const topics = [
  {
    id: 'how-software-gets-built',
    num: 1,
    title: 'How Software Gets Built',
    color: 'red',
    titleLines: ['HOW SOFTWARE', 'GETS BUILT'],
    tagline: 'Follow the journey of a feature',
    focus:
      'Software delivery, SDLC, Agile, roles, environments, and the journey from idea to value.',
    trueLesson:
      'Software engineering is much more than coding. It is the coordinated process of delivering reliable value to users over time.',
    orbit: [
      { label: 'SDLC', icon: 'cycle' },
      { label: 'Agile & ceremonies', icon: 'people' },
      { label: 'Roles & collaboration', icon: 'person' },
      { label: 'Environments', icon: 'monitor' }
    ],
    clusters: [
      {
        title: 'The Lifecycle',
        note: 'Coding is one stage, not the whole job.',
        popups: ['sdlc', 'agile-mindset']
      },
      {
        title: 'The People',
        note: 'Software is a team sport.',
        popups: ['software-roles', 'common-pitfalls']
      },
      {
        title: 'The Path to Users',
        note: 'Validate progressively before real users are affected.',
        popups: ['environments', 'feature-journey']
      }
    ],
    popups: [
      {
        id: 'sdlc',
        title: 'Software Development Lifecycle',
        blurb: 'End-to-end journey from idea to value and ongoing improvement.',
        concept: [
          'The SDLC is a mental model for how software moves from an idea to something users can rely on. It is rarely perfectly linear, but it gives you a map of the major stages.',
          'Each stage exists because skipping it creates risk. Unclear requirements mean building the wrong thing. Skipped design means a solution that does not fit the system. Weak testing means users find the defects. Ignored maintenance means systems degrade.'
        ],
        visual: {
          kind: 'flow',
          title: 'SDLC flow',
          steps: [
            'Idea',
            'Requirements',
            'Design',
            'Development',
            'Testing',
            'Deployment',
            'Maintenance & improvement'
          ],
          purpose: 'Shows that coding is only one stage in a larger delivery lifecycle.'
        },
        mistakes: [
          'Treating the SDLC as paperwork rather than risk reduction.',
          'Believing the work ends at deployment.',
          'Jumping straight to development because it feels productive.'
        ],
        reflection:
          'Pick a feature you have built. Which SDLC stage did you spend the least time on, and what risk did that create?'
      },
      {
        id: 'agile-mindset',
        title: 'Agile Mindset',
        blurb: 'Iterative delivery, feedback, collaboration, and adapting as learning happens.',
        concept: [
          'Agile is a response to uncertainty. Requirements are rarely perfect at the start, users often discover what they need only after seeing an early version, and priorities change.',
          'Do not over-focus on ceremonies. The core behaviour is iteration: build a small useful piece, validate it, learn, and adjust.'
        ],
        visual: {
          kind: 'loop',
          title: 'The iteration loop',
          steps: ['Build a small useful piece', 'Validate it', 'Learn', 'Adjust'],
          purpose: 'Agile is a learning cycle, not a meeting schedule.'
        },
        mistakes: [
          'Thinking Agile means no planning.',
          'Treating stand-up as a status performance rather than a coordination point.',
          'Measuring ceremonies instead of delivered value.'
        ],
        reflection:
          'Name one assumption in your current task that could be tested with a smaller first version.'
      },
      {
        id: 'software-roles',
        title: 'Software Roles',
        blurb: 'How different roles contribute and why software is a team sport.',
        concept: [
          'Software is delivered by teams, not lone heroes. Different people bring different perspectives, and knowing who does what tells you who to talk to and why.'
        ],
        visual: {
          kind: 'list',
          title: 'Who you will work with',
          steps: [
            'Product Owner — owns priorities and trade-off decisions',
            'Business Analyst — clarifies requirements and acceptance criteria',
            'Developer — designs, builds, tests, and fixes software',
            'Tester / QA — validates behaviour and identifies quality gaps',
            'Architect — guides system structure and technical direction',
            'SRE — reliability, observability, operations, incident response',
            'Stakeholder — has an interest in the outcome or impact',
            'End User — experiences the value or the pain'
          ],
          purpose: 'Knowing the roles tells you who to ask, and what to ask them.'
        },
        mistakes: [
          'Assuming the Product Owner has already thought of everything.',
          'Treating QA as the only people responsible for quality.',
          'Never speaking to the people who actually use the software.'
        ],
        reflection:
          'For your current task, who approves priorities, who supports it after release, and who is impacted if it fails?'
      },
      {
        id: 'environments',
        title: 'Environments',
        blurb: 'Why Local, Dev, UAT, and Production exist and how they reduce risk.',
        concept: [
          'Code does not simply move from a laptop to users. Environments are separated so software is validated progressively, and so mistakes are cheap where they should be cheap.',
          'A bug in Dev is a learning opportunity. A bug in Prod may affect customers, colleagues, revenue, or trust.'
        ],
        visual: {
          kind: 'flow',
          title: 'Software environments',
          steps: ['Development (Dev)', 'Test / UAT', 'Production (Prod)'],
          purpose: 'Introduces environment separation and why production requires extra care.'
        },
        mistakes: [
          'Thinking production is just another environment.',
          'Testing only on your own machine and assuming it will behave the same everywhere.',
          'Experimenting with real data because it is "more realistic".'
        ],
        reflection:
          'What is the riskiest thing you could do in Dev today? Would the same action be acceptable in Prod?'
      },
      {
        id: 'feature-journey',
        title: 'Feature Journey',
        blurb: 'How an idea moves through clarification, design, build, test, release, feedback.',
        concept: [
          'A visible feature travels a long way before it reaches users, and it does not stop there. Delivery is ongoing: a feature may be released, monitored, adjusted, fixed, improved, or removed.'
        ],
        visual: {
          kind: 'flow',
          title: 'Feature journey',
          steps: [
            'Feature request',
            'Clarifying questions',
            'Requirements',
            'Design choices',
            'Development',
            'Dev environment',
            'Test/UAT environment',
            'Production',
            'Feedback and iteration'
          ],
          purpose: 'Shows how a feature travels from idea to users.'
        },
        mistakes: [
          'Believing a feature is finished forever once released.',
          'Skipping clarifying questions and building the wrong thing well.',
          'Forgetting that feedback is part of the design, not a complaint.'
        ],
        reflection:
          'Take "users want to update their profile details" and map each stage. What breaks if you skip stage two?'
      },
      {
        id: 'common-pitfalls',
        title: 'Common Pitfalls',
        blurb: 'Building the wrong thing, skipping steps, poor communication, ignoring quality.',
        concept: [
          'Most early-career mistakes are not about syntax. They are about starting before understanding, working silently, and treating quality as someone else’s stage.'
        ],
        visual: {
          kind: 'list',
          title: 'Misconceptions worth unlearning',
          steps: [
            'Software engineering equals coding',
            'Agile means no planning',
            'Testing is only the tester’s job',
            'Production is just another environment',
            'A feature is finished forever once released'
          ],
          purpose: 'Naming the trap makes it easier to avoid.'
        },
        mistakes: [
          'Measuring progress in lines of code rather than validated outcomes.',
          'Going quiet when stuck instead of surfacing the blocker early.',
          'Optimising for "it works on my machine".'
        ],
        reflection:
          'Which of these five misconceptions did you believe last month? What changed your mind?'
      }
    ]
  },

  {
    id: 'how-modern-applications-work',
    num: 2,
    title: 'How Modern Applications Work',
    color: 'blue',
    titleLines: ['HOW MODERN', 'APPLICATIONS WORK'],
    tagline: 'See how it all fits together',
    focus:
      'Frontend, backend, APIs, databases, request flow, data modelling, and architecture basics.',
    trueLesson:
      'Modern software is a set of connected components. A user-facing feature usually involves UI, APIs, business logic, data, and sometimes other systems.',
    orbit: [
      { label: 'Components', icon: 'puzzle' },
      { label: 'APIs & data flow', icon: 'cloudflow' },
      { label: 'Databases', icon: 'database' },
      { label: 'Architecture basics', icon: 'sitemap' }
    ],
    clusters: [
      {
        title: 'The Components',
        note: 'An application is rarely one single thing.',
        popups: ['frontend-vs-backend', 'system-architecture']
      },
      {
        title: 'The Conversation',
        note: 'Systems talk through defined contracts.',
        popups: ['apis-as-contracts', 'request-lifecycle']
      },
      {
        title: 'The Data',
        note: 'Information has to live somewhere.',
        popups: ['databases', 'data-modelling']
      }
    ],
    popups: [
      {
        id: 'frontend-vs-backend',
        title: 'Frontend vs Backend',
        blurb: 'The split between user-facing screens and trusted server-side logic.',
        concept: [
          'The frontend is what users interact with. The backend handles business rules and processing. The database stores what must persist. APIs are the communication points between them.',
          'When a user clicks "Book desk", the frontend shows the button, the API receives the request, the backend checks rules such as availability, and the database stores the booking.'
        ],
        visual: {
          kind: 'list',
          title: 'Who is responsible for what',
          steps: [
            'Frontend — screens, forms, buttons, validation that improves experience',
            'Backend — business logic, validation that must be trusted, security checks',
            'Database — persistent data: users, bookings, orders, permissions, audit',
            'API — a defined way to request or send information'
          ],
          purpose: 'Frontend validation is a courtesy. Backend validation is the rule.'
        },
        mistakes: [
          'Assuming the frontend stores all the important data.',
          'Trusting frontend validation as a security control.',
          'Assuming a simple-looking UI means a simple backend.'
        ],
        reflection:
          'A user reports the button says success but nothing is saved. Which layer would you investigate first, and why?'
      },
      {
        id: 'apis-as-contracts',
        title: 'APIs as Contracts',
        blurb: 'Requests, responses, payloads, statuses, and errors.',
        concept: [
          'An API is a contract between systems. One side makes a request in an expected format; the other returns a response in an expected format. That contract lets each side change independently as long as the contract holds.'
        ],
        visual: {
          kind: 'list',
          title: 'The vocabulary',
          steps: [
            'Request — what the caller asks for',
            'Endpoint — the address or operation, e.g. GET profile, POST booking',
            'Payload — the data sent with the request',
            'Response — the result returned',
            'Status — succeeded, failed, unauthorised, or invalid'
          ],
          purpose: 'You do not need REST theory yet. You need request, response, and status.'
        },
        mistakes: [
          'Thinking APIs are only for external systems.',
          'Changing a response shape without considering who depends on it.',
          'Returning "success" when the underlying write actually failed.'
        ],
        reflection:
          'Design one GET and one POST for a feature you know. What does each return when things go wrong?'
      },
      {
        id: 'databases',
        title: 'Databases',
        blurb: 'Where persistent information lives and why accurate data matters.',
        concept: [
          'Application data needs to live somewhere after the user closes the browser. Databases provide structured storage and retrieval, and the backend reads from and writes to them to complete user actions.',
          'Data quality matters because incorrect data causes incorrect behaviour, long after the code that wrote it has been forgotten.'
        ],
        visual: {
          kind: 'flow',
          title: 'Basic app structure',
          steps: ['User', 'Frontend', 'API', 'Backend', 'Database'],
          purpose: 'Creates the simplest possible model of a modern application.'
        },
        mistakes: [
          'Thinking databases are just spreadsheets.',
          'Ignoring how data will be queried until after the schema is fixed.',
          'Fixing bad data by hand instead of fixing what produced it.'
        ],
        reflection:
          'If your feature’s data model were wrong, how would you find out — and how long would that take?'
      },
      {
        id: 'request-lifecycle',
        title: 'Request Lifecycle',
        blurb: 'How a user action travels through interface, API, logic, data, and back.',
        concept: [
          'Tracing a user action end-to-end is the single most valuable exercise for understanding a system. A visible UI feature usually involves many invisible steps — and every one of them can fail.'
        ],
        visual: {
          kind: 'flow',
          title: 'Request lifecycle',
          steps: [
            'User action',
            'Frontend sends request',
            'API receives request',
            'Backend applies rules',
            'Database read/write',
            'Response returned',
            'Screen updates'
          ],
          purpose: 'Helps you trace how a feature works end-to-end.'
        },
        mistakes: [
          'Trying to understand a feature only by reading code rather than tracing data flow.',
          'Forgetting that logs and metrics are produced along the way — and are free evidence.',
          'Assuming a failure is in the layer you happen to know best.'
        ],
        reflection:
          'Pick one step in the lifecycle. What would the user see if only that step failed?'
      },
      {
        id: 'data-modelling',
        title: 'Data Modelling',
        blurb: 'Entities, relationships, validation rules, and the shape of information.',
        concept: [
          'Features usually require data decisions, not just UI code. A desk booking feature may involve Users, Desks, Bookings, Offices, and Dates. If the model is poor, the feature becomes harder to build and support.'
        ],
        visual: {
          kind: 'flow',
          title: 'Feature data model',
          steps: [
            'User',
            'Feature action',
            'Data entities required',
            'Relationships between entities',
            'Validation rules'
          ],
          purpose: 'Introduces the idea that features require data decisions, not just UI code.'
        },
        mistakes: [
          'Modelling the screen instead of the domain.',
          'Ignoring relationships until the first awkward query.',
          'Putting validation only where it is convenient.'
        ],
        reflection:
          'Name the nouns in your feature. Which ones are entities, and which are just fields?'
      },
      {
        id: 'system-architecture',
        title: 'System Architecture',
        blurb: 'How components fit together into a simple mental model.',
        concept: [
          'Architecture at this level is not about patterns with names. It is about being able to draw the boxes, the arrows between them, and the boundary where responsibility changes hands.'
        ],
        visual: {
          kind: 'flow',
          title: 'Service boundaries',
          steps: [
            'User-facing layer',
            'API boundary',
            'Business logic',
            'Data layer',
            'Other systems & integrations'
          ],
          purpose: 'A boundary is where a contract lives — and where failures get interesting.'
        },
        mistakes: [
          'Drawing architecture with no arrows — the arrows are where the risk is.',
          'Assuming every system is under your team’s control.',
          'Adding components before understanding the ones that exist.'
        ],
        reflection:
          'Draw your system in five boxes. Which box would you least like to be paged about at 2am?'
      }
    ]
  },

  {
    id: 'solving-problems-like-an-engineer',
    num: 3,
    title: 'Solving Problems Like an Engineer',
    color: 'green',
    titleLines: ['SOLVING PROBLEMS', 'LIKE AN ENGINEER'],
    tagline: 'From confusion to clarity',
    focus:
      'Ambiguity, investigation, safe experimentation, problem breakdown, and focused escalation.',
    trueLesson:
      'Engineers are paid to navigate uncertainty. The first step is not always coding or asking for help; it is understanding, investigating, breaking down, and forming a plan.',
    orbit: [
      { label: 'Embrace ambiguity', icon: 'question' },
      { label: 'Research & learn', icon: 'search' },
      { label: 'Experiment safely', icon: 'flask' },
      { label: 'Escalate smartly', icon: 'ladder' }
    ],
    clusters: [
      {
        title: 'Before You Code',
        note: 'Understand the goal, constraints, unknowns, and smallest useful outcome.',
        popups: ['ambiguity-framework', 'problem-breakdown']
      },
      {
        title: 'Find Out For Yourself',
        note: 'Strong juniors do not know everything. They know how to search.',
        popups: ['research-investigation', 'safe-experimentation']
      },
      {
        title: 'Then Ask Well',
        note: 'Initiative without isolation.',
        popups: ['escalation-ladder-topic', 'asking-better-questions']
      }
    ],
    popups: [
      {
        id: 'ambiguity-framework',
        title: 'Ambiguity Framework',
        blurb: 'Identifying goals, constraints, assumptions, and unknowns.',
        concept: [
          'Cadets often want to start coding quickly because it feels productive. Professional engineers pause first to understand the goal, constraints, unknowns, risks, and smallest useful outcome.',
          'Before coding, you should be able to explain what problem you are solving, who it affects, what success looks like, what systems are involved, and what you still do not know.'
        ],
        visual: {
          kind: 'list',
          title: 'Before you write a line of code',
          steps: [
            'Restate the problem in your own words',
            'Identify the user or stakeholder',
            'List what is known',
            'List what is unknown',
            'Identify systems, data, and people involved',
            'Define the smallest useful version',
            'Decide what must be clarified before implementation'
          ],
          purpose: 'Ambiguity is the job, not an obstacle to the job.'
        },
        mistakes: [
          'Treating a vague ticket as a complete specification.',
          'Confusing "I have started coding" with "I have made progress".',
          'Hiding assumptions instead of writing them down.'
        ],
        reflection:
          'You receive "employees should be able to organise social events". Write five questions you would ask first.'
      },
      {
        id: 'problem-breakdown',
        title: 'Problem Breakdown Loop',
        blurb: 'Turning big or vague work into smaller, understandable tasks.',
        concept: [
          'Large tasks feel overwhelming when treated as one thing. Breaking down work is not project management — it is how engineers reduce risk and create progress.'
        ],
        visual: {
          kind: 'flow',
          title: 'Task breakdown model',
          steps: [
            'User outcome',
            'Functional behaviour',
            'Data changes',
            'API changes',
            'UI changes',
            'Testing',
            'Deployment and monitoring',
            'Documentation'
          ],
          purpose: 'Gives you a concrete way to break up a large feature.'
        },
        mistakes: [
          'Trying to solve a large task in one big step.',
          'Splitting by technology instead of by deliverable outcome.',
          'Never separating must-have from nice-to-have.'
        ],
        reflection:
          'Split your current task into investigation tasks and implementation tasks. Which one is genuinely blocking the others?'
      },
      {
        id: 'research-investigation',
        title: 'Research & Investigation',
        blurb: 'Docs, code, logs, tickets, previous work, official sources, validated AI.',
        concept: [
          'Research includes internal documentation, code search, previous tickets and pull requests, logs, runbooks, official documentation, and AI tools used carefully.',
          'The quality of the source matters. Official docs and internal runbooks are usually more reliable than random blogs. AI can accelerate exploration but must be verified.'
        ],
        visual: {
          kind: 'list',
          title: 'Where to look, roughly in order',
          steps: [
            'Search existing documentation first',
            'Look for similar code patterns in the repository',
            'Find previous tickets or pull requests for related work',
            'Read logs and error messages carefully',
            'Use official documentation for technologies',
            'Use AI to explain or summarise — then validate'
          ],
          purpose: 'Knowing where to look is a skill you can practise deliberately.'
        },
        mistakes: [
          'Thinking research means Googling only.',
          'Trusting a blog post over the repository you are actually working in.',
          'Reading the error message’s first line and stopping there.'
        ],
        reflection:
          'Next time you are stuck, list the sources you checked before asking. Was the answer already in one of them?'
      },
      {
        id: 'safe-experimentation',
        title: 'Safe Experimentation',
        blurb: 'Learning by trying things without creating unnecessary risk.',
        concept: [
          'Exploration is part of engineering, but it must happen safely. Safe experimentation means local environments, dev environments, dummy data, feature branches, read-only queries, or small reversible changes.',
          'Being cautious does not mean being passive. If impact is unclear, ask before acting.'
        ],
        visual: {
          kind: 'columns',
          title: 'Safe vs risky',
          left: {
            heading: 'Good experimentation',
            items: [
              'Run locally',
              'Test with fake data',
              'Inspect code and read configs',
              'Try a small branch',
              'Reproduce safely'
            ]
          },
          right: {
            heading: 'Risky experimentation',
            items: [
              'Changing production',
              'Running destructive scripts',
              'Editing shared data',
              'Ignoring security controls',
              'Making irreversible changes'
            ]
          },
          purpose: 'Explore freely inside the boundary; ask before crossing it.'
        },
        mistakes: [
          'Believing experimenting is always dangerous, so never trying anything.',
          'Running a script you do not understand because someone shared it.',
          'Testing against production "just to check something quickly".'
        ],
        reflection:
          'What is one thing you have avoided trying out of fear? Where could you try it safely today?'
      },
      {
        id: 'escalation-ladder-topic',
        title: 'Escalation Ladder',
        blurb: 'Think, experiment, research, hypothesise, then ask with evidence.',
        concept: [
          'The goal is not to avoid asking for help. It is to arrive at the question having already done the work only you could do — which is what makes the question easy for someone else to answer.'
        ],
        visual: {
          kind: 'ladder',
          title: 'Escalation ladder',
          steps: [
            'Think through the problem',
            'Experiment safely',
            'Search docs, code, tickets, previous PRs, trusted sources',
            'Form a hypothesis',
            'Ask for help with context, evidence, and a specific question'
          ],
          purpose: 'Shows what good initiative looks like before escalation.'
        },
        mistakes: [
          'Thinking asking questions is bad.',
          'Thinking taking initiative means working alone forever.',
          'Climbing every rung for a question someone could answer in ten seconds.'
        ],
        reflection:
          'How long should you sit on a blocker before escalating? What makes that number right for your team?'
      },
      {
        id: 'asking-better-questions',
        title: 'Asking Better Questions',
        blurb: 'Context, attempts, evidence, hypothesis, and a specific question.',
        concept: [
          'A good question shows initiative and is easy to answer. The structure is always the same: context, what I tried, what I found, my hypothesis, the specific question.'
        ],
        visual: {
          kind: 'compare',
          title: 'Weak vs strong',
          weak: 'I do not know how to do this.',
          strong:
            'I am trying to add recurring bookings. I found the existing booking service and the Booking table. I think recurrence needs either generated bookings or a recurrence rule. I am not sure which design fits our system. Can we discuss the trade-off?',
          purpose: 'Same amount of not-knowing. Completely different question.'
        },
        mistakes: [
          'Saying "it does not work" without expected vs actual behaviour.',
          'Asking for the answer instead of asking to confirm a hypothesis.',
          'Waiting until you are fully blocked and out of time.'
        ],
        reflection:
          'Rewrite "it does not work" as "I expected X, observed Y, checked A and B, and think C may be the cause. Can you help me confirm D?"'
      }
    ]
  },

  {
    id: 'building-reliable-software',
    num: 4,
    title: 'Building Reliable Software',
    color: 'yellow',
    titleLines: ['BUILDING', 'RELIABLE SOFTWARE'],
    tagline: 'Quality is a habit, not a phase',
    focus: 'Testing, debugging, logs, review, root cause thinking, and prevention.',
    trueLesson:
      'Quality is not a final checkbox. It is built through testing, review, investigation, maintainability, and learning from failures.',
    orbit: [
      { label: 'Testing strategies', icon: 'check' },
      { label: 'Debugging & RCA', icon: 'bug' },
      { label: 'Code reviews', icon: 'code' },
      { label: 'Quality & prevention', icon: 'shield' }
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
  },

  {
    id: 'getting-software-to-production',
    num: 5,
    title: 'Getting Software to Production',
    color: 'orange',
    titleLines: ['GETTING SOFTWARE', 'TO PRODUCTION'],
    tagline: 'Release with confidence. Operate with care.',
    focus: 'Git, pull requests, CI/CD, hosting, containers, monitoring, alerts, and incidents.',
    trueLesson:
      'Software does not just need to be written. It needs to be packaged, hosted, deployed, monitored, and operated.',
    orbit: [
      { label: 'Git & collaboration', icon: 'branch' },
      { label: 'CI/CD pipelines', icon: 'gears' },
      { label: 'Cloud & hosting', icon: 'cloud' },
      { label: 'Monitoring & incidents', icon: 'chart' }
    ],
    clusters: [
      {
        title: 'Getting Change In',
        note: 'Controlled workflows, so changes are reviewed and repeatable.',
        popups: ['git-pull-requests', 'cicd-pipeline']
      },
      {
        title: 'Where Software Runs',
        note: 'Hosting answers: where does the app live when users use it?',
        popups: ['hosting-models', 'containers-explained']
      },
      {
        title: 'Living With It',
        note: 'Production requires ongoing attention.',
        popups: ['monitoring-alerting', 'incident-response']
      }
    ],
    popups: [
      {
        id: 'git-pull-requests',
        title: 'Git & Pull Requests',
        blurb: 'Branches, reviews, and approval gates.',
        concept: [
          'Professional teams use controlled workflows so changes are reviewed, built, tested, deployed, and monitored. Changes start on a branch, are reviewed through a pull request, pass automated checks, and are then deployed through a pipeline.'
        ],
        visual: {
          kind: 'flow',
          title: 'From your machine to an environment',
          steps: [
            'Developer creates a branch',
            'Developer makes a change',
            'Pull request is opened',
            'Review and automated checks run',
            'Build creates deployable artefact',
            'Tests validate behaviour',
            'Deployment moves the artefact into an environment',
            'Monitoring confirms expected behaviour'
          ],
          purpose: 'Collaborative change management with branches, reviews, and approval gates.'
        },
        mistakes: [
          'Opening a pull request so large that nobody can review it properly.',
          'Treating approval as a formality to collect rather than a check to earn.',
          'Committing directly to the main branch because it is faster.'
        ],
        reflection:
          'What is the smallest useful pull request you could open for your current task?'
      },
      {
        id: 'cicd-pipeline',
        title: 'CI/CD Pipeline',
        blurb: 'Automated build, test, package, deploy, and recovery flow.',
        concept: [
          'CI/CD is automation around building, testing, and deploying software. The key value is repeatability: if deployment relies on manual steps and memory, it becomes risky and inconsistent.',
          'Continuous Integration means changes are integrated and checked frequently. Continuous Delivery means software can be released through automated, repeatable steps.'
        ],
        visual: {
          kind: 'flow',
          title: 'CI/CD flow',
          steps: [
            'Developer branch',
            'Pull request',
            'Build pipeline',
            'Automated tests',
            'Container image',
            'Deployment',
            'Running application',
            'Monitoring'
          ],
          purpose: 'Connects engineering work to production operation.'
        },
        mistakes: [
          'Thinking deployment is just copying files.',
          'Building a pipeline with no rollback or recovery path.',
          'Ignoring a red build because "it is probably flaky".'
        ],
        reflection:
          'Map one code change from branch to monitoring. What could go wrong at each stage?'
      },
      {
        id: 'hosting-models',
        title: 'Hosting Models',
        blurb: 'On-premises, cloud, and hybrid ways software can run.',
        concept: [
          'Hosting answers the question: where does the application live when users use it? On-premises means the organisation manages the infrastructure. Cloud means a provider does. Hybrid means both — common in large enterprises.'
        ],
        visual: {
          kind: 'list',
          title: 'Hosting models',
          steps: [
            'On-Premises — company-managed infrastructure, more direct responsibility',
            'Cloud — rented or managed infrastructure, elastic capacity, provider-managed capabilities',
            'Hybrid — some systems on-prem, some in cloud; integration and networking matter'
          ],
          purpose: 'Introduces where software can run before discussing architecture.'
        },
        mistakes: [
          'Thinking cloud means no one manages anything.',
          'Assuming hybrid is just a transition state rather than a long-term reality.',
          'Forgetting that legacy constraints are usually why the current model exists.'
        ],
        reflection:
          'Which model is easiest to scale? Which has legacy constraints? Which needs the most integration work?'
      },
      {
        id: 'containers-explained',
        title: 'Containers Explained',
        blurb: 'The difference between application code, image, and running container.',
        concept: [
          'The progression runs physical servers, then virtual machines, then containers. Containers package an application with its dependencies so it behaves consistently across environments — reducing the classic "works on my machine" problem.',
          'A container image is the blueprint. A running container is an instance created from it. Recipe and cake. Blueprint and house. Class and object.'
        ],
        visual: {
          kind: 'flow',
          title: 'Container lifecycle',
          steps: [
            'Application code',
            'Dependencies',
            'Container image',
            'Running container',
            'Deployed environment'
          ],
          purpose: 'Clarifies image versus container.'
        },
        mistakes: [
          'Thinking containers are the same as virtual machines.',
          'Thinking a container image is the running application.',
          'Baking environment-specific config into the image.'
        ],
        reflection:
          'Explain image vs container in your own words, using an analogy that is not a recipe.'
      },
      {
        id: 'monitoring-alerting',
        title: 'Monitoring & Alerting',
        blurb: 'Signals that show whether production systems are healthy.',
        concept: [
          'Once software is in production, engineers need signals to know whether it is healthy. Monitoring is how teams observe systems after release — and production systems require ongoing attention, not just attention when something breaks.'
        ],
        visual: {
          kind: 'flow',
          title: 'Monitoring flow',
          steps: [
            'Running application',
            'Metrics and logs',
            'Dashboard',
            'Alert',
            'Engineer investigation',
            'Resolution and learning'
          ],
          purpose: 'Shows how teams know what is happening after release.'
        },
        mistakes: [
          'Thinking monitoring is only needed if something goes wrong.',
          'Alerting on everything until nobody trusts the alerts.',
          'Building a dashboard nobody looks at on a normal day.'
        ],
        reflection:
          'If your feature silently broke right now, which signal would notice — and how long would it take?'
      },
      {
        id: 'incident-response',
        title: 'Incident Response',
        blurb: 'Coordinated investigation, mitigation, communication, resolution, learning.',
        concept: [
          'An incident is a production issue that needs coordinated investigation and response. The first goal is usually mitigation — stop the harm — not diagnosis. Understanding comes after users are safe.'
        ],
        visual: {
          kind: 'flow',
          title: 'Incident flow',
          steps: [
            'Signal or report',
            'Assess impact',
            'Mitigate — rollback, disable, contain',
            'Communicate to stakeholders',
            'Investigate root cause',
            'Resolve and prevent recurrence'
          ],
          purpose: 'Mitigate first. Understand second. Learn always.'
        },
        mistakes: [
          'Debugging deeply while users are still affected.',
          'Going silent during an incident because you are busy.',
          'Skipping the review afterwards because it was resolved.'
        ],
        reflection:
          'Error rate rises right after a deployment. What do you check first, and what do you do before you understand why?'
      }
    ]
  },

  {
    id: 'being-an-effective-engineer',
    num: 6,
    title: 'Being an Effective Engineer',
    color: 'purple',
    titleLines: ['BEING AN', 'EFFECTIVE ENGINEER'],
    tagline: 'People, purpose and impact',
    focus:
      'Communication, documentation, stakeholders, responsible AI use, escalation, and continuous learning.',
    trueLesson:
      'Technical skill matters, but engineers create impact through clarity, collaboration, judgement, and learning.',
    orbit: [
      { label: 'Communication', icon: 'chat' },
      { label: 'Documentation', icon: 'doc' },
      { label: 'Stakeholders', icon: 'people' },
      { label: 'AI tools & ethics', icon: 'sparkles' }
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
]

// Layer 3 popups available from every page via the persistent toolkit panel.
export const toolkit = [
  {
    id: 'learning-loop',
    title: 'Learning Loop',
    icon: 'cycle',
    blurb: 'A repeatable process for learning unfamiliar technical material.',
    concept: [
      'This gives you a repeatable process for learning unfamiliar technical material. You do not need to know everything — you need a way to figure it out.'
    ],
    visual: {
      kind: 'loop',
      title: 'Independent learning loop',
      steps: [
        'Identify what is unknown',
        'Research using trusted sources',
        'Experiment safely in a non-production environment',
        'Form a hypothesis',
        'Validate or adjust the hypothesis',
        'Apply the learning'
      ],
      purpose: 'Unknown → research → experiment → hypothesise → validate → apply.'
    },
    mistakes: [
      'Reading endlessly instead of trying something small.',
      'Experimenting without a hypothesis, so the result teaches nothing.',
      'Learning something and never applying it to the actual task.'
    ],
    reflection: 'What is the one unknown that, if resolved, would unblock the rest of your task?'
  },
  {
    id: 'problem-breakdown-loop',
    title: 'Problem Breakdown Loop',
    shortTitle: 'Problem Breakdown',
    icon: 'puzzle',
    blurb: 'Prevents you from being overwhelmed by large or vague tasks.',
    concept: [
      'This prevents large or vague tasks from becoming overwhelming. Start from the outcome, not from the code.'
    ],
    visual: {
      kind: 'loop',
      title: 'Problem breakdown loop',
      steps: [
        'Understand the outcome',
        'List knowns and unknowns',
        'Identify systems involved',
        'Break the work into smaller tasks',
        'Deliver the smallest useful version',
        'Validate and iterate'
      ],
      purpose:
        'Outcome → knowns → unknowns → systems → tasks → smallest useful delivery → iterate.'
    },
    mistakes: [
      'Breaking work down by file rather than by outcome.',
      'Defining a "smallest version" that still takes three weeks.',
      'Never revisiting the breakdown once the work starts.'
    ],
    reflection: 'What is the smallest version of your task that someone could actually review?'
  },
  {
    id: 'escalation-ladder',
    title: 'Escalation Ladder',
    icon: 'ladder',
    blurb: 'Teaches initiative without discouraging help-seeking.',
    concept: [
      'This teaches initiative without discouraging help-seeking. Climb the rungs, then ask well.'
    ],
    visual: {
      kind: 'ladder',
      title: 'Escalation ladder',
      steps: [
        'Think through the problem',
        'Experiment safely',
        'Search docs, code, tickets, previous PRs, and trusted external sources',
        'Form a hypothesis',
        'Ask for help with context, evidence, and a specific question'
      ],
      purpose:
        'Think → experiment safely → research → form hypothesis → ask with context and evidence.'
    },
    mistakes: [
      'Skipping straight to rung five.',
      'Refusing to ever reach rung five.',
      'Asking without the evidence you already collected on rungs one to four.'
    ],
    reflection: 'Which rung do you personally tend to skip — and what does that cost you?'
  }
]

export const safetyBoundary =
  'Explore, but stay inside the boundary: do not experiment in production, do not delete or mutate real data, do not bypass security, and ask before running anything with unclear impact.'

// Lookup helpers ------------------------------------------------------------

export const topicById = Object.fromEntries(topics.map((t) => [t.id, t]))

export const allPopups = Object.fromEntries([
  ...topics.flatMap((t) => t.popups.map((p) => [p.id, { ...p, topicId: t.id, color: t.color }])),
  ...toolkit.map((p) => [p.id, { ...p, color: 'ink', isToolkit: true }])
])
