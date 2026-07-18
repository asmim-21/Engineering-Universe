export default {
  id: "getting-software-to-production",
  title: "Getting Software to Production",
  number: 5,
  color: "orange",
  tagline: "Deploy with confidence, not hope.",
  focus: "Version control, CI/CD, hosting, containerization, observability, and incident response.",
  trueLesson:
    "Deployment is not the end of software engineering; it is the beginning of operating real systems for real users. Every choice you make about deployment affects reliability, scalability, and your ability to respond to problems.",

  sections: [
    {
      title: "VERSION CONTROL ESSENTIALS",
      vcs: [
        "🔀 Branches isolate work",
        "📝 Commits tell the story",
        "🔍 Pull requests invite review",
        "✅ Merges integrate safely",
        "⏮️ History lets you revert",
      ],
    },
    {
      title: "CI/CD PIPELINE",
      pipeline: [
        { stage: 1, label: "Commit", desc: "Push code to version control" },
        { stage: 2, label: "Build", desc: "Compile, lint, type-check" },
        { stage: 3, label: "Test", desc: "Run automated tests" },
        { stage: 4, label: "Deploy", desc: "Release to production" },
        { stage: 5, label: "Monitor", desc: "Watch for issues" },
      ],
    },
    {
      title: "HOSTING MODELS",
      models: [
        { model: "VPS", cost: "$", control: "Full", complexity: "High", uptime: "Your job" },
        { model: "PaaS", cost: "$$", control: "Some", complexity: "Medium", uptime: "Shared" },
        { model: "Serverless", cost: "$$$", control: "Little", complexity: "Low", uptime: "Provider" },
      ],
    },
    {
      title: "CONTAINERIZATION",
      containers: [
        "📦 Package: Code + dependencies + config",
        "🔄 Consistency: Runs the same everywhere",
        "🚀 Isolation: Multiple apps on one machine",
        "📈 Scalability: Spin up more containers as needed",
        "🎯 Observability: Easier to track and log",
      ],
    },
    {
      title: "OBSERVABILITY TRIO",
      observability: [
        { signal: "📊 Metrics", examples: "CPU, memory, requests/sec, latency" },
        { signal: "📋 Logs", examples: "Events, errors, user actions" },
        { signal: "🔗 Traces", examples: "Request flow across services" },
      ],
    },
    {
      title: "INCIDENT RESPONSE",
      incident: [
        "🚨 Detect: Alerts, user reports, anomalies",
        "🛑 Triage: Severity, scope, owner",
        "🔧 Mitigate: Quick fix to stop the bleeding",
        "📊 Investigate: Root cause analysis",
        "✅ Resolve: Permanent fix",
        "📈 Learn: Postmortem and prevention",
      ],
    },
  ],

  popups: [
    {
      id: "git-pull-requests",
      title: "Git & Pull Requests",
      blurb: "Using version control to manage work, integrate changes safely, and maintain history.",
      concept: [
        "Git is not just backup. Branches let you work on multiple features in parallel. Commits tell the story of why changes were made. Pull requests invite review and catch mistakes before they reach production.",
      ],
      visual: {
        kind: "flow",
        title: "PR Workflow",
        steps: [
          "Create a branch from main",
          "Make commits with clear messages",
          "Push to version control",
          "Open a pull request",
          "Get review feedback",
          "Address feedback, update branch",
          "Merge to main when approved",
        ],
        purpose: "PRs enforce review and history, making rollback and debugging easier.",
      },
      mistakes: [
        "Committing directly to main without review.",
        "Writing commit messages that describe what, not why.",
        "Merging without understanding the changes.",
        "Not knowing how to revert a bad commit.",
      ],
      reflection:
        "Write a commit message for a change you just made. Would someone reading it next year understand why you made this change?",
    },
    {
      id: "ci-cd-pipeline",
      title: "CI/CD Pipeline",
      blurb: "Automating the steps from code to production to reduce errors and speed up delivery.",
      concept: [
        "CI/CD means code is automatically tested, built, and deployed whenever a change is merged. This removes manual steps and catches problems early.",
        "A fast CI/CD pipeline is an investment that pays dividends in developer experience and reliability.",
      ],
      visual: {
        kind: "flow",
        title: "Pipeline Stages",
        steps: [
          "Code committed",
          "Lint & type-check",
          "Build artifact",
          "Run unit tests",
          "Run integration tests",
          "Deploy to staging",
          "Run smoke tests",
          "Deploy to production",
        ],
        purpose: "Automation catches mistakes faster than human review alone.",
      },
      mistakes: [
        "Running tests manually instead of automatically.",
        "Skipping tests to go faster.",
        "Deploying without running the full pipeline.",
        "Broken builds that no one fixes.",
      ],
      reflection:
        "If you could automate one step in your current workflow, what would it be? What would it take to automate it?",
    },
    {
      id: "hosting-models",
      title: "Hosting Models",
      blurb: "Choosing between VPS, PaaS, Serverless based on control, cost, and complexity.",
      concept: [
        "There is no universal best. VPS gives you control but requires ops expertise. PaaS balances flexibility and convenience. Serverless is simple but can be expensive and limits flexibility.",
      ],
      visual: {
        kind: "columns",
        title: "Hosting Trade-offs",
        left: {
          heading: "VPS / IaaS",
          items: [
            "Full control",
            "Low cost at scale",
            "High operational burden",
            "You patch, update, monitor",
          ],
        },
        right: {
          heading: "PaaS / Serverless",
          items: [
            "Limited control",
            "High cost at scale",
            "Low operational burden",
            "Provider handles updates",
          ],
        },
        purpose:
          "Choose based on your constraints: if you have ops expertise, VPS. If you have budget, PaaS.",
      },
      mistakes: [
        "Choosing serverless for a workload that needs persistent connections.",
        "Choosing VPS when you do not have time for operations.",
        "Not reading the fine print on cost and limits.",
      ],
      reflection:
        "For an app you know, what hosting model does it use? Would a different model suit it better?",
    },
    {
      id: "containers-explained",
      title: "Containers",
      blurb: "Lightweight virtual machines that package code, dependencies, and configuration.",
      concept: [
        "Docker containers solve the 'it works on my machine' problem. A container runs the same way on your laptop, on a test server, and in production because it carries its entire environment.",
      ],
      visual: {
        kind: "list",
        title: "Container Concepts",
        steps: [
          "Image: A template (like a class in OOP)",
          "Container: A running instance (like an object)",
          "Registry: A library of images (like npm, Maven, PyPI)",
          "Orchestration: Tools that manage many containers (like Kubernetes)",
        ],
        purpose: "Containers make deployment predictable and scalable.",
      },
      mistakes: [
        "Putting the entire OS in a container instead of just your app.",
        "Using the latest tag in production.",
        "Not scanning containers for vulnerabilities.",
        "Treating containers as a silver bullet for operational problems.",
      ],
      reflection:
        "If you containerized your app today, what would go in the Dockerfile? What would not?",
    },
    {
      id: "monitoring-alerting",
      title: "Monitoring & Alerting",
      blurb: "Collecting metrics, logs, and traces to see what is happening in production.",
      concept: [
        "You cannot improve what you do not measure. Monitoring gives you visibility; alerting gives you early warning.",
      ],
      visual: {
        kind: "list",
        title: "Observable Systems",
        steps: [
          "Metrics: CPU, memory, requests/sec, error rate, latency",
          "Logs: What happened, when, and why",
          "Traces: How a request flowed through your system",
          "Alerts: Notify on-call when thresholds are crossed",
          "Dashboards: Visual summary of system health",
        ],
        purpose:
          "Monitoring is not spying; it is listening to your system tell you it is struggling.",
      },
      mistakes: [
        "Monitoring only after an incident.",
        "Setting alert thresholds too low (alert fatigue) or too high (missing real problems).",
        "Logging everything without context.",
        "Not correlating metrics and logs.",
      ],
      reflection:
        "For a system you know, what would you monitor first? What alerts would tell you 'this is about to break'?",
    },
    {
      id: "incident-response",
      title: "Incident Response",
      blurb: "When something breaks, the process of detecting, mitigating, resolving, and learning.",
      concept: [
        "Incidents are inevitable. What separates good teams from others is how they respond. Speed to mitigation matters most. Quality of resolution and learning prevents next time.",
      ],
      visual: {
        kind: "flow",
        title: "Incident Lifecycle",
        steps: [
          "Detect (alerts, reports, anomalies)",
          "Declare incident",
          "Notify on-call and stakeholders",
          "Triage (assess severity and scope)",
          "Mitigate (stop the bleeding)",
          "Investigate (root cause)",
          "Resolve (permanent fix)",
          "Postmortem (learn and improve)",
        ],
        purpose:
          "Structure reduces panic. Process ensures we learn from every incident.",
      },
      mistakes: [
        "Not having an incident playbook.",
        "Spending too long investigating while the problem is ongoing.",
        "Never doing a postmortem.",
        "Blaming individuals instead of fixing systems.",
      ],
      reflection:
        "If production went down right now, who would you page? What is the first thing you would do? Do you have a runbook?",
    },
  ],
}
