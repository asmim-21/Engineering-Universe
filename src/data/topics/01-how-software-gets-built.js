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
        text: 'The SDLC is the repeatable process teams use to turn an idea into reliable software.',
        ensures: [
          'Builds the right thing',
          'Builds it correctly',
          'Releases it safely',
          'Continues improving it afterwards'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'SDLC flow — shows that coding is only one stage in a larger delivery lifecycle.',
        steps: [
          { icon: 'lightbulb', label: 'Idea', desc: 'A need or opportunity appears.', purpose: 'Identify an opportunity or problem worth solving.', question: 'What problem exists?' },
          { icon: 'list-check', label: 'Requirements', desc: 'Understand the problem and success criteria.', purpose: 'Understand and define needs, constraints, and success criteria.', question: 'What should we build?' },
          { icon: 'compass-drafting', label: 'Design', desc: 'Plan how the solution will work.', purpose: 'Plan the solution — architecture, data, UI/UX, and integrations.', question: 'How will it work?' },
          { icon: 'code', label: 'Development', desc: 'Build it in code and configuration.', purpose: 'Implement the solution in code and configuration.', question: 'Can we build it?' },
          { icon: 'flask', label: 'Testing', desc: 'Verify behaviour and find defects.', purpose: 'Verify behaviour, find defects, and build confidence.', question: 'Does it work?' },
          { icon: 'rocket', label: 'Deployment', desc: 'Release it to an environment.', purpose: 'Release the solution to an environment where users can access it.', question: 'Can users use it?' },
          { icon: 'arrows-rotate', label: 'Maintenance', desc: 'Monitor, fix, and improve over time.', purpose: 'Monitor, support, fix, improve, patch, and adapt the system after release.', question: 'How can we make it better?' }
        ]
      },
      example: {
        title: 'Spotify — offline playlists',
        items: [
          'Users want offline music.',
          'Download playlists to listen without internet.',
          'Storage system, sync strategy, UI for downloads.',
          'Implement download feature in mobile apps.',
          'Verify downloads, offline playback, edge cases.',
          'Release in version 3.2 to app stores.',
          'Fix bugs, improve speed, add smart download.'
        ]
      },
      io: {
        inputs: [
          ['Market needs', 'User pain', 'Business goals'],
          ['Idea', 'User research', 'Constraints'],
          ['Requirements', 'Tech options', 'Standards'],
          ['Design docs', 'Code standards', 'Tools'],
          ['Code', 'Test cases', 'Data'],
          ['Tested build', 'Release plan', 'Infra'],
          ['Live system', 'User feedback', 'Monitoring']
        ],
        outputs: [
          ['Problem statement', 'Opportunity'],
          ['Requirements document', 'User stories', 'Acceptance criteria'],
          ['Architecture design', 'Data models', 'UI/UX mockups'],
          ['Source code', 'Config files', 'Unit tests'],
          ['Test results', 'Defect reports', 'Quality metrics'],
          ['Live release', 'Release notes', 'Change logs'],
          ['Patches', 'Improvements', 'New versions']
        ]
      },
      who: [
        'Product Owner, Stakeholders',
        'Product Owner, Business Analyst',
        'Solutions Architect, UX/UI Designer',
        'Developers',
        'QA Engineers, Testers',
        'DevOps, Release Manager',
        'Support Engineers, DevOps, Everyone'
      ],
      misconceptions: [
        { wrong: 'Coding is software engineering.', right: 'Coding is only one stage of software engineering.' },
        { wrong: 'A feature is finished forever once released.', right: 'Deployment starts the maintenance phase. Software evolves.' },
        { wrong: 'Testing happens at the end.', right: 'Testing should happen throughout development.' },
        { wrong: "If it works on my machine, it's ready to ship.", right: 'Production environments, users, and scale are different.' }
      ],
      takeaways: [
        'Software development is more than writing code.',
        'Every stage reduces risk and adds value.',
        'Quality is built in, not tested in.',
        'Deployment is the beginning of operation, not the end.',
        'Feedback loops create continuous improvement.'
      ],
      reflection: 'Is software done when it is deployed?',
      checks: [
        'Why do requirements come before development?',
        'What risks does testing reduce?',
        'Why is maintenance part of the SDLC?',
        'Which stage produces code?',
        'What happens if requirements are incorrect?'
      ]
    },
    {
      id: 'agile',
      title: 'Agile Mindset',
      blurb: 'Iterative delivery, feedback, collaboration, and adapting as learning happens.',
      whatIs: {
        text: 'Agile is a way of working that delivers value in small increments and adapts as the team learns.',
        ensures: [
          'Delivers value early and often',
          'Responds to change instead of fighting it',
          'Learns from real user feedback',
          'Improves how the team works over time'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'The core behaviour is iteration.',
        steps: [
          { icon: 'hammer', label: 'Build a small useful piece', desc: 'Ship a small, usable increment.' },
          { icon: 'circle-check', label: 'Validate it', desc: 'Put it in front of real feedback.' },
          { icon: 'lightbulb', label: 'Learn', desc: 'See what the feedback teaches you.' },
          { icon: 'pen-ruler', label: 'Adjust', desc: 'Change direction based on what you learned.' }
        ]
      },
      example: {
        title: 'Adding a "dark mode" toggle',
        items: [
          'Ship a basic dark-mode toggle to a few users.',
          'Watch how they use it and gather feedback.',
          'Learn that users expect it to follow the system setting.',
          'Adjust the toggle to add an "auto" option.'
        ]
      },
      misconceptions: [
        { wrong: 'Agile means no planning.', right: 'Agile plans continuously, in small increments.' },
        { wrong: 'Stand-up is a status report to the manager.', right: 'Stand-up is a short coordination point for the team.' },
        { wrong: 'More ceremonies means more agile.', right: 'Delivered value matters more than ceremonies.' }
      ],
      takeaways: [
        'Iteration beats a single big up-front bet.',
        'Feedback shapes the next increment.',
        'Ceremonies serve the work, not the reverse.',
        'Changing requirements are expected, not a failure.'
      ],
      reflection: 'Which ceremony would you miss most if the team dropped it, and what would break?',
      checks: [
        'What is a backlog for?',
        'Why keep each increment small?',
        'What is the point of a retrospective?',
        'How does Agile handle changing requirements?'
      ]
    },
    {
      id: 'roles',
      title: 'Software Roles',
      blurb: 'How different roles contribute to delivery and why software is a team sport.',
      whatIs: {
        text: 'Software is delivered by teams, not lone heroes — each role brings a different perspective.',
        ensures: [
          '**Product Owner:** owns priorities and trade-off decisions.',
          '**Business Analyst:** clarifies requirements and acceptance criteria.',
          '**Developer:** designs, builds, tests, and fixes software.',
          '**Tester / QA:** validates behaviour and finds quality gaps.',
          '**Architect:** guides system structure and technical direction.',
          '**SRE:** owns reliability, operations, and incident response.',
          '**Stakeholder:** has an interest in the outcome or impact.',
          '**End User:** experiences the value — or the pain.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Who is affected by a product?',
        loop: false,
        steps: [
          { icon: 'briefcase', label: 'Business stakeholders', desc: 'Care about value, cost, and outcomes.' },
          { icon: 'user', label: 'End users', desc: 'Live with the experience day to day.' },
          { icon: 'code', label: 'Engineering', desc: 'Design, build, and maintain the system.' },
          { icon: 'headset', label: 'Support', desc: 'Help users when things go wrong.' },
          { icon: 'server', label: 'Operations', desc: 'Keep it running in production.' },
          { icon: 'shield-halved', label: 'Security / compliance', desc: 'Guard data, access, and the rules.' }
        ]
      },
      misconceptions: [
        { wrong: "Testing is only the tester's job.", right: 'Quality is a shared responsibility.' },
        { wrong: 'The Product Owner has already thought of everything.', right: 'You still surface gaps, risks, and questions.' },
        { wrong: 'Engineers never talk to users.', right: 'Talking to users reveals what actually matters.' }
      ],
      takeaways: [
        'Software is a team sport.',
        'Roles clarify who decides and who delivers.',
        'Everyone owns quality, not just QA.',
        'Knowing the roles tells you who to ask.'
      ],
      reflection: 'For a product idea of your choice: who can approve priorities, who uses it, who supports it, and who might be impacted if it fails?',
      checks: [
        'Who owns priorities and trade-offs?',
        'Who validates that the software works?',
        'Who keeps it running in production?',
        'Who is impacted if the product fails?'
      ]
    },
    {
      id: 'envs',
      title: 'Environments',
      blurb: 'Why Dev, Test/UAT, and Production exist and how they reduce delivery risk.',
      whatIs: {
        text: 'Environments separate where you build from where real users are, so mistakes stay cheap.',
        ensures: [
          '**Dev:** build and experiment; frequent change is normal.',
          '**Test / UAT:** validate before real users; more stable.',
          '**Production:** real data, real users, real impact.',
          'A bug in Dev is a lesson; a bug in Prod hits customers.'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Software environments — introduces environment separation and why production requires extra care.',
        loop: false,
        steps: [
          { icon: 'laptop-code', label: 'Development (Dev)', desc: 'Where engineers build and experiment.' },
          { icon: 'vial', label: 'Test / UAT', desc: 'Where the solution is validated.' },
          { icon: 'globe', label: 'Production (Prod)', desc: 'Live: real users and real impact.' }
        ]
      },
      misconceptions: [
        { wrong: 'Production is just another environment.', right: 'Production has real users, data, and consequences.' },
        { wrong: 'If it works on my machine, it works everywhere.', right: 'Environments differ in data, config, and scale.' }
      ],
      takeaways: [
        'Separation keeps mistakes cheap.',
        'Promote with confidence, never by accident.',
        'Production changes deserve extra care.'
      ],
      reflection: 'What is allowed to be broken in each environment, and what is not?',
      checks: [
        'Why separate Dev from Production?',
        'What is UAT for?',
        'What is riskier to break in Prod than in Dev?',
        'How do changes move between environments?'
      ]
    },
    {
      id: 'journey',
      title: 'Feature Journey',
      blurb: 'How an idea moves through clarification, design, build, test, release, feedback, and improvement.',
      whatIs: {
        text: 'A feature travels a long way before it reaches users — and it keeps evolving after.',
        ensures: [
          'Starts as a request, not a finished spec',
          'Gets clarified before it gets built',
          'Is validated before real users see it',
          'Keeps improving after release'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Feature journey — shows how a feature travels from idea to users.',
        loop: false,
        steps: [
          { icon: 'inbox', label: 'Feature request', desc: 'Someone asks for a capability.' },
          { icon: 'circle-question', label: 'Clarifying questions', desc: 'Pin down what is really needed.' },
          { icon: 'list-check', label: 'Requirements', desc: 'Agree the problem and success criteria.' },
          { icon: 'compass-drafting', label: 'Design choices', desc: 'Decide how to build it.' },
          { icon: 'code', label: 'Development', desc: 'Implement and test it locally.' },
          { icon: 'laptop-code', label: 'Dev environment', desc: 'Integrate it with the team.' },
          { icon: 'vial', label: 'Test/UAT environment', desc: 'Validate before real users.' },
          { icon: 'globe', label: 'Production', desc: 'Release it to users.' },
          { icon: 'comments', label: 'Feedback and iteration', desc: 'Learn from use and improve.' }
        ]
      },
      example: {
        title: '"Update your profile"',
        items: [
          'Users ask to edit their profile details.',
          'Which fields? Who is allowed to edit them?',
          'Users can update name, photo, and email.',
          'Form layout, validation, and save behaviour.',
          'Build the form and the save endpoint.',
          "Integrate with the team's build.",
          'Check validation and edge cases.',
          'Release the profile editor to users.',
          'Add avatar cropping based on feedback.'
        ]
      },
      who: [
        'User, Stakeholder',
        'Business Analyst, Product Owner',
        'Product Owner, Business Analyst',
        'Developer, Designer',
        'Developers',
        'Developers',
        'QA, Testers',
        'DevOps, Release Manager',
        'Product Owner, Support, Users'
      ],
      misconceptions: [
        { wrong: 'A feature is finished forever once released.', right: 'Release starts monitoring, feedback, and improvement.' },
        { wrong: 'Skipping clarifying questions saves time.', right: 'It risks building the wrong thing well.' },
        { wrong: 'Feedback is a complaint to avoid.', right: 'Feedback is part of the design.' }
      ],
      takeaways: [
        'Delivery is ongoing, not a finish line.',
        'Clarify before you build.',
        'Validate progressively before real users.',
        'Feedback drives the next version.'
      ],
      reflection: 'Map one feature request through every stage. What could go wrong if each stage were skipped?',
      checks: [
        'What happens if you skip clarifying questions?',
        'Why validate in UAT before Production?',
        'Is a released feature "done"?',
        'Where does user feedback fit in?'
      ]
    },
    {
      id: 'pitfalls',
      title: 'Common Pitfalls',
      blurb: 'Beginner mistakes such as building the wrong thing, skipping steps, poor communication, and ignoring quality.',
      whatIs: {
        text: 'Engineering is more than coding — it is delivering software that keeps working for real users.',
        ensures: [
          'Software is a long-lived product, not a one-off submission',
          'A feature must keep working, not just work once',
          'Maintenance and support are normal, not afterthoughts',
          'Engineering usually happens in teams'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Coding vs engineering.',
        loop: false,
        steps: [
          { icon: 'code', label: 'What code do I write?', desc: 'The coding-only mindset.' },
          { icon: 'bullseye', label: 'What problem are we solving?', desc: 'Engineering starts with the problem.' },
          { icon: 'lock', label: 'What are the constraints?', desc: 'Time, cost, risk, and context.' },
          { icon: 'triangle-exclamation', label: 'What could go wrong?', desc: 'Think through the failure modes.' },
          { icon: 'circle-check', label: 'How will we know it worked?', desc: 'Define what success looks like.' }
        ]
      },
      misconceptions: [
        { wrong: 'Software engineering equals coding.', right: 'Coding is one part; engineering is the whole outcome.' },
        { wrong: 'Agile means no planning.', right: 'Agile plans continuously, in small steps.' },
        { wrong: "Testing is only the tester's job.", right: 'Quality is a shared responsibility.' },
        { wrong: 'Production is just another environment.', right: 'Production has real users and real impact.' },
        { wrong: 'A feature is finished forever once released.', right: 'Released features are monitored and improved.' }
      ],
      takeaways: [
        'Measure validated outcomes, not lines of code.',
        'Surface blockers early instead of going quiet.',
        '"Works on my machine" is not "done".',
        'Engineering is a team effort.'
      ],
      reflection: 'Name one thing that happens before coding and one thing that happens after deployment.',
      checks: [
        'Name one thing that happens before coding.',
        'Name one thing that happens after deployment.',
        'Why is "it runs" not enough?',
        'How is engineering different from coding?'
      ]
    }
  ]
}
