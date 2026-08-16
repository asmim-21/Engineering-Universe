export default {
  id: 'production',
  title: 'Getting Software to Production',
  tone: 'c5',
  blurb: 'Git, pull requests, CI/CD, hosting, containers, monitoring, alerts, and incidents.',
  tags: ['Git', 'CI/CD', 'Containers', 'Monitoring'],
  popups: [
    {
      id: 'git',
      title: 'Git & Pull Requests',
      blurb: 'Collaborative change management with branches, reviews, and approval gates.',
      whatIs: {
        text: `Git records the history of a codebase as a series of **commits**, and lets people work in parallel using **branches**. A branch is a private line of development: you make your change there, so the shared \`main\` branch always stays in a releasable state.

The team workflow is built on that. You branch, commit, push, then open a **pull request (PR)** — a proposal to merge, with a diff people can comment on and automated checks that must pass. Review plus checks is the gate; after merging, the change is built into an artefact and deployed.

The habits that make this work are small. Keep commits to one logical change with a message explaining **why**. Keep pull requests small, because reviewer attention drops sharply with size. Pull from \`main\` often, because a branch left for two weeks becomes a merge conflict nobody enjoys. And never rewrite history that other people have already pulled.`,
        ensures: [
          'Work on a branch and keep `main` releasable',
          'Write commits that are one logical change with a clear message',
          'Open a pull request small enough to be reviewed properly',
          'Understand what the automated checks are gating',
          'Resolve conflicts by integrating frequently rather than rarely',
          'Know how to revert a change safely'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From developer machine to production.',
        loop: false,
        steps: [
          { icon: 'code-branch', label: 'Branch', desc: 'Work isolated from main.', purpose: 'Keep the shared branch releasable while you work.', question: 'What is changing, and is it one thing?' },
          { icon: 'code-pull-request', label: 'Pull request', desc: 'Propose the change for review.', purpose: 'Make the change visible, discussable and checkable.', question: 'Is this small and explained well enough to review?' },
          { icon: 'user-check', label: 'Review & checks', desc: 'People and automation inspect it.', purpose: 'Combine human judgement with automated gates.', question: 'Is it correct, readable, tested and safe to merge?' },
          { icon: 'box', label: 'Build', desc: 'Create a deployable artefact.', purpose: 'Produce one artefact that every environment will use.', question: 'Does it build reproducibly?' },
          { icon: 'flask', label: 'Tests', desc: 'Validate the artefact.', purpose: 'Run the suite against the thing that will actually ship.', question: 'Do the tests pass on this exact build?' },
          { icon: 'rocket', label: 'Deploy', desc: 'Move it into an environment.', purpose: 'Release it, with a known way back.', question: 'Where is it going, and how do we undo it?' },
          { icon: 'chart-line', label: 'Monitor', desc: 'Confirm it behaves in production.', purpose: 'Watch the signals that would show it going wrong.', question: 'Is it healthy after the change?' }
        ]
      },
      io: {
        inputs: [
          ['A change', 'main branch'],
          ['Branch', 'Diff', 'Description'],
          ['Pull request', 'continuous integration (CI) checks'],
          ['Approved, merged code'],
          ['Artefact', 'Test suite'],
          ['Tested artefact', 'Target environment'],
          ['Live release', 'Metrics']
        ],
        outputs: [
          ['A feature branch'],
          ['A reviewable proposal'],
          ['An approved change'],
          ['A deployable artefact'],
          ['Test results'],
          ['A deployed release', 'A rollback plan'],
          ['Health signals']
        ]
      },
      example: {
        title: 'Fixing a footer typo',
        items: [
          'Branch `fix/footer-typo` off an up-to-date `main`.',
          'Open a pull request: one line changed, one sentence of why.',
          'A teammate approves; the checks run in two minutes.',
          'Merging triggers a build of a versioned artefact.',
          'The suite passes against that exact artefact.',
          'It deploys to production automatically.',
          'Dashboards stay flat — nothing broke.'
        ]
      },
      who: [
        'Developer',
        'Developer',
        'Reviewers, CI',
        'CI pipeline',
        'CI pipeline, quality assurance (QA)',
        'DevOps, Release Manager',
        'Site reliability engineer (SRE), On-call'
      ],
      misconceptions: [
        { wrong: 'Deployment is just copying files.', right: 'It is a reviewed, built, tested and monitored flow.' },
        { wrong: 'A pull request is a formality.', right: 'It is where problems are cheapest to catch and knowledge spreads.' },
        { wrong: 'Big pull requests save time.', right: 'They get rubber-stamped, which removes the point of review.' },
        { wrong: 'A commit message can say anything.', right: 'It is the only explanation of "why" that survives to next year.' }
      ],
      takeaways: [
        '**Branches keep `main` releasable.** Everyone can work in parallel because nobody is editing the shared line directly.',
        '**One logical change per commit.** It is what makes reverting, bisecting and reviewing possible.',
        '**The message explains why; the diff shows what.** Six months later, only the why is unrecoverable.',
        '**Small pull requests get real reviews.** Fifty lines gets line-by-line attention; two thousand gets "looks good".',
        '**Checks and review do different jobs.** Automation catches the mechanical; people catch design, naming and missing cases.',
        '**Integrate often.** Conflicts scale with how long a branch has been away from `main`.',
        '**Build once, deploy that artefact everywhere.** Rebuilding per environment means testing something you did not ship.',
        '**Know how to revert before you need to.** A clean revert is a normal move, not an emergency measure.'
      ],
      reflection: 'Take a change you made recently and map it from branch to production. Where would a problem have been caught — and what would it have cost if it had slipped one stage further?',
      checks: [
        'Why work on a branch instead of `main`?',
        'What belongs in a commit message?',
        'What is a pull request for?',
        'What is the difference between review and automated checks?',
        'Why does branch age cause conflicts?',
        'Why build once and promote the same artefact?'
      ]
    },
    {
      id: 'cicd',
      title: 'CI/CD Pipeline',
      blurb: 'Automated build, test, package, deploy, and recovery flow.',
      whatIs: {
        text: `**Continuous integration (CI)** means everyone merges small changes into the shared branch often, and every merge is automatically built and tested. It exists to stop the old failure mode where branches diverge for weeks and integration becomes its own painful project.

**Continuous delivery (CD)** means the pipeline can take any passing build and release it through repeatable, automated steps. Some teams go further to continuous deployment, where every passing change goes to production without a human pressing anything.

The value is **repeatability**. A pipeline does the same steps in the same order every time, so releasing stops being a memory exercise performed carefully by one person on a Thursday. Each stage is also a gate: compilation catches one class of mistake, tests another, security scanning another. And because the pipeline can deploy, it can also roll back — which is what makes releasing frequently safe rather than reckless.`,
        ensures: [
          'Explain what CI and CD each mean and why they exist',
          'Name what each pipeline stage is gating',
          'Understand build-once, promote-the-same-artefact',
          'Keep the pipeline fast enough that people wait for it',
          'Know why a rollback path is part of the release',
          'Recognise that a red pipeline is everyone\'s problem'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Pipeline stages — each one gates a different class of mistake.',
        loop: false,
        steps: [
          { icon: 'code-branch', label: 'Change committed', desc: 'A change lands on a branch.', purpose: 'Trigger the pipeline on every push, not on request.', question: 'What triggered this run?' },
          { icon: 'code-pull-request', label: 'Pull request checks', desc: 'Validate before merge.', purpose: 'Run the fast checks while the change is still cheap to fix.', question: 'Is this safe to merge?' },
          { icon: 'gears', label: 'Build', desc: 'Compile and assemble.', purpose: 'Produce one versioned artefact from clean sources.', question: 'Does it build reproducibly?' },
          { icon: 'flask', label: 'Automated tests', desc: 'Unit, integration, security scans.', purpose: 'Catch regressions and known vulnerabilities automatically.', question: 'Did anything that used to work stop working?' },
          { icon: 'box', label: 'Package', desc: 'Produce a container image.', purpose: 'Bundle the artefact with its dependencies, tagged by version.', question: 'What exactly are we shipping?' },
          { icon: 'rocket', label: 'Deploy', desc: 'Release to an environment.', purpose: 'Promote the same image through environments.', question: 'Which environment, and is there a way back?' },
          { icon: 'server', label: 'Running application', desc: 'The live workload.', purpose: 'Serve real traffic from the new version.', question: 'Is it actually serving requests?' },
          { icon: 'chart-line', label: 'Monitor', desc: 'Watch and roll back if needed.', purpose: 'Compare health before and after the release.', question: 'Did the release make anything worse?' }
        ]
      },
      io: {
        inputs: [
          ['A commit'],
          ['Branch', 'Diff'],
          ['Merged source'],
          ['Build', 'Test suite'],
          ['Passing build'],
          ['Image', 'Target environment'],
          ['Deployed image'],
          ['Live app', 'Metrics']
        ],
        outputs: [
          ['A pipeline run'],
          ['Pass or fail on the pull request (PR)'],
          ['A versioned artefact'],
          ['Test and scan results'],
          ['A tagged container image'],
          ['A deployed release'],
          ['A live application'],
          ['Health signals', 'Rollback if needed']
        ]
      },
      who: [
        'Developer',
        'CI pipeline, Reviewers',
        'CI pipeline',
        'CI pipeline',
        'CI pipeline',
        'CD pipeline, DevOps',
        'Platform, Servers',
        'Site reliability engineer (SRE), On-call'
      ],
      example: {
        title: 'Shipping a new endpoint',
        items: [
          'Pushing the branch starts a pipeline run automatically.',
          'Linting and unit tests run on the pull request in three minutes.',
          'After merge, the build produces artefact `v1.14.0`.',
          'The full suite and a dependency scan run against it.',
          'A container image is tagged `api:v1.14.0`.',
          'That exact image deploys to staging, then production.',
          'The new endpoint starts serving traffic.',
          'Error rate and latency are compared with the previous version.'
        ]
      },
      misconceptions: [
        { wrong: 'CI just means running tests.', right: 'It means integrating small changes often — the tests are what make that safe.' },
        { wrong: 'A pipeline is only worth it for large teams.', right: 'Repeatability helps a team of two, and costs an afternoon to set up.' },
        { wrong: 'DevOps means developers do operations alone.', right: 'It means shared responsibility supported by automation.' },
        { wrong: 'A red build can be fixed later.', right: 'A broken shared pipeline blocks everyone; fixing it comes first.' }
      ],
      takeaways: [
        '**CI is about integrating often; CD is about releasing repeatably.** The tests and pipeline are the mechanism, not the goal.',
        '**Every stage gates a different class of mistake:** compile errors, regressions, vulnerabilities, packaging problems, deployment failures.',
        '**Build once, promote the same artefact.** Rebuilding per environment means the thing you tested is not the thing you shipped.',
        '**Pipeline speed decides pipeline value.** If feedback takes forty minutes, people stop waiting for it and start working around it.',
        '**Automation removes the "who knows how to release" problem.** Knowledge in a pipeline is knowledge that does not go on holiday.',
        '**A rollback path is part of the release.** Being able to undo in minutes is what makes frequent releases safe.',
        '**A red pipeline is the team\'s top priority.** Everyone downstream is blocked, and broken windows spread.',
        '**Small, frequent releases are lower risk than big, rare ones.** Less changes at once, so less can go wrong and less to search when it does.'
      ],
      reflection: 'For a pipeline you have used: which stage catches a typo, which catches a broken feature, which catches a vulnerable dependency? Which of those would you most miss?',
      checks: [
        'What does continuous integration actually mean?',
        'What is each pipeline stage gating?',
        'Why promote the same artefact rather than rebuild?',
        'Why does pipeline speed matter so much?',
        'Why is a rollback path part of releasing?',
        'Why are frequent small releases safer than rare large ones?'
      ]
    },
    {
      id: 'hosting',
      title: 'Hosting Models',
      blurb: 'On-premises, cloud, and hybrid ways software can run.',
      whatIs: {
        text: `Before architecture, there is a simpler question: where does this actually run? **On-premises** means your organisation owns the servers — you control everything, including the physical security and the hardware failures, and you pay for capacity whether or not you use it. **Cloud** means renting managed infrastructure — capacity in minutes, pay for what you use, and someone else handles the hardware. **Hybrid** mixes the two, which is where most large enterprises actually live.

Cloud services come in layers. **Infrastructure as a service (IaaS)** gives you virtual machines and you manage the rest. **Platform as a service (PaaS)** runs your application and manages the operating system and scaling. **Software as a service (SaaS)** is a finished product you use rather than run. The higher you go, the less you manage and the less you control.

The real drivers are rarely purely technical: data residency and regulation, existing investment, in-house skills, cost shape (capital versus operating), and how quickly capacity has to change. "Cloud is modern" is not a reason; "we need ten times the capacity for two weeks in December" is.`,
        ensures: [
          'Describe on-premises, cloud and hybrid and their trade-offs',
          'Distinguish IaaS, PaaS and SaaS by what you still manage',
          'Explain elasticity and why it changes cost thinking',
          'Recognise the shared responsibility model for security',
          'Name the non-technical drivers: regulation, data residency, cost shape',
          'Understand why hybrid adds integration and networking work'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Hosting models — how much you own versus how much you rent.',
        loop: false,
        steps: [
          { icon: 'building', label: 'On-premises', desc: 'You own the infrastructure.', purpose: 'Full control and full responsibility, with fixed capacity.', question: 'Do we need to own and control everything?' },
          { icon: 'cloud', label: 'Cloud', desc: 'Rented, provider-managed services.', purpose: 'Elastic capacity and managed services, paid for as used.', question: 'Do we need capacity that changes quickly?' },
          { icon: 'cloud-arrow-up', label: 'Hybrid', desc: 'A mix of both.', purpose: 'Keep sensitive or legacy systems in place, build new work in the cloud.', question: 'What must stay where it is, and why?' }
        ]
      },
      example: {
        title: 'Choosing where a system runs',
        items: [
          'A bank keeps customer records on-premises for regulatory reasons.',
          'A startup ships on managed cloud services and scales as it grows.',
          'A retailer keeps stock systems on-premises and runs its website in the cloud.'
        ]
      },
      misconceptions: [
        { wrong: 'Cloud means nobody manages anything.', right: 'Configuration, cost, access and security remain your responsibility.' },
        { wrong: 'Cloud is always cheaper.', right: 'Elastic workloads usually are; steady predictable ones often are not.' },
        { wrong: 'Hybrid is cloud with extra steps.', right: 'It needs real networking, identity and data integration between the two.' },
        { wrong: 'The provider secures your data.', right: 'They secure the platform; you secure what you put on it.' }
      ],
      takeaways: [
        '**Where it runs is decided before how it is built.** Data residency, regulation and existing systems constrain the architecture that follows.',
        '**IaaS, PaaS, SaaS is a scale of how much you manage.** Higher up means less operational work and less control — a trade, not an upgrade.',
        '**Elasticity is the cloud\'s distinctive property.** Paying for ten times the capacity for two weeks in December is something you cannot do with owned hardware.',
        '**Cloud is not automatically cheaper.** Steady, predictable load can be cheaper on hardware you own; unpredictable load rarely is.',
        '**Shared responsibility is the security model.** The provider secures the platform; your configuration, access control and data are yours.',
        '**Hybrid is common and costs integration.** Two environments means networking, identity and data synchronisation between them.',
        '**Managed services trade control for time.** A managed database removes patching and backups, and removes some tuning options too.',
        '**Migration is not free.** Data volumes, latency between components and rewritten deployment tooling dominate the effort.'
      ],
      reflection: 'For a system you know: what would have to change to move it to the cloud, and what would legally or practically have to stay where it is?',
      checks: [
        'What are the three hosting models?',
        'What is the difference between IaaS, PaaS and SaaS?',
        'What does elasticity buy you?',
        'When might on-premises be cheaper?',
        'What does the shared responsibility model mean?',
        'What extra work does hybrid create?'
      ]
    },
    {
      id: 'containers',
      title: 'Containers Explained',
      blurb: 'The difference between application code, image, and running container.',
      whatIs: {
        text: `A container packages an application together with everything it needs to run — libraries, runtime, configuration — so it behaves the same on a laptop, in a pipeline and in production. It is the practical answer to "works on my machine".

The distinction people trip over is **image versus container**. The image is the built, read-only package: a recipe. A container is a running instance of that image: the cake. One image can produce a hundred identical containers, which is exactly how horizontal scaling works.

Containers are not virtual machines. A virtual machine (VM) includes a whole guest operating system and boots in tens of seconds; a container shares the host kernel and starts in milliseconds, which is why you can run many more of them. That lightness is what makes orchestrators such as Kubernetes practical: they start, stop, replace and scale containers automatically based on demand and health.`,
        ensures: [
          'Explain the difference between an image and a running container',
          'Say why a container is lighter than a virtual machine',
          'Describe how an image is built from code and dependencies',
          'Understand that containers are disposable and usually stateless',
          'Know why configuration and secrets stay outside the image',
          'Say what an orchestrator adds once you have many containers'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Container lifecycle — code to image to running instance.',
        loop: false,
        steps: [
          { icon: 'code', label: 'Application code', desc: 'Your program.', purpose: 'The program you actually want to run.', question: 'What are we shipping?' },
          { icon: 'cubes-stacked', label: 'Dependencies', desc: 'Runtime and libraries.', purpose: 'Everything the program needs that is not the program.', question: 'What does it need to run at all?' },
          { icon: 'box-archive', label: 'Image', desc: 'The built, versioned package.', purpose: 'A read-only, tagged package built once and reused everywhere.', question: 'What exact version are we shipping?' },
          { icon: 'box-open', label: 'Running container', desc: 'A live instance of the image.', purpose: 'One process running from that image, with its own config.', question: 'Is it running, and with which settings?' },
          { icon: 'server', label: 'Orchestrated environment', desc: 'Many containers, managed.', purpose: 'Scale, restart and place containers automatically.', question: 'How many copies, and who restarts them?' }
        ]
      },
      io: {
        inputs: [
          ['Source code'],
          ['Runtime', 'Libraries'],
          ['Code', 'Dependencies', 'Build file'],
          ['Image', 'Environment config'],
          ['Containers', 'Desired state']
        ],
        outputs: [
          ['The program'],
          ['A complete runtime environment'],
          ['A tagged, immutable image'],
          ['A running process'],
          ['A scaled, self-healing workload']
        ]
      },
      who: [
        'Developer',
        'Developer, Build tools',
        'Build pipeline',
        'Container runtime',
        'Platform, DevOps'
      ],
      example: {
        title: 'Packaging a Node application',
        items: [
          'The application source, plus its `package.json`.',
          'The Node runtime and the installed packages it needs.',
          'A Dockerfile builds image `api:v1.14.0` — the same bytes everywhere.',
          'Running it starts a container, with the database uniform resource locator (URL) passed in as config.',
          'The platform runs four copies and restarts any that stop responding.'
        ]
      },
      misconceptions: [
        { wrong: 'Containers are lightweight virtual machines.', right: 'They share the host kernel rather than running their own operating system (OS).' },
        { wrong: 'The image is the running application.', right: 'The image is the package; the container is the running instance.' },
        { wrong: 'Configuration belongs inside the image.', right: 'Same image, different config per environment — secrets never baked in.' },
        { wrong: 'Containers make an application scalable.', right: 'They make copies easy; the application still has to tolerate being copied.' }
      ],
      takeaways: [
        '**Image is the recipe, container is the cake.** One image, many identical running instances — that is what makes scaling out simple.',
        '**Containers share the host kernel,** so they start in milliseconds and you can run many per machine. Virtual machines carry a whole operating system each.',
        '**The image is immutable and versioned.** You do not patch a running container; you build a new image and replace it.',
        '**Configuration and secrets stay outside the image.** Same artefact everywhere, settings injected per environment — and no credentials in a registry.',
        '**Containers are disposable.** Anything that must survive a restart belongs in a database or object store, not on the container\'s disk.',
        '**Dependencies travel with the application,** which is what removes most "works on my machine" problems.',
        '**Orchestrators manage the fleet.** Kubernetes and its equivalents decide where containers run, restart the unhealthy and scale with demand.',
        '**Being containerised does not make an app scalable.** If it keeps state in memory or writes locally, running four copies exposes that immediately.'
      ],
      reflection: 'Explain image versus container in your own words with an analogy. Then say where the database password should live — and why it must not be inside the image.',
      checks: [
        'What is the difference between an image and a container?',
        'How do containers differ from virtual machines?',
        'Why is an image immutable and versioned?',
        'Where should configuration and secrets live?',
        'Why are containers described as disposable?',
        'What does an orchestrator do for you?'
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Alerting',
      blurb: 'Signals that show whether production systems are healthy.',
      whatIs: {
        text: `Once software is live, the question changes from "does it work?" to "is it working right now, for everyone?" You cannot answer that by looking at code; you need signals coming out of the running system.

Three kinds of signal cover most needs. **Metrics** are numbers over time — request rate, error rate, latency, resource use — good for spotting when behaviour changed. **Logs** are event records, good for detail about a specific request. **Traces** follow one request across services, good for finding which hop was slow. A common starting set is the four "golden signals": traffic, errors, latency and saturation.

Alerts turn signals into action, and the hard part is choosing which deserve waking someone. A good alert is **actionable** and **symptom-based**: page on "users are seeing errors", not on "central processing unit (CPU) is at 80%", which may be entirely fine. Too many alerts is worse than too few, because alert fatigue teaches people to ignore the one that mattered.`,
        ensures: [
          'Distinguish metrics, logs and traces and what each answers',
          'Name the four golden signals and why they are chosen',
          'Explain the difference between a dashboard and an alert',
          'Write alerts that are actionable and symptom-based',
          'Recognise alert fatigue and its consequences',
          'Understand why monitoring is designed in, not added later'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From a running system to a resolved problem.',
        steps: [
          { icon: 'server', label: 'Running application', desc: 'The live system.', purpose: 'The workload being observed while it serves real users.', question: 'What are we watching, and for whom?' },
          { icon: 'chart-line', label: 'Signals emitted', desc: 'Metrics, logs, traces.', purpose: 'Instrument the system so its behaviour is visible.', question: 'What is it telling us, and is that enough?' },
          { icon: 'gauge', label: 'Dashboard', desc: 'A visual summary of health.', purpose: 'Show the golden signals at a glance for humans.', question: 'Does this look normal for this time of day?' },
          { icon: 'bell', label: 'Alert', desc: 'A nudge when something crosses a line.', purpose: 'Tell a human when users are affected and action is needed.', question: 'Is this worth interrupting someone for?' },
          { icon: 'magnifying-glass', label: 'Investigation', desc: 'A human follows the evidence.', purpose: 'Use the signals to locate the cause quickly.', question: 'What is actually happening, and since when?' },
          { icon: 'circle-check', label: 'Resolve & learn', desc: 'Fix it and improve the signals.', purpose: 'Resolve the problem and fix the monitoring that missed it.', question: 'Would we catch this faster next time?' }
        ]
      },
      example: {
        title: 'Latency creeps up',
        items: [
          'The checkout service is live and serving users.',
          'It emits request rate, error rate and latency percentiles.',
          'The dashboard shows p95 latency doubling over an hour.',
          'An alert fires when p95 stays above the threshold for five minutes.',
          'A trace shows one database query taking most of the time.',
          'An index is added, latency returns to normal, and an alert is added on that query.'
        ]
      },
      io: {
        inputs: [
          ['Live workload', 'Real users'],
          ['Instrumentation'],
          ['Metrics', 'Logs', 'Traces'],
          ['Thresholds', 'Signals'],
          ['Alert', 'Evidence'],
          ['Findings']
        ],
        outputs: [
          ['Behaviour to observe'],
          ['Metrics, logs and traces'],
          ['A health view'],
          ['An actionable alert'],
          ['A located cause'],
          ['A fix', 'Better signals']
        ]
      },
      who: [
        'Platform, Users',
        'Application, Instrumentation',
        'Monitoring tools',
        'Alerting system',
        'Engineer, On-call',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'Monitoring matters only when things go wrong.', right: 'It tells you what normal looks like, which is how you spot abnormal.' },
        { wrong: 'Green dashboards mean everything is fine.', right: 'They mean the things you chose to measure look fine.' },
        { wrong: 'More alerts means more safety.', right: 'Alert fatigue means the important one gets dismissed with the rest.' },
        { wrong: 'Averages describe user experience.', right: 'An average hides the slowest 5%, who are the ones complaining.' }
      ],
      takeaways: [
        '**Metrics say when, logs say what, traces say where.** Using the right one first saves most of the investigation time.',
        '**The four golden signals are a good default:** traffic, errors, latency and saturation cover a surprising share of real problems.',
        '**Use percentiles, not averages.** p95 and p99 describe the users having a bad time; the mean hides them.',
        '**Alert on symptoms, not causes.** "Error rate above 2%" affects users; "CPU at 80%" may be perfectly healthy.',
        '**Every alert should be actionable.** If the response is "acknowledge and ignore", it should be a dashboard, not a page.',
        '**Alert fatigue is a real failure mode.** Too many pages train people to dismiss them, including the one that mattered.',
        '**You have to know what normal looks like.** Baselines are what make a spike meaningful rather than just a number.',
        '**Monitoring is designed in.** Instrumentation, useful log messages and correlation ids are decisions made while building, not after.'
      ],
      reflection: 'For a system you know: how would you find out it was broken before a user told you? Which single alert would you create first, and what would the person receiving it actually do?',
      checks: [
        'What do metrics, logs and traces each answer?',
        'What are the four golden signals?',
        'Why use percentiles rather than averages?',
        'What makes an alert actionable?',
        'What is alert fatigue, and why is it dangerous?',
        'Why does monitoring need to be designed in?'
      ]
    },
    {
      id: 'incident',
      title: 'Incident Response',
      blurb: 'Coordinated investigation, mitigation, communication, resolution, and learning when production fails.',
      whatIs: {
        text: `An incident is a production problem serious enough to need a coordinated response. What separates it from ordinary debugging is that users are being affected **right now**, so the order of operations changes.

**Mitigate before you diagnose.** Roll back, disable the feature flag, fail over, scale up — stop the harm first. Understanding exactly why can wait until customers are no longer affected. Rolling back a deploy takes two minutes; finding the bug in that deploy can take two hours.

Roles keep a response calm. Someone leads and makes decisions, someone investigates, someone communicates outwards so the investigators are not answering the same question every five minutes. Afterwards comes the **post-incident review**: a blameless written account of what happened, how long it took to notice, and what will change. That last part is what turns an expensive hour into something the organisation keeps.`,
        ensures: [
          'Recognise when a problem is an incident and act accordingly',
          'Mitigate impact before investigating the cause',
          'Use the "what changed?" question as the first line of enquiry',
          'Keep a timeline and communicate while responding',
          'Understand the roles in a coordinated response',
          'Run a blameless review that produces specific changes'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Incident response — stop the harm, then find out why.',
        loop: false,
        steps: [
          { icon: 'bell', label: 'Detect & acknowledge', desc: 'An alert or report arrives.', purpose: 'Confirm it is real and take ownership of the response.', question: 'What is the user impact, and who is responding?' },
          { icon: 'clock-rotate-left', label: 'Check what changed', desc: 'Deploys, config, flags, upstream.', purpose: 'Start where most incidents start: a recent change.', question: 'What changed just before this began?' },
          { icon: 'shield-halved', label: 'Mitigate', desc: 'Stop the harm first.', purpose: 'Roll back, disable, fail over or scale — reduce impact now.', question: 'What is the fastest way to stop affecting users?' },
          { icon: 'comments', label: 'Communicate', desc: 'Tell people what is known.', purpose: 'Keep stakeholders informed so responders can work.', question: 'Who needs to know, and what do we know so far?' },
          { icon: 'magnifying-glass', label: 'Diagnose & resolve', desc: 'Find and fix the real cause.', purpose: 'With pressure off, work out why it happened and fix it properly.', question: 'What actually caused this?' },
          { icon: 'book', label: 'Review & prevent', desc: 'Write it up, change something.', purpose: 'Blameless review producing specific, owned actions.', question: 'What change stops this recurring, and who owns it?' }
        ]
      },
      io: {
        inputs: [
          ['Alert', 'User reports'],
          ['Deploy history', 'Change log'],
          ['A likely trigger', 'Rollback options'],
          ['Current status'],
          ['Evidence', 'Time to think'],
          ['Timeline', 'Root cause']
        ],
        outputs: [
          ['An acknowledged incident', 'An owner'],
          ['A prime suspect'],
          ['Reduced or removed impact'],
          ['Informed stakeholders'],
          ['A resolved cause'],
          ['A written review', 'Owned actions']
        ]
      },
      example: {
        title: 'Error rate spikes after a deploy',
        items: [
          'An alert fires: 5xx errors above 5% for three minutes.',
          'The spike starts within a minute of the 14:02 deploy.',
          'Roll back to the previous version; errors stop within two minutes.',
          'Post an update: "impact from 14:02 to 14:11, mitigated by rollback".',
          'With users unaffected, find the null check missing on a new field.',
          'Review: add the missing test, and alert on error rate per version.'
        ]
      },
      who: [
        'On-call engineer',
        'Responders',
        'Incident lead, Responders',
        'Communications lead',
        'Responders, Engineers',
        'Team, site reliability engineer (SRE)'
      ],
      misconceptions: [
        { wrong: 'Find the cause first, then fix it.', right: 'Mitigate first — users are affected while you investigate.' },
        { wrong: 'The goal is to identify who broke it.', right: 'The goal is to reduce impact, then change the system.' },
        { wrong: 'Once it is resolved, the incident is closed.', right: 'The review and its actions are what prevent the repeat.' },
        { wrong: 'Everyone should investigate at once.', right: 'Uncoordinated responders duplicate work and make conflicting changes.' }
      ],
      takeaways: [
        '**Mitigate before diagnosing.** A rollback takes minutes; understanding the bug can take hours, and users are waiting.',
        '**"What changed?" is the highest-yield first question.** Most incidents follow a deploy, a config change, a flag or an upstream dependency.',
        '**Name an owner immediately.** Incidents where "everyone is looking at it" are incidents where nobody is deciding.',
        '**Communicate while you work.** A short factual update every fifteen minutes prevents the investigators being interrupted constantly.',
        '**Keep a timeline as you go.** Timestamps written afterwards are guesses, and the timeline is the most useful part of the review.',
        '**Change one thing at a time, even under pressure.** Three simultaneous fixes leave nobody able to say what helped.',
        '**Blameless means focused on mechanisms.** People make mistakes; the question is why the system let a mistake reach users.',
        '**Time to detect matters as much as time to fix.** If it took an hour to notice, better alerting is part of the fix.'
      ],
      reflection: 'Error rate jumps right after a deployment. Write your first three actions in order — and justify why diagnosing the bug is not one of them.',
      checks: [
        'What makes something an incident rather than a bug?',
        'Why mitigate before diagnosing?',
        'Why is "what changed?" the first question?',
        'What roles keep a response coordinated?',
        'What does "blameless" mean in a review?',
        'Why does time to detect matter as much as time to fix?'
      ]
    }
  ]
}
