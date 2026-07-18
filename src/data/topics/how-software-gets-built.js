export default {
  id: 'how-software-gets-built',
  title: 'How Software Gets Built',
  color: 'red',
  titleLines: ['HOW SOFTWARE', 'GETS BUILT'],
  tagline: 'Follow the journey of a feature',
  focus:
    'Software delivery, SDLC, Agile, roles, environments, and the journey from idea to value.',
  trueLesson:
    'Software engineering is much more than coding. It is the coordinated process of delivering reliable value to users over time.',
  orbit: [
    { label: 'SDLC', icon: 'arrows-rotate' },
    { label: 'Agile & ceremonies', icon: 'users' },
    { label: 'Roles & collaboration', icon: 'user' },
    { label: 'Environments', icon: 'desktop' }
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
}
