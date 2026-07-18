export default {
  id: "building-reliable-software",
  title: "Building Reliable Software",
  number: 4,
  color: "yellow",
  tagline: "If you can't measure it, you can't improve it.",
  focus: "Testing, debugging, reading logs, code review, root cause analysis, and operational thinking.",
  trueLesson:
    "Reliability is not an accident. It is the product of intentional testing, careful observation, continuous learning from failures, and a mindset that values quality over speed.",

  sections: [
    {
      title: "RELIABILITY LAYERS",
      layers: [
        { num: 1, label: "CODE REVIEW", desc: "Peer eyes catch mistakes before production." },
        { num: 2, label: "TESTING", desc: "Automated checks find bugs early." },
        { num: 3, label: "MONITORING", desc: "Visibility into what is happening in production." },
        { num: 4, label: "INCIDENT RESPONSE", desc: "When something breaks, fix it well and learn." },
      ],
    },
    {
      title: "TESTING PYRAMID",
      pyramid: [
        { level: "unit", count: "Many (base)", desc: "Fast, focused, locally testable" },
        { level: "integration", count: "Medium", desc: "Test components working together" },
        { level: "e2e", count: "Few (top)", desc: "Slow but realistic, user-facing" },
      ],
    },
    {
      title: "DEBUGGING MINDSET",
      mindset: [
        "Observe the symptoms",
        "Form a hypothesis",
        "Design a test",
        "Examine evidence",
        "Draw a conclusion",
        "Verify & learn",
      ],
    },
    {
      title: "LOGS ARE YOUR FRIENDS",
      logs: [
        "📋 What happened?",
        "⏰ When did it happen?",
        "👤 Who was involved?",
        "🔍 What were they trying to do?",
        "🚨 What went wrong?",
        "💥 How bad is it?",
      ],
    },
    {
      title: "CODE REVIEW LENS",
      lens: [
        "✓ Does this solve the stated problem?",
        "✓ Is the code maintainable?",
        "✓ Are there edge cases?",
        "✓ Is it secure?",
        "✓ Is it tested?",
        "✓ Does it align with our patterns?",
      ],
    },
    {
      title: "RELIABILITY CULTURE",
      culture: [
        "🎯 Quality is everyone's job",
        "📊 Measure continuously",
        "🔍 Learn from failures",
        "🤝 Collaborate on solutions",
        "⏱️ Pay down technical debt",
        "📈 Improve relentlessly",
      ],
    },
  ],

  popups: [
    {
      id: "testing-pyramid",
      title: "Testing Pyramid",
      blurb: "More small unit tests, fewer large end-to-end tests, structured for speed and confidence.",
      concept: [
        "The testing pyramid teaches us to think about test cost. Unit tests are cheap and fast; end-to-end tests are expensive and slow. A healthy test suite has many unit tests, some integration tests, and a few critical end-to-end tests.",
      ],
      visual: {
        kind: "pyramid",
        title: "Test Distribution",
        steps: [
          "Unit Tests (60% - Fast, focused, local)",
          "Integration Tests (25% - Components together)",
          "End-to-End Tests (15% - Realistic, slow)",
        ],
        purpose:
          "Inverted pyramids fail: you cannot afford to test everything end-to-end. Build a proper pyramid.",
      },
      mistakes: [
        "Only testing end-to-end because that is what users do.",
        "Never testing the edge cases.",
        "Treating tests as documentation instead of validation.",
      ],
      reflection:
        "For a feature you know, design the pyramid: How many unit tests? How many integration tests? What one E2E test would give you the most confidence?",
    },
    {
      id: "debugging-process",
      title: "Debugging Process",
      blurb: "Systematic thinking and evidence gathering to find the root cause of failures.",
      concept: [
        "Debugging is not intuition; it is process. Observe, hypothesize, test, examine evidence, conclude, and verify.",
      ],
      visual: {
        kind: "flow",
        title: "The Debug Loop",
        steps: [
          "Observe the symptom",
          "Form a hypothesis",
          "Design a test to check the hypothesis",
          "Examine the evidence",
          "Draw a conclusion",
          "Verify & learn",
        ],
        purpose: "Process beats intuition every time.",
      },
      mistakes: [
        "Flailing instead of thinking.",
        "Changing multiple things at once.",
        "Trusting guesses instead of evidence.",
        "Stopping before understanding the root cause.",
      ],
      reflection:
        "Take a bug you recently fixed. Walk through the 6 steps. Where did you skip? What would have made it faster?",
    },
    {
      id: "reading-logs",
      title: "Reading Logs",
      blurb: "Extracting truth from system events to understand what happened and why.",
      concept: [
        "Logs are evidence. An error in the dashboard without a log entry might not even be real. A log entry without understanding is data without context.",
      ],
      visual: {
        kind: "list",
        title: "Log Reading Skill",
        steps: [
          "Identify the timestamp and sequence",
          "Find the first unusual entry, not the last error",
          "Read the context around the error",
          "Cross-reference with other signals",
          "Form a hypothesis based on evidence",
          "Verify the hypothesis with a test or review",
        ],
        purpose: "Logs show you what happened if you know how to listen.",
      },
      mistakes: [
        "Assuming the last error is the root cause.",
        "Reading logs without context.",
        "Ignoring timestamps and sequence.",
        "Not checking other systems' logs in the same window.",
      ],
      reflection:
        "When something breaks in a system you know, where would you look first? What would the logs tell you?",
    },
    {
      id: "code-review-lens",
      title: "Code Review Lens",
      blurb: "Asking the right questions to catch defects and transfer knowledge peer-to-peer.",
      concept: [
        "Code review is not about style preferences. It is about catching defects early and building shared ownership of quality.",
      ],
      visual: {
        kind: "list",
        title: "Questions to Ask",
        steps: [
          "Does this solve the stated problem?",
          "Is the code maintainable by others later?",
          "Are there edge cases or error scenarios?",
          "Is it secure? (No SQL injection, XSS, unvalidated input?)",
          "Is it tested? (Unit tests, integration tests?)",
          "Does it align with our patterns and conventions?",
          "Is there any technical debt being added?",
        ],
        purpose: "Good reviews prevent bugs and build better engineers.",
      },
      mistakes: [
        "Reviewing only for style and syntax.",
        "Rubber-stamping code because it is from a senior engineer.",
        "Asking for perfection when good is enough.",
        "Never asking 'what if this fails?'",
      ],
      reflection:
        "In your last code review, did you ask all seven questions? What questions did you skip, and why?",
    },
    {
      id: "root-cause-analysis",
      title: "Root Cause Analysis",
      blurb: "Distinguishing the immediate cause from the underlying reason a failure occurred.",
      concept: [
        "If a database query times out, the cause is 'slow query'. The root cause might be missing index, or poor data model, or unexpected scale, or all three.",
        "Fix the symptom and it breaks again. Fix the root cause and it does not.",
      ],
      visual: {
        kind: "columns",
        title: "Cause vs Root Cause",
        left: {
          heading: "Symptom/Cause",
          items: [
            "Dashboard shows error",
            "API request times out",
            "User loses data",
            "Email not sent",
          ],
        },
        right: {
          heading: "Root Cause",
          items: [
            "Missing error handler",
            "N+1 query, unindexed column",
            "No validation in update handler",
            "Queue full, not monitoring",
          ],
        },
        purpose: "Fix the root cause or you will fix the same bug three times.",
      },
      mistakes: [
        "Shipping a fix for the symptom without understanding the root cause.",
        "Assuming there is only one root cause.",
        "Never asking 'why?' until you reach something unchangeable.",
      ],
      reflection:
        "Take a critical bug you know. What was the symptom? The immediate cause? The root cause? How would you prevent it in the future?",
    },
    {
      id: "prevention-mindset",
      title: "Prevention Mindset",
      blurb: "Designing systems and processes to prevent failures rather than just responding to them.",
      concept: [
        "After you fix a bug, the real work is preventing it again. That might mean adding a test, improving observability, refactoring unsafe patterns, adding validation, or changing how the team works.",
      ],
      visual: {
        kind: "flow",
        title: "From Incident to Prevention",
        steps: [
          "Incident occurs",
          "Immediate fix (stop the bleeding)",
          "Root cause analysis (understand why)",
          "Permanent fix (solve it right)",
          "Prevention (stop it happening again)",
          "Follow up (did we prevent it?)",
        ],
        purpose: "Reliable software comes from learning, not just firefighting.",
      },
      mistakes: [
        "Only fixing the immediate symptom.",
        "Never setting up monitoring to catch it early next time.",
        "Assuming good intentions will prevent future mistakes.",
        "Treating 'it is not a bug, it is a feature' as an excuse.",
      ],
      reflection:
        "Take the last production incident you know about. What was the prevention? Did it work? What would you add now?",
    },
  ],
}
