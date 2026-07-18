export default {
  id: 'getting-software-to-production',
  title: 'Getting Software to Production',
  color: 'orange',
  titleLines: ['GETTING SOFTWARE', 'TO PRODUCTION'],
  tagline: 'Release with confidence. Operate with care.',
  focus: 'Git, pull requests, CI/CD, hosting, containers, monitoring, alerts, and incidents.',
  trueLesson:
    'Software does not just need to be written. It needs to be packaged, hosted, deployed, monitored, and operated.',
  orbit: [
    { label: 'Git & collaboration', icon: 'code-branch' },
    { label: 'CI/CD pipelines', icon: 'gears' },
    { label: 'Cloud & hosting', icon: 'cloud' },
    { label: 'Monitoring & incidents', icon: 'chart-line' }
  ],
  clusters: [
    {
      title: 'Getting Change In',
      note: 'Controlled workflows, so changes are reviewed and repeatable.',
      popups: ['git-pull-requests', 'cicd-pipeline']
    },
    {
      title: 'Where Software Runs',
      note: 'Hosting answers: where does the app live when users use it?',
      popups: ['hosting-models', 'containers-explained']
    },
    {
      title: 'Living With It',
      note: 'Production requires ongoing attention.',
      popups: ['monitoring-alerting', 'incident-response']
    }
  ],
  popups: [
    {
      id: 'git-pull-requests',
      title: 'Git & Pull Requests',
      blurb: 'Branches, reviews, and approval gates.',
      concept: [
        'Professional teams use controlled workflows so changes are reviewed, built, tested, deployed, and monitored. Changes start on a branch, are reviewed through a pull request, pass automated checks, and are then deployed through a pipeline.'
      ],
      visual: {
        kind: 'flow',
        title: 'From your machine to an environment',
        steps: [
          'Developer creates a branch',
          'Developer makes a change',
          'Pull request is opened',
          'Review and automated checks run',
          'Build creates deployable artefact',
          'Tests validate behaviour',
          'Deployment moves the artefact into an environment',
          'Monitoring confirms expected behaviour'
        ],
        purpose: 'Collaborative change management with branches, reviews, and approval gates.'
      },
      mistakes: [
        'Opening a pull request so large that nobody can review it properly.',
        'Treating approval as a formality to collect rather than a check to earn.',
        'Committing directly to the main branch because it is faster.'
      ],
      reflection:
        'What is the smallest useful pull request you could open for your current task?'
    },
    {
      id: 'cicd-pipeline',
      title: 'CI/CD Pipeline',
      blurb: 'Automated build, test, package, deploy, and recovery flow.',
      concept: [
        'CI/CD is automation around building, testing, and deploying software. The key value is repeatability: if deployment relies on manual steps and memory, it becomes risky and inconsistent.',
        'Continuous Integration means changes are integrated and checked frequently. Continuous Delivery means software can be released through automated, repeatable steps.'
      ],
      visual: {
        kind: 'flow',
        title: 'CI/CD flow',
        steps: [
          'Developer branch',
          'Pull request',
          'Build pipeline',
          'Automated tests',
          'Container image',
          'Deployment',
          'Running application',
          'Monitoring'
        ],
        purpose: 'Connects engineering work to production operation.'
      },
      mistakes: [
        'Thinking deployment is just copying files.',
        'Building a pipeline with no rollback or recovery path.',
        'Ignoring a red build because "it is probably flaky".'
      ],
      reflection:
        'Map one code change from branch to monitoring. What could go wrong at each stage?'
    },
    {
      id: 'hosting-models',
      title: 'Hosting Models',
      blurb: 'On-premises, cloud, and hybrid ways software can run.',
      concept: [
        'Hosting answers the question: where does the application live when users use it? On-premises means the organisation manages the infrastructure. Cloud means a provider does. Hybrid means both — common in large enterprises.'
      ],
      visual: {
        kind: 'list',
        title: 'Hosting models',
        steps: [
          'On-Premises — company-managed infrastructure, more direct responsibility',
          'Cloud — rented or managed infrastructure, elastic capacity, provider-managed capabilities',
          'Hybrid — some systems on-prem, some in cloud; integration and networking matter'
        ],
        purpose: 'Introduces where software can run before discussing architecture.'
      },
      mistakes: [
        'Thinking cloud means no one manages anything.',
        'Assuming hybrid is just a transition state rather than a long-term reality.',
        'Forgetting that legacy constraints are usually why the current model exists.'
      ],
      reflection:
        'Which model is easiest to scale? Which has legacy constraints? Which needs the most integration work?'
    },
    {
      id: 'containers-explained',
      title: 'Containers Explained',
      blurb: 'The difference between application code, image, and running container.',
      concept: [
        'The progression runs physical servers, then virtual machines, then containers. Containers package an application with its dependencies so it behaves consistently across environments — reducing the classic "works on my machine" problem.',
        'A container image is the blueprint. A running container is an instance created from it. Recipe and cake. Blueprint and house. Class and object.'
      ],
      visual: {
        kind: 'flow',
        title: 'Container lifecycle',
        steps: [
          'Application code',
          'Dependencies',
          'Container image',
          'Running container',
          'Deployed environment'
        ],
        purpose: 'Clarifies image versus container.'
      },
      mistakes: [
        'Thinking containers are the same as virtual machines.',
        'Thinking a container image is the running application.',
        'Baking environment-specific config into the image.'
      ],
      reflection:
        'Explain image vs container in your own words, using an analogy that is not a recipe.'
    },
    {
      id: 'monitoring-alerting',
      title: 'Monitoring & Alerting',
      blurb: 'Signals that show whether production systems are healthy.',
      concept: [
        'Once software is in production, engineers need signals to know whether it is healthy. Monitoring is how teams observe systems after release — and production systems require ongoing attention, not just attention when something breaks.'
      ],
      visual: {
        kind: 'flow',
        title: 'Monitoring flow',
        steps: [
          'Running application',
          'Metrics and logs',
          'Dashboard',
          'Alert',
          'Engineer investigation',
          'Resolution and learning'
        ],
        purpose: 'Shows how teams know what is happening after release.'
      },
      mistakes: [
        'Thinking monitoring is only needed if something goes wrong.',
        'Alerting on everything until nobody trusts the alerts.',
        'Building a dashboard nobody looks at on a normal day.'
      ],
      reflection:
        'If your feature silently broke right now, which signal would notice — and how long would it take?'
    },
    {
      id: 'incident-response',
      title: 'Incident Response',
      blurb: 'Coordinated investigation, mitigation, communication, resolution, learning.',
      concept: [
        'An incident is a production issue that needs coordinated investigation and response. The first goal is usually mitigation — stop the harm — not diagnosis. Understanding comes after users are safe.'
      ],
      visual: {
        kind: 'flow',
        title: 'Incident flow',
        steps: [
          'Signal or report',
          'Assess impact',
          'Mitigate — rollback, disable, contain',
          'Communicate to stakeholders',
          'Investigate root cause',
          'Resolve and prevent recurrence'
        ],
        purpose: 'Mitigate first. Understand second. Learn always.'
      },
      mistakes: [
        'Debugging deeply while users are still affected.',
        'Going silent during an incident because you are busy.',
        'Skipping the review afterwards because it was resolved.'
      ],
      reflection:
        'Error rate rises right after a deployment. What do you check first, and what do you do before you understand why?'
    }
  ]
}
