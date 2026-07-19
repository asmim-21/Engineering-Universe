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
          { icon: 'code-branch', label: 'Developer branch', desc: 'Work isolated from main.' },
          { icon: 'code-pull-request', label: 'Pull request', desc: 'Propose the change for review.' },
          { icon: 'user-check', label: 'Review and automated checks', desc: 'People and CI inspect it.' },
          { icon: 'box', label: 'Build', desc: 'Create a deployable artefact.' },
          { icon: 'flask', label: 'Tests', desc: 'Validate the artefact.' },
          { icon: 'rocket', label: 'Deployment', desc: 'Move it into an environment.' },
          { icon: 'chart-line', label: 'Monitoring', desc: 'Confirm it behaves in production.' }
        ]
      },
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
          { icon: 'code-branch', label: 'Developer branch', desc: 'A change starts here.' },
          { icon: 'code-pull-request', label: 'Pull request', desc: 'Open it for review.' },
          { icon: 'gears', label: 'Build pipeline', desc: 'Automate the build steps.' },
          { icon: 'flask', label: 'Automated tests', desc: 'Check it without manual effort.' },
          { icon: 'box', label: 'Container image', desc: 'Package it for shipping.' },
          { icon: 'rocket', label: 'Deployment', desc: 'Release it to an environment.' },
          { icon: 'server', label: 'Running application', desc: 'The live workload.' },
          { icon: 'chart-line', label: 'Monitoring', desc: 'Watch its health.' }
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
          { icon: 'building', label: 'On-Premises', desc: 'You own the infrastructure.' },
          { icon: 'cloud', label: 'Cloud', desc: 'Rented, provider-managed services.' },
          { icon: 'cloud-arrow-up', label: 'Hybrid', desc: 'A mix of on-prem and cloud.' }
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
          { icon: 'code', label: 'Application code', desc: 'Your program.' },
          { icon: 'cubes-stacked', label: 'Dependencies', desc: 'Everything it needs to run.' },
          { icon: 'box-archive', label: 'Container image', desc: 'The packaged blueprint.' },
          { icon: 'box-open', label: 'Running container', desc: 'A live instance of the image.' },
          { icon: 'server', label: 'Deployed environment', desc: 'Where it actually runs.' }
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
          { icon: 'server', label: 'Running application', desc: 'The live system.' },
          { icon: 'chart-line', label: 'Metrics and logs', desc: 'Signals it emits.' },
          { icon: 'gauge', label: 'Dashboard', desc: 'A visual summary of health.' },
          { icon: 'bell', label: 'Alert', desc: "A nudge when something's wrong." },
          { icon: 'magnifying-glass', label: 'Engineer investigation', desc: 'A human digs into the evidence.' },
          { icon: 'circle-check', label: 'Resolution and learning', desc: 'Fix it and capture lessons.' }
        ]
      },
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
          { icon: 'bell', label: 'Alert', desc: 'Something needs attention.' },
          { icon: 'magnifying-glass', label: 'Engineer investigation', desc: 'Follow the evidence.' },
          { icon: 'clock-rotate-left', label: 'Check recent changes', desc: 'What changed just before?' },
          { icon: 'shield-halved', label: 'Mitigate', desc: 'Stop the bleeding first.' },
          { icon: 'circle-check', label: 'Resolution and learning', desc: 'Resolve and reflect.' },
          { icon: 'lock', label: 'Prevent recurrence', desc: 'Make it not happen again.' }
        ]
      },
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
