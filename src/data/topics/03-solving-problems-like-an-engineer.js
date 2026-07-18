export default {
  id: "solving-problems-like-an-engineer",
  title: "Solving Problems Like an Engineer",
  number: 3,
  color: "green",
  tagline: "When you don't know the answer, follow the process.",
  focus: "Ambiguity, task breakdown, research, safe experimentation, initiative, and escalation.",
  trueLesson:
    "Engineers are paid to navigate uncertainty. The first step is not always coding or asking for help; it is understanding, investigating, breaking down, and forming a plan.",

  sections: [
    {
      title: "WHAT MAKES PROBLEMS HARD?",
      items: [
        "❓ Unclear requirements",
        "⚙️ Many moving parts",
        "🔗 Complex systems",
        "⏱️ Time pressure",
        "❓ Unknown unknowns",
      ],
    },
    {
      title: "THE ENGINEER'S MINDSET",
      mindset: [
        { step: 1, text: "It's okay to not know." },
        { step: 2, text: "Curiosity drives learning." },
        { step: 3, text: "Small steps lead to clarity." },
        { step: 4, text: "Share & learn together." },
      ],
    },
    {
      title: "YOUR PROBLEM SOLVING TOOLKIT",
      toolkit: [
        {
          num: 1,
          label: "BREAK IT DOWN",
          desc: "Understand the goal. List knowns & unknowns. Break into smaller tasks.",
        },
        {
          num: 2,
          label: "RESEARCH & INVESTIGATE",
          desc: "Use docs, code, tickets, PRs, logs, search. Look for patterns. Read before you ask.",
        },
        {
          num: 3,
          label: "EXPERIMENT SAFELY",
          desc: "Test theories in a safe environment. Make small changes. Observe and learn.",
        },
        {
          num: 4,
          label: "FORM A HYPOTHESIS",
          desc: "What do you think is happening? Why? What would prove it?",
        },
        {
          num: 5,
          label: "VALIDATE & ITERATE",
          desc: "Did the hypothesis hold? What did we learn? Adjust and try again.",
        },
        {
          num: 6,
          label: "ESCALATE SMARTLY",
          desc: "If stuck, ask for help with context, evidence, and a specific question.",
        },
      ],
    },
    {
      title: "ESCALATION LADDER",
      escalation: [
        { step: 1, text: "Think through the problem" },
        { step: 2, text: "Experiment safely" },
        { step: 3, text: "Search docs, code, tickets, previous PRs, and trusted external sources" },
        { step: 4, text: "Form a hypothesis" },
        { step: 5, text: "Ask for help with context, evidence, and a specific question" },
      ],
    },
    {
      title: "WHEN TO ESCALATE?",
      criteria: [
        "✓ You've worked on it.",
        "✓ You're stuck or blocked.",
        "✓ It's impacting others.",
        "✓ It's a risk or urgent.",
        "❌ Too early (not 'never')",
        "❌ Without context (not 'how do I?')",
      ],
    },
    {
      title: "GOOD QUESTIONS > FAST ANSWERS",
      prompt:
        "I am trying to fix the report. I found the existing report service and the Report table. I think the issue might be either a data validation bug or an API contract mismatch. Can we discuss which is more likely?",
    },
  ],

  popups: [
    {
      id: "problem-breakdown",
      title: "Problem Breakdown Loop",
      blurb: "Turning big or vague work into smaller, understandable tasks.",
      concept: [
        "Large tasks feel overwhelming when treated as one thing. Break a feature by outcome, data, UI, API, backend logic, validation, testing, deployment, and documentation.",
      ],
      visual: {
        kind: "flow",
        title: "Breaking Down Work",
        steps: [
          "Understand the outcome",
          "List knowns and unknowns",
          "Identify systems involved",
          "Break the work into smaller tasks",
          "Deliver the smallest useful version",
          "Validate and iterate",
        ],
        purpose: "Breaking down work is how engineers reduce risk and create progress.",
      },
      mistakes: [
        "Starting with implementation before understanding the goal.",
        "Treating a big task as one thing instead of breaking it down.",
        "Skipping validation between steps.",
      ],
      reflection:
        "Take 'users want to update their profile details' and map it to: data, UI, API, backend, testing, deployment, docs. What's the smallest useful version?",
    },
    {
      id: "research-investigation",
      title: "Research & Investigation",
      blurb: "Using docs, code, logs, tickets, previous work, official sources, and validated AI support.",
      concept: [
        "Strong juniors do not know everything; they know how to search. Research includes internal documentation, code search, previous tickets, pull requests, logs, runbooks, official documentation, and AI tools used carefully.",
      ],
      visual: {
        kind: "list",
        title: "Where to Look First",
        steps: [
          "Search existing documentation when available",
          "Look for similar code patterns in the repository",
          "Find previous tickets or pull requests for related work",
          "Read logs or error messages carefully",
          "Use official documentation for technologies",
          "Use AI to explain or summarise, then validate results",
        ],
        purpose: "The quality of your sources matters. Official docs and internal runbooks beat random blogs.",
      },
      mistakes: [
        "Asking before searching.",
        "Trusting only one source.",
        "Using AI output without verification.",
        "Ignoring error messages.",
      ],
      reflection:
        "You're stuck on a feature. Where would you search first? What would give you confidence to proceed?",
    },
    {
      id: "safe-experimentation",
      title: "Safe Experimentation",
      blurb: "Learning by trying things in local or non-production spaces without creating risk.",
      concept: [
        "Cadets can become scared of touching systems. Teach that exploration is part of engineering, but it must happen safely. Safe experimentation means using local environments, development environments, dummy data, feature branches, read-only queries, or small reversible changes.",
      ],
      visual: {
        kind: "columns",
        title: "Safe vs Risky Experimentation",
        left: {
          heading: "Safe",
          items: [
            "Run locally",
            "Test with fake data",
            "Inspect code",
            "Read configs",
            "Try a small branch",
            "Reproduce safely",
          ],
        },
        right: {
          heading: "Risky",
          items: [
            "Changing production",
            "Running destructive scripts",
            "Editing shared data",
            "Ignoring security controls",
            "Making irreversible changes",
          ],
        },
        purpose: "Being cautious does not mean being passive.",
      },
      mistakes: [
        "Never experimenting because you fear breaking things.",
        "Experimenting in production.",
        "Running scripts without understanding them.",
      ],
      reflection:
        "What's the riskiest thing you could safely try right now to understand your system better?",
    },
    {
      id: "escalation-ladder",
      title: "Escalation Ladder",
      blurb: "Thinking, experimenting, researching, forming a hypothesis, then asking for help with evidence.",
      concept: [
        "The goal is not to make cadets avoid asking for help. The goal is to help them ask questions that are easier to answer and show initiative.",
      ],
      visual: {
        kind: "ladder",
        title: "Before Asking for Help",
        steps: [
          "Think through the problem",
          "Experiment safely",
          "Search docs, code, tickets, previous PRs, and trusted external sources",
          "Form a hypothesis",
          "Ask for help with context, evidence, and a specific question",
        ],
        purpose: "Shows what good initiative looks like before escalation.",
      },
      mistakes: [
        "Asking without thinking first.",
        "Asking for general help instead of a specific question.",
        "Never escalating when stuck.",
      ],
      reflection:
        "Draft a help request using: Context, What I tried, What I found, My hypothesis, Specific question.",
    },
    {
      id: "asking-better-questions",
      title: "Asking Better Questions",
      blurb: "Using context, attempts, evidence, hypothesis, and a specific question.",
      concept: [
        "Weak question: 'I do not know how to do this.'",
        "Stronger question: 'I am trying to add recurring bookings. I found the existing booking service and the Booking table. I think recurrence needs either generated bookings or a recurrence rule. I am not sure which design fits our system. Can we discuss the trade-off?'",
      ],
      visual: {
        kind: "flow",
        title: "Question Structure",
        steps: [
          "Context: What are you working on?",
          "What I tried: What attempts have you made?",
          "What I found: What evidence do you have?",
          "My hypothesis: What do you think is true?",
          "Specific question: What exactly do you need help with?",
        ],
        purpose: "Good questions get better answers faster.",
      },
      mistakes: [
        "Asking 'how do I do this?' without context.",
        "Presenting the problem but not what you've tried.",
        "Asking for general help instead of a specific question.",
      ],
      reflection:
        "Take a problem you're facing. Rewrite it using the 5-part structure. What does it look like?",
    },
    {
      id: "ambiguity-framework",
      title: "Ambiguity Framework",
      blurb: "Working through unclear requirements by identifying goals, constraints, assumptions, and unknowns.",
      concept: [
        "Before coding, an engineer should be able to explain what problem they are solving, who it affects, what success looks like, what systems are involved, and what they still do not know.",
      ],
      visual: {
        kind: "list",
        title: "When Requirements Are Vague",
        steps: [
          "Restate the problem in your own words",
          "Identify the user or stakeholder",
          "List what is known",
          "List what is unknown",
          "Identify systems, data, and people involved",
          "Define the smallest useful version",
          "Decide what must be clarified before implementation",
        ],
        purpose: "Clarity before code saves time and rework.",
      },
      mistakes: [
        "Starting to code before understanding the goal.",
        "Making assumptions instead of asking.",
        "Trying to build the perfect solution when good enough would ship sooner.",
      ],
      reflection:
        "Take a vague requirement like 'make desk booking better.' Turn it into clarifying questions.",
    },
  ],
}
