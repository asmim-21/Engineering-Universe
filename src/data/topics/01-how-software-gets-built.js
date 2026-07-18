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
      title: 'Software Development Lifecycle',
      blurb: 'End-to-end software journey from idea to value and ongoing improvement.',
      concept:
        'The SDLC is a mental model for how software moves from an idea to something users can rely on. It is not always a perfectly linear process, but it gives a map of the major stages involved. Each stage exists because skipping it creates risk. If requirements are unclear, the team may build the wrong thing. If design is skipped, the solution may not fit the system. If testing is weak, users find defects. If maintenance is ignored, systems degrade over time.',
      points: [
        '**Requirements:** understand the problem, users, constraints, and success criteria.',
        '**Design:** decide how the solution will work and what systems, data, and interfaces are involved.',
        '**Development:** implement the solution in code and configuration.',
        '**Testing:** verify behaviour, identify defects, and build confidence.',
        '**Deployment:** release the solution into an environment where users or testers can access it.',
        '**Maintenance:** monitor, support, fix, improve, patch, and adapt the system after release.'
      ],
      visual: {
        kind: 'flow',
        label: 'SDLC flow — shows that coding is only one stage in a larger delivery lifecycle.',
        steps: ['Idea', 'Requirements', 'Design', 'Development', 'Testing', 'Deployment', 'Maintenance and improvement']
      },
      mistakes: ['Software engineering equals coding', 'A feature is finished forever once released'],
      reflection: 'Is software done when it is deployed?'
    },
    {
      id: 'agile',
      title: 'Agile Mindset',
      blurb: 'Iterative delivery, feedback, collaboration, and adapting as learning happens.',
      concept:
        'Agile is a response to uncertainty. Requirements are rarely perfect at the start. Users may discover what they really need only after seeing an early version. Business priorities can change. Agile delivery helps teams deliver value in smaller increments and learn as they go. Do not over-focus on ceremonies.',
      points: [
        '**Backlog:** a prioritised list of work.',
        '**Sprint or iteration:** a focused period of delivery.',
        '**Stand-up:** a short coordination point, not a status performance.',
        '**Review or demo:** show what was built and gather feedback.',
        '**Retrospective:** improve the way the team works.',
        'The core behaviour is iteration: build a small useful piece, validate it, learn, and adjust.'
      ],
      visual: {
        kind: 'flow',
        label: 'The core behaviour is iteration.',
        steps: ['Build a small useful piece', 'Validate it', 'Learn', 'Adjust']
      },
      mistakes: ['Agile means no planning'],
      reflection: 'Which ceremony would you miss most if the team dropped it, and what would break?'
    },
    {
      id: 'roles',
      title: 'Software Roles',
      blurb: 'How different roles contribute to delivery and why software is a team sport.',
      concept:
        'Software is delivered by teams, not lone heroes. Different people contribute different perspectives. You need to understand enough about common roles to know who you may interact with and why those interactions matter.',
      points: [
        '**Product Owner:** owns priorities and trade-off decisions.',
        '**Business Analyst:** clarifies requirements, business processes, and acceptance criteria.',
        '**Developer:** designs, builds, tests, and fixes software.',
        '**Tester or QA:** validates behaviour and identifies quality gaps.',
        '**Architect:** guides system structure and technical direction.',
        '**SRE:** focuses on reliability, observability, operations, incident response, and production readiness.',
        '**Stakeholder:** has an interest in the outcome or impact of the system.',
        '**End User:** uses the product and experiences the value or pain.'
      ],
      visual: {
        kind: 'flow',
        label: 'Who is affected by a product?',
        steps: ['Business stakeholders', 'End users', 'Engineering', 'Support', 'Operations', 'Security / compliance']
      },
      mistakes: ["Testing is only the tester's job"],
      reflection: 'For a product idea of your choice: who can approve priorities, who uses it, who supports it, and who might be impacted if it fails?'
    },
    {
      id: 'envs',
      title: 'Environments',
      blurb: 'Why Dev, Test/UAT, and Production exist and how they reduce delivery risk.',
      concept:
        'It is easy to assume code simply moves from a laptop to users. Environments are separated to reduce risk. Development is where engineers can build and experiment. Test or UAT is where the solution is validated. Production is where real users and real business processes operate.',
      points: [
        '**Development (Dev):** used for building, experimenting, and early testing. Frequent change is normal.',
        '**Test/UAT:** used to validate functionality, requirements, integrations, and user acceptance. It should be more stable than Dev.',
        '**Production (Prod):** the live environment. Real data, real users, real business impact. Changes require more care.',
        'A bug in Dev is a learning opportunity. A bug in Prod may affect customers, colleagues, revenue, or trust.'
      ],
      visual: {
        kind: 'flow',
        label: 'Software environments — introduces environment separation and why production requires extra care.',
        steps: ['Development (Dev)', 'Test / UAT', 'Production (Prod)']
      },
      mistakes: ['Production is just another environment'],
      reflection: 'What is allowed to be broken in each environment, and what is not?'
    },
    {
      id: 'journey',
      title: 'Feature Journey',
      blurb: 'How an idea moves through clarification, design, build, test, release, feedback, and improvement.',
      concept:
        'Take a simple feature such as "allow users to update their profile". Start from the request and follow how it becomes requirements, then design, development, testing, deployment, feedback, and further improvement. The key point is that delivery is ongoing. A feature may be released, monitored, adjusted, fixed, improved, or even removed.',
      points: [
        'User or stakeholder identifies a need.',
        'Team clarifies requirements and success criteria.',
        'Engineers design a solution.',
        'Developers implement and test locally.',
        'Feature is deployed to Dev.',
        'Feature is validated in Test/UAT.',
        'Feature is released to Production.',
        'Users provide feedback.',
        'Team improves or fixes the feature based on learning.'
      ],
      visual: {
        kind: 'flow',
        label: 'Feature journey — shows how a feature travels from idea to users.',
        steps: ['Feature request', 'Clarifying questions', 'Requirements', 'Design choices', 'Development', 'Dev environment', 'Test/UAT environment', 'Production', 'Feedback and iteration']
      },
      mistakes: ['A feature is finished forever once released'],
      reflection: 'Map one feature request through every stage. What could go wrong if each stage were skipped?'
    },
    {
      id: 'pitfalls',
      title: 'Common Pitfalls',
      blurb: 'Beginner mistakes such as building the wrong thing, skipping steps, poor communication, and ignoring quality.',
      concept:
        'Software engineering is the discipline of creating software that solves real problems for real users. It includes designing, building, testing, deploying, maintaining, monitoring, and improving systems. The code is important, but it is only one part of the work. In a university assignment, success is often measured by whether the program runs and meets the marking criteria. In industry, success is measured by whether the software continues to solve the problem safely, reliably, and maintainably for users over time.',
      points: [
        'Software is usually a long-lived product or service, not a one-off submission.',
        'Real users may rely on the system for important work.',
        'A feature that works once is not enough; it must keep working and be understandable by others.',
        'Maintenance, support, and improvement are normal parts of engineering, not afterthoughts.',
        'Coding focuses on implementation. Engineering focuses on the full outcome.',
        'Coding can happen in isolation; engineering usually happens in teams.'
      ],
      visual: {
        kind: 'flow',
        label: 'Coding vs engineering.',
        steps: ['What code do I write?', 'What problem are we solving?', 'What are the constraints?', 'What could go wrong?', 'How will we know it worked?']
      },
      mistakes: [
        'Software engineering equals coding',
        'Agile means no planning',
        "Testing is only the tester's job",
        'Production is just another environment',
        'A feature is finished forever once released'
      ],
      reflection: 'Name one thing that happens before coding and one thing that happens after deployment.'
    }
  ]
}
