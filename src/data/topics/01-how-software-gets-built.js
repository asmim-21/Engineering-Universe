export default {
  id: "how-software-gets-built",
  title: "How Software Gets Built",
  number: 1,
  color: "red",
  tagline: "From idea to value",
  focus: "Software delivery, SDLC, Agile, roles, environments, and the journey from idea to value.",
  trueLesson:
    "Software engineering is much more than coding. It is the coordinated process of delivering reliable value to users over time.",

  // Layer 2: Topic Canvas Structure
  sections: [
    {
      title: "THE SOFTWARE DEVELOPMENT LIFECYCLE",
      position: "left-top",
      items: [
        "Requirements",
        "Design",
        "Development",
        "Test",
        "Deploy",
        "Operate & Improve",
      ],
      note: "It's a cycle, not a line!",
    },
    {
      title: "THE SOFTWARE DEVELOPMENT LIFECYCLE",
      position: "center",
      type: "flow",
      steps: [
        { num: 1, label: "REQUIREMENTS", desc: "Understand the problem and what we need to achieve." },
        { num: 2, label: "DESIGN", desc: "Plan the solution. Architecture, data, interfaces, UX." },
        { num: 3, label: "DEVELOP", desc: "Write code. Build the solution in small, meaningful pieces." },
        { num: 4, label: "TEST", desc: "Check it works. Find bugs early. Gain confidence." },
        { num: 5, label: "DEPLOY", desc: "Release to users safely and reliably." },
        { num: 6, label: "OPERATE & IMPROVE", desc: "Monitor, learn from feedback and data. Make it better over time." },
      ],
      note: "SDLC isn't always linear. We iterate, learn and adapt.",
    },
    {
      title: "ROLES (EXAMPLES)",
      position: "left-bottom",
      roles: [
        { icon: "👤", title: "Product Owner", desc: "Understands the problem and what value looks like." },
        { icon: "👨‍💻", title: "Developer", desc: "Writes code and builds solutions." },
        { icon: "🧪", title: "QA Engineer", desc: "Challenges the solution and finds bugs early." },
        { icon: "🎨", title: "Designer", desc: "Creates clear, useful and usable experiences." },
        { icon: "🔧", title: "DevOps Engineer", desc: "Gets software to production safely and reliably." },
        { icon: "👥", title: "Everyone", desc: "Communicates, collaborates and owns quality." },
      ],
    },
    {
      title: "ENVIRONMENTS",
      position: "right-top",
      environments: [
        { num: 1, label: "Local", desc: "You work here" },
        { num: 2, label: "Dev", desc: "Team integrates here" },
        { num: 3, label: "UAT", desc: "Test like production" },
        { num: 4, label: "Production", desc: "Live users are here" },
      ],
      tagline: "Promote with confidence, never by accident.",
    },
    {
      title: "WHY DOES IT EXIST?",
      position: "right-bottom",
      benefits: [
        "✓ Brings structure to complex work.",
        "✓ Reduces risk and surprises.",
        "✓ Improves quality and consistency.",
        "✓ Helps teams collaborate.",
        "✓ Ensures we deliver real value.",
      ],
    },
    {
      title: "COMMON PITFALLS",
      position: "bottom",
      pitfalls: [
        "✕ Skipping or rushing steps.",
        "✕ Building the wrong thing.",
        "✕ Testing too late.",
        "✕ Poor communication.",
        "✕ Treating deployment as the finish line.",
      ],
    },
    {
      title: "THINK ABOUT...",
      position: "right-edge",
      prompts: [
        "Pick a feature from an app you use every day.",
        "How do you think it moved through this lifecycle?",
        "What might have been the hardest step? Why?",
      ],
    },
  ],

  agileSection: {
    title: "AGILE MINDSET",
    note: "Iterating. Collaborating. Learning.",
    mindset: [
      "Plan → Do → Inspect → Adapt",
      "Collaborate closely",
      "Respond to change",
      "Deliver value continuously",
    ],
  },

  // Layer 3: Popup Deep Dives (6 popups per topic)
  popups: [
    {
      id: "sdlc",
      title: "Software Development Lifecycle",
      blurb: "End-to-end journey from idea to value and ongoing improvement.",
      concept: [
        "The SDLC is a mental model for how software moves from an idea to something users can rely on. It is rarely perfectly linear, but it gives you a map of the major stages involved.",
        "Each stage exists because skipping it creates risk. If requirements are unclear, the team may build the wrong thing. If design is skipped, the solution may not fit the system. If testing is weak, users find defects. If maintenance is ignored, systems degrade over time.",
      ],
      visual: {
        kind: "flow",
        title: "SDLC Flow",
        steps: [
          "Idea",
          "Requirements",
          "Design",
          "Development",
          "Testing",
          "Deployment",
          "Maintenance & Improvement",
        ],
        purpose: "Shows that coding is only one stage in a larger delivery lifecycle.",
      },
      mistakes: [
        "Treating the SDLC as paperwork rather than risk reduction.",
        "Believing the work ends at deployment.",
        "Jumping straight to development because it feels productive.",
      ],
      reflection:
        "Pick a feature you have built. Which SDLC stage did you spend the least time on, and what risk did that create?",
    },
    {
      id: "agile-mindset",
      title: "Agile Mindset",
      blurb: "Iterative delivery, feedback, collaboration, and adapting as learning happens.",
      concept: [
        "Agile is a response to uncertainty. Requirements are rarely perfect at the start, users often discover what they really need only after seeing an early version, and priorities change.",
        "Do not over-focus on ceremonies. The core behaviour is iteration: build a small useful piece, validate it, learn, and adjust.",
      ],
      visual: {
        kind: "loop",
        title: "The Iteration Loop",
        steps: [
          "Build a small useful piece",
          "Validate it",
          "Learn",
          "Adjust",
        ],
        purpose: "Agile is a learning cycle, not a meeting schedule.",
      },
      mistakes: [
        "Thinking Agile means no planning.",
        "Treating stand-up as a status performance rather than a coordination point.",
        "Measuring ceremonies instead of delivered value.",
      ],
      reflection:
        "Name one assumption in your current task that could be tested with a smaller first version.",
    },
    {
      id: "software-roles",
      title: "Software Roles",
      blurb: "How different roles contribute and why software is a team sport.",
      concept: [
        "Software is delivered by teams, not lone heroes. Different people bring different perspectives, and knowing who does what tells you who to talk to and why.",
      ],
      visual: {
        kind: "list",
        title: "Who You Will Work With",
        steps: [
          "Product Owner — owns priorities and trade-off decisions",
          "Business Analyst — clarifies requirements and acceptance criteria",
          "Developer — designs, builds, tests, and fixes software",
          "Tester/QA — validates behaviour and identifies quality gaps",
          "Architect — guides system structure and technical direction",
          "SRE — reliability, observability, operations, incident response",
          "Stakeholder — has an interest in the outcome or impact",
          "End User — experiences the value or the pain",
        ],
        purpose: "Knowing the roles tells you who to ask, and what to ask them.",
      },
      mistakes: [
        "Assuming the Product Owner has already thought of everything.",
        "Treating QA as the only people responsible for quality.",
        "Never speaking to the people who actually use the software.",
      ],
      reflection:
        "For your current task, who approves priorities, who supports it after release, and who is impacted if it fails?",
    },
    {
      id: "environments",
      title: "Environments",
      blurb: "Why Local, Dev, UAT, and Production exist and how they reduce risk.",
      concept: [
        "Code does not simply move from a laptop to users. Environments are separated so software is validated progressively, and so mistakes are cheap where they should be cheap.",
        "A bug in Dev is a learning opportunity. A bug in Prod may affect customers, colleagues, revenue, or trust.",
      ],
      visual: {
        kind: "flow",
        title: "Software Environments",
        steps: [
          "Development (Dev)",
          "Test / UAT",
          "Production (Prod)",
        ],
        purpose: "Introduces environment separation and why production requires extra care.",
      },
      mistakes: [
        "Thinking production is just another environment.",
        "Testing only on your own machine and assuming it will behave the same everywhere.",
        "Experimenting with real data because it is 'more realistic'.",
      ],
      reflection:
        "What is the riskiest thing you could do in Dev today? Would the same action be acceptable in Prod?",
    },
    {
      id: "feature-journey",
      title: "Feature Journey",
      blurb: "How an idea moves through clarification, design, build, test, release, feedback.",
      concept: [
        "A visible feature travels a long way before it reaches users, and it does not stop there. Delivery is ongoing: a feature may be released, monitored, adjusted, fixed, improved, or removed.",
      ],
      visual: {
        kind: "flow",
        title: "Feature Journey",
        steps: [
          "Feature request",
          "Clarifying questions",
          "Requirements",
          "Design choices",
          "Development",
          "Dev environment",
          "Test/UAT environment",
          "Production",
          "Feedback and iteration",
        ],
        purpose: "Shows how a feature travels from idea to users.",
      },
      mistakes: [
        "Believing a feature is finished forever once released.",
        "Skipping clarifying questions and building the wrong thing well.",
        "Forgetting that feedback is part of the design, not a complaint.",
      ],
      reflection:
        "Take 'users want to update their profile details' and map each stage. What breaks if you skip stage two?",
    },
    {
      id: "common-pitfalls",
      title: "Common Pitfalls",
      blurb: "Building the wrong thing, skipping steps, poor communication, ignoring quality.",
      concept: [
        "Most early-career mistakes are not about syntax. They are about starting before understanding, working silently, and treating quality as someone else's stage.",
      ],
      visual: {
        kind: "list",
        title: "Misconceptions Worth Unlearning",
        steps: [
          "Software engineering equals coding",
          "Agile means no planning",
          "Testing is only the tester's job",
          "Production is just another environment",
          "A feature is finished forever once released",
        ],
        purpose: "Naming the trap makes it easier to avoid.",
      },
      mistakes: [
        "Measuring progress in lines of code rather than validated outcomes.",
        "Going quiet when stuck instead of surfacing the blocker early.",
        "Optimising for 'it works on my machine'.",
      ],
      reflection:
        "Which of these five misconceptions did you believe last month? What changed your mind?",
    },
  ],
}
