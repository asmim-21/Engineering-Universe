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
        text: 'Teams move code to users through a controlled flow: branch, review, build, test, deploy, monitor.',
        ensures: [
          'Changes start on a branch',
          'A pull request gets review and checks',
          'A build creates a deployable artefact',
          'Monitoring confirms it behaves'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'From developer machine to production.',
        loop: false,
        steps: [
          { icon: 'code-branch', label: 'Developer branch', desc: 'Work isolated from main.', purpose: 'Work isolated from main.', question: 'What is changing?' },
          { icon: 'code-pull-request', label: 'Pull request', desc: 'Propose the change for review.', purpose: 'Propose the change for review.', question: 'Is it ready to review?' },
          { icon: 'user-check', label: 'Review and automated checks', desc: 'People and CI inspect it.', purpose: 'People and CI inspect it.', question: 'Is it safe to merge?' },
          { icon: 'box', label: 'Build', desc: 'Create a deployable artefact.', purpose: 'Create a deployable artefact.', question: 'Does it build?' },
          { icon: 'flask', label: 'Tests', desc: 'Validate the artefact.', purpose: 'Validate the artefact.', question: 'Do the tests pass?' },
          { icon: 'rocket', label: 'Deployment', desc: 'Move it into an environment.', purpose: 'Move it into an environment.', question: 'Where does it deploy?' },
          { icon: 'chart-line', label: 'Monitoring', desc: 'Confirm it behaves in production.', purpose: 'Confirm it behaves in production.', question: 'Is it healthy?' }
        ]
      },
      io: {
        inputs: [
          ['A change', 'main branch'],
          ['Branch', 'Diff'],
          ['PR', 'CI checks'],
          ['Approved code'],
          ['Artefact', 'Test suite'],
          ['Passing artefact', 'Env'],
          ['Live release', 'Metrics']
        ],
        outputs: [
          ['A feature branch'],
          ['A pull request'],
          ['An approved change'],
          ['A deployable artefact'],
          ['Test results'],
          ['A deployed release'],
          ['Health signals']
        ]
      },
      example: {
        title: 'Fixing a footer typo',
        items: [
          'Create a branch fix/footer-typo.',
          'Open a PR with the one-line change.',
          'A teammate reviews; CI runs checks.',
          'The build produces an artefact.',
          'Automated tests pass.',
          'Deploy the change to production.',
          'Dashboards confirm nothing broke.'
        ]
      },
      who: [
        'Developer',
        'Developer',
        'Reviewers, CI',
        'CI pipeline',
        'CI pipeline, QA',
        'DevOps, Release Manager',
        'SRE, On-call'
      ],
      misconceptions: [
        { wrong: 'Deployment is just copying files.', right: 'It is a reviewed, built, tested, monitored flow.' },
        { wrong: 'A pull request is just a formality.', right: 'Review and checks catch problems early.' }
      ],
      takeaways: [
        'Controlled workflows make change safe.',
        'Review and CI gate the change.',
        'Monitoring closes the loop.'
      ],
      reflection: 'Take one code change and map it from branch to pull request, build, test, image, deploy, monitor. What could go wrong at each stage?',
      checks: [
        'What is a pull request for?',
        'What does a build produce?',
        'Why deploy through a pipeline?',
        'What confirms the change worked?'
      ]
    },
    {
      id: 'cicd',
      title: 'CI/CD Pipeline',
      blurb: 'Automated build, test, package, deploy, and recovery flow.',
      whatIs: {
        text: 'CI/CD automates building, testing, and deploying so releases are repeatable, not risky and manual.',
        ensures: [
          '**CI:** integrate and check changes often',
          '**CD:** release through automated, repeatable steps',
          'Build → test → deploy the artefact',
          'Prepare rollback for when things go wrong'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'CI/CD flow — connects engineering work to production operation.',
        loop: false,
        steps: [
          { icon: 'code-branch', label: 'Developer branch', desc: 'A change starts here.', purpose: 'Start a change in isolation.', question: 'What is changing?' },
          { icon: 'code-pull-request', label: 'Pull request', desc: 'Open it for review.', purpose: 'Open the change for review.', question: 'Is it ready to review?' },
          { icon: 'gears', label: 'Build pipeline', desc: 'Automate the build steps.', purpose: 'Automate the build steps.', question: 'Does it build?' },
          { icon: 'flask', label: 'Automated tests', desc: 'Check it without manual effort.', purpose: 'Check it without manual effort.', question: 'Do the tests pass?' },
          { icon: 'box', label: 'Container image', desc: 'Package it for shipping.', purpose: 'Package it for shipping.', question: 'Is it packaged?' },
          { icon: 'rocket', label: 'Deployment', desc: 'Release it to an environment.', purpose: 'Release it to an environment.', question: 'Where does it deploy?' },
          { icon: 'server', label: 'Running application', desc: 'The live workload.', purpose: 'Run the live workload.', question: 'Is it serving traffic?' },
          { icon: 'chart-line', label: 'Monitoring', desc: 'Watch its health.', purpose: 'Watch its health.', question: 'Is it healthy?' }
        ]
      },
      io: {
        inputs: [
          ['A change', 'main branch'],
          ['Branch', 'Diff'],
          ['PR code'],
          ['Build', 'Test suite'],
          ['Passing build'],
          ['Image', 'Target env'],
          ['Deployed image'],
          ['Live app', 'Metrics']
        ],
        outputs: [
          ['A feature branch'],
          ['A pull request'],
          ['A build'],
          ['Test results'],
          ['A container image'],
          ['A deployed release'],
          ['A live application'],
          ['Health signals']
        ]
      },
      who: [
        'Developer',
        'Developer',
        'CI pipeline',
        'CI pipeline',
        'CI pipeline',
        'CD pipeline, DevOps',
        'Platform, Servers',
        'SRE, On-call'
      ],
      example: {
        title: 'Shipping a new endpoint',
        items: [
          'Branch off to add the endpoint.',
          'Open a pull request.',
          'The pipeline builds the change.',
          'Automated tests run.',
          'A container image is produced.',
          'The image deploys to staging.',
          'The app serves the new endpoint.',
          'Metrics confirm it is healthy.'
        ]
      },
      misconceptions: [
        { wrong: 'Deployment is just copying files.', right: 'A pipeline builds, tests, ships, and can roll back.' },
        { wrong: 'DevOps means developers do operations alone.', right: 'It is shared responsibility and automation.' }
      ],
      takeaways: [
        'Repeatability beats memory and manual steps.',
        'Each stage catches a class of mistake.',
        'Always have a way back.'
      ],
      reflection: 'Which stage of the pipeline would catch each kind of mistake?',
      checks: [
        'What is continuous integration?',
        'What does the pipeline automate?',
        'Which stage catches failing tests?',
        'Why prepare a rollback?'
      ]
    },
    {
      id: 'hosting',
      title: 'Hosting Models',
      blurb: 'On-premises, cloud, and hybrid ways software can run.',
      whatIs: {
        text: 'Before architecture, answer where the app lives: your own infrastructure, the cloud, or both.',
        ensures: [
          '**On-premises:** you own the infrastructure',
          '**Cloud:** rented, provider-managed services',
          '**Hybrid:** a mix, common in large enterprises',
          'Each model has different trade-offs'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Hosting models — introduces where software can run before discussing architecture.',
        loop: false,
        steps: [
          { icon: 'building', label: 'On-Premises', desc: 'You own the infrastructure.', purpose: 'You own and run the infrastructure.', question: 'Do we run it ourselves?' },
          { icon: 'cloud', label: 'Cloud', desc: 'Rented, provider-managed services.', purpose: 'Rent provider-managed services.', question: 'Do we rent managed services?' },
          { icon: 'cloud-arrow-up', label: 'Hybrid', desc: 'A mix of on-prem and cloud.', purpose: 'Combine on-prem and cloud.', question: 'Do we need both?' }
        ]
      },
      example: {
        title: 'Choosing where a new app runs',
        items: [
          'A bank keeps sensitive records on-premises.',
          'A startup ships fast on rented cloud services.',
          'An enterprise runs core systems on-prem and new apps in the cloud.'
        ]
      },
      misconceptions: [
        { wrong: 'Cloud means no one manages anything.', right: 'Someone still manages config, cost, and security.' },
        { wrong: 'Hybrid is just cloud with extra steps.', right: 'It needs real integration and networking.' }
      ],
      takeaways: [
        'Know where the app runs first.',
        'Each model has different trade-offs.',
        'Hybrid brings integration challenges.'
      ],
      reflection: 'Which model might be easier to scale, which may have legacy constraints, and which requires integration across environments?',
      checks: [
        'What is on-premises hosting?',
        'What does the cloud provide?',
        'What is hybrid?',
        'Which model is easiest to scale?'
      ]
    },
    {
      id: 'containers',
      title: 'Containers Explained',
      blurb: 'The difference between application code, image, and running container.',
      whatIs: {
        text: 'Containers package an app with its dependencies so it runs consistently across environments.',
        ensures: [
          'Progression: physical → VM → container',
          'A container bundles app and dependencies',
          '**Image:** the packaged blueprint',
          '**Running container:** an instance of the image'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Container lifecycle — clarifies image versus container.',
        loop: false,
        steps: [
          { icon: 'code', label: 'Application code', desc: 'Your program.', purpose: 'The program you want to ship.', question: 'What are we shipping?' },
          { icon: 'cubes-stacked', label: 'Dependencies', desc: 'Everything it needs to run.', purpose: 'Everything it needs to run.', question: 'What does it need?' },
          { icon: 'box-archive', label: 'Container image', desc: 'The packaged blueprint.', purpose: 'The packaged blueprint.', question: 'What is the blueprint?' },
          { icon: 'box-open', label: 'Running container', desc: 'A live instance of the image.', purpose: 'A live instance of the image.', question: 'Is it running?' },
          { icon: 'server', label: 'Deployed environment', desc: 'Where it actually runs.', purpose: 'Where it actually runs.', question: 'Where does it run?' }
        ]
      },
      io: {
        inputs: [
          ['Source code'],
          ['Code', 'Libraries'],
          ['Code', 'Dependencies'],
          ['Image'],
          ['Container', 'Env config']
        ],
        outputs: [
          ['The program'],
          ['Bundled dependencies'],
          ['A container image'],
          ['A running container'],
          ['A live workload']
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
        title: 'Packaging a Node app',
        items: [
          'Your Node app source code.',
          'Bundle Node and npm packages.',
          'Build an image with a Dockerfile.',
          'Run the image as a container.',
          'The container runs in staging.'
        ]
      },
      misconceptions: [
        { wrong: 'Containers are the same as virtual machines.', right: 'Containers are lighter and share the host OS.' },
        { wrong: 'A container image is the running application.', right: 'The image is the blueprint; the container is the instance.' }
      ],
      takeaways: [
        'Containers reduce "works on my machine".',
        'Image is to container as recipe is to cake.',
        'Dependencies travel with the app.'
      ],
      reflection: 'Explain image versus container in your own words using an analogy: recipe vs cake, blueprint vs house, class vs object.',
      checks: [
        'Image vs container?',
        'What does a container package?',
        'Container vs virtual machine?',
        'Give an analogy for image vs container.'
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Alerting',
      blurb: 'Signals that show whether production systems are healthy.',
      whatIs: {
        text: 'Once live, teams need signals to know the system is healthy — before a user tells them.',
        ensures: [
          '**Metrics:** numbers on errors, latency, traffic',
          '**Logs:** records of what happened',
          '**Dashboards & alerts:** see health, get nudged',
          '**Incident:** a coordinated response to a problem'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Monitoring flow — shows how teams know what is happening after release.',
        steps: [
          { icon: 'server', label: 'Running application', desc: 'The live system.', purpose: 'The live system being watched.', question: 'What are we watching?' },
          { icon: 'chart-line', label: 'Metrics and logs', desc: 'Signals it emits.', purpose: 'Capture the signals it emits.', question: 'What signals does it give?' },
          { icon: 'gauge', label: 'Dashboard', desc: 'A visual summary of health.', purpose: 'Summarise health visually.', question: 'How healthy does it look?' },
          { icon: 'bell', label: 'Alert', desc: "A nudge when something's wrong.", purpose: 'Nudge when something crosses a line.', question: 'Did something cross a threshold?' },
          { icon: 'magnifying-glass', label: 'Engineer investigation', desc: 'A human digs into the evidence.', purpose: 'Dig into the evidence.', question: 'What is actually happening?' },
          { icon: 'circle-check', label: 'Resolution and learning', desc: 'Fix it and capture lessons.', purpose: 'Fix it and capture lessons.', question: 'How do we fix and learn?' }
        ]
      },
      example: {
        title: 'Latency creeps up',
        items: [
          'The checkout service is live and serving users.',
          'It emits latency, error, and traffic metrics.',
          'The dashboard shows p95 latency rising.',
          'An alert fires as latency crosses the threshold.',
          'An engineer finds a slow database query.',
          'They add an index and note the fix for next time.'
        ]
      },
      io: {
        inputs: [
          ['Live workload'],
          ['Signals'],
          ['Metrics', 'Logs'],
          ['Thresholds', 'Signals'],
          ['Alert', 'Evidence'],
          ['Findings']
        ],
        outputs: [
          ['Signals'],
          ['Metrics', 'Logs'],
          ['A health view'],
          ['An alert'],
          ['Findings'],
          ['A fix', 'A lesson']
        ]
      },
      who: [
        'Platform',
        'Application, Monitoring',
        'Monitoring tools',
        'Alerting system',
        'Engineer, On-call',
        'Engineer, Team'
      ],
      misconceptions: [
        { wrong: 'Monitoring is only needed if something goes wrong.', right: 'It tells you health continuously, before failures.' },
        { wrong: 'Green dashboards mean nothing can be wrong.', right: 'Watch the right signals, not just any signal.' }
      ],
      takeaways: [
        'Observe systems after release.',
        'Know health without a user reporting it.',
        'Alerts turn signals into action.'
      ],
      reflection: 'How do you know the system is healthy right now, without a user telling you?',
      checks: [
        'How do you know the system is healthy now?',
        'Metrics vs logs?',
        'What is a dashboard for?',
        'What triggers an alert?'
      ]
    },
    {
      id: 'incident',
      title: 'Incident Response',
      blurb: 'Coordinated investigation, mitigation, communication, resolution, and learning when production fails.',
      whatIs: {
        text: 'An incident is a production problem that needs coordinated investigation, mitigation, and learning.',
        ensures: [
          'Alerts flag that something needs action',
          'Follow the evidence: metrics, logs, changes',
          'Mitigate first, then resolve',
          'Close the loop with learning and prevention'
        ]
      },
      visual: {
        kind: 'flow',
        label: 'Monitoring and incident investigation flow.',
        loop: false,
        steps: [
          { icon: 'bell', label: 'Alert', desc: 'Something needs attention.', purpose: 'Signal that something needs action.', question: 'What fired the alert?' },
          { icon: 'magnifying-glass', label: 'Engineer investigation', desc: 'Follow the evidence.', purpose: 'Follow the evidence.', question: 'What is actually happening?' },
          { icon: 'clock-rotate-left', label: 'Check recent changes', desc: 'What changed just before?', purpose: 'Look at what changed just before.', question: 'What changed recently?' },
          { icon: 'shield-halved', label: 'Mitigate', desc: 'Stop the bleeding first.', purpose: 'Stop the bleeding first.', question: 'How do we reduce impact now?' },
          { icon: 'circle-check', label: 'Resolution and learning', desc: 'Resolve and reflect.', purpose: 'Resolve and reflect.', question: 'What was the real cause?' },
          { icon: 'lock', label: 'Prevent recurrence', desc: 'Make it not happen again.', purpose: 'Make it not happen again.', question: 'How do we prevent a repeat?' }
        ]
      },
      io: {
        inputs: [
          ['Alert signal', 'Threshold'],
          ['Incident', 'Dashboards & logs'],
          ['Findings', 'Change log'],
          ['A likely trigger'],
          ['A mitigated incident'],
          ['Root cause']
        ],
        outputs: [
          ['An acknowledged incident'],
          ['Findings'],
          ['A likely trigger'],
          ['Reduced impact'],
          ['A resolution', 'A writeup'],
          ['A preventive change']
        ]
      },
      example: {
        title: 'Error rate spikes after a deploy',
        items: [
          'An alert fires on high 5xx errors.',
          'On-call opens the dashboards.',
          'The spike started at the last deploy.',
          'Roll back to stop the errors.',
          'Errors clear; write up what happened.',
          'Add a check that would have caught it.'
        ]
      },
      who: [
        'On-call engineer',
        'On-call, Responders',
        'Responders',
        'Incident Commander, Responders',
        'Team',
        'Team, SRE'
      ],
      misconceptions: [
        { wrong: 'The goal is to find who to blame.', right: 'The goal is to mitigate, resolve, and learn.' },
        { wrong: 'Once resolved, the incident is closed.', right: 'Prevention and learning come after resolution.' }
      ],
      takeaways: [
        'Stop the bleeding before the deep fix.',
        'Follow evidence, not hunches.',
        'Every incident should teach something.'
      ],
      reflection: 'Production error rate increases after a deployment. What would you check first, and what should be learned afterwards?',
      checks: [
        'What would you check first?',
        'What does "mitigate" mean here?',
        'Why check recent changes?',
        'What should be learned afterwards?'
      ]
    }
  ]
}
