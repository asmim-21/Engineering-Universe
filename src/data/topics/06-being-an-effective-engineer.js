export default {
  id: "being-an-effective-engineer",
  title: "Being an Effective Engineer",
  number: 6,
  color: "purple",
  tagline: "Impact comes from communication, reliability, and judgment.",
  focus: "Communication, documentation, thinking about stakeholders, responsible AI, escalation, and continuous learning.",
  trueLesson:
    "Engineers who only code are replaceable. Engineers who communicate clearly, document well, think about users, use judgment with tools, and never stop learning become leaders.",

  sections: [
    {
      title: "THE COMMUNICATION LADDER",
      ladder: [
        { step: 1, text: "Think clearly" },
        { step: 2, text: "Choose the right format (Slack, email, meeting, docs)" },
        { step: 3, text: "Write or speak simply and specifically" },
        { step: 4, text: "Answer the question being asked, not the one you want to answer" },
        { step: 5, text: "Ask for feedback and clarify if confused" },
      ],
    },
    {
      title: "DOCUMENTATION MATTERS",
      docs: [
        "📖 README: How to use and contribute",
        "📚 Runbooks: How to operate and troubleshoot",
        "📋 ADRs: Why we made this architectural decision",
        "💡 Design docs: How and why the solution works",
        "🔍 Code comments: Non-obvious logic and constraints",
      ],
    },
    {
      title: "STAKEHOLDER THINKING",
      stakeholders: [
        {
          who: "Product Owner",
          concern: "Will this solve the user problem on time?",
        },
        { who: "Operations", concern: "Can this run reliably at scale?" },
        {
          who: "Security",
          concern: "Are we protecting user data and systems?",
        },
        { who: "Other Engineers", concern: "Can I understand and maintain this?" },
        { who: "Future You", concern: "Will I remember why I did this?" },
      ],
    },
    {
      title: "RESPONSIBLE AI USAGE",
      ai: [
        "✓ Use AI for: boilerplate, exploration, learning, drafting",
        "✓ Validate: Always read and test AI output",
        "✓ Ownership: You are responsible for code you commit",
        "✓ Judgment: Know when to rely on AI vs. expertise",
        "✕ Do not: Copy AI code without understanding it",
        "✕ Do not: Trust AI over testing and evidence",
      ],
    },
    {
      title: "KNOWING WHEN TO ESCALATE",
      escalation: [
        "You have tried and are stuck",
        "It is blocking others",
        "It is a risk or security concern",
        "It requires a decision you cannot make",
        "It is urgent or time-sensitive",
      ],
    },
    {
      title: "CONTINUOUS LEARNING",
      learning: [
        "🎓 Read code written by strong engineers",
        "🧠 Study problems after they are solved",
        "💬 Ask questions and listen to answers",
        "📚 Learn your domain (not just the language)",
        "🔍 Reflect on your own work: What went well? What would you change?",
      ],
    },
  ],

  popups: [
    {
      id: "communication-skills",
      title: "Communication Skills",
      blurb: "Being clear, concise, and considerate in meetings, messages, documents, and code reviews.",
      concept: [
        "Most engineer careers plateau not because of coding ability, but because of communication. Strong engineers can explain technical ideas to non-technical people, write clear documentation, and speak up in meetings.",
      ],
      visual: {
        kind: "flow",
        title: "Clear Communication",
        steps: [
          "Understand the question",
          "Think before you respond",
          "Choose your medium (Slack, email, meeting, docs)",
          "Be specific, not vague",
          "Check that the listener understood",
        ],
        purpose:
          "Good communication is not natural; it is a skill you build by practicing.",
      },
      mistakes: [
        "Using jargon without defining it.",
        "Answering a different question than the one asked.",
        "Rambling instead of being concise.",
        "Assuming everyone knows what you are talking about.",
      ],
      reflection:
        "Take a technical concept you know well. Explain it to a non-technical person in one minute. Did they understand?",
    },
    {
      id: "documentation",
      title: "Documentation",
      blurb: "Writing guides, runbooks, design docs, and comments that help others (and future you) understand.",
      concept: [
        "Code is what the system does. Documentation is why. Without documentation, every new person has to reverse-engineer your decisions.",
      ],
      visual: {
        kind: "list",
        title: "Types of Documentation",
        steps: [
          "README: How to set up and use",
          "Runbooks: How to operate, troubleshoot, recover",
          "Design docs: Why you chose this approach",
          "ADRs: Architectural decisions and trade-offs",
          "Code comments: Non-obvious logic and constraints",
          "Postmortems: What broke and what we learned",
        ],
        purpose:
          "Good documentation makes your work discoverable and lets you scale beyond your own time.",
      },
      mistakes: [
        "No documentation at all.",
        "Documentation that is out of date.",
        "Documentation that assumes expert knowledge.",
        "Over-commenting obvious code.",
      ],
      reflection:
        "Pick a complex piece of code you wrote. Write one paragraph explaining what it does and why. Is it clear?",
    },
    {
      id: "stakeholder-thinking",
      title: "Stakeholder Thinking",
      blurb: "Considering the impact of your decisions on different people and teams.",
      concept: [
        "You are not writing code for yourself. You are writing code for users, colleagues, operators, security teams, and the future you.",
      ],
      visual: {
        kind: "columns",
        title: "Who is Affected?",
        left: {
          heading: "Stakeholders",
          items: [
            "Users (will they benefit?)",
            "Product team (on time?)",
            "Operations (can they run it?)",
            "Security (is it safe?)",
          ],
        },
        right: {
          heading: "Their Questions",
          items: [
            "Does this solve my problem?",
            "Is the timeline realistic?",
            "Can I operate this at scale?",
            "Are we protecting data and systems?",
          ],
        },
        purpose:
          "Think about stakeholders early. It prevents rework and builds trust.",
      },
      mistakes: [
        "Optimizing for perfect code when 'good enough' would ship on time.",
        "Building complex solutions when simple ones would work.",
        "Never talking to the people who operate your code.",
        "Treating security as an afterthought.",
      ],
      reflection:
        "For your current task, list five stakeholders. What does each one care about most? Is your solution addressing their concerns?",
    },
    {
      id: "responsible-ai-usage",
      title: "Responsible AI Usage",
      blurb: "Using AI tools as assistants while maintaining judgment, ownership, and responsibility.",
      concept: [
        "AI is a tool, not a replacement for engineering. Use it for boilerplate, exploration, learning. But always read it, test it, and own it.",
      ],
      visual: {
        kind: "columns",
        title: "Use AI Well",
        left: {
          heading: "Good Uses",
          items: [
            "Generate boilerplate",
            "Explain concepts",
            "Draft documentation",
            "Brainstorm approaches",
            "Learn new patterns",
          ],
        },
        right: {
          heading: "Risks to Avoid",
          items: [
            "Copy AI code without reading it",
            "Trust AI output over testing",
            "Ignore security implications",
            "Use AI in production without review",
            "Let AI make your decisions",
          ],
        },
        purpose: "AI is powerful; use it, but do not abdicate responsibility.",
      },
      mistakes: [
        "Committing code you do not fully understand.",
        "Assuming AI output is correct because it looks good.",
        "Using AI to skip learning.",
        "Ignoring edge cases AI might have missed.",
      ],
      reflection:
        "When was the last time you used AI? Did you read and understand the output? What would you change or improve?",
    },
    {
      id: "effective-escalation",
      title: "Effective Escalation",
      blurb: "Knowing when and how to ask for help without wasting time or others' time.",
      concept: [
        "Escalation is not weakness; it is judgment. Knowing when to ask for help is a skill strong engineers have.",
      ],
      visual: {
        kind: "ladder",
        title: "Escalation Path",
        steps: [
          "Think through the problem",
          "Experiment safely and research",
          "Form a hypothesis",
          "Document what you tried",
          "Ask a peer for input",
          "Escalate to tech lead if still blocked",
          "Escalate to manager if it is people or priority issue",
        ],
        purpose: "Escalate at the right time with the right information.",
      },
      mistakes: [
        "Asking too early without trying first.",
        "Waiting too long when you are clearly blocked.",
        "Escalating without context or evidence.",
        "Going up the chain when you should ask a peer.",
      ],
      reflection:
        "Draft an escalation message for something you are stuck on. Does it include context, attempts, hypothesis, and a specific question?",
    },
    {
      id: "continuous-learning",
      title: "Continuous Learning",
      blurb: "Growing your skills, knowledge, and perspective throughout your career.",
      concept: [
        "Technology and problems change constantly. Engineers who invest in learning stay sharp, stay curious, and stay valuable.",
      ],
      visual: {
        kind: "list",
        title: "How Strong Engineers Learn",
        steps: [
          "Read code written by engineers better than you",
          "Study production incidents and postmortems",
          "Ask questions and listen carefully",
          "Learn your domain (not just the language)",
          "Reflect on your own work: What went well? What would you change?",
          "Teach others what you know",
        ],
        purpose:
          "Continuous learning is the difference between an engineer and a senior engineer.",
      },
      mistakes: [
        "Learning only when forced.",
        "Studying disconnected from real problems.",
        "Never revisiting past work to see what you would do differently.",
        "Assuming your expertise is permanent.",
      ],
      reflection:
        "What is one thing you learned this month that changed how you code? How will you apply it?",
    },
  ],
}
