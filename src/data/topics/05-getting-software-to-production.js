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
      concept:
        'It is common to understand writing code but not how that code reaches users. Professional teams use controlled workflows, so changes are reviewed, built, tested, deployed, and monitored. Changes usually start on a branch, are reviewed through a pull request, pass automated checks, and then are deployed through a pipeline into one or more environments.',
      points: [
        'Developer creates a branch.',
        'Developer makes a change.',
        'Pull request is opened.',
        'Review and automated checks run.',
        'Build creates deployable artefact.',
        'Tests validate behaviour.',
        'Deployment moves the artefact into an environment.',
        'Monitoring confirms whether the system behaves as expected.'
      ],
      visual: {
        kind: 'flow',
        label: 'From developer machine to production.',
        steps: ['Developer branch', 'Pull request', 'Review and automated checks', 'Build', 'Tests', 'Deployment', 'Monitoring']
      },
      mistakes: ['Deployment is just copying files'],
      reflection: 'Take one code change and map it from branch to pull request, build, test, image, deploy, monitor. What could go wrong at each stage?'
    },
    {
      id: 'cicd',
      title: 'CI/CD Pipeline',
      blurb: 'Automated build, test, package, deploy, and recovery flow.',
      concept:
        'CI/CD is automation around building, testing, and deploying software. The key value is repeatability. If deployment relies on manual steps and memory, it becomes risky and inconsistent. A pipeline can build a container image, test it, store it, and deploy it into environments.',
      points: [
        '**Continuous Integration:** changes are integrated and checked frequently.',
        '**Continuous Delivery or Deployment:** software can be released through automated, repeatable steps.',
        '**Build:** create the deployable artefact.',
        '**Test:** validate the artefact.',
        '**Deploy:** release the artefact to an environment.',
        '**Rollback or recovery:** prepare for things going wrong.'
      ],
      visual: {
        kind: 'flow',
        label: 'CI/CD flow — connects engineering work to production operation.',
        steps: ['Developer branch', 'Pull request', 'Build pipeline', 'Automated tests', 'Container image', 'Deployment', 'Running application', 'Monitoring']
      },
      mistakes: ['Deployment is just copying files', 'DevOps means developers do operations alone'],
      reflection: 'Which stage of the pipeline would catch each kind of mistake?'
    },
    {
      id: 'hosting',
      title: 'Hosting Models',
      blurb: 'On-premises, cloud, and hybrid ways software can run.',
      concept:
        'Before discussing cloud architecture, answer this: where does the application live when users use it? On premises means the organisation owns or directly manages infrastructure. Cloud means infrastructure and services are provided by a cloud provider. Hybrid means both models are used together, which is common in large enterprises.',
      points: [
        '**On-Premises:** company-managed infrastructure, physical or virtual servers, more direct responsibility for hardware and platform.',
        '**Cloud:** rented or managed infrastructure and services, with elastic capacity and provider-managed capabilities.',
        '**Hybrid:** some systems remain on premises while others run in cloud; integration and networking become important.'
      ],
      visual: {
        kind: 'flow',
        label: 'Hosting models — introduces where software can run before discussing architecture.',
        steps: ['On-Premises', 'Cloud', 'Hybrid']
      },
      mistakes: ['Cloud means no one manages anything'],
      reflection: 'Which model might be easier to scale, which may have legacy constraints, and which requires integration across environments?'
    },
    {
      id: 'containers',
      title: 'Containers Explained',
      blurb: 'The difference between application code, image, and running container.',
      concept:
        'The progression at a high level is physical servers, then virtual machines, then containers. Containers help package an application with its dependencies, so it behaves more consistently across environments. They reduce the classic "works on my machine" problem.',
      points: [
        '**Physical server:** one or more applications run on actual hardware.',
        '**Virtual machine:** software-defined machine running on shared hardware.',
        '**Container:** lightweight packaged runtime for an application and its dependencies.',
        '**Container image:** blueprint or packaged artefact.',
        '**Running container:** an instance created from that image.'
      ],
      visual: {
        kind: 'flow',
        label: 'Container lifecycle — clarifies image versus container.',
        steps: ['Application code', 'Dependencies', 'Container image', 'Running container', 'Deployed environment']
      },
      mistakes: ['Containers are the same as virtual machines', 'A container image is the running application'],
      reflection: 'Explain image versus container in your own words using an analogy: recipe vs cake, blueprint vs house, class vs object.'
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Alerting',
      blurb: 'Signals that show whether production systems are healthy.',
      concept:
        'Once software is in production, engineers need signals to know whether it is healthy. Monitoring is how teams observe systems after release. You do not need deep observability theory, but production systems require ongoing attention.',
      points: [
        '**Metrics:** numbers that describe system behaviour, such as errors, latency, traffic, and resource usage.',
        '**Logs:** event records that help explain what happened.',
        '**Dashboards:** visual summaries of system health.',
        '**Alerts:** notifications triggered when something may require action.',
        '**Incident:** a production issue that needs coordinated investigation and response.'
      ],
      visual: {
        kind: 'flow',
        label: 'Monitoring flow — shows how teams know what is happening after release.',
        steps: ['Running application', 'Metrics and logs', 'Dashboard', 'Alert', 'Engineer investigation', 'Resolution and learning']
      },
      mistakes: ['Monitoring is only needed if something goes wrong'],
      reflection: 'How do you know the system is healthy right now, without a user telling you?'
    },
    {
      id: 'incident',
      title: 'Incident Response',
      blurb: 'Coordinated investigation, mitigation, communication, resolution, and learning when production fails.',
      concept:
        'An incident is a production issue that needs coordinated investigation and response. Take a scenario: production error rate increases after a deployment. Work out what signals would show the problem, what the team should check first, and what learning should happen afterwards.',
      points: [
        'Alerts notify the team when something may require action.',
        'Engineer investigation follows the evidence: metrics, logs, dashboards, recent changes.',
        'Resolution and learning close the loop.',
        'Root cause thinking asks why the system allowed it to happen.',
        'Prevention: tests, monitoring, validation, documentation, or process changes.'
      ],
      visual: {
        kind: 'flow',
        label: 'Monitoring and incident investigation flow.',
        steps: ['Alert', 'Engineer investigation', 'Check recent changes', 'Mitigate', 'Resolution and learning', 'Prevent recurrence']
      },
      mistakes: ['Monitoring is only needed if something goes wrong', 'Cloud means no one manages anything'],
      reflection: 'Production error rate increases after a deployment. What would you check first, and what should be learned afterwards?'
    }
  ]
}
